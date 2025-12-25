
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DiagnosisBenefits from './components/DiagnosisBenefits';
import StatsComparison from './components/StatsComparison';
import Services from './components/Services';
import Methodology from './components/Methodology';
import TargetAudience from './components/TargetAudience';
import ServiceMap from './components/ServiceMap';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import AdGenerator from './components/AdGenerator';
import WhatsAppButton from './components/WhatsAppButton';
import { ArrowRight, CalendarClock } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pulseDark text-white selection:bg-pulseCyan selection:text-pulseDark">
      <Header />
      
      <main>
        <Hero />
        
        <div id="servicios">
          <Services />
        </div>
        
        <StatsComparison />
        
        <Methodology />
        
        <DiagnosisBenefits />
        
        <TargetAudience />

        <AdGenerator />
        
        <Testimonials />

        <ServiceMap />
        
        {/* Simplified Agenda Section matching screenshot */}
        <section id="agenda" className="py-32 bg-pulseDark relative overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-pulseMagenta/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                    Agenda tu diagnóstico <br />
                    gratuito y descubre <br />
                    <span className="text-pulseMagenta">qué está frenando tu <br /> crecimiento</span>
                </h2>

                <div className="flex justify-center mt-12">
                   <a 
                     href="https://calendly.com/pulseagencyllc/30min"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-pulseMagenta hover:bg-[#a0005d] px-10 py-5 rounded-full font-bold text-lg md:text-xl text-white shadow-[0_0_30px_rgba(188,0,109,0.4)] hover:shadow-[0_0_50px_rgba(188,0,109,0.6)] hover:scale-105 transition-all flex items-center uppercase tracking-wider"
                   >
                     <CalendarClock className="w-6 h-6 mr-3" />
                     RESERVAR ESPACIO <ArrowRight className="ml-3 w-6 h-6" />
                   </a>
                </div>
            </div>
        </section>
      </main>

      <Footer />
      
      <WhatsAppButton />
    </div>
  );
};

export default App;
