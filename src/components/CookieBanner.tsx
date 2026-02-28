import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = (all: boolean) => {
    localStorage.setItem('cookie-consent', all ? 'all' : 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111111] border-t border-[#4BC8D8]/30 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[#A0A0A0] text-sm">
          {t('cookie.message')}{' '}
          <a href="#" className="text-[#4BC8D8] hover:underline">
            {t('cookie.policy')}
          </a>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => accept(false)}
            className="px-4 py-2 text-sm border border-[#4BC8D8]/50 text-[#A0A0A0] rounded-lg hover:border-[#4BC8D8] hover:text-white transition-colors"
          >
            {t('cookie.necessaryOnly')}
          </button>
          <button
            onClick={() => accept(true)}
            className="px-4 py-2 text-sm bg-[#4BC8D8] text-black font-semibold rounded-lg hover:bg-[#3ab8c8] transition-colors"
          >
            {t('cookie.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  );
}
