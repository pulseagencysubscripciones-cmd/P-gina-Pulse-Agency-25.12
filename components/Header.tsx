
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, CalendarClock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-pulseDark/80 backdrop-blur-lg py-3 border-b border-white/10 shadow-xl' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-pulseMagenta transition-transform duration-300 group-hover:scale-110">
            <span className="font-bold text-xl text-white">P</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pulseCyan rounded-full border-2 border-pulseDark"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-widest text-white">PULSE</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-pulseMagenta">AGENCY</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#servicios" className="text-xs font-bold tracking-widest text-gray-300 hover:text-pulseCyan uppercase transition-colors">
            Servicios
          </a>
          <a href="#agenda" className="text-xs font-bold tracking-widest text-gray-300 hover:text-pulseCyan uppercase transition-colors">
            Agenda 2026
          </a>
          <a href="tel:+13074293264" className="flex items-center text-xs font-bold tracking-widest text-white hover:text-pulseCyan uppercase transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            +1 (307) 429-3264
          </a>
          <a 
            href="https://calendly.com/pulseagencyllc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pulseMagenta hover:bg-[#a0005d] px-8 py-3 rounded-full font-bold text-xs text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider"
          >
            Consultoría Gratis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-pulseDark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-8 space-y-6 text-center">
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold tracking-widest text-white uppercase hover:text-pulseCyan transition-colors">Servicios</a>
            <a href="#agenda" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold tracking-widest text-white uppercase hover:text-pulseCyan transition-colors">Agenda 2026</a>
            <hr className="border-white/10" />
            <a href="tel:+13074293264" className="flex items-center justify-center text-sm font-bold text-white hover:text-pulseCyan transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +1 (307) 429-3264
            </a>
            <a 
              href="https://calendly.com/pulseagencyllc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-pulseMagenta py-4 rounded-full font-bold text-white uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
            >
              Consultoría Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
