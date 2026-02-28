import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    key: 'gustav',
    photo: '/assets/images/team/gustav-azrak.jpeg',
    initials: 'GA',
  },
  {
    key: 'jonathan',
    photo: '/assets/images/team/jonathan-lindblad.jpeg',
    initials: 'JL',
  },
];

function TeamAvatar({ photo, initials, name }: { photo: string; initials: string; name: string }) {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#4BC8D8]/40 mx-auto mb-4 bg-gradient-to-br from-[#4BC8D8]/30 to-[#4BC8D8]/10">
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="text-[#4BC8D8] font-bold text-2xl flex items-center justify-center w-full h-full">${initials}</span>`;
          }
        }}
      />
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
              <TeamAvatar
                photo={member.photo}
                initials={member.initials}
                name={t(`about.team.${member.key}.name`)}
              />
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