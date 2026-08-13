import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { AdGate } from './src/components/AdGate';

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const DOWNLOAD_URL =
  'https://github.com/var123321/xhubapp/releases/latest/download/XHub-v2.1.0-arm-xhub-full-download-release.apk';

// Real XHub app screenshots uploaded by the developer
const SCREENS = {
  // Hero phone (main dashboard)
  hero:    '/imgs/684160b2-c59f-4110-8b0b-0293b248ef95.jfif',
  // Side left phone (quick-access site grid)
  screen1: '/imgs/60ef2cd0-5d68-4dab-a16a-0d9ccbe4bc9d.jfif',
  // Side right phone (browser tabs view)
  modal:   '/imgs/56fb0877-f98e-48f9-9e37-c0fd6893b158.jfif',
  gallery: [
    { src: '/imgs/684160b2-c59f-4110-8b0b-0293b248ef95.jfif', caption: 'XHub Dashboard — Quick Access & daily quote' },
    { src: '/imgs/60ef2cd0-5d68-4dab-a16a-0d9ccbe4bc9d.jfif', caption: 'Quick Access grid — 1-tap launch to your favourite sites' },
    { src: '/imgs/56fb0877-f98e-48f9-9e37-c0fd6893b158.jfif', caption: 'Tab manager — browse multiple sites at once' },
    { src: '/imgs/469560fa-2ef0-420b-b8aa-fcc0c260543a.jfif', caption: 'Browser History — with full delete option' },
    { src: '/imgs/5e1f9068-2548-4d5e-a3e6-a7b2c9edde5a.jfif', caption: 'Settings — appearance, privacy, ad blocker & more' },
    { src: '/imgs/40e30246-d0e1-43c9-a581-bb4adeddee6b.jfif', caption: 'Stealth Browser — incognito mode with site suggestions' },
    { src: '/imgs/real_screen1.png', caption: 'Multi-thread downloader — live progress tracking' },
    { src: '/imgs/real_modal.png',   caption: '18+ Access Gate — built-in age verification' },
  ],
};

// ─── ICONS ───────────────────────────────────────────────────────────────────
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target, suffix = '', duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !triggered.current) {
        triggered.current = true;
        const steps = 60;
        const inc = target / steps;
        let cur = 0;
        const iv = setInterval(() => {
          cur += inc;
          if (cur >= target) { setCount(target); clearInterval(iv); }
          else setCount(Math.floor(cur));
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const display = count >= 1_000_000
    ? `${(count / 1_000_000).toFixed(1)}M`
    : count >= 1_000
    ? `${Math.floor(count / 1_000)}k`
    : count;

  return <span ref={ref}>{display}{suffix}</span>;
};

// ─── PHONE FRAME ─────────────────────────────────────────────────────────────
const PhoneFrame: React.FC<{ src: string; alt?: string; glow?: boolean }> = ({
  src, alt = 'XHub App Screen', glow = false,
}) => (
  <div className="relative mx-auto" style={{ width: 260 }}>
    {glow && (
      <div className="absolute inset-0 rounded-[2.4rem] blur-2xl opacity-40 z-0"
        style={{ background: 'radial-gradient(circle, #f97316 0%, #ef4444 60%, transparent 100%)', transform: 'scale(1.1)' }} />
    )}
    <div
      className="relative z-10 rounded-[2.4rem] overflow-hidden border-[7px] shadow-2xl"
      style={{
        borderColor: '#1a1210',
        boxShadow: glow
          ? '0 0 0 1px rgba(249,115,22,0.4), 0 32px 80px rgba(0,0,0,0.85)'
          : '0 32px 80px rgba(0,0,0,0.8)',
        background: '#09070A',
        height: 520,
      }}
    >
      {/* status bar */}
      <div className="absolute top-0 left-0 right-0 h-7 flex items-center justify-between px-5 z-20 text-[10px] font-semibold text-white/70" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}>
        <span>9:09</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] px-1.5 rounded bg-orange-500/25 text-orange-400 font-bold border border-orange-500/40">XHub</span>
          <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'pulse 2s infinite' }} />
        </div>
      </div>
      {/* notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-30" />
      {/* screenshot */}
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full z-10" style={{ objectFit: 'contain', background: '#09070A' }} loading="lazy" />
      {/* side buttons */}
      <div className="absolute -left-[9px] top-[70px] w-[3px] h-8 rounded-l" style={{ background: '#1a1210' }} />
      <div className="absolute -left-[9px] top-[118px] w-[3px] h-11 rounded-l" style={{ background: '#1a1210' }} />
      <div className="absolute -left-[9px] top-[175px] w-[3px] h-11 rounded-l" style={{ background: '#1a1210' }} />
      <div className="absolute -right-[9px] top-[140px] w-[3px] h-14 rounded-r" style={{ background: '#1a1210' }} />
    </div>
  </div>
);

