import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiCode, FiMonitor, FiLayout, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

const servicesData = {
  'web-development': {
    title: 'Web Development',
    icon: FiMonitor,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    tagline: 'Building Modern & Responsive Websites',
    description: 'I specialize in creating beautiful, responsive, and high-performance web applications. From static landing pages to full-stack dynamic platforms, I bring ideas to life on the web.',
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Node.js & Express', 'MongoDB', 'REST APIs', 'Git & GitHub'],
    whatIDo: [
      'Design and develop responsive websites from scratch',
      'Build full-stack web applications with React & Node.js',
      'Create pixel-perfect UI from Figma/XD designs',
      'Optimize websites for speed and SEO performance',
      'Implement authentication, databases & API integrations',
    ],
    projects: [
      { name: 'E-Commerce Website', desc: 'Full-stack shopping platform with cart & checkout' },
      { name: 'Portfolio Website', desc: 'Modern portfolio with animations & dark theme' },
      { name: 'Calculator App', desc: 'Responsive calculator with clean UI' },
    ]
  },
  'python-developer': {
    title: 'Python Developer',
    icon: FiCode,
    color: 'text-purple-400',
    gradient: 'from-purple-500/20 to-violet-500/10',
    tagline: 'Automating & Building with Python',
    description: 'Python is my go-to language for solving complex problems, building automation scripts, and exploring AI/ML. I use Python for everything from data analysis to backend development.',
    skills: ['Python 3', 'NumPy & Pandas', 'Automation Scripts', 'Web Scraping (BeautifulSoup)', 'Flask / Django basics', 'Data Structures & Algorithms', 'File Handling & OS Module', 'API Development'],
    whatIDo: [
      'Write automation scripts to save time on repetitive tasks',
      'Build small tools and utilities for daily use',
      'Solve competitive programming problems',
      'Explore machine learning and AI concepts',
      'Create backend APIs and microservices',
    ],
    projects: [
      { name: 'Automation Scripts', desc: 'Collection of Python scripts for task automation' },
      { name: 'Data Analysis Tool', desc: 'Analyzing datasets using Pandas & Matplotlib' },
    ]
  },
  'uiux-designer': {
    title: 'UI/UX Designer',
    icon: FiLayout,
    color: 'text-pink-400',
    gradient: 'from-pink-500/20 to-rose-500/10',
    tagline: 'Designing Beautiful User Experiences',
    description: 'I believe great design is invisible. I focus on creating intuitive, visually stunning interfaces that users love. From wireframes to polished prototypes, I design with the user in mind.',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Color Theory', 'Typography', 'Responsive Design', 'Design Systems'],
    whatIDo: [
      'Create wireframes and high-fidelity prototypes',
      'Design mobile-first responsive interfaces',
      'Build consistent design systems with reusable components',
      'Conduct user research and improve usability',
      'Transform complex ideas into simple, elegant interfaces',
    ],
    projects: [
      { name: 'Portfolio App Design', desc: 'Dark-themed mobile portfolio with glassmorphism' },
      { name: 'E-Commerce UI', desc: 'Clean shopping experience with modern aesthetics' },
    ]
  },
  'problem-solver': {
    title: 'Problem Solver',
    icon: FiZap,
    color: 'text-primary',
    gradient: 'from-primary/20 to-violet-500/10',
    tagline: 'Turning Complex Problems into Simple Solutions',
    description: 'I enjoy breaking down complex challenges into manageable pieces. Whether it\'s debugging code, optimizing algorithms, or finding creative solutions — problem solving is at the core of everything I do.',
    skills: ['Data Structures', 'Algorithms', 'Logical Thinking', 'Debugging', 'Competitive Programming', 'Critical Analysis', 'Time Complexity', 'System Design Basics'],
    whatIDo: [
      'Solve algorithmic challenges on platforms like LeetCode & HackerRank',
      'Debug and troubleshoot complex code issues efficiently',
      'Optimize application performance and reduce bottlenecks',
      'Break down large problems into smaller, solvable tasks',
      'Think critically and find creative engineering solutions',
    ],
    projects: [
      { name: '200+ DSA Problems', desc: 'Solved problems across arrays, trees, graphs, DP' },
      { name: 'IoT Pulley System', desc: 'Solved real-world problem with smart automation' },
    ]
  }
};

export default function ServiceDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="flex items-center justify-center h-full text-text-muted">
        <p>Service not found</p>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="flex flex-col w-full min-h-full pb-12">
      {/* Header with gradient */}
      <div className={`relative px-6 pt-10 pb-12 bg-gradient-to-b ${service.gradient} to-background`}>
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/5 active:scale-90">
            <FiArrowLeft className="text-xl" />
          </button>
          <h2 className="text-lg font-bold text-white tracking-wide">Service Details</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-5">
          <div className={`w-16 h-16 rounded-2xl glass-card flex items-center justify-center ${service.color} shadow-lg`}>
            <Icon className="text-3xl drop-shadow-lg" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">{service.title}</h1>
            <p className="text-text-muted text-xs font-medium mt-1">{service.tagline}</p>
          </div>
        </motion.div>
      </div>

      <div className="px-6 -mt-4">
        {/* Description */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-5 rounded-3xl mb-6">
          <p className="text-text-muted text-sm leading-relaxed font-medium">{service.description}</p>
        </motion.div>

        {/* What I Do */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">What I Do</h3>
          <div className="flex flex-col gap-3">
            {service.whatIDo.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.05) }}
                className="flex items-start gap-3 p-3 glass-card rounded-xl"
              >
                <FiCheckCircle className={`text-lg mt-0.5 flex-shrink-0 ${service.color}`} />
                <p className="text-text-muted text-xs font-medium leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills / Tools */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-6">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Skills & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {service.skills.map((skill, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + (i * 0.03) }}
                className="glass-card text-white text-[11px] font-semibold px-4 py-2 rounded-xl border border-white/10 hover:border-primary/40 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Related Projects */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Related Projects</h3>
          <div className="flex flex-col gap-3">
            {service.projects.map((proj, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (i * 0.1) }}
                onClick={() => navigate('/projects')}
                className="glass-card p-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-white/5 active:scale-[0.98] transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${service.color}`}>
                  <Icon className="text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-bold">{proj.name}</p>
                  <p className="text-text-muted text-[10px] font-medium mt-0.5">{proj.desc}</p>
                </div>
                <FiArrowLeft className="text-text-muted rotate-180 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
