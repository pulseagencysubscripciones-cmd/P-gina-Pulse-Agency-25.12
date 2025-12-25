
import React from 'react';
import { ArrowRight, CheckCircle2, Battery, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('agenda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-pulseDark">
      {/* Background Gradient Spot */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-pulsePurple/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content - Reduced width slightly to give more room to video */}
        <div className="lg:w-5/12 text-left">
          <div className="inline-flex items-center border border-pulseCyan/30 bg-pulseCyan/5 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-pulseCyan animate-pulse mr-2"></span>
            <span className="text-pulseCyan text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Dominando la 5ta Economía del Mundo
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white">
            EL AUGE HISPANO ES <br /> 
            REAL. <br />
            <div className="flex items-center gap-4">
              <span>TUS SISTEMAS</span>
              <div className="h-12 w-20 md:h-16 md:w-24 bg-pulseCyan rounded-md flex items-center justify-center animate-pulse">
                 {/* Battery/Glitch Graphic Placeholder */}
                 <Battery className="w-8 h-8 md:w-10 md:h-10 text-pulseDark fill-current rotate-90" />
              </div>
            </div>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
            En Florida 2026, la pauta es cara y las leyes son estrictas.
            Escalamos negocios de <span className="font-bold text-white">Techado, Legal y Salud</span> con infraestructura
            de IA diseñada para el emprendedor bicultural.
          </p>
          
          {/* DESKTOP ONLY CTA - Hidden on Mobile */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-6 mb-12">
            <a 
              href="#agenda"
              onClick={scrollToBooking}
              className="bg-[#8b00e3] hover:bg-[#7a00c7] px-8 py-4 rounded-full font-bold text-white text-sm tracking-widest shadow-[0_0_20px_rgba(139,0,227,0.4)] hover:shadow-[0_0_30px_rgba(139,0,227,0.6)] transition-all flex items-center justify-center uppercase"
            >
              AUDITAR MI MODELO 2026 <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-medium tracking-wide mb-8 lg:mb-0">
             <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-pulseCyan mr-2"/> Florida Markets (MIA/ORL/TPA)</span>
             <span className="hidden sm:inline text-gray-700">•</span>
             <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-pulseCyan mr-2"/> ROI-Centric Logic</span>
             <span className="hidden sm:inline text-gray-700">•</span>
             <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-pulseCyan mr-2"/> Bicultural Growth</span>
          </div>
        </div>
        
        {/* Right Content - Increased width for larger video presence */}
        <div className="lg:w-7/12 w-full flex flex-col gap-8">
          <div className="relative bg-white rounded-[2rem] p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
             {/* Label Tag */}
             <div className="absolute top-8 left-8 z-20 flex items-center bg-gray-600/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Informe Estratégico FL</span>
             </div>

             {/* Video Container */}
             <div className="relative bg-gray-100 rounded-[1.8rem] overflow-hidden aspect-video shadow-inner group cursor-pointer">
                 <iframe 
                    src="https://player.vimeo.com/video/1148993755?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=88b06792f0" 
                    className="absolute inset-0 w-full h-full" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="Pulse VSL"
                 ></iframe>
                 {/* Play Button Overlay (Optional if video doesn't autoplay) */}
                 <div className="absolute bottom-6 left-8 text-[10px] font-mono text-gray-500">
                    00:52
                 </div>
             </div>
          </div>

          {/* MOBILE ONLY CTA - Visible only on Mobile, below Video */}
          <div className="lg:hidden w-full px-2">
            <a 
              href="#agenda"
              onClick={scrollToBooking}
              className="w-full bg-[#8b00e3] hover:bg-[#7a00c7] px-8 py-5 rounded-full font-bold text-white text-sm tracking-widest shadow-[0_0_20px_rgba(139,0,227,0.4)] transition-all flex items-center justify-center uppercase animate-pulse-slow"
            >
              AUDITAR MI MODELO 2026 <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
