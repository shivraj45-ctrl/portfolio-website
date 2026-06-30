import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiBookOpen, FiCalendar, FiMapPin, FiAward, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Education() {
  const navigate = useNavigate();

  const educationTimeline = [
    {
      period: '2023 - Present',
      title: 'B.Tech in Electronics & Computer Engineering',
      institute: 'MIT Chhatrapati Sambhajinagar',
      location: 'Sambhajinagar, Maharashtra',
      active: true,
      details: [
        'Currently in 2nd Year (4th Semester)',
        'Learning core ECE subjects alongside Computer Science',
        'Active member of coding clubs and tech communities',
        'Participated in multiple hackathons and workshops',
        'Building real-world projects alongside academics',
      ],
      achievements: [
        'Campus Ambassador for tech events',
        'Red Hat workshop participant',
        'Web Development workshop completion',
        'Active in Evolove Club activities',
      ]
    },
    {
      period: '2021 - 2023',
      title: 'Higher Secondary Education (HSC)',
      institute: 'Maharashtra State Board',
      location: 'Maharashtra, India',
      active: false,
      details: [
        'Completed 12th Science with PCM stream',
        'Developed interest in programming and technology',
        'Started learning Python as first programming language',
        'Explored basics of web development',
      ],
      achievements: [
        'Scored well in Mathematics and Physics',
        'Self-taught Python programming',
      ]
    },
    {
      period: '2019 - 2021',
      title: 'Secondary Education (SSC)',
      institute: 'Maharashtra State Board',
      location: 'Maharashtra, India',
      active: false,
      details: [
        'Completed 10th standard with excellent grades',
        'First exposure to computers and basic programming',
        'Developed problem-solving aptitude through mathematics',
      ],
      achievements: [
        'Strong foundation in Science & Mathematics',
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-full p-6 pt-10 pb-20">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={() => navigate(-1)} className="text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/5 active:scale-90">
          <FiArrowLeft className="text-xl" />
        </button>
        <h2 className="text-xl font-bold text-white tracking-wide">My Education</h2>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-text-muted text-sm mb-8 ml-1 font-medium">
        2+ years of learning & growing 📚
      </motion.p>

      <div className="relative pl-4">
        {/* Glow Line */}
        <div className="absolute left-[27px] top-4 bottom-10 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent" />

        <div className="flex flex-col gap-8">
          {educationTimeline.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15, type: 'spring' }}
              className="relative pl-14"
            >
              {/* Timeline Node */}
              <div className={`absolute left-[-5px] top-2 w-4 h-4 rounded-full border-4 z-10 ${
                edu.active 
                  ? 'bg-primary border-background shadow-[0_0_15px_rgba(139,92,246,1)] scale-125' 
                  : 'bg-surface border-primary/50'
              }`} />
              
              <div className="glass-card p-5 rounded-3xl border border-white/5">
                {/* Period Badge */}
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest mb-3 ${
                  edu.active ? 'bg-primary/20 text-primary' : 'bg-white/5 text-text-muted'
                }`}>
                  <FiCalendar className="text-[10px]" /> {edu.period}
                </span>
                
                <h3 className="text-white text-base font-bold mb-1">{edu.title}</h3>
                
                <div className="flex items-center gap-1 mb-1">
                  <FiBookOpen className="text-[11px] text-primary" />
                  <p className="text-primary text-[11px] font-medium">{edu.institute}</p>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <FiMapPin className="text-[11px] text-text-muted" />
                  <p className="text-text-muted text-[10px]">{edu.location}</p>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2 mb-4">
                  {edu.details.map((detail, di) => (
                    <div key={di} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                      <p className="text-text-muted text-[11px] font-medium leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                {edu.achievements.length > 0 && (
                  <div>
                    <p className="text-white text-[10px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                      <FiAward className="text-yellow-400" /> Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((ach, ai) => (
                        <span key={ai} className="text-[9px] font-semibold px-3 py-1.5 rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                          {ach}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        onClick={() => navigate('/journey')}
        className="w-full glass-card text-primary py-4 rounded-2xl font-bold mt-8 flex items-center justify-center gap-2 border border-primary/30 hover:bg-primary/10 active:scale-95 transition-all"
      >
        View Full Journey <FiArrowRight />
      </motion.button>
    </div>
  );
}