// ─── SCREENSHOT SLIDER ────────────────────────────────────────────────────────
const ScreenshotSlider: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const total = SCREENS.gallery.length;
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  // auto-advance
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  const visible = [-1, 0, 1].map(offset => {
    const i = (idx + offset + total) % total;
    return { ...SCREENS.gallery[i], offset };
  });

  return (
    <div className="relative overflow-hidden" style={{ padding: '20px 0 32px' }}>
      <div className="flex items-center justify-center gap-6">
        {visible.map(({ src, caption, offset }) => (
          <div
            key={src + offset}
            className="transition-all duration-500"
            style={{
              transform: offset === 0 ? 'scale(1)' : 'scale(0.82)',
              opacity: offset === 0 ? 1 : 0.45,
              zIndex: offset === 0 ? 2 : 1,
              pointerEvents: offset === 0 ? 'auto' : 'none',
              flexShrink: 0,
            }}
          >
            <PhoneFrame src={src} alt={caption} glow={offset === 0} />
          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="text-center text-sm text-neutral-400 mt-6 font-medium min-h-[1.5rem]">
        {SCREENS.gallery[idx].caption}
      </p>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {SCREENS.gallery.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === idx ? 24 : 8,
              height: 8,
              background: i === idx ? '#f97316' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.4)' }}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.4)' }}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = '',
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
    }}>
      {children}
    </div>
  );
};

// ─── HEADER ───────────────────────────────────────────────────────────────────
const Header: React.FC<{ versionName: string; onDownload: () => void }> = ({ versionName, onDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        padding: scrolled ? '10px 0' : '18px 0',
        background: scrolled ? 'rgba(7,7,11,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-base"
            style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)', boxShadow: '0 0 20px rgba(249,115,22,0.5)' }}
          >
            X
          </div>
          <div>
            <div className="text-white font-extrabold text-lg leading-none">XHub</div>
            <div className="text-orange-400 text-[9px] font-bold uppercase tracking-widest">Android Media Hub</div>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {[['#features','Features'],['#screenshots','Screenshots'],['#faq','FAQ']].map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors relative group">
              {label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full" style={{ background: '#f97316' }} />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={onDownload}
          className="flex items-center gap-2 font-bold text-sm text-white rounded-full px-5 py-2.5 transition-all hover:scale-105 hover:shadow-lg"
          style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)', boxShadow: '0 0 24px rgba(249,115,22,0.4)' }}
        >
          <DownloadIcon />
          {versionName ? `v${versionName}` : 'Download APK'}
        </button>
      </div>
    </header>
  );
};

