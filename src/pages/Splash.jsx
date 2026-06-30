import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-8 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e1436] to-background">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center flex-1 justify-center mt-[-10vh]"
      >
        {/* Logo */}
        <motion.div 
          animate={{ boxShadow: ['0 0 20px rgba(139,92,246,0.2)', '0 0 60px rgba(139,92,246,0.6)', '0 0 20px rgba(139,92,246,0.2)'] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mb-10 w-28 h-28 rounded-full flex items-center justify-center border border-primary/30 glass-card bg-surface relative"
        >
          <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" style={{ animationDuration: '3s' }} />
          <div className="text-5xl font-extrabold italic tracking-tighter flex items-center justify-center">
            <span className="text-white">S</span>
            <span className="text-primary ml-[-6px]">K</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-white mb-3 text-center tracking-tight"
        >
          Shivraj <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Kudke</span>
        </motion.h1>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-text-muted text-sm mb-3 text-center font-medium">
          Electronics & Computer Engineer
        </motion.p>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-primary/70 text-[10px] text-center font-bold tracking-[0.3em] uppercase">
          Developer • Learner • Creator
        </motion.p>
      </motion.div>

      {/* Button */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, type: 'spring' }}
        className="w-full pb-16"
      >
        <button 
          onClick={() => navigate('/onboarding')}
          className="w-full relative group overflow-hidden bg-white text-[#1e1436] py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          <span className="relative z-10">Explore My Work</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>
    </div>
  );
}
