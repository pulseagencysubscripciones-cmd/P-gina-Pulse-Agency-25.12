
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 text-sm">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-pulseMagenta flex items-center justify-center">
                    <span className="font-bold text-white">P</span>
                </div>
                <div className="flex flex-col leading-none">
                    <span className="font-black text-white tracking-widest">PULSE</span>
                    <span className="text-[9px] font-bold text-pulseMagenta tracking-[0.3em]">AGENCY</span>
                </div>
             </div>
             <p className="text-gray-500 leading-relaxed mb-6">
                 Escalando el futuro de los negocios hispanos en EE.UU. mediante Inteligencia Artificial y Automatización Estratégica.
             </p>
             <div className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                 © 2026 Pulse Agency LLC - Sheridan, Wyoming
             </div>
          </div>

          {/* Sede Central */}
          <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">Sede Central</h4>
              <ul className="space-y-4 text-gray-500">
                  <li className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-pulseMagenta shrink-0" />
                      <span>30 North Gould St Set R<br/>Sheridan, WY 82801</span>
                  </li>
                  <li className="flex items-center">
                      <span className="text-pulseMagenta mr-2">📞</span>
                      <a href="tel:+13074293264" className="hover:text-white transition-colors">+1 (307) 429-3264</a>
                  </li>
                  <li className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-pulseMagenta" />
                      <a href="mailto:info@pulseagencyusa.com" className="hover:text-white transition-colors">info@pulseagencyusa.com</a>
                  </li>
              </ul>
          </div>

          {/* Legal */}
          <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">Información Legal</h4>
              <ul className="space-y-4 text-gray-500">
                  <li><a href="#" className="hover:text-pulseCyan transition-colors">Política de Privacidad (CA/FL/TX)</a></li>
                  <li><a href="#" className="hover:text-pulseCyan transition-colors">Términos y Condiciones</a></li>
                  <li><a href="#" className="hover:text-pulseCyan transition-colors">Política de Cookies</a></li>
              </ul>
          </div>

          {/* Compliance */}
          <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">Compliance US</h4>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Cumplimos con la CCPA de California, la FIPA de Florida y la TDPSA de Texas para garantizar la máxima seguridad y privacidad de los datos de nuestros clientes y sus usuarios.
              </p>
              <div className="text-[10px] text-gray-700 font-mono text-right">
                  RADICAL TRANSPARENCY & AI POWER
              </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
