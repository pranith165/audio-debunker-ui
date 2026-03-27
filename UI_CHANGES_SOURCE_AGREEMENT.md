# UI Changes: Source Agreement & Conflict Detection

## Background

The backend now performs three new things on every fact-check:

1. **Claim decomposition** — compound claims are broken into atomic sub-claims before being sent to each source. The `evidence.claim_evaluations` object will now contain more entries (one per sub-claim) rather than just the top-level claim.
2. **Agreement detection** — after OpenAI, Grok, and Google return their verdicts, the backend classifies whether they agree or conflict. This is exposed as a new root-level field: `source_agreement`.
3. **Conflict penalty** — when sources directly contradict (one says True, another says False), confidence is capped at 0.65 and a conflict note is appended to `explanation`.

---

## New API Response Field

One new field has been added to the root `AnalysisResponse` object:

```json
{
  "verdict": "False",
  "confidence": 0.78,
  "explanation": "...",
  "source_agreement": "partial",
  ...
}
```

### `source_agreement` values

| Value | Meaning |
|-------|---------|
| `"agree"` | All available sources returned the same verdict. Confidence was boosted +0.10. |
| `"partial"` | Sources returned different verdicts but no direct True↔False contradiction (e.g. one said Misleading, another said False). |
| `"conflict"` | At least one source said True while another said False. Confidence is capped at 0.65. A conflict note is appended to `explanation`. |
| `"single"` | Only one source was available — no comparison possible. |
| `null` | Field missing (e.g. older cached result or no sources ran). Treat same as `"single"`. |

---

## Changes Needed in the UI

### 1. Source Agreement Badge — Verdict & Confidence Card

**File:** `src/pages/ResultsPage.jsx`
**Location:** The "VERDICT & CONFIDENCE" header card (top 3-card row)

Add a small badge below the confidence percentage showing source agreement. Examples:

```
✅ Sources agree         → green pill  (#dcfce7 bg, #15803d text)
⚠️ Sources partially disagree → amber pill  (#fef9c3 bg, #a16207 text)
🔴 Sources conflict      → red pill    (#fee2e2 bg, #b91c1c text)
— Single source         → gray pill   (#f3f4f6 bg, #6b7280 text)
```

**Suggested label text:**
- `"agree"` → `"✓ All sources agree"`
- `"partial"` → `"~ Sources partially disagree"`
- `"conflict"` → `"⚠ Sources conflict"`
- `"single"` / `null` → `"— Single source"`

**Suggested JSX snippet:**

```jsx
const agreementConfig = {
  agree:   { label: '✓ All sources agree',          bg: '#dcfce7', color: '#15803d' },
  partial: { label: '~ Sources partially disagree', bg: '#fef9c3', color: '#a16207' },
  conflict:{ label: '⚠ Sources conflict',           bg: '#fee2e2', color: '#b91c1c' },
  single:  { label: '— Single source',              bg: '#f3f4f6', color: '#6b7280' },
};

const agreement = claimData?.source_agreement ?? 'single';
const cfg = agreementConfig[agreement] ?? agreementConfig.single;

// Render below confidence score:
<span style={{
  fontSize: '0.75rem',
  padding: '2px 10px',
  borderRadius: '9999px',
  backgroundColor: cfg.bg,
  color: cfg.color,
  display: 'inline-block',
  marginTop: '6px',
}}>
  {cfg.label}
</span>
```

---

### 2. Conflict Warning Banner — Overview Tab

**File:** `src/pages/ResultsPage.jsx`
**Location:** Top of the "Overview" tab content, above the explanation text.

When `source_agreement === "conflict"`, show a dismissible warning banner:

```
┌─────────────────────────────────────────────────────────────────┐
│  ⚠️  Sources conflict on this claim                              │
│  Different fact-checking sources reached opposite verdicts.      │
│  Confidence has been reduced. Review the explanation carefully.  │
└─────────────────────────────────────────────────────────────────┘
```

**Suggested JSX:**

```jsx
{claimData?.source_agreement === 'conflict' && (
  <div style={{
    backgroundColor: '#fff7ed',
    border: '1px solid #fed7aa',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '16px',
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  }}>
    <span style={{ fontSize: '1.1rem' }}>⚠️</span>
    <div>
      <strong style={{ color: '#9a3412', display: 'block', marginBottom: '4px' }}>
        Sources conflict on this claim
      </strong>
      <span style={{ color: '#7c3c1b', fontSize: '0.875rem' }}>
        Different fact-checking sources reached opposite verdicts.
        Confidence has been reduced. Review the explanation carefully.
      </span>
    </div>
  </div>
)}
```

---

### 3. Claims Tab — Sub-claim Evaluations

**File:** `src/pages/ResultsPage.jsx`
**Location:** "Claims" tab — the `evidence.claim_evaluations` section.

**What changed:** The backend now decomposes compound claims into atomic sub-claims before fact-checking. This means `evidence.claim_evaluations` will contain more entries than before — e.g. for *"Vaccines cause autism and the moon landing was faked"* you'll see separate evaluations for each sub-claim.

**No structural code change is required** — the existing loop over `claim_evaluations` will automatically pick up the new entries. However, two cosmetic improvements are recommended:

**a) Add a count label** above the evaluations list:

```jsx
<p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '12px' }}>
  {Object.keys(evidence.claim_evaluations).length} sub-claim{Object.keys(evidence.claim_evaluations).length !== 1 ? 's' : ''} evaluated
</p>
```

**b) Truncate very long claim evaluation keys** (the sub-claim text used as the key can be a full sentence):

```jsx
// When rendering the heading for each evaluation entry:
<h4 title={claimKey} style={{ /* existing styles */ }}>
  {claimKey.length > 120 ? claimKey.slice(0, 120) + '…' : claimKey}
</h4>
```

---

### 4. Where to Read `source_agreement` from Redux State

**File:** `src/pages/ResultsPage.jsx` and `src/redux/uploadSlice.js`

The field is already on the API response root. Check how `analysisResults` is stored in Redux — it should already contain `source_agreement` since it maps the full API response. If the Redux slice only picks specific fields, add `source_agreement` to the mapping:

```js
// In uploadSlice.js, wherever analysisResults is set from the API response:
source_agreement: action.payload.source_agreement ?? null,
```

For the URL-param (trending claims) code path in `ResultsPage.jsx`, `source_agreement` may not be present in the stored trending claim object (trending claims go through a different pipeline). Treat a missing value as `null` / `"single"` — no badge or banner needed.

---

## Summary of Files to Change

| File | Change |
|------|--------|
| `src/pages/ResultsPage.jsx` | Add agreement badge to Verdict card, add conflict banner to Overview tab, add sub-claim count label to Claims tab |
| `src/redux/uploadSlice.js` | Ensure `source_agreement` is preserved when storing API response |

No new components or dependencies are required. All changes are additive — nothing existing is removed or renamed.

---

## Testing Checklist

- [ ] Submit compound claim (e.g. *"Vaccines cause autism and the moon landing was faked"*) — verify `source_agreement: "partial"` badge appears
- [ ] Submit a claim where sources are expected to agree — verify green `"✓ All sources agree"` badge
- [ ] Confirm conflict banner only appears when `source_agreement === "conflict"` (not partial)
- [ ] Verify Claims tab shows all atomic sub-claims (should be more than 1 for compound claims)
- [ ] Verify trending claims path shows no badge / gracefully hides when `source_agreement` is null
- [ ] Mobile: verify badge wraps cleanly inside the verdict card on small screens
