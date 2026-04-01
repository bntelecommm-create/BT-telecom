import { motion } from 'motion/react';

const brands = [
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg' },
  { name: 'OPPO', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Oppo_Logo.svg' },
  { name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Huawei_Logo.svg' },
];

export default function TrustBar() {
  return (
    <div className="py-12 border-y border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-8 md:h-10 w-auto object-contain dark:invert"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
