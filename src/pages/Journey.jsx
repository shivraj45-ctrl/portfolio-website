import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Journey() {
  const navigate = useNavigate();

  const journeyData = [
    { year: '2024 - Present', title: 'B.Tech ECE - 3rd Year', desc: 'Pursuing Bachelor of Technology at MIT Chhatrapati Sambhajinagar. Deeply focused on advanced electronics, software engineering, and solving complex technical challenges.', active: true },
    { year: '2024', title: 'Python Developer Intern', desc: 'Engineered real-world projects, automated critical workflows, and developed scalable scripts to improve operational efficiency.', active: false },
    { year: '2022 - 2024', title: 'Higher Secondary (HSC)', desc: 'Completed higher secondary education with a strong foundation in sciences at Sakhalpimpari Highschool, Beed.', active: false },
    { year: '2022', title: 'Secondary School (SSC)', desc: ' Completed secondary education from Nagadnarayan Vidyalaya, Narayangad, Beed, sparking an early passion for technology and engineering.', active: false },
  ];

  return (
    <div className="flex flex-col w-full min-h-full p-6 pt-10 pb-20">
      <div className="flex items-center gap-4 mb-10">
        <button onClick={() => navigate(-1)} className="text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/5">
          <FiArrowLeft className="text-xl" />
        </button>
        <h2 className="text-xl font-bold text-white tracking-wide">My Journey</h2>
      </div>

      <div className="relative pl-4 mt-2 flex-1">
        {/* Glow Line */}
        <div className="absolute left-[27px] top-4 bottom-10 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent" />

        <div className="flex flex-col gap-8">
          {journeyData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15, type: 'spring' }}
              className="relative pl-14 group"
            >
              {/* Timeline Node */}
              <div className={`absolute left-[-5px] top-2 w-4 h-4 rounded-full border-4 z-10 transition-all duration-300 ${
                item.active 
                  ? 'bg-primary border-background shadow-[0_0_15px_rgba(139,92,246,1)] scale-125' 
                  : 'bg-surface border-primary/50 group-hover:border-primary group-hover:scale-110'
              }`} />
              
              <div className="glass-card p-5 rounded-2xl border border-white/5 group-hover:bg-white/5 transition-colors">
                <span className={`inline-block px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest mb-2 ${
                  item.active ? 'bg-primary/20 text-primary' : 'bg-white/5 text-text-muted'
                }`}>
                  {item.year}
                </span>
                <h3 className="text-white text-sm font-bold mb-1.5">{item.title}</h3>
                <p className="text-text-muted text-xs font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
