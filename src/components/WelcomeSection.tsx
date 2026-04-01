import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface WelcomeSectionProps {
  lang: Language;
}

export default function WelcomeSection({ lang }: WelcomeSectionProps) {
  const t = translations[lang].welcome;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
                {t.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {t.desc}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
                  <p className="text-3xl font-bold text-blue-600 mb-1">15+</p>
                  <p className="text-sm font-medium text-slate-500">Años de Experiencia</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
                  <p className="text-3xl font-bold text-blue-600 mb-1">50k+</p>
                  <p className="text-sm font-medium text-slate-500">Dispositivos Mensuales</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1556740734-7f9562690302?auto=format&fit=crop&q=80&w=1000"
                alt="Business Meeting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
