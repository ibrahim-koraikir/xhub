import * as React from 'react';
import { useState, useEffect } from 'react';

// --- CONFIGURATION ---
const APP_SCREENSHOTS = {
  hero:     "/imgs/fuse-ios-14.png",
  gallery1: "/imgs/apple-podcasts-ios-18.png",
  gallery2: "/imgs/fuse-ios-15.png",
  gallery3: "/imgs/apple-podcasts-ios-7.png"
};

const BACKGROUND_IMAGES = [
  "/imgs/apple-podcasts-ios-18.png",
  "/imgs/apple-podcasts-ios-28.png",
  "/imgs/apple-podcasts-ios-7.png",
  "/imgs/apple-podcasts-ios-8.png",
  "/imgs/fuse-ios-14.png",
  "/imgs/fuse-ios-15.png",
  "/imgs/fuse-ios-16.png",
  "/imgs/fuse-ios-6.png",
];

// --- Icons ---

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const LockClosedIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Animation Helpers ---

const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return true;
    }
    return typeof navigator !== 'undefined' && navigator.webdriver;
  });
  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); if (domRef.current) observer.unobserve(domRef.current); }
    }, { threshold: 0.1 });
    const ref = domRef.current;
    if (ref) observer.observe(ref);
    return () => { if (ref) observer.unobserve(ref); };
  }, [isVisible]);

  return (
    <div ref={domRef} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setCoords({ x: -(((e.clientY - r.top) / r.height) - 0.5) * 14, y: (((e.clientX - r.left) / r.width) - 0.5) * 14 });
  };

  const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div ref={cardRef} onMouseMove={onMove} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setCoords({ x: 0, y: 0 }); }}
      className={`transition-transform duration-200 ${className}`}
      style={isReduced ? {} : { transform: `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(${hovered ? 1.02 : 1},${hovered ? 1.02 : 1},1)`, transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
};

const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = "" }) => {
  const isHeadless = typeof navigator !== 'undefined' && navigator.webdriver;
  const [count, setCount] = useState(() => isHeadless ? target : 0);
  const [triggered, setTriggered] = useState(() => isHeadless);
  const domRef = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !triggered) setTriggered(true); }, { threshold: 0.1 });
    const ref = domRef.current;
    if (ref) observer.observe(ref);
    return () => { if (ref) observer.unobserve(ref); };
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { clearInterval(timer); setCount(target); }
      else setCount(Math.floor(start));
    }, 40);
    return () => clearInterval(timer);
  }, [triggered, target]);

  return <span ref={domRef}>{count >= 1000 ? `${Math.floor(count / 1000)}k` : count}{suffix}</span>;
};

// --- Phone Mockup ---

const PhoneMockup: React.FC<{ imageSrc?: string; className?: string }> = ({ imageSrc, className = "" }) => (
  <div className={`relative mx-auto border-[#1a1a2e] border-[8px] rounded-[2.5rem] h-[580px] w-[280px] shadow-2xl overflow-hidden flex flex-col ${className}`}
    style={{ background: '#0d0d1a', boxShadow: '0 0 0 1px rgba(124,58,237,0.2), 0 40px 80px rgba(0,0,0,0.6)' }}>
    {/* Buttons */}
    <div className="h-[32px] w-[3px] absolute -left-[10px] top-[72px] rounded-l" style={{ background: '#1a1a2e' }} />
    <div className="h-[46px] w-[3px] absolute -left-[10px] top-[124px] rounded-l" style={{ background: '#1a1a2e' }} />
    <div className="h-[46px] w-[3px] absolute -left-[10px] top-[178px] rounded-l" style={{ background: '#1a1a2e' }} />
    <div className="h-[64px] w-[3px] absolute -right-[10px] top-[142px] rounded-r" style={{ background: '#1a1a2e' }} />
    {/* Screen */}
    <div className="rounded-[2rem] overflow-hidden w-full h-full relative">
      <div className="absolute top-0 w-full h-7 px-4 flex justify-between items-center z-20 text-[10px] font-medium text-white/70">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-20" />
      {imageSrc && <img src={imageSrc} alt="App Screenshot" className="absolute inset-0 w-full h-full object-cover z-10" loading="lazy" />}
    </div>
  </div>
);

// --- Sections ---

interface VersionInfo { versionName: string; releaseNotes: string; }

