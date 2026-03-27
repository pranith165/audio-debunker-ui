# UI Changes: Input Classification (Opinion / Not a Claim)

## Background

The backend now pre-classifies inputs before running the 3-source fact-check. Two new verdict values are returned for inputs that cannot be fact-checked:

| Verdict | When returned |
|---------|---------------|
| `"Opinion"` | Input is a personal preference or value judgement |
| `"Not a Claim"` | Input is off-topic, a greeting, a request, or has no checkable claim |

Rhetorical questions (e.g. "Did you know vaccines cause autism?") are silently converted to their implied factual claim and proceed through the normal fact-check pipeline — no UI change needed for those.

---

## 1. Verdict Card — New Pill Styles

Add two new color variants to the verdict pill/badge component:

| Verdict | Background | Text color | Icon |
|---------|-----------|------------|------|
| `"Opinion"` | `#e9d5ff` | `#6b21a8` | 💬 |
| `"Not a Claim"` | `#f3f4f6` | `#374151` | ❓ |

Example (Tailwind):
```html
<!-- Opinion -->
<span class="bg-purple-100 text-purple-800 ...">💬 Opinion</span>

<!-- Not a Claim -->
<span class="bg-gray-100 text-gray-700 ...">❓ Not a Claim</span>
```

---

## 2. Hide or Suppress Empty Tabs

For `"Opinion"` and `"Not a Claim"` verdicts, the following tabs will have empty/zero data:
- **Claims** — `primary_claims_extracted` is `[]`
- **Sources** — `sources` is `[]`, `web_sources_consulted` is `[]`
- **Audio Metrics** — unrelated to text classification

Recommended: hide these tabs entirely when `verdict` is `"Opinion"` or `"Not a Claim"`. Alternatively, show a friendly empty state ("No claims were extracted for this input.").

---

## 3. Explanation Card

For these two verdicts, the `explanation` field contains the full human-readable message. Display it prominently — it is the primary content.

Remove or hide the evidence breakdown section that normally follows (claim-by-claim evaluations, source agreement chart, etc.) since `details.claim_evaluations` and `details.source_verdicts` are empty.

---

## 4. Confidence Display

`confidence` will be `1.0` for Opinion / Not a Claim (the classifier is certain no fact-check is applicable). This is not meaningful in the usual sense.

Options:
- Hide the confidence bar entirely for these verdicts.
- Label it `"N/A"` rather than `"100% confident"`.

---

## 5. Provider Attribution

`provider` will be `"Input Classifier"` instead of a comma-separated list of fact-check sources. Update any provider display logic to handle this value gracefully (it won't match existing icons or badges for Google / OpenAI / Grok).

---

## Minimal Checklist

- [ ] Add `Opinion` pill style (purple)
- [ ] Add `Not a Claim` pill style (gray)
- [ ] Suppress Claims / Sources / Audio tabs when verdict is Opinion or Not a Claim
- [ ] Display explanation prominently without evidence breakdown
- [ ] Handle `confidence: 1.0` — hide bar or label as N/A
- [ ] Handle `provider: "Input Classifier"` without crashing icon lookup
