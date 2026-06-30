import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiCode, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { techInfo } from '../data/techInfo';

export default function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedTech, setSelectedTech] = useState(null);

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex flex-col w-full min-h-full items-center justify-center">
        <p className="text-white">Project not found</p>
        <button onClick={() => navigate('/projects')} className="mt-4 text-primary">Go Back</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-full pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-6 left-6 z-20">
        <button onClick={() => navigate(-1)} className="text-white p-3 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition border border-white/10">
          <FiArrowLeft className="text-xl" />
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-[300px] relative">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      <div className="px-6 -mt-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-primary/30 shadow-[0_0_10px_rgba(139,92,246,0.3)]">Web App</span>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{project.title}</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-8 font-medium">
            {project.desc}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
          <h4 className="text-white font-bold tracking-wide mb-4 text-sm uppercase">Tech Stack</h4>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map(tech => (
              <button 
                key={tech} 
                onClick={() => setSelectedTech(tech)}
                className="glass-card text-white text-[11px] font-semibold px-4 py-2 rounded-xl border border-white/10 hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1 active:scale-95 shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h4 className="text-white font-bold tracking-wide mb-4 text-sm uppercase">Links</h4>
          <div className="flex gap-4">
            <a href={project.liveLink} className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl text-xs font-bold hover:bg-primary-hover transition-all active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <FiExternalLink className="text-lg" /> Live Demo
            </a>
            <a href={project.sourceLink} className="flex-1 flex items-center justify-center gap-2 glass-card text-white py-4 rounded-2xl text-xs font-bold hover:bg-white/10 transition-all active:scale-95 border border-white/10">
              <FiCode className="text-lg" /> Source Code
            </a>
          </div>
        </motion.div>
      </div>

      {/* Tech Info Modal */}
      <AnimatePresence>
        {selectedTech && techInfo[selectedTech] && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setSelectedTech(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, y: 20, opacity: 0 }} 
              onClick={(e) => e.stopPropagation()}
              className="glass-card bg-[#0b0f19]/90 border border-white/20 p-6 rounded-3xl w-full max-w-[300px] relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setSelectedTech(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-2 bg-white/5 rounded-full transition-colors active:scale-90"
              >
                <FiX />
              </button>
              
              <div className="w-20 h-20 p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/20 mb-5 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white opacity-90 transition-opacity" />
                <img src={techInfo[selectedTech].icon} alt={selectedTech} className="w-full h-full object-contain relative z-10 drop-shadow-md" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{selectedTech}</h3>
              <p className="text-xs text-text-muted leading-relaxed font-medium">
                {techInfo[selectedTech].desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
