
import React, { useState } from 'react';
import { Mail, MapPin, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeLegalTab, setActiveLegalTab] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = `
PRIVACY POLICY AND COOKIE POLICY
Pulse Agency LLC
Last Updated: December 24, 2025

1. SCOPE OF THIS POLICY
This Privacy Policy describes how Pulse Agency LLC collects, uses, stores, protects, and discloses personal information of individuals who access or use this website from any state within the United States.
Pulse Agency LLC operates nationwide and applies privacy practices consistent with applicable federal laws and with the most stringent state-level data protection standards currently in effect in the United States, including those applicable to residents of the State of California.
By accessing or using this website, you agree to the practices described in this Privacy Policy.

2. COMPANY INFORMATION
• Legal Name: Pulse Agency LLC
• Business Address: 30 North Gould St Ste R, Sheridan, Wyoming
• Phone Number: (307) 429-3264
• Privacy Contact Email: privacy@pulseagencyusa.com

3. INFORMATION WE COLLECT
We may collect personal information through the following means:
Information Provided Directly by You
• Full name
• Email address
• Phone number
• Business or professional information
• Any other information you voluntarily submit through forms, communications, or interactions with us

Information Collected Automatically
• Internet Protocol address
• Browser type and device information
• Operating system
• Website usage and navigation activity
• Cookies and similar tracking technologies

4. PURPOSES FOR COLLECTING AND USING INFORMATION
We use personal information for legitimate business purposes, including to:
• Provide and operate our services
• Respond to inquiries and requests
• Schedule calls, meetings, or consultations
• Improve website functionality and user experience
• Perform internal analytics and performance measurement
• Comply with legal and regulatory obligations
• Protect security and prevent fraud or misuse
Pulse Agency LLC does not sell personal information.

5. COOKIES AND TRACKING TECHNOLOGIES
This website uses cookies and similar technologies to support essential functionality, analyze website usage, and improve marketing and communications.
You may control or disable cookies through your browser settings. Disabling cookies may limit certain features of the website.

6. DISCLOSURE OF INFORMATION TO THIRD PARTIES
Personal information may be disclosed only to:
• Technology and service providers necessary to operate the website
• Communication, analytics, and automation platforms
• Governmental or legal authorities when required by law
All third parties are required to handle personal information in a confidential and secure manner consistent with this Policy.

7. USER PRIVACY RIGHTS
Users have the right to:
• Request information about the personal data we collect
• Request access to their personal information
• Request deletion of personal data, subject to legal limitations
• Request correction of inaccurate information
• Limit the use of sensitive personal information
• Be free from discrimination for exercising privacy rights
Requests may be submitted by contacting: privacy@pulseagencyusa.com

8. DATA RETENTION
We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Policy or to comply with applicable legal obligations.

9. DATA SECURITY
Pulse Agency LLC implements reasonable administrative, technical, and organizational security measures designed to protect personal information against unauthorized access, disclosure, alteration, or destruction.

10. CHILDREN’S INFORMATION
This website is not intended for individuals under the age of thirteen. We do not knowingly collect personal information from children.

11. CHANGES TO THIS POLICY
Pulse Agency LLC reserves the right to modify this Privacy Policy at any time. Any updates will be posted on this page and will become effective upon publication.

12. CONTACT INFORMATION
For questions or concerns regarding this Privacy Policy, please contact:
Email: privacy@pulseagencyusa.com
Phone: (307) 429-3264
  `;

  const termsContent = `
TERMS AND CONDITIONS OF SERVICE
Pulse Agency LLC
Last Updated: December 24, 2025

1. ACCEPTANCE OF TERMS
By accessing and using the services of Pulse Agency LLC ("Pulse Agency", "we", "us", "our"), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services.

2. SERVICES PROVIDED
Pulse Agency provides AI automation, CRM implementation, and digital marketing services. The specific scope of services for any client will be outlined in a separate Service Agreement or Statement of Work (SOW).

3. FEES AND PAYMENT
Clients agree to pay all fees specified in their Service Agreement. All payments are non-refundable unless otherwise specified in writing. Pulse Agency reserves the right to suspend services for non-payment.

4. INTELLECTUAL PROPERTY
Unless otherwise agreed in writing, Pulse Agency retains all rights to its proprietary software, AI models, and methodologies. Clients are granted a limited, non-transferable license to use the deliverables provided during the term of their agreement.

5. LIMITATION OF LIABILITY
Pulse Agency LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, whether in an action in contract or tort. Our total liability shall not exceed the amount paid for the services in the three months preceding the claim.

6. NO GUARANTEE OF RESULTS
Marketing and AI automation results depend on numerous external factors. Pulse Agency makes no guarantees regarding specific revenue increases or lead volume.

7. GOVERNING LAW
These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law principles. Any legal action shall be brought exclusively in the courts of Sheridan County, Wyoming.

8. CONTACT
For legal inquiries, contact: info@pulseagencyusa.com
  `;

  return (
    <footer className="bg-black py-16 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 text-sm">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
             <div className="flex items-center space-x-2 mb-6">
                {/* Logo Image */}
                <img 
                    src="/logo.png" 
                    alt="Pulse Agency Logo" 
                    className="w-10 h-10 object-contain" 
                />

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
                  <li>
                    <button 
                      onClick={() => setActiveLegalTab('privacy')} 
                      className="hover:text-pulseCyan transition-colors text-left"
                    >
                      Política de Privacidad (CA/FL/TX)
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveLegalTab('terms')} 
                      className="hover:text-pulseCyan transition-colors text-left"
                    >
                      Términos y Condiciones
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveLegalTab('privacy')} 
                      className="hover:text-pulseCyan transition-colors text-left"
                    >
                      Política de Cookies
                    </button>
                  </li>
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

      {/* Legal Modal */}
      {activeLegalTab && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveLegalTab(null)}
          ></div>
          <div className="relative bg-pulseDark border border-white/10 w-full max-w-4xl max-h-[80vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <h3 className="font-bold text-white uppercase tracking-widest text-sm">
                {activeLegalTab === 'privacy' ? 'Privacy & Cookie Policy' : 'Terms and Conditions'}
              </h3>
              <button 
                onClick={() => setActiveLegalTab(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 md:p-12 text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
              {activeLegalTab === 'privacy' ? privacyContent.trim() : termsContent.trim()}
            </div>
            <div className="p-6 border-t border-white/5 bg-white/5 text-center">
              <button 
                onClick={() => setActiveLegalTab(null)}
                className="bg-pulseMagenta px-8 py-3 rounded-full font-bold text-xs text-white uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
