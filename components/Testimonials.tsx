
import React from 'react';
import { Star, CheckCircle2, ExternalLink, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Carlos G.",
    company: "Restaurante en Miami",
    review: "Después del diagnóstico entendí por qué mis campañas no funcionaban. Me lo explicaron claro, con ejemplos de mi negocio. Nunca sentí que me vendían. Solo que me ayudaban.",
    platform: "google",
    stars: 5,
    date: "Hace 1 día"
  },
  {
    name: "Roberto Garcia",
    company: "Miami Roofing Pro",
    review: "Nuestra organización interna mejoró drásticamente. Ahora tenemos visibilidad de los clientes interesados y no perdemos mensajes.",
    platform: "google",
    stars: 5,
    date: "Hace 3 días"
  },
  {
    name: "Ana Maria Torres",
    company: "Dental Spa TX",
    review: "Implementar un CRM ordenado nos ayudó a entender mejor de dónde vienen nuestros pacientes. Excelente servicio de consultoría.",
    platform: "trustpilot",
    stars: 5,
    date: "Hace 1 semana"
  },
  {
    name: "Carlos Velasco",
    company: "Velasco Logistics",
    review: "Poder responder consultas básicas de forma automática nos ahorra horas a la semana que dedicamos a operar el negocio.",
    platform: "google",
    stars: 5,
    date: "Hace 3 días"
  },
  {
    name: "Sofía Mendez",
    company: "E-commerce Beauty",
    review: "El equipo entiende el mercado latino. Nos ayudaron a profesionalizar nuestras campañas publicitarias.",
    platform: "trustpilot",
    stars: 5,
    date: "Hace 2 semanas"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-pulseDark overflow-hidden relative border-y border-white/5">
      {/* Purple Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pulsePurple/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-12">Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulsePurple to-pulseMagenta">Clientes</span></h2>

        {/* Trust Indicators (Google/Trustpilot Summary) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16">
           {/* Google Reviews Link */}
           <a 
             href="https://share.google/0lRmnIiHvaioq6sJz" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center group bg-pulsePurple/5 px-6 py-3 rounded-full border border-pulsePurple/20 hover:bg-pulsePurple/20 hover:scale-105 transition-all cursor-pointer shadow-[0_0_15px_rgba(106,0,255,0.1)]"
           >
              <span className="font-bold text-xl mr-3 text-white">4.9/5</span>
              <div className="flex text-yellow-400 mr-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="text-left">
                  <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">Google Reviews</span>
                  <span className="text-[10px] text-gray-500 flex items-center">Ver reseñas reales <ExternalLink className="w-2 h-2 ml-1" /></span>
              </div>
           </a>

           {/* Divider */}
           <div className="hidden md:block h-8 w-px bg-pulsePurple/20"></div>

           {/* Trustpilot Link */}
           <a 
             href="https://www.trustpilot.com/review/pulseagencyusa.com"
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center group bg-pulsePurple/5 px-6 py-3 rounded-full border border-pulsePurple/20 hover:bg-pulsePurple/20 hover:scale-105 transition-all cursor-pointer shadow-[0_0_15px_rgba(106,0,255,0.1)]"
           >
              <span className="font-bold text-xl mr-3 text-white">4.8/5</span>
              <div className="flex text-[#00b67a] mr-3">
                {[1,2,3,4,5].map(i => <div key={i} className="w-5 h-5 bg-[#00b67a] mr-0.5 flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                </div>)}
              </div>
              <div className="text-left">
                  <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">Trustpilot</span>
                  <span className="text-[10px] text-gray-500 flex items-center">Ver reseñas reales <ExternalLink className="w-2 h-2 ml-1" /></span>
              </div>
           </a>
        </div>
      </div>

      {/* Marquee Effect Container */}
      <div className="relative w-full">
        {/* Fades on sides for smooth transition */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-pulseDark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-pulseDark to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex space-x-8 animate-scroll w-max hover:pause-animation">
          {[...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div 
                key={idx} 
                className="w-[350px] bg-gradient-to-r from-pulseMagenta/40 to-pulsePurple/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md transition-all duration-300 group shadow-[0_0_20px_rgba(188,0,109,0.2)] hover:shadow-[0_0_40px_rgba(188,0,109,0.4)] hover:scale-[1.02]"
            >
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm text-white shadow-inner border border-white/20">
                        {review.name.charAt(0)}
                     </div>
                     <div>
                        <h4 className="font-bold text-sm text-white">{review.name}</h4>
                        <p className="text-xs text-white/70">{review.company}</p>
                     </div>
                  </div>
                  {review.platform === 'google' ? (
                     <div className="bg-white p-1 rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                        <span className="font-bold text-blue-500 text-xs">G</span>
                     </div>
                  ) : (
                     <div className="bg-[#00b67a] p-1 rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                        <Star className="w-3 h-3 text-white fill-current" />
                     </div>
                  )}
               </div>
               
               <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                     <Star key={i} className="w-4 h-4 text-white fill-current" />
                  ))}
               </div>

               <p className="text-white text-sm leading-relaxed mb-4 font-medium opacity-90">"{review.review}"</p>
               
               <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-xs text-white/60">{review.date}</span>
                  <div className="flex items-center text-white text-xs font-bold">
                     <CheckCircle2 className="w-3 h-3 mr-1" /> Cliente Verificado
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
