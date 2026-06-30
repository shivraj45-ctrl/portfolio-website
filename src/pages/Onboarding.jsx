import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden bg-[#0b0f19]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col justify-end px-8 pb-12 relative z-10"
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] right-[-20%] w-[150%] h-[70%] opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-background to-background -z-10 blur-2xl" />
        <div className="absolute bottom-[20%] left-[-20%] w-[80%] h-[50%] bg-gradient-to-t from-pink-500/10 to-transparent blur-3xl -z-10" />

        {/* Floating 3D image or Avatar placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-48 h-48"
        >
          <img src="/profile.jpg" alt="Shivraj Kudke" className="w-full h-full object-cover rounded-full shadow-[0_20px_50px_rgba(139,92,246,0.3)] border-4 border-white/5" />
        </motion.div>

        <div className="relative z-10 mt-auto glass-card rounded-3xl p-6 border border-white/10 shadow-2xl">
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-xl font-medium text-white/70 mb-1">Hi, I'm</motion.h2>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            Shivraj <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">Vishnu Kudke</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-text-muted text-sm leading-relaxed mb-8">
            Electronics & Computer Engineering student passionate about building real-world solutions through code and continuous learning.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            onClick={() => navigate('/home')}
            className="w-full bg-primary/10 border border-primary text-primary py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            Let's Explore <span>→</span>
          </motion.button>
          
          {/* Pagination dots */}
          <div className="flex gap-2 justify-center mt-6">
            <div className="w-6 h-1.5 rounded-full bg-primary" />
            <div className="w-2 h-1.5 rounded-full bg-white/20" />
            <div className="w-2 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}