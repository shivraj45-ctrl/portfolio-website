import { Link, useLocation } from 'react-router-dom';
import { IoHomeOutline, IoHome, IoPersonOutline, IoPerson, IoFolderOutline, IoFolder, IoStarOutline, IoStar, IoImageOutline, IoImage, IoCallOutline, IoCall } from 'react-icons/io5';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { name: 'Home', path: '/home', iconOutlined: IoHomeOutline, iconFilled: IoHome },
    { name: 'About', path: '/about', iconOutlined: IoPersonOutline, iconFilled: IoPerson },
    { name: 'Projects', path: '/projects', iconOutlined: IoFolderOutline, iconFilled: IoFolder },
    { name: 'Skills', path: '/skills', iconOutlined: IoStarOutline, iconFilled: IoStar },
    { name: 'Gallery', path: '/gallery', iconOutlined: IoImageOutline, iconFilled: IoImage },
    { name: 'Contact', path: '/contact', iconOutlined: IoCallOutline, iconFilled: IoCall },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] pb-6 px-6 z-50 pointer-events-none">
      <div className="bg-[#0b0f19]/90 backdrop-blur-2xl h-[72px] rounded-[36px] flex items-center justify-around px-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto border border-white/10 relative overflow-hidden">
        
        {/* Subtle top glare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {navItems.map((item) => {
          const isActive = path.startsWith(item.path);
          const Icon = isActive ? item.iconFilled : item.iconOutlined;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center w-12 h-full pt-3 group active:scale-95 transition-transform"
            >
              {/* Active Indicator Line */}
              <div className={`absolute top-0 w-8 h-[3px] rounded-b-full bg-primary transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              
              <div className={`flex flex-col items-center transition-transform duration-300 ${isActive ? 'translate-y-0' : 'translate-y-3'}`}>
                <Icon className={`text-[24px] transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text-muted group-hover:text-white'}`} />
                <span className={`text-[10px] font-bold tracking-wide mt-1 transition-all duration-300 ${isActive ? 'opacity-100 text-primary' : 'opacity-0'}`}>
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
