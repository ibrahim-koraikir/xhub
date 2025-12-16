import * as React from 'react';
import { useState, useEffect } from 'react';

// --- CONFIGURATION ---
// ----------------------------------------------------------------------
// IMPORTANT: REPLACE THESE URLS WITH YOUR ACTUAL APP SCREENSHOTS
// ----------------------------------------------------------------------
const APP_SCREENSHOTS = {
  // Main Hero Image (Use the Dashboard/Netflix card view here)
  hero: "/imgs/fuse-ios-14.png",

  // Gallery Image 1 (Use the Video Player view here)
  gallery1: "/imgs/apple-podcasts-ios-18.png",

  // Gallery Image 2 (Use the Browser/Private view here)
  gallery2: "/imgs/fuse-ios-15.png",

  // Gallery Image 3 (Use the Loading/Other view here)
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

// --- Styled Components & Mockups ---

const PhoneMockup: React.FC<{ children?: React.ReactNode; className?: string; imageSrc?: string }> = ({ children, className = "", imageSrc }) => (
  <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] h-[580px] w-[280px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/20 ${className}`}>
    {/* Hardware Buttons */}
    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[10px] top-[142px] rounded-r-lg"></div>

    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-900 relative">
      {/* Status Bar */}
      <div className="absolute top-0 w-full h-8 px-5 flex justify-between items-center z-20 text-[10px] font-medium text-white mix-blend-difference">
        <span>9:41</span>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

      {/* Content */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="App Screenshot"
          className="absolute inset-0 w-full h-full object-cover z-10"
          loading="lazy"
        />
      ) : children}
    </div>
  </div>
);

// --- Sections ---

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [versionInfo, setVersionInfo] = useState<{ versionName: string; releaseNotes: string } | null>(null);

  useEffect(() => {
    fetch('/version.json')
      .then((res) => res.json())
      .then((data) => setVersionInfo(data))
      .catch((err) => console.error("Failed to fetch version info", err));
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-rose-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-900/20">
            <span className="text-white font-black text-lg">X</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">XHub</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</a>
          <a href="#gallery" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Library</a>
          <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Reviews</a>
        </nav>
        <a
          href="https://github.com/ibrahim-koraikir/xhub/releases/latest/download/xhub.apk"
          download
          className="bg-white text-black hover:bg-gray-100 font-semibold py-2 px-6 rounded-full transition-all duration-300 text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5"
        >
          Download APK {versionInfo && <span className="ml-1 opacity-60 text-xs">v{versionInfo.versionName}</span>}
        </a>
      </div>
    </header>
  );
};

const ScrollingBackground: React.FC = () => {
  // Duplicate for seamless loop
  const column1 = [...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES];
  const column2 = [...BACKGROUND_IMAGES].reverse().concat([...BACKGROUND_IMAGES].reverse()).concat([...BACKGROUND_IMAGES].reverse());
  const column3 = [...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES, ...BACKGROUND_IMAGES].sort(() => Math.random() - 0.5);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 select-none pointer-events-none">
      {/* Container: Flex Row of Columns, Tilted */}
      <div className="absolute -inset-40 flex justify-center gap-6 -rotate-12 scale-125 opacity-60">

        {/* Column 1 (Up) */}
        <div className="flex flex-col gap-6 animate-marquee-up min-h-full shrink-0">
          {column1.map((src, i) => (
            <div key={`c1-${i}`} className="w-48 h-[300px] shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <img src={src} className="w-full h-full object-cover opacity-100 grayscale-[0.5] hover:grayscale-0 transition-all" alt="" />
            </div>
          ))}
        </div>

        {/* Column 2 (Down) */}
        <div className="flex flex-col gap-6 animate-marquee-down min-h-full shrink-0">
          {column2.map((src, i) => (
            <div key={`c2-${i}`} className="w-48 h-[300px] shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <img src={src} className="w-full h-full object-cover opacity-100 grayscale-[0.5] hover:grayscale-0 transition-all" alt="" />
            </div>
          ))}
        </div>

        {/* Column 3 (Up) */}
        <div className="flex flex-col gap-6 animate-marquee-up min-h-full shrink-0">
          {column3.map((src, i) => (
            <div key={`c3-${i}`} className="w-48 h-[300px] shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <img src={src} className="w-full h-full object-cover opacity-100 grayscale-[0.5] hover:grayscale-0 transition-all" alt="" />
            </div>
          ))}
        </div>

        {/* Column 4 (Down) */}
        <div className="flex flex-col gap-6 animate-marquee-down min-h-full shrink-0 hidden lg:flex">
          {column2.map((src, i) => (
            <div key={`c4-${i}`} className="w-48 h-[300px] shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <img src={src} className="w-full h-full object-cover opacity-100 grayscale-[0.5] hover:grayscale-0 transition-all" alt="" />
            </div>
          ))}
        </div>

      </div>

      {/* Overlay Gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [versionInfo, setVersionInfo] = useState<{ versionName: string; releaseNotes: string } | null>(null);

  useEffect(() => {
    fetch('/version.json')
      .then((res) => res.json())
      .then((data) => setVersionInfo(data))
      .catch((err) => console.error("Failed to fetch version info", err));
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20 lg:pt-0">

      {/* Moving Background */}
      <ScrollingBackground />
      {/* Refined Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text */}
        <div className="text-center lg:text-left pt-10 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-rose-300 text-xs font-bold tracking-wider uppercase mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            {versionInfo ? `New Version ${versionInfo.versionName} Available` : 'New Version Available'}
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Stream Everything. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-orange-500">Unlimited Access.</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Watch movies, TV shows, and premium channels from all your favorite platforms in one app. Plus, browse privately with our secure built-in browser.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="https://github.com/ibrahim-koraikir/xhub/releases/latest/download/xhub.apk" download className="group relative px-8 py-4 bg-white text-black rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <DownloadIcon className="w-5 h-5" />
                Download Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-500 pl-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full bg-slate-800 border-2 border-black flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="font-medium">500k+ downloads</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative h-[600px] flex items-center justify-center lg:perspective-[2000px] group">
          {/* Background blurred cards */}
          <div className="absolute right-10 lg:right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-40 scale-90 blur-[2px] duration-700 transition-all group-hover:translate-x-20 group-hover:rotate-6 grayscale group-hover:grayscale-0">
            <PhoneMockup className="rotate-12" imageSrc={APP_SCREENSHOTS.gallery1} />
          </div>

          <div className="absolute left-10 lg:left-20 top-1/2 -translate-y-1/2 -translate-x-12 opacity-40 scale-90 blur-[2px] duration-700 transition-all group-hover:-translate-x-20 group-hover:-rotate-6 grayscale group-hover:grayscale-0">
            <PhoneMockup className="-rotate-12" imageSrc={APP_SCREENSHOTS.gallery2} />
          </div>

          {/* Main Card */}
          <div className="relative z-20 transition-transform duration-700 hover:scale-105 animate-float">
            <PhoneMockup
              className="shadow-[0_0_80px_rgba(225,29,72,0.25)]"
              imageSrc={APP_SCREENSHOTS.hero}
            />

            {/* Floating Elements */}
            <div className="absolute -right-8 top-32 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center border border-green-500/30">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Secure Connection</p>
                <p className="text-gray-400 text-xs">No logs kept</p>
              </div>
            </div>

            <div className="absolute -left-12 bottom-40 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center border border-rose-500/30">
                <PlayIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">4K Ultra HD</p>
                <p className="text-gray-400 text-xs">Crystal clear quality</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Features: React.FC = () => (
  <section id="features" className="py-32 bg-black relative border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 border border-white/5">
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-rose-500/20">
            <GlobeIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">All-in-One Aggregator</h3>
          <p className="text-gray-400 leading-relaxed font-light">Why pay for multiple subscriptions? Get access to Netflix, Disney+, Hulu, and more in a single, unified interface.</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 border border-white/5">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-purple-500/20">
            <LockClosedIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Private Browser</h3>
          <p className="text-gray-400 leading-relaxed font-light">Browse the web without tracking. Our built-in secure browser ensures your history remains yours alone.</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 border border-white/5">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
            <PlayIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Instant Streaming</h3>
          <p className="text-gray-400 leading-relaxed font-light">No downloads required. Click and play your favorite content instantly in high definition.</p>
        </div>
      </div>
    </div>
  </section>
);

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-black to-slate-950 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">The Ultimate Viewing Experience</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Designed for movie lovers. Dark mode enabled, intuitive navigation, and lightning fast playback.</p>
      </div>

      {/* Scroll Container */}
      <div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x snap-mandatory no-scrollbar justify-start md:justify-center">
        <div className="snap-center shrink-0">
          <PhoneMockup className="hover:translate-y-[-10px] transition-transform duration-300" imageSrc={APP_SCREENSHOTS.gallery1} />
        </div>
        <div className="snap-center shrink-0">
          <PhoneMockup className="hover:translate-y-[-10px] transition-transform duration-300" imageSrc={APP_SCREENSHOTS.gallery2} />
        </div>
        <div className="snap-center shrink-0">
          <PhoneMockup className="hover:translate-y-[-10px] transition-transform duration-300" imageSrc={APP_SCREENSHOTS.gallery3} />
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-24 bg-black relative z-10 border-t border-white/5">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-16 tracking-tight">User Reviews</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Marcus T.", role: "Verified User", text: "Finally an app that actually works. The library is huge and I canceled my other subscriptions." },
          { name: "Sarah L.", role: "Verified User", text: "I love the private browser feature. It's super fast and feels very secure." },
          { name: "James R.", role: "Verified User", text: "Video quality is amazing, even on mobile data. Highly recommend for movie buffs." }
        ].map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-rose-500/30 transition-colors">
            <div className="flex text-yellow-500 mb-4 space-x-1">
              {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className="w-4 h-4" />)}
            </div>
            <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-sm border border-white/10">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Footer: React.FC = () => (
  <footer className="bg-black py-16 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="w-6 h-6 bg-rose-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">X</span>
            </div>
            <span className="text-xl font-bold text-white">XHub</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">The #1 rated streaming utility for Android. Watch what you want, when you want.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <a
            href="https://github.com/ibrahim-koraikir/xhub/releases/latest/download/xhub.apk"
            download
            className="bg-white text-black hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Download Now
          </a>
          <p className="text-xs text-gray-600 uppercase tracking-wider">Free to use • Secure • Private</p>
        </div>
      </div>
      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; 2024 XHub App. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">DMCA</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;