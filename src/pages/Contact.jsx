import { FiMenu, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'kudkeshivraj45@gmail.com', link: 'mailto:kudkeshivraj45@gmail.com', color: 'text-rose-400' },
    { icon: FiPhone, label: 'Phone', value: '+91 91301 26373', link: 'tel:+919130126373', color: 'text-green-400' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '+91 91301 26373', link: 'https://wa.me/919130126373?text=Hi%20Shivraj!%20i%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.', color: 'text-emerald-400' },
    { icon: FaInstagram, label: 'Instagram', value: '@__shivryaaa__45', link: 'https://www.instagram.com/__shivryaaa__45', color: 'text-pink-400' },
    { icon: FaSnapchatGhost, label: 'Snapchat', value: '@kudke_shivraj', link: 'https://www.snapchat.com/add/kudke_shivraj', color: 'text-yellow-300' },
    { icon: FiMapPin, label: 'Location', value: 'Chhatrapati sambhajinagar 431001 maharashtra india', link: '#', color: 'text-yellow-400' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'in/shivraj-kudke-08b185381', link: 'https://www.linkedin.com/in/shivraj-kudke-08b185381', color: 'text-blue-400' },
    { icon: FiGithub, label: 'GitHub', value: 'shivraj45-ctrl', link: 'https://github.com/shivraj45-ctrl', color: 'text-purple-400' },
    { icon: FaXTwitter, label: 'Twitter / X', value: '@im_shiv_45', link: 'https://x.com/im_shiv_45', color: 'text-slate-300' },
  ];

  return (
    <div className="flex flex-col w-full min-h-full px-6 pt-10 pb-32">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white tracking-wide">Contact Me</h2>
        <button className="p-2 bg-white/5 rounded-full border border-white/5 text-white"><FiMenu /></button>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 glass-card py-8 px-6 rounded-3xl relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
        <h3 className="text-xl font-bold text-white mb-2 relative z-10">Let's Connect!</h3>
        <p className="text-text-muted text-sm font-medium relative z-10">I'm always open to discussing new projects, creative ideas or opportunities. 👋</p>
      </motion.div>

      <div className="flex flex-col gap-4 flex-1">
        {contactInfo.map((info, i) => (
          <motion.a 
            href={info.link}
            key={i}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + (i * 0.1), type: 'spring' }}
            className="flex items-center gap-5 glass-card p-4 rounded-2xl hover:bg-white/5 transition-colors group border border-white/5"
          >
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${info.color}`}>
              <info.icon className="text-xl drop-shadow-md" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mb-0.5">{info.label}</p>
              <p className="text-sm font-semibold text-white tracking-wide">{info.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
        onClick={() => window.open('https://wa.me/919130126373?text=Hi%20Shivraj!%20i%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.', '_blank')}
        className="w-full bg-gradient-to-r from-primary to-pink-500 text-white py-4 rounded-2xl font-bold mt-10 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(139,92,246,0.3)] active:scale-95 transition-transform"
      >
        Send a Message <span>→</span>
      </motion.button>
    </div>
  );
}
