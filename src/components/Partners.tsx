import { useTranslation } from 'react-i18next';
import { partners } from '../data/partners';

// SVG placeholder for partner logos
function PartnerLogoPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
  return (
    <div className="w-full h-20 flex items-center justify-center bg-[#f0f0f0] rounded-lg">
      <span className="text-[#333] font-bold text-sm tracking-wide">{initials}</span>
    </div>
  );
}

export default function Partners() {
  const { t, i18n } = useTranslation();
  const isDanish = i18n.language?.startsWith('da');

  return (
    <section id="partners" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          {t('partners.title')}
        </h2>
        <p className="text-[#A0A0A0] text-center mb-12 max-w-2xl mx-auto">
          {t('partners.intro')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2a2a2a] hover:border-[#4BC8D8]/40 transition-all duration-300 flex flex-col"
            >
              <div className="mb-4">
                <PartnerLogoPlaceholder name={partner.name} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{partner.name}</h3>
              <p className="text-[#A0A0A0] text-sm flex-grow leading-relaxed">
                {isDanish ? partner.descriptionDa : partner.description}
              </p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#4BC8D8] text-sm font-medium hover:underline"
              >
                {t('partners.visitWebsite')} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
