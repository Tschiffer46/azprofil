import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#000000] border-t border-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Company Info */}
          <div>
            <div className="text-white font-bold text-xl mb-3">
              <span className="text-[#4BC8D8]">AZ</span> PROFIL AB
            </div>
            <p className="text-[#A0A0A0] text-sm leading-relaxed">
              AZ Profil AB<br />
              Org nr 556983-5076<br />
              Åkergränden 7, 226 60 Lund
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Kontakt</h3>
            <div className="space-y-2">
              <a href="mailto:info@azprofil.se" className="block text-[#A0A0A0] hover:text-[#4BC8D8] text-sm transition-colors">
                info@azprofil.se
              </a>
              <a href="mailto:order@azprofil.se" className="block text-[#A0A0A0] hover:text-[#4BC8D8] text-sm transition-colors">
                order@azprofil.se
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">Juridisk</h3>
            <div className="space-y-2">
              <a href="#" className="block text-[#A0A0A0] hover:text-[#4BC8D8] text-sm transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="block text-[#A0A0A0] hover:text-[#4BC8D8] text-sm transition-colors">
                {t('footer.accessibility')}
              </a>
              <a href="#" className="block text-[#A0A0A0] hover:text-[#4BC8D8] text-sm transition-colors">
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1A1A1A] pt-6 space-y-2">
          <p className="text-[#555] text-xs">{t('footer.gdpr')}</p>
          <p className="text-[#555] text-xs">{t('footer.accessibility_note')}</p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-2">
            <p className="text-[#555] text-xs">{t('footer.copyright')}</p>
            <p className="text-[#555] text-xs">{t('footer.built_by')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
