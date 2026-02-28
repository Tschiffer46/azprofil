import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// To use Formspree: replace REPLACE_WITH_YOUR_FORMSPREE_ID with your actual Formspree form ID
// Get a free form ID at https://formspree.io/ (create account → New Form → copy the ID)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: 'general', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          {t('contact.title')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-[#111111] rounded-xl p-5 border border-[#1A1A1A]">
              <div className="text-2xl mb-2">📧</div>
              <p className="text-[#A0A0A0] text-sm mb-1">{t('contact.generalEmail')}</p>
              <a href="mailto:info@azprofil.se" className="text-[#4BC8D8] hover:underline font-medium">
                info@azprofil.se
              </a>
            </div>
            <div className="bg-[#111111] rounded-xl p-5 border border-[#1A1A1A]">
              <div className="text-2xl mb-2">📧</div>
              <p className="text-[#A0A0A0] text-sm mb-1">{t('contact.orderEmail')}</p>
              <a href="mailto:order@azprofil.se" className="text-[#4BC8D8] hover:underline font-medium">
                order@azprofil.se
              </a>
            </div>
            <div className="bg-[#111111] rounded-xl p-5 border border-[#1A1A1A]">
              <div className="text-2xl mb-2">📍</div>
              <p className="text-[#A0A0A0] text-sm mb-1">{t('contact.address')}</p>
              <p className="text-white font-medium">Åkergränden 7</p>
              <p className="text-white">226 60 Lund</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111111] rounded-xl p-6 border border-[#1A1A1A]">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-white font-medium">{t('contact.form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#A0A0A0] text-sm mb-1">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full bg-[#1A1A1A] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white placeholder-[#555] focus:outline-none focus:border-[#4BC8D8] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[#A0A0A0] text-sm mb-1">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full bg-[#1A1A1A] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white placeholder-[#555] focus:outline-none focus:border-[#4BC8D8] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[#A0A0A0] text-sm mb-1">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phonePlaceholder')}
                    className="w-full bg-[#1A1A1A] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white placeholder-[#555] focus:outline-none focus:border-[#4BC8D8] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[#A0A0A0] text-sm mb-1">{t('contact.form.subject')}</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#4BC8D8] text-sm"
                  >
                    <option value="general">{t('contact.form.subjectOptions.general')}</option>
                    <option value="order">{t('contact.form.subjectOptions.order')}</option>
                    <option value="design">{t('contact.form.subjectOptions.design')}</option>
                    <option value="other">{t('contact.form.subjectOptions.other')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#A0A0A0] text-sm mb-1">{t('contact.form.message')}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full bg-[#1A1A1A] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white placeholder-[#555] focus:outline-none focus:border-[#4BC8D8] text-sm resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm">{t('contact.form.error')}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#4BC8D8] text-black font-semibold py-3 rounded-lg hover:bg-[#3ab8c8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-[#1A1A1A] min-h-[300px]">
            <iframe
              title="AZ Profil AB location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.123456789!2d13.19!3d55.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a15c1f5db0ef%3A0x7d99a8e2c48a4d3c!2s%C3%85kergr%C3%A4nden%207%2C%20226%2060%20Lund!5e0!3m2!1ssv!2sse!4v1234567890"
              width="100%"
              height="100%"
              style={{ minHeight: '300px', border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
