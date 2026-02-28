import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('da') ? 'da' : 'sv';

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLang('sv')}
        className={`flex items-center gap-1 px-2 py-1 rounded text-sm transition-colors ${
          currentLang === 'sv'
            ? 'text-[#4BC8D8] font-semibold'
            : 'text-[#A0A0A0] hover:text-white'
        }`}
        aria-label="Switch to Swedish"
      >
        <span>🇸🇪</span>
        <span>SV</span>
      </button>
      <span className="text-[#A0A0A0]">|</span>
      <button
        onClick={() => switchLang('da')}
        className={`flex items-center gap-1 px-2 py-1 rounded text-sm transition-colors ${
          currentLang === 'da'
            ? 'text-[#4BC8D8] font-semibold'
            : 'text-[#A0A0A0] hover:text-white'
        }`}
        aria-label="Switch to Danish"
      >
        <span>🇩🇰</span>
        <span>DA</span>
      </button>
    </div>
  );
}
