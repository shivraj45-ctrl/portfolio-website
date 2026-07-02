import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, lazy, Suspense } from 'react';

// Pages
const Splash = lazy(() => import('./pages/Splash'));
const Onboarding = lazy(() => import('./pages/Onboarding'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Journey = lazy(() => import('./pages/Journey'));
const Certificates = lazy(() => import('./pages/Certificates'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Technologies = lazy(() => import('./pages/Technologies'));
const Education = lazy(() => import('./pages/Education'));
const Gallery = lazy(() => import('./pages/Gallery'));

// Components
import BottomNav from './components/BottomNav';

function AppContent() {
  const location = useLocation();
  const scrollRef = useRef(null);
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);
  
  const hasBottomNav = ['/home', '/about', '/skills', '/projects', '/contact', '/gallery'].includes(location.pathname);

  return (
    <div className="relative h-screen w-full max-w-[480px] mx-auto bg-background overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col border border-white/5">
      <div ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden relative pb-[100px] scrollbar-hide">
        <Suspense fallback={
          <div className="flex h-full w-full items-center justify-center">
            <div className="w-10 h-10 border-4 border-white/5 border-t-primary rounded-full animate-spin"></div>
          </div>
        }>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Splash />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/service/:slug" element={<ServiceDetail />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
      
      {hasBottomNav && <BottomNav />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;