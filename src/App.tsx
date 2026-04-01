import { useState, useEffect } from 'react';
import { Language } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Features from './components/Features';
import WelcomeSection from './components/WelcomeSection';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // Handle RTL for Arabic
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
  }, [lang]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen font-sans">
      <Header 
        lang={lang} 
        setLang={setLang} 
        isDark={isDark} 
        toggleDark={toggleDark} 
      />
      
      <main>
        <Hero lang={lang} />
        <TrustBar />
        <Features lang={lang} />
        <WelcomeSection lang={lang} />
        
        {/* Contact Section Placeholder */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              {lang === 'es' ? '¿Listo para empezar?' : 
               lang === 'en' ? 'Ready to get started?' :
               lang === 'fr' ? 'Prêt à commencer ?' : 'هل أنت مستعد للبدء؟'}
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/25 transition-all">
              {lang === 'es' ? 'Registrarse como Distribuidor' : 
               lang === 'en' ? 'Register as Distributor' :
               lang === 'fr' ? 'S\'inscrire comme Distributeur' : 'سجل كموزع'}
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-display font-bold text-blue-600 dark:text-blue-400">
              BN TELECOM
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse text-sm text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
            </div>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} BN Telecom. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton lang={lang} />
    </div>
  );
}
