import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaJs, FaReact, FaDatabase, FaBrain, FaUsers, FaComments, FaSync } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus } from 'react-icons/si';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'Python', percentage: 90, icon: FaPython, color: 'text-[#3776AB]' },
    { name: 'HTML / CSS', percentage: 95, icon: FaHtml5, color: 'text-[#E34F26]' },
    { name: 'JavaScript', percentage: 80, icon: FaJs, color: 'text-[#F7DF1E]' },
    { name: 'React', percentage: 75, icon: FaReact, color: 'text-[#61DAFB]' },
    { name: 'Tailwind CSS', percentage: 85, icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'C / C++', percentage: 70, icon: SiCplusplus, color: 'text-[#00599C]' },
    { name: 'SQL', percentage: 75, icon: FaDatabase, color: 'text-[#336791]' },
  ];

  const softSkills = [
    { name: 'Problem Solving', percentage: 95, icon: FaBrain, color: 'text-primary' },
    { name: 'Teamwork', percentage: 90, icon: FaUsers, color: 'text-blue-400' },
    { name: 'Communication', percentage: 85, icon: FaComments, color: 'text-green-400' },
    { name: 'Adaptability', percentage: 90, icon: FaSync, color: 'text-pink-400' },
  ];

  const skills = activeTab === 'technical' ? technicalSkills : softSkills;

  return (
    <div className="flex flex-col w-full min-h-full p-6 pt-10 pb-32">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white tracking-wide">My Skills</h2>
      </div>

      <div className="flex glass-card rounded-2xl p-1 mb-8">
        <button 
          onClick={() => setActiveTab('technical')}
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
            activeTab === 'technical' ? 'bg-primary text-white shadow-[0_4px_15px_rgba(139,92,246,0.4)]' : 'text-text-muted hover:text-white'
          }`}
        >
          Technical
        </button>
        <button 
          onClick={() => setActiveTab('soft')}
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
            activeTab === 'soft' ? 'bg-primary text-white shadow-[0_4px_15px_rgba(139,92,246,0.4)]' : 'text-text-muted hover:text-white'
          }`}
        >
          Soft Skills
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {skills.map((skill, i) => (
          <motion.div 
            key={skill.name + activeTab} // force re-render on tab change
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, type: 'spring' }}
            className="group"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                  <skill.icon className={`text-[13px] ${skill.color}`} />
                </div>
                <span className="text-[13px] text-white font-semibold tracking-wide">{skill.name}</span>
              </div>
              <span className="text-[11px] font-bold text-primary">{skill.percentage}%</span>
            </div>
            <div className="w-full h-2.5 glass-card rounded-full overflow-hidden border-none relative">
              <div className="absolute inset-0 bg-black/20" />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1, delay: 0.1 + (i * 0.1), ease: "easeOut" }}
                className="h-full relative rounded-full bg-gradient-to-r from-primary via-purple-400 to-pink-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
              >
                {/* Glow pip */}
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] opacity-70 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