const Header: React.FC<{ versionInfo: VersionInfo | null }> = ({ versionInfo }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 border-b' : 'py-5'}`}
      style={{ background: scrolled ? 'rgba(10,10,15,0.9)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderColor: scrolled ? 'var(--border)' : 'transparent' }}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#7C3AED,#22D3EE)', boxShadow: '0 0 20px rgba(124,58,237,0.45)' }}>
            <span className="text-white font-black text-sm">X</span>
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text-primary)' }}>XHub</span>
        </div>
        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[['#features','Features'],['#gallery','Library'],['#testimonials','Reviews'],['#faq','FAQ']].map(([href,label]) => (
            <a key={href} href={href} className="text-sm font-medium relative group" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              onMouseEnter={e=>(e.currentTarget.style.color='var(--text-primary)')}
              onMouseLeave={e=>(e.currentTarget.style.color='var(--text-secondary)')}>
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: 'var(--violet)' }} />
            </a>
          ))}
        </nav>
        {/* CTA */}
        <a href="https://github.com/ibrahim-koraikir/xhub/releases/latest/download/xhub.apk" download
          className="flex items-center gap-2 text-sm font-semibold py-2 px-5 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: 'var(--violet)', boxShadow: '0 0 24px var(--violet-glow)' }}>
          <DownloadIcon className="w-4 h-4" />
          Download APK{versionInfo && <span className="opacity-60 text-xs"> v{versionInfo.versionName}</span>}
        </a>
      </div>
    </header>
  );
};

