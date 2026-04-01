import { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  toggleDark: () => void;
}

export default function Header({ lang, setLang, isDark, toggleDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = translations[lang].nav;

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇦🇪' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-display font-bold tracking-tighter text-blue-600 dark:text-blue-400">
              BN TELECOM
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.home}</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.devices}</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.services}</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.about}</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">{t.contact}</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Globe size={20} />
                <span className="text-sm font-medium uppercase">{lang}</span>
                <ChevronDown size={16} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-2"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                          lang === l.code ? 'text-blue-600 font-semibold' : ''
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              {t.access}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">{t.home}</a>
              <a href="#" className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">{t.devices}</a>
              <a href="#" className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">{t.services}</a>
              <a href="#" className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">{t.about}</a>
              <a href="#" className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">{t.contact}</a>
              
              <div className="pt-4 pb-2 border-t border-slate-200 dark:border-slate-800">
                <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
                        lang === l.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'hover:bg-slate-50 dark:hover:bg-slate-900'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/20">
                {t.access}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
