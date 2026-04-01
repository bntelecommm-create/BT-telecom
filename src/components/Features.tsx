import { motion } from 'motion/react';
import { Truck, ShieldCheck, TrendingUp } from 'lucide-react';
import { Language, translations } from '../translations';

interface FeaturesProps {
  lang: Language;
}

export default function Features({ lang }: FeaturesProps) {
  const t = translations[lang].features;

  const features = [
    {
      icon: <Truck className="text-blue-600" size={32} />,
      title: t.shipping.title,
      desc: t.shipping.desc,
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={32} />,
      title: t.warranty.title,
      desc: t.warranty.desc,
    },
    {
      icon: <TrendingUp className="text-blue-600" size={32} />,
      title: t.pricing.title,
      desc: t.pricing.desc,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 dark:border-slate-900 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
