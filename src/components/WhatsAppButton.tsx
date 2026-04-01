import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface WhatsAppButtonProps {
  lang: Language;
}

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const text = translations[lang].whatsapp;
  
  // WhatsApp link could be dynamic based on language if needed
  const whatsappUrl = "https://wa.me/34600000000"; 

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl shadow-green-500/30 transition-all group rtl:space-x-reverse"
    >
      <MessageCircle size={24} />
      <span className="font-semibold whitespace-nowrap">{text}</span>
    </motion.a>
  );
}