const ScrollingBackground: React.FC = React.memo(() => {
  const imgs = [...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES];
  const rev = [...BACKGROUND_IMAGES].reverse().concat([...BACKGROUND_IMAGES].reverse(), [...BACKGROUND_IMAGES].reverse());
  return (
    <div className="absolute inset-0 overflow-hidden z-0 select-none pointer-events-none">
      <div className="absolute -inset-40 flex justify-center gap-6 -rotate-12 scale-125 opacity-40">
        {[imgs, rev, imgs, rev].map((col, ci) => (
          <div key={ci} className={`flex flex-col gap-6 shrink-0 ${ci % 2 === 0 ? 'animate-marquee-up' : 'animate-marquee-down'} ${ci === 3 ? 'hidden lg:flex' : ''}`}>
            {col.map((src, i) => (
              <div key={i} className="w-48 h-[300px] shrink-0 rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)', background: '#0d0d1a' }}>
                <img src={src} className="w-full h-full object-cover grayscale-[0.6]" alt="" loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, rgba(10,10,15,0.5) 40%, rgba(10,10,15,0.5) 60%, var(--bg) 100%)' }} />
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, var(--bg) 0%, transparent 30%, transparent 70%, var(--bg) 100%)' }} />
    </div>
  );
});

const Hero: React.FC<{ onInstallClick: () => void; versionInfo: VersionInfo | null }> = ({ onInstallClick, versionInfo }) => {
  const [activeShot, setActiveShot] = useState<keyof typeof APP_SCREENSHOTS>('hero');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const keys = Object.keys(APP_SCREENSHOTS) as Array<keyof typeof APP_SCREENSHOTS>;
    const iv = setInterval(() => setActiveShot(prev => keys[(keys.indexOf(prev) + 1) % keys.length]), 4500);
    return () => clearInterval(iv);
  }, [isHovered]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-0" style={{ background: 'var(--bg)' }}>
      <ScrollingBackground />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none z-0 blur-[120px] animate-float"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none z-0 blur-[100px] animate-float"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)', animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-16">
        {/* Left */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 animate-pulse-slow"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', color: 'var(--text-primary)' }}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--cyan)' }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: 'var(--cyan)' }} />
            </span>
            {versionInfo ? `v${versionInfo.versionName} — Just released` : 'New release available'}
          </div>

          {/* Headline */}
          <h1 className="font-bold leading-[1.05] mb-6 tracking-tight" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(2.8rem,6vw,4.5rem)', color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            Every channel.<br />
            <span style={{ background: 'linear-gradient(135deg,#A78BFA 0%,#22D3EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              One tap away.
            </span>
          </h1>

          <p className="text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85, fontWeight: 300 }}>
            XHub brings Netflix, Disney+, sports, live TV, and private browsing into a single free Android app. No subscriptions. No Play Store.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10">
            <a href="https://github.com/ibrahim-koraikir/xhub/releases/latest/download/xhub.apk" download
              className="group flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', boxShadow: '0 0 40px rgba(124,58,237,0.4)' }}>
              <DownloadIcon className="w-5 h-5" />
              Download Free
            </a>
            <button onClick={onInstallClick}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)' }}>
              <InfoIcon className="w-5 h-5" style={{ color: 'var(--cyan)' } as React.CSSProperties} />
              How to Install
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-2.5">
              {[16,17,18,19].map(i => (
                <div key={i} className="w-9 h-9 rounded-full overflow-hidden" style={{ border: '2px solid var(--bg)' }}>
                  <img src={`https://i.pravatar.cc/100?img=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
              <AnimatedCounter target={500} suffix="k+" /> <span style={{ fontWeight: 600 }}>downloads</span> and growing
            </span>
          </div>
        </div>

        {/* Right — Interactive Mockup */}
        <div className="relative h-[680px] flex items-center justify-center"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
          {/* Back cards */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-16 rotate-12 opacity-30 scale-90 grayscale pointer-events-none">
            <PhoneMockup imageSrc={APP_SCREENSHOTS.gallery1} />
          </div>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-16 -rotate-12 opacity-30 scale-90 grayscale pointer-events-none">
            <PhoneMockup imageSrc={APP_SCREENSHOTS.gallery2} />
          </div>

          {/* Main mockup */}
          <div className="relative z-20 flex flex-col items-center animate-float">
            <TiltCard>
              <div className="relative" style={{ filter: 'drop-shadow(0 0 60px rgba(124,58,237,0.35))' }}>
                <div className="relative mx-auto border-[#1a1a2e] border-[8px] rounded-[2.5rem] h-[580px] w-[280px] overflow-hidden flex flex-col"
                  style={{ background: '#0d0d1a', boxShadow: '0 0 0 1px rgba(124,58,237,0.3), 0 60px 120px rgba(0,0,0,0.7)' }}>
                  <div className="h-[32px] w-[3px] absolute -left-[10px] top-[72px] rounded-l" style={{ background: '#1a1a2e' }} />
                  <div className="h-[46px] w-[3px] absolute -left-[10px] top-[124px] rounded-l" style={{ background: '#1a1a2e' }} />
                  <div className="h-[46px] w-[3px] absolute -left-[10px] top-[178px] rounded-l" style={{ background: '#1a1a2e' }} />
                  <div className="h-[64px] w-[3px] absolute -right-[10px] top-[142px] rounded-r" style={{ background: '#1a1a2e' }} />
                  <div className="rounded-[2rem] overflow-hidden w-full h-full relative">
                    <div className="absolute top-0 w-full h-7 px-4 flex justify-between items-center z-20 text-[10px] font-medium text-white/60">
                      <span>9:41</span>
                      <div className="flex gap-1"><div className="w-2.5 h-2.5 rounded-full bg-white/50" /><div className="w-2.5 h-2.5 rounded-full bg-white/50" /></div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-20" />
                    {Object.entries(APP_SCREENSHOTS).map(([key, src]) => (
                      <img key={key} src={src} id={`panel-${key}`} role="tabpanel" alt={`XHub ${key}`}
                        className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ${activeShot === key ? 'opacity-100' : 'opacity-0'}`}
                        loading="eager" />
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Tab selector with touch-target pad space and ARIA tabs list */}
            <div className="flex gap-1.5 mt-5 p-1.5 rounded-full" role="tablist" aria-label="App screenshots switcher" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              {([['hero','Home'],['gallery1','Player'],['gallery2','Private'],['gallery3','Library']] as const).map(([key, label]) => (
                <button key={key} role="tab" aria-selected={activeShot === key} aria-controls={`panel-${key}`} onClick={() => setActiveShot(key)}
                  className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 min-h-[44px] min-w-[70px]"
                  style={activeShot === key
                    ? { background: 'var(--violet)', color: '#fff', boxShadow: '0 0 16px var(--violet-glow)' }
                    : { color: 'var(--text-primary)', opacity: 0.8 }}>
                  {label}
                </button>
              ))}
            </div>

            {/* Floating badges with high contrast text */}
            <div className="absolute -right-4 top-28 flex items-center gap-3 p-3 rounded-2xl animate-bounce pointer-events-none"
              style={{ background: 'rgba(18,18,28,0.95)', border: '1px solid var(--border)', backdropFilter: 'blur(16px)', animationDuration: '4s', boxShadow: '0 0 24px rgba(34,211,238,0.15)' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(34,211,238,0.15)', color: 'var(--cyan)' }}>
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <div><p className="text-white font-bold text-xs">100% Secure</p><p className="text-[11px] font-semibold text-white/80">No tracking</p></div>
            </div>
            <div className="absolute -left-8 bottom-44 flex items-center gap-3 p-3 rounded-2xl animate-bounce pointer-events-none"
              style={{ background: 'rgba(18,18,28,0.95)', border: '1px solid var(--border)', backdropFilter: 'blur(16px)', animationDuration: '5.5s', animationDelay: '1s', boxShadow: '0 0 24px var(--violet-glow)' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.15)', color: 'var(--violet-light)' }}>
                <PlayIcon className="w-4 h-4" />
              </div>
              <div><p className="text-white font-bold text-xs">4K Ultra HD</p><p className="text-[11px] font-semibold text-white/80">Crystal clear</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const cards = [
    { icon: <GlobeIcon className="w-6 h-6" />, title: 'All-in-One Aggregator', body: 'Netflix, Disney+, Hulu, HBO, and live sports — all in one place. Cut the cord without losing anything.', accent: '#7C3AED', glow: 'rgba(124,58,237,0.15)' },
    { icon: <LockClosedIcon className="w-6 h-6" />, title: 'Built-in Private Browser', body: 'A fully sandboxed browser with zero history retention. Your searches stay yours — always.', accent: '#22D3EE', glow: 'rgba(34,211,238,0.15)' },
    { icon: <PlayIcon className="w-6 h-6" />, title: 'Instant Streaming', body: 'No buffering, no loading screens. XHub pre-caches streams so playback starts in under a second.', accent: '#A78BFA', glow: 'rgba(167,139,250,0.15)' },
  ];

  return (
    <section id="features" className="py-28 relative scroll-mt-24" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--violet), transparent)' }} />

      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--violet-light)' }}>Why XHub</p>
          <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text-primary)' }}>
            Built different, by design
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 120} className="h-full">
              <div className="h-full p-8 rounded-2xl transition-all duration-300 group cursor-default"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = card.accent + '55'; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${card.glow}`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${card.accent}18`, color: card.accent, border: `1px solid ${card.accent}30` }}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk',sans-serif" }}>{card.title}</h3>
                <p className="text-base leading-relaxed text-white/80">{card.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery: React.FC = () => (
  <section id="gallery" className="py-24 scroll-mt-24 overflow-hidden" style={{ background: `linear-gradient(to bottom, var(--bg), var(--surface))`, borderTop: '1px solid var(--border)' }}>
    <ScrollReveal className="container mx-auto px-6 text-center mb-16">
      <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cyan)' }}>App Screenshots</p>
      <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text-primary)' }}>
        Cinematic on every screen
      </h2>
      <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
        Dark mode first. Every pixel optimised for late-night watching.
      </p>
    </ScrollReveal>
    <div className="flex overflow-x-auto gap-8 px-6 pb-10 snap-x snap-mandatory no-scrollbar md:justify-center">
      {[APP_SCREENSHOTS.gallery1, APP_SCREENSHOTS.gallery2, APP_SCREENSHOTS.gallery3].map((src, i) => (
        <ScrollReveal key={i} delay={i * 120} className="snap-center shrink-0">
          <div className="transition-transform duration-300 hover:-translate-y-3">
            <PhoneMockup imageSrc={src} />
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Marcus T.', role: 'Verified User', avatar: 20, text: "Finally an app that works. Library is massive and I cancelled Netflix after the first week." },
    { name: 'Sarah L.',  role: 'Verified User', avatar: 21, text: "The private browser is insane — super fast and genuinely doesn't track anything. Daily driver now." },
    { name: 'James R.',  role: 'Verified User', avatar: 22, text: "4K quality even on my crappy data plan. Not sure how they pulled that off but I'm not complaining." },
  ];

  return (
    <section id="testimonials" className="py-24 scroll-mt-24" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--violet-light)' }}>Reviews</p>
          <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text-primary)' }}>From real users</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={i * 100} className="h-full">
              <div className="h-full p-7 rounded-2xl flex flex-col gap-5 transition-all duration-300"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.35)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}>
                <div className="flex gap-0.5">
                  {Array(5).fill(0).map((_, s) => <StarIcon key={s} className="w-4 h-4" style={{ color: '#F59E0B' } as React.CSSProperties} />)}
                </div>
                <p className="text-sm leading-relaxed flex-1 text-white/90">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/80?img=${r.avatar}`} alt={r.name} className="w-9 h-9 rounded-full object-cover" style={{ border: '2px solid var(--border-strong)' }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{r.name}</p>
                    <p className="text-xs font-medium text-white/70">{r.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  const id = `faq-${q.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left py-5 focus:outline-none transition-colors duration-200"
        style={{ color: open ? 'var(--violet-light)' : 'var(--text-primary)' }}>
        <span className="font-semibold text-base" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{q}</span>
        <span className="text-xl ml-4 shrink-0 transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : 'none', color: open ? 'var(--violet)' : 'var(--text-primary)', opacity: open ? 1 : 0.6 }}>+</span>
      </button>
      <div id={id} role="region" className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-white/80">{a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => (
  <section id="faq" className="py-24 scroll-mt-24" style={{ background: 'linear-gradient(to bottom, var(--surface), var(--bg))', borderTop: '1px solid var(--border)' }}>
    <div className="container mx-auto px-6 max-w-3xl">
      <ScrollReveal className="text-center mb-14">
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cyan)' }}>Got questions?</p>
        <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text-primary)' }}>Answers right here</h2>
      </ScrollReveal>
      <ScrollReveal>
        <div className="p-8 md:p-10 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          {[
            { q: 'Is XHub safe to install?', a: 'Yes. The APK is clean — no malware, no adware, no hidden trackers. Since it ships outside the Play Store you\'ll need to enable "Install from unknown sources" in Android settings, which is a normal one-time step for sideloading.' },
            { q: 'Does it cost anything?', a: 'Nothing. XHub is completely free. No subscription, no in-app purchases, no paywalls.' },
            { q: 'Which Android versions are supported?', a: 'Android 6.0 (Marshmallow) and above. Works on phones, tablets, Android TV boxes, and Fire Stick with a launcher.' },
            { q: 'How do I get updates?', a: 'XHub checks for updates on launch. When a new version drops you\'ll see an in-app prompt. One tap downloads and installs the latest build.' },
          ].map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-14" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }}>
            <span className="text-white font-black text-xs">X</span>
          </div>
          <span className="font-bold text-lg" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text-primary)' }}>XHub</span>
        </div>
        <p className="text-sm max-w-xs text-white/80">The Android streaming app that replaces everything else.</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-4">
        <a href="https://github.com/ibrahim-koraikir/xhub/releases/latest/download/xhub.apk" download
          className="flex items-center gap-2 font-bold py-3 px-7 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: 'var(--violet)', boxShadow: '0 0 28px var(--violet-glow)' }}>
          <DownloadIcon className="w-4 h-4" />
          Download Now
        </a>
        <p className="text-xs tracking-widest uppercase text-white/70">Free • Private • No Play Store needed</p>
      </div>
    </div>
    <div className="container mx-auto px-6 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-3" style={{ borderTop: '1px solid var(--border)', color: 'var(--text-primary)', opacity: 0.7 }}>
      <p>© 2024 XHub App. All rights reserved.</p>
      <div className="flex gap-6">
        {['Privacy','Terms','DMCA'].map(l => (
          <a key={l} href="#" className="transition-colors hover:text-white">{l}</a>
        ))}
      </div>
    </div>
  </footer>
);

const InstallModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.75)' }} onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-pulse-slow" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <div className="p-8">
          <button aria-label="Close installation guide" onClick={onClose}
            className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ background: 'var(--surface-2)', color: 'var(--text-primary)' }}>
            <XIcon className="w-4 h-4" />
          </button>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text-primary)' }}>Install in 60 seconds</h2>
          <p className="text-sm mb-8 text-white/80">No Play Store. Three taps and you're streaming.</p>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Download the APK', desc: 'Tap the button below. The file lands in your Downloads folder.' },
              { step: '02', title: 'Allow unknown sources', desc: 'Enable "Install from unknown sources" in Settings → Security when prompted.' },
              { step: '03', title: 'Install & watch', desc: 'Tap the file, hit Install, and launch. You\'re live in under a minute.' },
            ].map(s => (
              <div key={s.step} className="flex gap-5 items-start">
                <span className="text-2xl font-black shrink-0 text-white" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{s.step}</span>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{s.title}</h4>
                  <p className="text-xs leading-relaxed text-white/80">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://github.com/ibrahim-koraikir/xhub/releases/latest/download/xhub.apk" download
            className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--violet)', boxShadow: '0 0 28px var(--violet-glow)' }}>
            <DownloadIcon className="w-5 h-5" />
            Get the APK
          </a>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);

  useEffect(() => {
    fetch('/version.json').then(r => r.json()).then(setVersionInfo).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text-primary)', fontFamily: "'Inter',sans-serif" }}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:text-white focus:rounded-md focus:font-bold outline-none" style={{ backgroundColor: 'var(--violet)' }}>
        Skip to content
      </a>
      <Header versionInfo={versionInfo} />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero versionInfo={versionInfo} onInstallClick={() => setModalOpen(true)} />
        <Features />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <InstallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;