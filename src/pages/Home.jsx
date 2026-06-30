import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaLaptopCode, FaPython, FaFigma, FaBrain, FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn, FaSnapchatGhost } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Projects', value: '4+', link: '/projects' },
    { label: 'Technologies', value: '5+', link: '/technologies' },
    { label: 'Years Learning', value: '2+', link: '/education' },
    { label: 'Dedication', value: '100%', link: '/about' },
  ];

  const services = [
    { name: 'Web Development', icon: FaLaptopCode, color: 'text-cyan-400', bg: 'bg-cyan-400/20', link: '/service/web-development' },
    { name: 'Python Developer', icon: FaPython, color: 'text-purple-400', bg: 'bg-purple-400/20', link: '/service/python-developer' },
    { name: 'UI/UX Design', icon: FaFigma, color: 'text-pink-400', bg: 'bg-pink-400/20', link: '/service/uiux-designer' },
    { name: 'Problem Solver', icon: FaBrain, color: 'text-primary', bg: 'bg-primary/20', link: '/service/problem-solver' },
  ];

  const quickLinks = [
    { name: 'My Journey', link: '/journey', emoji: '🚀' },
    { name: 'Certificates', link: '/certificates', emoji: '🏆' },
  ];

  const socials = [
    { name: 'LinkedIn', icon: FaLinkedinIn, gradient: 'from-[#0077b5] to-[#004e7a]', shadow: 'shadow-[#0077b5]/40', link: 'https://www.linkedin.com/in/shivraj-kudke-08b185381' },
    { name: 'GitHub', icon: FaGithub, gradient: 'from-[#333333] to-[#111111]', shadow: 'shadow-white/10', link: 'https://github.com/shivraj45-ctrl' },
    { name: 'Instagram', icon: FaInstagram, gradient: 'from-[#f09433] via-[#e6683c] to-[#bc1888]', shadow: 'shadow-[#bc1888]/40', link: 'https://www.instagram.com/__shivryaaa__45' },
    { name: 'WhatsApp', icon: FaWhatsapp, gradient: 'from-[#25D366] to-[#128C7E]', shadow: 'shadow-[#25D366]/40', link: 'https://wa.me/919130126373?text=Hi%20Shivraj!%20i%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.' },
    { name: 'Snapchat', icon: FaSnapchatGhost, gradient: 'from-[#FFFC00] to-[#cccc00]', shadow: 'shadow-[#FFFC00]/30', color: 'text-black', link: 'https://www.snapchat.com/add/kudke_shivraj' },
    { name: 'Twitter', icon: FaXTwitter, gradient: 'from-[#14171a] to-[#2d2d2d]', shadow: 'shadow-white/5', link: 'https://x.com/im_shiv_45' },
  ];

  return (
    <div className="flex flex-col w-full min-h-full px-6 pt-10 pb-28 font-sans">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-10">
        <button onClick={() => navigate('/about')} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition">
          <FiMenu className="text-2xl text-white" />
        </button>
        <div className="flex flex-col items-center">
          <p className="text-white text-base font-semibold tracking-wide">Hello, i am Shiv 👋</p>
          <p className="text-text-muted text-[11px] font-medium tracking-wider uppercase mt-0.5">Welcome to my portfolio</p>
        </div>
        <Link to="/about" className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-primary to-pink-500 shadow-lg active:scale-95 transition-transform">
          <div className="w-full h-full rounded-full overflow-hidden bg-surface border border-background">
            <img src="/profile.jpg" alt="Shivraj Kudke" className="w-full h-full object-cover" />
          </div>
        </Link>
      </div>

      {/* Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        onClick={() => navigate('/projects')}
        className="relative w-full rounded-3xl bg-gradient-to-br from-[#1e1b4b] via-[#2e1065] to-[#4c1d95] p-7 mb-10 overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(76,29,149,0.3)] cursor-pointer active:scale-[0.98] transition-transform"
      >
        <div className="relative z-10 w-3/4">
          <h2 className="text-2xl font-bold text-white mb-3 leading-tight tracking-tight">Passionate<br/>Developer &<br/>Problem Solver</h2>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link 
              to="/projects" 
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center bg-white text-[#2e1065] hover:bg-gray-100 text-[11px] font-bold px-4 py-2 rounded-full shadow-lg transition-transform active:scale-95"
            >
              View Work
            </Link>
            <a 
              href="/resume.pdf" 
              download="Shivraj_Kudke_Resume.pdf"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 text-[11px] font-bold px-4 py-2 rounded-full backdrop-blur-sm transition-all active:scale-95"
            >
              CV <FiDownload className="ml-1" />
            </a>
          </div>
        </div>
        {/* Decorative Graphic/Blur */}
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary/40 blur-[50px] rounded-full" />
        <div className="absolute -right-4 -bottom-4 w-40 h-40 opacity-10 pointer-events-none transform -rotate-12">
          <FaLaptopCode className="w-full h-full text-white" />
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="flex items-center justify-between glass-card rounded-[2rem] p-4 mb-10 border border-white/5 shadow-2xl"
      >
        {socials.map((social) => (
          <a 
            key={social.name} 
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={`relative w-[42px] h-[42px] rounded-[15px] bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:-translate-y-2 hover:rotate-3 active:scale-90 transition-all duration-300 group shadow-lg ${social.shadow}`}
          >
            {/* 3D Bevel and Glare */}
            <div className="absolute inset-0 rounded-[15px] border-t-2 border-white/50 border-l border-white/20 border-b-2 border-black/40 border-r border-black/20 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <social.icon className={`text-[20px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-10 ${social.color || 'text-white'}`} />
          </a>
        ))}
      </motion.div>

      {/* What I Do */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-semibold text-lg tracking-wide">What I Do</h3>
          <Link to="/skills" className="text-primary text-[11px] font-bold flex items-center gap-1 hover:underline">
            View All <FiArrowRight className="text-sm" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }}
              onClick={() => navigate(service.link)}
              className="glass-card rounded-[24px] p-5 flex flex-col justify-between relative overflow-hidden group cursor-pointer active:scale-95 transition-all hover:border-white/20 h-40"
            >
              <div className={`absolute -right-6 -top-6 w-24 h-24 blur-[30px] rounded-full transition-opacity opacity-50 group-hover:opacity-100 ${service.bg}`} />
              
              <div className={`p-3 rounded-2xl w-fit bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors relative z-10 ${service.color}`}>
                <service.icon className="text-2xl drop-shadow-md" />
              </div>
              
              <div className="relative z-10 mt-4">
                <h4 className="text-white font-bold text-sm leading-tight group-hover:text-primary transition-colors">{service.name}</h4>
                <p className="text-text-muted text-[10px] mt-1.5 font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">Explore <FiArrowRight className="text-xs" /></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mb-10">
        <h3 className="text-white font-semibold text-lg tracking-wide mb-5">Quick Stats</h3>
        <div className="grid grid-cols-4 gap-4 glass-card rounded-3xl p-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (i * 0.1) }}
              onClick={() => navigate(stat.link)}
              className="text-center flex flex-col items-center justify-center cursor-pointer hover:scale-110 active:scale-90 transition-transform"
            >
              <p className="text-white font-bold text-2xl mb-1 drop-shadow-md">{stat.value}</p>
              <p className="text-text-muted text-[8px] font-bold uppercase tracking-widest leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
