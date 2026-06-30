import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiImage, FiMaximize2, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Generate an array of 12 image objects
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `/${i + 1}.jpeg`,
    title: `Photo ${i + 1}`
  }));

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (selectedImageIndex === null) return;
    let newIndex = selectedImageIndex + direction;

    if (newIndex < 0) {
      newIndex = galleryItems.length - 1;
    } else if (newIndex >= galleryItems.length) {
      newIndex = 0;
    }

    setSelectedImageIndex(newIndex);
  };

  return (
    <div className="flex flex-col w-full min-h-full px-6 pt-10 pb-32">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="text-white p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/5 active:scale-90 transition-transform"
        >
          <FiArrowLeft className="text-xl" />
        </button>
        <div className="flex items-center gap-2">
          <FiImage className="text-xl text-primary" />
          <h2 className="text-xl font-bold text-white tracking-wide">Gallery</h2>
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-2 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-all relative border border-white/5 h-44 bg-white/5 flex items-center justify-center"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  // Hide broken image icon if image doesn't exist yet
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Placeholder when image is missing */}
              <div className="hidden absolute inset-0 flex-col items-center justify-center text-white/30">
                <FiImage className="text-3xl mb-2 opacity-50" />
                <span className="text-[10px] font-medium">{item.id}.jpg</span>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {/* Maximize Icon */}
                <div className="p-3 bg-black/60 rounded-full text-white backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <FiMaximize2 className="text-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-center p-6 max-w-[480px] mx-auto border-x border-white/10"
          >
            {/* Top Bar */}
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={closeLightbox}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition active:scale-95 text-white"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Main Image View with navigation */}
            <div className="relative flex items-center justify-center w-full group">
              <img 
                src={galleryItems[selectedImageIndex].image} 
                alt={galleryItems[selectedImageIndex].title} 
                className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-0 p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition active:scale-90"
              >
                <FiChevronLeft className="text-2xl" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-0 p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition active:scale-90"
              >
                <FiChevronRight className="text-2xl" />
              </button>
            </div>
            
            {/* Image Counter */}
            <div className="text-center mt-6 text-white/50 text-sm font-medium tracking-widest">
              {selectedImageIndex + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
