import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Technologies() {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Frontend',
      color: 'from-cyan-500/20 to-blue-500/10',
      techs: [
        { name: 'HTML5', level: 'Advanced', icon: '🌐' },
        { name: 'CSS3', level: 'Advanced', icon: '🎨' },
        { name: 'JavaScript', level: 'Intermediate', icon: '⚡' },
        { name: 'React.js', level: 'Intermediate', icon: '⚛️' },
        { name: 'Tailwind CSS', level: 'Advanced', icon: '💨' },
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500/20 to-emerald-500/10',
      techs: [
        { name: 'Node.js', level: 'Intermediate', icon: '🟩' },
        { name: 'Express.js', level: 'Intermediate', icon: '🚀' },
        { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
        { name: 'REST APIs', level: 'Intermediate', icon: '🔗' },
      ]
    },
    {
      title: 'Programming Languages',
      color: 'from-purple-500/20 to-violet-500/10',
      techs: [
        { name: 'Python', level: 'Advanced', icon: '🐍' },
        { name: 'C / C++', level: 'Intermediate', icon: '⚙️' },
        { name: 'JavaScript', level: 'Intermediate', icon: '📜' },
        { name: 'SQL', level: 'Intermediate', icon: '🗃️' },
      ]
    },
    {
      title: 'Tools & Platforms',
      color: 'from-orange-500/20 to-yellow-500/10',
      techs: [
        { name: 'Git & GitHub', level: 'Advanced', icon: '🐙' },
        { name: 'VS Code', level: 'Advanced', icon: '💻' },
        { name: 'Figma', level: 'Beginner', icon: '🎯' },
        { name: 'Postman', level: 'Intermediate', icon: '📮' },
        { name: 'Linux Basics', level: 'Beginner', icon: '🐧' },
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Beginner': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      default: return 'text-text-muted bg-white/5';
    }
  };

  return (
    <div className="flex flex-col w-full min-h-full p-6 pt-10 pb-20">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={() => navigate(-1)} className="text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/5 active:scale-90">
          <FiArrowLeft className="text-xl" />
        </button>
        <h2 className="text-xl font-bold text-white tracking-wide">Technologies</h2>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-text-muted text-sm mb-8 ml-1 font-medium">
        All the technologies & tools I've learned so far 🚀
      </motion.p>

      <div className="flex flex-col gap-6">
        {categories.map((cat, ci) => (
          <motion.div key={ci} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.1 }}>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
              {cat.title}
            </h3>
            <div className="flex flex-col gap-2">
              {cat.techs.map((tech, ti) => (
                <motion.div 
                  key={ti}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (ci * 0.1) + (ti * 0.05) }}
                  className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <div className="flex-1">
                    <p className="text-white text-sm font-bold">{tech.name}</p>
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        onClick={() => navigate('/skills')}
        className="w-full glass-card text-primary py-4 rounded-2xl font-bold mt-8 flex items-center justify-center gap-2 border border-primary/30 hover:bg-primary/10 active:scale-95 transition-all"
      >
        View Skill Progress <FiArrowRight />
      </motion.button>
    </div>
  );
}
