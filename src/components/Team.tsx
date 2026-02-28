import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    key: 'gustav',
    initials: 'GA',
  },
  {
    key: 'jonathan',
    initials: 'JL',
  },
];

function TeamAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#4BC8D8]/30 to-[#4BC8D8]/10 border-4 border-[#4BC8D8]/40 flex items-center justify-center mx-auto mb-4">
      <span className="text-[#4BC8D8] font-bold text-2xl">{initials}</span>
    </div>
  );
}

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
          {t('about.title')}
        </h2>
        <p className="text-[#A0A0A0] text-center max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
          {t('about.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.key}
              className="bg-[#1A1A1A] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#4BC8D8]/30 transition-all duration-300 text-center"
            >
              <TeamAvatar initials={member.initials} />
              <h3 className="text-white text-xl font-bold mb-1">
                {t(`about.team.${member.key}.name`)}
              </h3>
              <p className="text-[#4BC8D8] text-sm font-medium mb-4">
                {t(`about.team.${member.key}.title`)}
              </p>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                {t(`about.team.${member.key}.bio`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
