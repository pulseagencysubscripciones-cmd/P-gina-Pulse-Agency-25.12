
import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, AlertCircle, Zap } from 'lucide-react';

const StatsComparison: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-pulseDark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tendencias Q4 <span className="text-gradient-cyan">2025</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ante la escasez de personal calificado y el aumento de salarios en 2025, la automatización es la única vía sostenible.
          </p>
        </div>

        {/* Interactive Growth Graph */}
        {/* Expanded viewBox to ensure NO clipping of shadows or tooltips */}
        <div className="mb-20 bg-pulseCard/30 border border-white/5 rounded-3xl p-4 md:p-12 relative">
           <div className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-4 opacity-70 bg-pulseDark/80 rounded-lg backdrop-blur-sm border border-white/5 z-10">
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-xs md:text-sm font-bold">
                 <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-pulseCyan mr-2 shadow-[0_0_10px_#00F2FF]"></span> Con Automatización</div>
                 <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span> Gestión Manual</div>
              </div>
           </div>
           
           <h3 className="text-xl font-bold mb-8 pl-4">Eficiencia vs Costo Laboral 2025</h3>
           
           {/* Container with aspect ratio to maintain shape */}
           <div className="w-full aspect-[16/9] md:aspect-[21/9] relative">
              {/* Added padding via viewBox (-50 -50 1100 450) to prevent any clipping of tooltips/shadows */}
              <svg viewBox="-50 -50 1100 450" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                 {/* Grid Lines */}
                 <line x1="50" y1="300" x2="950" y2="300" stroke="#333" strokeWidth="1" />
                 <line x1="50" y1="200" x2="950" y2="200" stroke="#333" strokeWidth="1" strokeDasharray="5,5" />
                 <line x1="50" y1="100" x2="950" y2="100" stroke="#333" strokeWidth="1" strokeDasharray="5,5" />

                 {/* Axis Labels */}
                 <text x="50" y="330" fill="#6B7280" fontSize="12" fontWeight="bold">ENE 2025</text>
                 <text x="950" y="330" fill="#6B7280" fontSize="12" fontWeight="bold" textAnchor="end">DIC 2025 (Proy)</text>
                 <text x="20" y="200" fill="#6B7280" fontSize="12" fontWeight="bold" transform="rotate(-90, 20, 200)" textAnchor="middle">MARGEN NETO</text>

                 {/* Traditional Curve (Flat/Decline) - Red Line */}
                 <path 
                    d="M50,300 C250,290 550,310 950,320" 
                    fill="none" 
                    stroke="#EF4444" 
                    strokeWidth="3" 
                    className="opacity-50"
                    strokeDasharray="1000"
                    strokeDashoffset={isVisible ? "0" : "1000"}
                    style={{ transition: "stroke-dashoffset 2s ease-out" }}
                 />
                 
                 {/* AI Pulse Curve (Linear Growth) - Cyan Line */}
                 <path 
                    d="M50,300 C250,290 450,150 950,50" 
                    fill="none" 
                    stroke="#00F2FF" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1200"
                    strokeDashoffset={isVisible ? "0" : "1200"}
                    className="drop-shadow-[0_0_15px_rgba(0,242,255,0.6)]"
                    style={{ transition: "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
                 />
                 
                 {/* Animated Points - Only appear after line draws */}
                 <g style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s ease-in 2s" }}>
                    <circle cx="50" cy="300" r="6" fill="#00F2FF" className="animate-ping" style={{animationDuration: '3s'}} />
                    <circle cx="50" cy="300" r="4" fill="#020B1A" stroke="#00F2FF" strokeWidth="2" />
                    
                    {/* End Point */}
                    <circle cx="950" cy="50" r="8" fill="#00F2FF" className="shadow-[0_0_20px_#00F2FF]" />
                    <circle cx="950" cy="50" r="15" fill="none" stroke="#00F2FF" strokeWidth="1" className="animate-pulse" />
                 </g>
                 
                 {/* Tooltip Overlay */}
                 <g transform="translate(780, 50)" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s ease-in 2.2s", transform: isVisible ? "translate(780, 50)" : "translate(780, 70)" }}>
                    {/* Tooltip Background with neon border */}
                    <rect width="180" height="70" rx="12" fill="#020B1A" stroke="#00F2FF" strokeWidth="1" className="drop-shadow-[0_0_10px_rgba(0,242,255,0.3)]" />
                    
                    {/* Tooltip Content */}
                    <text x="90" y="25" textAnchor="middle" fill="#00F2FF" fontSize="14" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">OPTIMIZACIÓN</text>
                    <text x="90" y="50" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Escalabilidad x3</text>
                    
                    {/* Connector Line to the graph point */}
                    <line x1="180" y1="35" x2="170" y2="0" stroke="#00F2FF" strokeWidth="1" strokeDasharray="2,2" />
                 </g>
              </svg>
           </div>
           
           <p className="text-xs text-gray-600 mt-4 italic text-center">* Gráfica ilustrativa comparando modelos de negocio intensivos en mano de obra vs modelos apalancados en IA (Datos Nov 2025).</p>
        </div>
      </div>
    </section>
  );
};

export default StatsComparison;
