import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HeroSection, HeroVideo, HeroOverlay, HeroContent,
  HeroEyebrow, Heading, HeroBottom, HeroSubtext, HeroCTA,
  AnalyzeButton, TrustBar, TrustItem, ScrollHint, ScrollLine,
  ImageBreak, ImageBreakImg, ImageBreakOverlay, ImageBreakContent,
  ImageBreakEyebrow, ImageBreakHeading, ImageBreakSub,
} from './LandingPage.styled';
import TrendingClaimsGrid from '../components/TrendingClaimsGrid';
import VisionSection from '../components/VisionSection';
import FeatureDemoSection from '../components/FeatureDemoSection';
import StatsSection from '../components/StatsSection';

import phoneScrolling from '../assets/images/phone-scrolling-problem.jpg';
import splitImage from '../assets/images/split-chaos-verified.jpg';
import deskFlatlay from '../assets/images/desk-flatlay.jpg';

// ─── Parallax hook ───────────────────────────────────────────────────────────
function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.parentElement.getBoundingClientRect();
        const offset = -rect.top * speed;
        el.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}

// ─── Scroll reveal hook ──────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-scale');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            const delay = e.target.dataset.delay || 0;
            setTimeout(() => e.target.classList.add('visible'), Number(delay));
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Component ───────────────────────────────────────────────────────────────
function LandingPage() {
  const [loaded, setLoaded] = useState(false);
  const parallax1 = useParallax(0.25);
  const parallax2 = useParallax(0.2);
  const parallax3 = useParallax(0.15);

  useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Helmet>
        <title>De-Bunker — AI Fact Checking for Audio & Viral Claims</title>
        <meta name="description" content="Upload audio or paste a claim — our AI fact-checks it against credible sources in seconds. Free, no signup required." />
        <link rel="canonical" href="https://www.de-bunker.com/" />
        <meta property="og:title" content="De-Bunker — AI Fact Checking for Audio & Viral Claims" />
        <meta property="og:description" content="Upload audio or paste a claim — our AI fact-checks it against credible sources in seconds. Free, no signup required." />
        <meta property="og:url" content="https://www.de-bunker.com/" />
      </Helmet>

      {/* ── 1. HERO — full-screen video ──────────────────────────────────── */}
      <HeroSection className={loaded ? 'loaded' : ''}>
        <HeroVideo autoPlay muted loop playsInline preload="auto">
          <source src="/hero-video.mp4" type="video/mp4" />
        </HeroVideo>
        <HeroOverlay />
        <HeroContent>
          <HeroEyebrow>AI-powered fact checking</HeroEyebrow>
          <Heading>
            Debunk viral<br />claims —<br />instantly.
          </Heading>
          <HeroBottom>
            <HeroSubtext>
              Verify truth, detect sarcasm, and expose misinformation in any audio or video clip. Powered by AI.
            </HeroSubtext>
            <HeroCTA>
              <AnalyzeButton to="/fact-check">Start fact-checking →</AnalyzeButton>
              <TrustBar>
                <TrustItem>5,000+ claims verified</TrustItem>
                <TrustItem>Free to use</TrustItem>
                <TrustItem>No signup</TrustItem>
              </TrustBar>
            </HeroCTA>
          </HeroBottom>
        </HeroContent>
        <ScrollHint>
          <ScrollLine />
          <span>scroll</span>
        </ScrollHint>
      </HeroSection>

      {/* ── 2. STATS — dark with newsroom bg ─────────────────────────────── */}
      <StatsSection />

      {/* ── 3. IMAGE BREAK — person scrolling viral content ─────────────── */}
      <ImageBreak $height="75vh">
        <ImageBreakImg
          ref={parallax1}
          src={phoneScrolling}
          alt="Person watching viral misinformation content"
          loading="lazy"
          $position="center 20%"
        />
        <ImageBreakOverlay $bg="linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)" />
        <ImageBreakContent>
          <ImageBreakEyebrow className="reveal">The problem</ImageBreakEyebrow>
          <ImageBreakHeading className="reveal" data-delay="80">
            Every scroll,<br />a new claim.
          </ImageBreakHeading>
          <ImageBreakSub className="reveal" data-delay="160">
            Millions of viral clips make bold claims about health, politics, and science every day. You watch, you wonder — but you never really know what's true.
          </ImageBreakSub>
        </ImageBreakContent>
      </ImageBreak>

      {/* ── 4. FEATURE DEMO ──────────────────────────────────────────────── */}
      <FeatureDemoSection />

      {/* ── 5. IMAGE BREAK — split chaos vs verified ─────────────────────── */}
      <ImageBreak $height="70vh">
        <ImageBreakImg
          ref={parallax2}
          src={splitImage}
          alt="Chaos vs verified — the power of fact checking"
          loading="lazy"
        />
        <ImageBreakOverlay $bg="rgba(0,0,0,0.55)" />
        <ImageBreakContent $align="center" $halign="center" style={{ textAlign: 'center' }}>
          <ImageBreakEyebrow className="reveal" style={{ textAlign: 'center' }}>The solution</ImageBreakEyebrow>
          <ImageBreakHeading
            className="reveal"
            data-delay="80"
            style={{ textAlign: 'center', margin: '0 auto 1.5rem' }}
          >
            Truth at the<br />speed of scroll.
          </ImageBreakHeading>
          <ImageBreakSub
            className="reveal"
            data-delay="160"
            style={{ textAlign: 'center', margin: '0 auto 2rem' }}
          >
            One tap. A verdict in seconds. Credible sources cited.
          </ImageBreakSub>
          <AnalyzeButton
            to="/fact-check"
            className="reveal"
            data-delay="240"
            style={{ background: '#fff', color: '#000', alignSelf: 'center' }}
          >
            Try it free →
          </AnalyzeButton>
        </ImageBreakContent>
      </ImageBreak>

      {/* ── 6. TRENDING CLAIMS ───────────────────────────────────────────── */}
      <TrendingClaimsGrid />

      {/* ── 7. IMAGE BREAK — desk research scene ────────────────────────── */}
      <ImageBreak $height="60vh">
        <ImageBreakImg
          ref={parallax3}
          src={deskFlatlay}
          alt="Research and fact-checking at work"
          loading="lazy"
          $position="center 40%"
        />
        <ImageBreakOverlay $bg="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)" />
        <ImageBreakContent $align="center" $halign="center" style={{ textAlign: 'center' }}>
          <ImageBreakEyebrow className="reveal">How it works</ImageBreakEyebrow>
          <ImageBreakHeading
            className="reveal"
            data-delay="80"
            style={{ margin: '0 auto', textAlign: 'center' }}
          >
            See a reel.<br />Hit share.<br />Get the truth.
          </ImageBreakHeading>
        </ImageBreakContent>
      </ImageBreak>

      {/* ── 8. VISION — sticky scroll steps ─────────────────────────────── */}
      <VisionSection />
    </>
  );
}

export default LandingPage;
