import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const slides = [
  {
    taglineKey: 'hero.slide1.tagline',
    ctaKey: 'hero.slide1.cta',
    ctaHref: '#contact',
    gradient: 'from-black via-[#0a2a2e] to-[#0d1a1a]',
  },
  {
    taglineKey: 'hero.slide2.tagline',
    ctaKey: 'hero.slide2.cta',
    ctaHref: '#services',
    gradient: 'from-[#0d1a1a] via-black to-[#0a2a2e]',
  },
  {
    taglineKey: 'hero.slide3.tagline',
    ctaKey: 'hero.slide3.cta',
    ctaHref: '#about',
    gradient: 'from-[#0a2a2e] via-[#0d1a1a] to-black',
  },
];

export default function HeroSlider() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const handleCtaClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = slides[current];

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #000000 0%, #0a2a2e 50%, #000000 100%)`,
      }}
    >
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-700`}
        style={{ opacity: isTransitioning ? 0 : 1 }}
      />

      {/* Turquoise decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-[#4BC8D8]/20 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full border border-[#4BC8D8]/10" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-[#4BC8D8]/5 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          {t(slide.taglineKey)}
        </h1>
        <button
          onClick={() => handleCtaClick(slide.ctaHref)}
          className="inline-block bg-[#4BC8D8] text-black font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#3ab8c8] transition-colors duration-200"
        >
          {t(slide.ctaKey)}
        </button>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-[#4BC8D8] transition-colors p-2"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-[#4BC8D8] transition-colors p-2"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#4BC8D8] w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <svg className="w-6 h-6 text-[#4BC8D8]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