// ─── SCROLLING BACKGROUND ──────────────────────────────────────────────────
const BACKGROUND_IMAGES = [
  '/imgs/684160b2-c59f-4110-8b0b-0293b248ef95.jfif',
  '/imgs/60ef2cd0-5d68-4dab-a16a-0d9ccbe4bc9d.jfif',
  '/imgs/56fb0877-f98e-48f9-9e37-c0fd6893b158.jfif',
  '/imgs/469560fa-2ef0-420b-b8aa-fcc0c260543a.jfif',
  '/imgs/5e1f9068-2548-4d5e-a3e6-a7b2c9edde5a.jfif',
  '/imgs/40e30246-d0e1-43c9-a581-bb4adeddee6b.jfif',
  '/imgs/real_screen1.png',
  '/imgs/real_modal.png',
  '/imgs/real_home.png',
  '/imgs/684160b2-c59f-4110-8b0b-0293b248ef95.jpg',
];

const ScrollingBackground: React.FC = React.memo(() => {
  const listA = [...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES];
  const listB = [...BACKGROUND_IMAGES].reverse().concat([...BACKGROUND_IMAGES].reverse());
  const listC = [BACKGROUND_IMAGES[3], BACKGROUND_IMAGES[5], BACKGROUND_IMAGES[0], BACKGROUND_IMAGES[2], BACKGROUND_IMAGES[4], BACKGROUND_IMAGES[1], BACKGROUND_IMAGES[6], BACKGROUND_IMAGES[7]];
  const listC2 = [...listC, ...listC];

  const columns = [listA, listB, listC2, listA, listB, listC2];

  return (
    <div className="absolute inset-0 overflow-hidden z-0 select-none pointer-events-none opacity-60">
      <div className="absolute -inset-32 flex justify-center gap-5 -rotate-6 scale-110">
        {columns.map((col, ci) => (
          <div
            key={ci}
            className={`flex flex-col gap-5 shrink-0 ${ci % 2 === 0 ? 'animate-marquee-up' : 'animate-marquee-down'} ${ci > 3 ? 'hidden md:flex' : ''}`}
          >
            {col.map((src, i) => (
              <div
                key={i}
                className="w-48 sm:w-56 h-[300px] sm:h-[340px] shrink-0 rounded-2xl overflow-hidden border border-orange-500/25 bg-[#09070A] shadow-2xl p-1 transition-transform"
              >
                <img src={src} className="w-full h-full object-contain rounded-xl" alt="" loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0d0910]/80 via-[#07070B]/40 to-[#07070B]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#07070B] via-transparent to-[#07070B]" />
    </div>
  );
});

// ─── HERO THREE PHONES SHOWCASE ─────────────────────────────────────────────
const HeroThreePhones: React.FC = () => (
  <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] w-full max-w-[560px] mx-auto select-none my-6">
    {/* Background ambient glow behind 3 phones */}
    <div
      className="absolute inset-0 rounded-full blur-3xl opacity-60 z-0 pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.45) 0%, rgba(239,68,68,0.25) 60%, transparent 100%)' }}
    />

    {/* LEFT PHONE (Downloader UI) */}
    <div className="absolute -left-1 sm:left-1 top-6 z-10 -rotate-6 scale-90 sm:scale-95 hover:rotate-0 hover:z-30 hover:scale-100 transition-all duration-500">
      <div className="w-[160px] sm:w-[210px] h-[340px] sm:h-[430px] rounded-[2rem] overflow-hidden border-[5px] border-[#1a1210] bg-[#09070A] relative shadow-2xl">
        <div className="absolute top-0 inset-x-0 h-5 bg-black/60 backdrop-blur-sm z-20 flex justify-between px-3 text-[8px] text-white/70 font-semibold items-center">
          <span>9:09</span>
          <span className="text-orange-400 font-bold text-[7px] bg-orange-500/20 px-1 rounded">Downloader</span>
        </div>
        <img src="/imgs/img1.jfif" alt="Downloader UI" className="w-full h-full object-contain bg-[#09070A]" loading="lazy" />
      </div>
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-bold text-orange-400 uppercase tracking-widest bg-black/90 border border-orange-500/30 px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg">
        📥 Downloader
      </span>
    </div>

    {/* RIGHT PHONE (18+ Gate UI) */}
    <div className="absolute -right-1 sm:right-1 top-6 z-10 rotate-6 scale-90 sm:scale-95 hover:rotate-0 hover:z-30 hover:scale-100 transition-all duration-500">
      <div className="w-[160px] sm:w-[210px] h-[340px] sm:h-[430px] rounded-[2rem] overflow-hidden border-[5px] border-[#1a1210] bg-[#09070A] relative shadow-2xl">
        <div className="absolute top-0 inset-x-0 h-5 bg-black/60 backdrop-blur-sm z-20 flex justify-between px-3 text-[8px] text-white/70 font-semibold items-center">
          <span>9:09</span>
          <span className="text-red-400 font-bold text-[7px] bg-red-500/20 px-1 rounded">18+ Gate</span>
        </div>
        <img src="/imgs/img3.jfif" alt="18+ Gate UI" className="w-full h-full object-contain bg-[#09070A]" loading="lazy" />
      </div>
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-bold text-red-400 uppercase tracking-widest bg-black/90 border border-red-500/30 px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg">
        🔒 Age Protection
      </span>
    </div>

    {/* CENTER PHONE (Dashboard Main UI) */}
    <div className="relative z-20 hover:scale-105 transition-all duration-500">
      <div
        className="w-[185px] sm:w-[230px] h-[385px] sm:h-[470px] rounded-[2.2rem] overflow-hidden border-[6px] border-[#1a1210] bg-[#09070A] relative"
        style={{ boxShadow: '0 0 0 1px rgba(249,115,22,0.5), 0 25px 60px rgba(0,0,0,0.95)' }}
      >
        <div className="absolute top-0 inset-x-0 h-6 bg-black/60 backdrop-blur-sm z-20 flex justify-between px-3 text-[9px] text-white/80 font-semibold items-center">
          <span>9:09</span>
          <div className="flex items-center gap-1">
            <span className="text-orange-400 font-bold text-[8px] bg-orange-500/25 px-1.5 py-0.2 rounded border border-orange-500/40">XHub</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-b-lg z-30" />
        <img src="/imgs/img2.jfif" alt="XHub Dashboard" className="w-full h-full object-contain bg-[#09070A]" loading="lazy" />
      </div>
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-extrabold text-white uppercase tracking-widest bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full whitespace-nowrap shadow-xl">
        📱 Main Dashboard
      </span>
    </div>
  </div>
);

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero: React.FC<{ versionName: string; onDownload: () => void; onGuide: () => void }> = ({
  versionName, onDownload, onGuide,
}) => (
  <section
    className="relative overflow-hidden"
    style={{ background: 'linear-gradient(160deg,#0d0910 0%,#07070B 50%,#0a0709 100%)', paddingTop: 100, paddingBottom: 60 }}
  >
    <ScrollingBackground />

    {/* bg glow blobs */}
    <div
      className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-[130px] opacity-30 z-0"
      style={{ background: 'radial-gradient(circle,#f97316,transparent 70%)' }}
    />
    <div
      className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none blur-[100px] opacity-20 z-0"
      style={{ background: 'radial-gradient(circle,#ef4444,transparent 70%)' }}
    />

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* LEFT – Text & CTAs */}
        <Reveal className="text-center lg:text-left">
          <h1 className="font-extrabold leading-tight text-white mb-4" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.8rem)' }}>
            The Ultimate<br />
            <span style={{ background: 'linear-gradient(90deg,#f97316,#ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Android Porn App
            </span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
            <strong className="text-white">XHub</strong> is the only app that combines over 150+ sites into one seamless experience.
            Stream, download, and organize your favorites on your phone, tablet, or TV. Built with 5 years of passion for
            the best viewing experience.
          </p>

          {/* Download count */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div
              className="text-3xl sm:text-4xl font-black"
              style={{ background: 'linear-gradient(90deg,#f97316,#ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              <AnimatedCounter target={500000} />
            </div>
            <span className="text-neutral-400 text-xs sm:text-sm font-semibold leading-tight text-left">
              Total<br />Downloads
            </span>
          </div>

          {/* Buttons – Optimized for Mobile Thumbs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center lg:justify-start">
            <button
              onClick={onDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-bold text-white rounded-full px-8 py-4 text-base transition-all active:scale-95 hover:scale-105 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)', boxShadow: '0 8px 32px rgba(249,115,22,0.45)' }}
            >
              <DownloadIcon />
              Download Free APK{versionName && ` v${versionName}`}
            </button>
            <button
              onClick={onGuide}
              className="w-full sm:w-auto flex items-center justify-center font-semibold text-white rounded-full px-7 py-4 text-sm transition-all hover:bg-white/10 border"
              style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)' }}
            >
              Install Guide
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 justify-center lg:justify-start">
            {['✅ VirusTotal Clean', '🔒 Zero Trackers', '⚡ Android 6.0+', '🆓 100% Free'].map(b => (
              <span
                key={b}
                className="text-[10px] sm:text-[11px] font-bold text-neutral-300 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        {/* RIGHT – 3 Phones Trio Showcase */}
        <Reveal delay={120} className="flex justify-center w-full">
          <HeroThreePhones />
        </Reveal>
      </div>
    </div>
  </section>
);

// ─── FEATURE ROW ─────────────────────────────────────────────────────────────
interface FeatureRowProps {
  tag: string;
  title: string;
  items: Array<{ label: string; desc: string }>;
  imageSrc: string;
  reverse?: boolean;
  alt?: boolean;
}
const FeatureRow: React.FC<FeatureRowProps> = ({ tag, title, items, imageSrc, reverse = false, alt = false }) => (
  <section style={{ background: alt ? '#0B0B12' : '#07070B', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '80px 0' }}>
    <div className="container mx-auto px-6">
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
        {/* Text side */}
        <Reveal className={reverse ? 'lg:col-start-2' : ''}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#f97316' }}>{tag}</p>
          <h2 className="text-3xl font-extrabold text-white mb-6">{title}</h2>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.label} className="flex gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-black" style={{ background: 'rgba(249,115,22,0.2)', color: '#f97316' }}>✓</span>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  <strong className="text-white">{item.label}:</strong> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Phone side */}
        <Reveal delay={120} className={`flex justify-center ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <PhoneFrame src={imageSrc} glow />
        </Reveal>
      </div>
    </div>
  </section>
);

// ─── STATS BAR ────────────────────────────────────────────────────────────────
const StatsBar: React.FC = () => (
  <div style={{ background: '#0A0A0F', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '40px 0' }}>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { n: 500000, suf: '+', label: 'Downloads' },
          { n: 4.9,    suf: '★', label: 'Rating' },
          { n: 10,     suf: '+', label: 'Supported Sites' },
          { n: 100,    suf: '%', label: 'Free' },
        ].map(s => (
          <Reveal key={s.label} className="text-center">
            <div className="text-3xl font-extrabold mb-1" style={{ background: 'linear-gradient(90deg,#f97316,#ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              <AnimatedCounter target={s.n} suffix={s.suf} />
            </div>
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

// ─── SCREENSHOT SECTION ───────────────────────────────────────────────────────
const Screenshots: React.FC = () => (
  <section id="screenshots" style={{ background: '#07070B', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '80px 0' }}>
    <div className="container mx-auto px-6">
      <Reveal className="text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#f97316' }}>Screenshots</p>
        <h2 className="text-3xl font-extrabold text-white">Experience the Interface</h2>
      </Reveal>
      <ScreenshotSlider />
    </div>
  </section>
);

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex justify-between items-center w-full text-left py-5 group"
      >
        <span className="font-semibold text-white text-sm group-hover:text-orange-400 transition-colors">{q}</span>
        <span className="text-2xl ml-4 shrink-0 transition-transform duration-300 text-neutral-500" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease', paddingBottom: open ? 16 : 0 }}>
        <p className="text-sm text-neutral-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => (
  <section id="faq" style={{ background: '#0B0B12', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '80px 0' }}>
    <div className="container mx-auto px-6 max-w-2xl">
      <Reveal className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#f97316' }}>FAQ</p>
        <h2 className="text-3xl font-extrabold text-white">Common Questions</h2>
      </Reveal>
      <Reveal>
        <div className="rounded-2xl p-6 md:p-8" style={{ background: '#0F0F1A', border: '1px solid rgba(255,255,255,0.08)' }}>
          {[
            { q: 'Is XHub safe to install?', a: 'Yes. The APK is scanned clean on VirusTotal. Just enable "Install from Unknown Sources" on your Android device.' },
            { q: 'Does XHub cost anything?', a: 'XHub is completely free — no subscription, no locked tiers, no hidden fees.' },
            { q: 'Which Android versions are supported?', a: 'Android 6.0 (Marshmallow) and above, including tablets and Android TV boxes.' },
            { q: 'How do I get updates?', a: 'XHub has a built-in update checker. When a new version drops you get a 1-tap update prompt inside the app.' },
          ].map(item => <FAQItem key={item.q} {...item} />)}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── CONTACT ──────────────────────────────────────────────────────────────────
const Contact: React.FC = () => (
  <section style={{ background: '#07070B', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '60px 0' }}>
    <div className="container mx-auto px-6 text-center">
      <Reveal>
        <h2 className="text-2xl font-extrabold text-white mb-6">Need Help?</h2>
        <a
          href="https://t.me/xhubapp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-bold text-white rounded-full px-8 py-4 transition-all hover:scale-105"
          style={{ background: '#0088cc', boxShadow: '0 6px 24px rgba(0,136,204,0.4)' }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .33z"/>
          </svg>
          Telegram Support
        </a>
      </Reveal>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer: React.FC<{ onDownload: () => void }> = ({ onDownload }) => (
  <footer style={{ background: '#050508', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px 0 32px' }}>
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        {/* brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-base"
            style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)' }}>
            X
          </div>
          <div>
            <div className="text-white font-extrabold text-lg leading-none">XHub</div>
            <div className="text-orange-400 text-[9px] font-bold uppercase tracking-widest">Android Media Hub</div>
          </div>
        </div>
        {/* download */}
        <button
          onClick={onDownload}
          className="flex items-center gap-2 font-bold text-white rounded-full px-7 py-3 transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)', boxShadow: '0 0 20px rgba(249,115,22,0.4)' }}
        >
          <DownloadIcon />
          Download APK Now
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-xs text-neutral-600"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>© 2026 XHub App. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy Policy','Terms of Service','DMCA'].map(l => (
            <a key={l} href="#" className="hover:text-neutral-300 transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// ─── INSTALL MODAL ────────────────────────────────────────────────────────────
const InstallModal: React.FC<{ open: boolean; onClose: () => void; onDownload: () => void }> = ({
  open, onClose, onDownload,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm rounded-2xl p-8 z-10"
        style={{ background: '#0F0F1A', border: '1px solid rgba(255,255,255,0.1)' }}>
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all">✕</button>
        <h2 className="text-xl font-extrabold text-white mb-1">Install Guide</h2>
        <p className="text-xs text-neutral-400 mb-6">Three quick steps to get started.</p>
        <div className="space-y-5">
          {[
            ['01', 'Download APK', 'Tap the download button — the APK saves to your Downloads folder.'],
            ['02', 'Allow Unknown Sources', 'Enable "Install from Unknown Sources" in Android settings when prompted.'],
            ['03', 'Install & Launch', 'Tap the APK file, hit Install, and enjoy XHub instantly.'],
          ].map(([n, t, d]) => (
            <div key={n} className="flex gap-4 items-start">
              <span className="text-2xl font-black shrink-0" style={{ background: 'linear-gradient(90deg,#f97316,#ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{n}</span>
              <div>
                <div className="font-bold text-sm text-white mb-0.5">{t}</div>
                <div className="text-xs text-neutral-400 leading-relaxed">{d}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onDownload}
          className="mt-7 w-full flex items-center justify-center gap-2 font-bold text-white py-3.5 rounded-xl transition-all hover:scale-[1.02]"
          style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)', boxShadow: '0 6px 24px rgba(249,115,22,0.35)' }}
        >
          <DownloadIcon />
          Get APK Now
        </button>
      </div>
    </div>
  );
};

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [versionName, setVersionName] = useState('');
  const [guideOpen, setGuideOpen] = useState(false);
  const [adGateOpen, setAdGateOpen] = useState(false);

  useEffect(() => {
    fetch('/version.json')
      .then(r => r.json())
      .then(d => setVersionName(d.versionName || ''))
      .catch(() => {});
  }, []);

  // Re-open ad gate after Android reloads the tab on return from ad
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem('adgate_state') || 'null');
      if (saved && saved.open) setAdGateOpen(true);
    } catch {}
  }, []);

  const handleDownload = () => { setAdGateOpen(true); };
  const handleUnlock = () => {
    try { sessionStorage.removeItem('adgate_state'); } catch {}
    setAdGateOpen(false);
    window.location.href = DOWNLOAD_URL;
  };
  const handleCloseGate = () => {
    try { sessionStorage.removeItem('adgate_state'); } catch {}
    setAdGateOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: '#07070B', color: '#e5e5e5', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Header versionName={versionName} onDownload={handleDownload} />

      <main>
        <Hero versionName={versionName} onDownload={handleDownload} onGuide={() => setGuideOpen(true)} />

        <StatsBar />

        <div id="features">
          <FeatureRow
            tag="Core Features"
            title="More than just a Porn App"
            imageSrc={SCREENS.screen1}
            items={[
              { label: '150+ Sites', desc: 'Unlimited sites for all kind of kinks.' },
              { label: 'Quality Selection', desc: 'Depending on site and video (360p/480p/720p/1080p/4K).' },
              { label: 'Download videos', desc: 'Download porn videos without limits.' },
              { label: 'NSFW Swipe', desc: 'Discover videos with a TikTok-style feed.' },
              { label: 'VR Mode', desc: 'Full 360° support for immersive viewing.' },
              { label: 'PiP Mode', desc: 'Multitasking with Picture-in-Picture.' },
              { label: 'Security', desc: 'PIN & FingerPrint Lock Feature (Standard: 1234)' },
              { label: 'Collection', desc: 'Save Favorites, History and Custom Playlists.' },
              { label: 'Chromecast', desc: 'Watch videos via your Chromecast device (limited).' },
              { label: 'Many more features', desc: 'There are many more features for free users and even more for PRO users.' },
            ]}
          />

          <FeatureRow
            tag="Privacy & Security"
            title="Private by Default"
            imageSrc={SCREENS.modal}
            items={[
              { label: 'Zero History Logging', desc: 'Incognito sessions run entirely in RAM — nothing saved to storage.' },
              { label: 'PIN & Fingerprint Lock', desc: 'Protect app access with device biometrics or a custom PIN code.' },
              { label: 'VirusTotal Verified', desc: 'Every release is scanned and publicly verified with zero detections.' },
              { label: 'No Google Play Lock', desc: 'Sideload freely — no account, no restrictions, no surveillance.' },
            ]}
            reverse
            alt
          />
        </div>

        <Screenshots />
        <FAQ />
        <Contact />
      </main>

      <Footer onDownload={handleDownload} />

      <InstallModal open={guideOpen} onClose={() => setGuideOpen(false)} onDownload={() => { setGuideOpen(false); handleDownload(); }} />
      <AdGate open={adGateOpen} onClose={handleCloseGate} onUnlock={handleUnlock} />
    </div>
  );
}