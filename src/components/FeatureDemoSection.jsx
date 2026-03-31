import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import soundwaveData from '../assets/lottie/soundwave.json';
import {
  SectionOuter,
  SectionWrapper,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  SectionSubtitle,
  DemoLayout,
  FeatureList,
  FeatureItem,
  FeatureIconWrap,
  FeatureText,
  FeatureItemTitle,
  FeatureItemDesc,
  MockupPanel,
  MockupWindow,
  MockupBar,
  MockupDot,
  MockupContent,
  MockupSlide,
  // Audio Analysis slide parts
  AudioHeader,
  AudioLabel,
  AudioWaveform,
  AudioBar,
  AudioProgress,
  AudioProgressFill,
  AudioStatus,
  // Source Verification slide parts
  SourceHeader,
  SourceList,
  SourceItem,
  SourceIcon,
  SourceName,
  SourceBadge,
  // Verdict slide parts
  VerdictHeader,
  VerdictBadge,
  VerdictMeta,
  VerdictConfidence,
  VerdictExcerpt,
  // Evidence slide parts
  EvidenceHeader,
  EvidenceList,
  EvidenceCard,
  EvidenceUrl,
  EvidenceLine,
} from './FeatureDemoSection.styled';

const FEATURES = [
  {
    id: 'audio',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" x2="12" y1="19" y2="22"/>
      </svg>
    ),
    title: 'Audio AI Analysis',
    desc: 'Paste any reel URL or upload audio. Our AI transcribes, detects claims, and begins fact-checking in under 2 seconds.',
  },
  {
    id: 'sources',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    ),
    title: 'Source Verification',
    desc: 'Every claim is cross-referenced against peer-reviewed studies, government databases, and trusted news outlets.',
  },
  {
    id: 'verdict',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Instant Verdict',
    desc: 'Get a clear True / False / Mixed verdict with a confidence score — no ambiguity, no jargon.',
  },
  {
    id: 'evidence',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: 'Cited Evidence',
    desc: 'Every verdict comes with clickable source links so you can read the actual evidence yourself.',
  },
];

const WAVE_HEIGHTS = [18, 32, 24, 40, 28, 44, 22, 36, 30, 48, 20, 38, 26, 42, 16, 34, 28, 46, 24, 40, 18, 36];

function FeatureDemoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatingOut, setAnimatingOut] = useState(false);
  const timerRef = useRef(null);

  const switchTo = (index) => {
    if (index === activeIndex) return;
    setAnimatingOut(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimatingOut(false);
    }, 180);
  };

  const startAutoRotate = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimatingOut(true);
      setTimeout(() => {
        setActiveIndex(prev => (prev + 1) % FEATURES.length);
        setAnimatingOut(false);
      }, 180);
    }, 3500);
  };

  // Auto-rotate every 3.5s
  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(timerRef.current);
  }, []);

  const pauseAndSwitch = (index) => {
    clearInterval(timerRef.current);
    switchTo(index);
  };

  return (
    <SectionOuter>
      <SectionWrapper>
        <SectionHeader>
          <SectionEyebrow>How it works</SectionEyebrow>
          <SectionTitle>Built for the speed of<br />misinformation.</SectionTitle>
          <SectionSubtitle>
            From audio clip to sourced verdict in seconds. Here's what's happening under the hood.
          </SectionSubtitle>
        </SectionHeader>

        <DemoLayout>
          <FeatureList onMouseLeave={startAutoRotate}>
            {FEATURES.map((f, i) => (
              <FeatureItem
                key={f.id}
                $active={activeIndex === i}
                onMouseEnter={() => pauseAndSwitch(i)}
              >
                <FeatureIconWrap $active={activeIndex === i}>
                  {f.icon}
                </FeatureIconWrap>
                <FeatureText>
                  <FeatureItemTitle>{f.title}</FeatureItemTitle>
                  <FeatureItemDesc $active={activeIndex === i}>{f.desc}</FeatureItemDesc>
                </FeatureText>
              </FeatureItem>
            ))}
          </FeatureList>

          <MockupPanel>
            <MockupWindow>
              <MockupBar>
                <MockupDot $color="#ef4444" />
                <MockupDot $color="#f59e0b" />
                <MockupDot $color="#22c55e" />
                <span style={{ marginLeft: '0.75rem', fontFamily: 'monospace', fontSize: '11px', color: '#9ca3af' }}>
                  de-bunker.com
                </span>
              </MockupBar>
              <MockupContent>
                <MockupSlide $visible={activeIndex === 0 && !animatingOut}>
                  <AudioHeader>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                    </svg>
                    <AudioLabel>Analyzing audio...</AudioLabel>
                  </AudioHeader>
                  <div style={{ height: 56, marginBottom: '1rem' }}>
                    <Lottie
                      animationData={soundwaveData}
                      loop
                      autoplay
                      style={{ height: '100%', width: '100%' }}
                    />
                  </div>
                  <AudioProgress>
                    <AudioProgressFill />
                  </AudioProgress>
                  <AudioStatus>"vaccines cause autism according to new research..."</AudioStatus>
                </MockupSlide>

                <MockupSlide $visible={activeIndex === 1 && !animatingOut}>
                  <SourceHeader>Sources checked (3)</SourceHeader>
                  <SourceList>
                    {[
                      { name: 'who.int', badge: 'Peer-reviewed' },
                      { name: 'cdc.gov', badge: 'Gov database' },
                      { name: 'pubmed.ncbi.nih.gov', badge: '47 studies' },
                    ].map((s, i) => (
                      <SourceItem key={i} $delay={i * 80}>
                        <SourceIcon>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </SourceIcon>
                        <SourceName>{s.name}</SourceName>
                        <SourceBadge>{s.badge}</SourceBadge>
                      </SourceItem>
                    ))}
                  </SourceList>
                </MockupSlide>

                <MockupSlide $visible={activeIndex === 2 && !animatingOut}>
                  <VerdictHeader>Verdict</VerdictHeader>
                  <VerdictBadge>FALSE</VerdictBadge>
                  <VerdictMeta>
                    <VerdictConfidence>96% confidence</VerdictConfidence>
                    <span style={{ color: '#9ca3af', fontFamily: 'monospace', fontSize: '11px' }}>· 1.8s</span>
                  </VerdictMeta>
                  <VerdictExcerpt>
                    No credible peer-reviewed evidence links vaccines to autism. The original Wakefield study was retracted and the author lost his medical license.
                  </VerdictExcerpt>
                </MockupSlide>

                <MockupSlide $visible={activeIndex === 3 && !animatingOut}>
                  <EvidenceHeader>Evidence</EvidenceHeader>
                  <EvidenceList>
                    {[
                      { url: 'who.int', lines: [70, 50] },
                      { url: 'cdc.gov/vaccines/safety', lines: [80, 45] },
                      { url: 'pubmed.ncbi.nih.gov/...', lines: [60, 55] },
                    ].map((e, i) => (
                      <EvidenceCard key={i} $delay={i * 80}>
                        <EvidenceUrl>{e.url}</EvidenceUrl>
                        {e.lines.map((w, j) => (
                          <EvidenceLine key={j} $w={w} />
                        ))}
                      </EvidenceCard>
                    ))}
                  </EvidenceList>
                </MockupSlide>
              </MockupContent>
            </MockupWindow>
          </MockupPanel>
        </DemoLayout>
      </SectionWrapper>
    </SectionOuter>
  );
}

export default FeatureDemoSection;
