import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Certificates() {
  const navigate = useNavigate();

  const certificates = [
    { title: 'Dipex Participation', issuer: 'Issued by Dipex', img: '/cert1.jpeg' },
    { title: 'Hackspectra 2.0', issuer: 'MGM College Nanded', img: '/cert2.jpeg' },
    { title: 'Cogni Sphere 2025', issuer: 'MIT College Chh. Sambhajinagar', img: '/cert3.jpeg' },
  ];

  return (
    <div className="flex flex-col w-full min-h-full p-6 pt-10 pb-20">
      <div className="flex items-center gap-4 mb-10">
        <button onClick={() => navigate(-1)} className="text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/5">
          <FiArrowLeft className="text-xl" />
        </button>
        <h2 className="text-xl font-bold text-white tracking-wide">Certificates</h2>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        {certificates.map((cert, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden flex flex-col group border border-white/5 cursor-pointer hover:border-primary/50 transition-colors"
          >
            <div className="w-full h-48 bg-white/5 relative overflow-hidden flex items-center justify-center">
              <img 
                src={cert.img} 
                alt={cert.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Placeholder */}
              <div className="hidden absolute inset-0 flex-col items-center justify-center text-white/30">
                <FiAward className="text-4xl mb-2 opacity-50" />
                <span className="text-xs font-medium">Image not found ({cert.img})</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white text-base font-bold mb-1 tracking-wide">{cert.title}</h3>
              <p className="text-text-muted text-xs font-medium uppercase tracking-wider">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="w-full bg-white text-background py-4 rounded-2xl font-bold mt-10 shadow-[0_10px_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <FiAward className="text-lg" /> View All Certificates
      </motion.button>
    </div>
  );
}
