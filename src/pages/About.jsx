import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiAward, FiMapPin, FiMail, FiStar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function About() {
  const navigate = useNavigate();

  const details = [
    { icon: FiUser, label: 'Name', value: 'Shivraj Vishnu Kudke', color: 'text-blue-400' },
    { icon: FiAward, label: 'Education', value: 'MIT Chhatrapati Sambhajinagar\nECE - 2nd Year', color: 'text-purple-400' },
    { icon: FiMapPin, label: 'Location', value: 'Chhatrapati sambhajinagar 431001 maharashtra india', color: 'text-pink-400' },
    { icon: FiMail, label: 'Email', value: 'kudkeshivraj45@gmail.com', color: 'text-primary', link: 'mailto:kudkeshivraj45@gmail.com' },
    { icon: FiStar, label: 'Interests', value: 'Coding, AI, Web Dev, Cricket, Gaming', color: 'text-yellow-400' },
  ];

  const navCards = [
    { name: 'My Journey', desc: 'Education & Experience', link: '/journey', emoji: '🚀', color: 'from-blue-500/20 to-cyan-500/10' },
    { name: 'Certificates', desc: 'Achievements & Awards', link: '/certificates', emoji: '🏆', color: 'from-yellow-500/20 to-orange-500/10' },
    { name: 'Image Gallery', desc: 'Photos & Activities', link: '/gallery', emoji: '🖼️', color: 'from-pink-500/20 to-rose-500/10' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, scale: 0.98 }} 
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full min-h-full p-6 pb-32 pt-10"
    >
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate(-1)} className="text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/5 active:scale-90 transition-transform">
          <FiArrowLeft className="text-xl" />
        </button>
        <h2 className="text-xl font-bold text-white tracking-wide">About Me</h2>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
        onClick={() => navigate('/contact')}
        className="mb-8 glass-card p-6 rounded-3xl relative overflow-hidden flex items-center gap-6 cursor-pointer active:scale-[0.98] transition-transform group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />

        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/50 shadow-[0_0_15px_rgba(139,92,246,0.3)] relative z-10 group-hover:scale-105 transition-transform">
          <img src="/profile.jpg" alt="Shivraj Kudke" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10">
          <h3 className="text-white font-semibold mb-2 text-lg">Who I Am</h3>
          <p className="text-text-muted text-xs leading-relaxed">
            I'm Shivraj Vishnu Kudke, a Second Year ECE student at MIT Chhatrapati Sambhajinagar. I love building web applications, exploring AI, and diving deep into new technologies.
          </p>
          <p className="text-primary text-[10px] font-bold mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">Contact Me <FiArrowRight /></p>
        </div>
      </motion.div>

      {/* Detail Cards */}
      <div className="flex flex-col gap-3 mb-8">
        {details.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
            onClick={() => { if (item.link) window.location.href = item.link; }}
            className={`flex items-start gap-4 p-4 rounded-2xl glass-card hover:border-white/20 transition-colors group ${item.link ? 'cursor-pointer active:scale-[0.98]' : ''}`}
          >
            <div className={`mt-0.5 p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${item.color}`}>
              <item.icon className="text-lg drop-shadow-md" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm text-white font-medium whitespace-pre-line">{item.value}</p>
            </div>
            {item.link && <FiArrowRight className="text-text-muted mt-2 group-hover:text-primary transition-colors" />}
          </motion.div>
        ))}
      </div>

      {/* Navigation Cards to Journey & Certificates */}
      <div className="flex flex-col gap-3">
        {navCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + (i * 0.1) }}
            onClick={() => navigate(card.link)}
            className={`glass-card rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:bg-white/5 active:scale-[0.97] transition-all group border border-white/5 bg-gradient-to-r ${card.color}`}
          >
            <span className="text-3xl">{card.emoji}</span>
            <div className="flex-1">
              <p className="text-white text-sm font-bold">{card.name}</p>
              <p className="text-text-muted text-[10px] font-medium mt-0.5">{card.desc}</p>
            </div>
            <FiArrowRight className="text-lg text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
