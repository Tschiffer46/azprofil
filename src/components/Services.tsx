import { useTranslation } from 'react-i18next';

const services = [
  {
    key: 'profilklader',
    gradient: 'from-[#0a2a2e] to-[#000000]',
    icon: '👔',
  },
  {
    key: 'arbetsklader',
    gradient: 'from-[#0d1a1a] to-[#0a2a2e]',
    icon: '🦺',
  },
  {
    key: 'profilartiklar',
    gradient: 'from-[#000000] to-[#0d1a1a]',
    icon: '🎁',
  },
  {
    key: 'forbrukning',
    gradient: 'from-[#0a2a2e] to-[#0d1a1a]',
    icon: '📦',
  },
  {
    key: 'tryck',
    gradient: 'from-[#0d1a1a] to-[#000000]',
    icon: '🎨',
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.key}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${service.gradient} border border-[#1A1A1A] hover:border-[#4BC8D8]/50 transition-all duration-300 cursor-pointer`}
              style={{ minHeight: '220px' }}
            >
              {/* Base content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-white text-xl font-bold">
                  {t(`services.${service.key}.name`)}
                </h3>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#4BC8D8]/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-black text-xl font-bold mb-3">
                    {t(`services.${service.key}.name`)}
                  </h3>
                  <p className="text-black/80 text-sm leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
