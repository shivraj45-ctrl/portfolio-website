import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Web', 'Python', 'AI/ML', 'Other'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, scale: 0.98 }} 
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full min-h-full px-6 pt-10 pb-32"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white tracking-wide">My Projects</h2>
        <button className="p-2 bg-white/5 rounded-full border border-white/5 text-white"><FiMenu /></button>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
        {filters.map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`whitespace-nowrap px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
              filter === f ? 'bg-primary text-white shadow-[0_4px_12px_rgba(139,92,246,0.3)]' : 'glass-card text-text-muted hover:text-white border border-white/5'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="glass-card rounded-2xl p-4 flex gap-4 cursor-pointer hover:bg-white/5 transition-all group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex-1 z-10 flex flex-col justify-center">
                <span className="text-[9px] font-bold text-primary uppercase tracking-widest mb-1">{project.category}</span>
                <h3 className="text-white text-sm font-bold mb-1.5">{project.title}</h3>
                <p className="text-text-muted text-[11px] font-medium leading-relaxed line-clamp-2">{project.shortDesc}</p>
              </div>
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative z-10 border border-white/10 shadow-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
