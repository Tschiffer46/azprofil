import { useTranslation } from 'react-i18next';
import { testimonials } from '../data/testimonials';

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="w-14 h-14 rounded-full bg-[#4BC8D8]/20 border-2 border-[#4BC8D8]/40 flex items-center justify-center flex-shrink-0">
      <span className="text-[#4BC8D8] font-bold text-sm">{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const isDanish = i18n.language?.startsWith('da');

  return (
    <section id="testimonials" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          {t('testimonials.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#111111] rounded-xl p-6 border border-[#1A1A1A] hover:border-[#4BC8D8]/30 transition-all duration-300"
            >
              <div className="text-[#4BC8D8] text-4xl font-serif leading-none mb-4">"</div>
              <p className="text-[#A0A0A0] italic mb-6 leading-relaxed">
                {isDanish ? item.quoteDa : item.quote}
              </p>
              <div className="flex items-center gap-3">
                <Avatar name={item.name} />
                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-[#4BC8D8] text-sm">{item.title}</p>
                  <p className="text-[#A0A0A0] text-sm">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
