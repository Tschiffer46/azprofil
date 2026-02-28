import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/index';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Services from './components/Services';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.startsWith('da') ? 'da' : 'sv';
    document.documentElement.lang = lang;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSlider />
      <Services />
      <Partners />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
}
