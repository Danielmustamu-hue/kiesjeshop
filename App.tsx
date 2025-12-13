import React, { useState } from 'react';
import { SHOPS } from './constants';
import { ShopCard } from './components/ShopCard';
import { AiAdvisor } from './components/AiAdvisor';
import { ReviewSection } from './components/ReviewSection';
import { TermsModal } from './components/TermsModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ShoppingBag, ArrowDown } from 'lucide-react';

const App: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToShops = () => {
    const element = document.getElementById('shop-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF3E0]">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 p-2 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Kiesjeshop.nl</span>
            </div>
            <div className="text-sm font-medium text-slate-500 hidden sm:block">
              De eerlijke vergelijker
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Upgraded with Image */}
      <header className="pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-orange-200">
               <span>🚀</span>
               <span>Vergelijk slimmer, niet harder</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Kies de webshop die bij <span className="text-indigo-600">jou</span> past.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Bol.com, Coolblue of Amazon? Wij helpen je beslissen op basis van service, snelheid en de beste prijs voor jouw aankoop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToShops}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
              >
                Start met vergelijken
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 md:mt-0">
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/50 to-indigo-200/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
               <img 
                 src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop" 
                 alt="Tevreden consument met pakketjes van Bol.com, Coolblue of Amazon na vergelijking" 
                 className="w-full h-auto object-cover"
                 width="800"
                 height="600"
                 loading="eager" 
                 fetchPriority="high"
               />
               
               {/* Floating Badge */}
               <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 max-w-[200px]">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShoppingBag className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Onafhankelijk</p>
                    <p className="text-sm font-bold text-slate-900">100% Advies</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </header>

      {/* Comparison Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
        <div id="shop-grid" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SHOPS.map((shop) => (
            <div key={shop.id} className="h-full">
              <ShopCard shop={shop} />
            </div>
          ))}
        </div>

        {/* AI Advisor Section */}
        <section className="mb-20">
            <AiAdvisor />
        </section>

        {/* Reviews Section */}
        <ReviewSection />

        {/* Info / SEO Text */}
        <section className="prose prose-slate max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-bold text-slate-800">Waarom vergelijken?</h3>
            <p className="text-slate-600">
                Niet elke winkel is gelijk. Waar <strong>Coolblue</strong> uitblinkt in advies en installatie, wint <strong>Bol.com</strong> vaak op het gebied van algemeen assortiment en Nederlandse boeken. <strong>Amazon</strong> is daarentegen vaak de prijsvechter voor internationale gadgets. Kies slim!
            </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Affiliate Disclaimer (Highlighted) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8 mb-12 text-center max-w-4xl mx-auto">
            <p className="text-slate-200 font-semibold text-base mb-2">
              ℹ️ Transparantie over onze inkomsten
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              De links op Kiesjeshop.nl naar webwinkels zijn zogenaamde <strong>affiliate links</strong>. 
              Dit betekent dat wij een kleine commissie kunnen ontvangen wanneer u via onze site een aankoop doet bij bijvoorbeeld Bol.com, Coolblue of Amazon. 
              Dit kost u als gebruiker <strong>niets extra</strong>, maar stelt ons in staat om dit platform gratis en onafhankelijk te houden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-slate-900 pt-12">
            {/* Branding & Copyright */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <div className="flex items-center gap-2 mb-4">
                  <ShoppingBag className="w-5 h-5 text-indigo-500" />
                  <span className="text-slate-100 font-bold text-lg">Kiesjeshop.nl</span>
               </div>
               <p className="text-sm text-slate-500 mb-6 max-w-xs">
                 De eerlijke startplek voor al je online aankopen. Vergelijk, kies en shop slim.
               </p>
               <p className="text-xs text-slate-600">
                  © {new Date().getFullYear()} Kiesjeshop.nl Alle rechten voorbehouden. <span className="opacity-50 ml-1">v1.1</span>
               </p>
            </div>

            {/* Wettelijke Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Informatie</h4>
                <ul className="space-y-3 text-sm">
                    <li>
                        <button 
                            onClick={() => setIsTermsOpen(true)} 
                            className="hover:text-indigo-400 transition-colors text-left"
                        >
                            Algemene Voorwaarden
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => setIsPrivacyOpen(true)} 
                            className="hover:text-indigo-400 transition-colors text-left"
                        >
                            Privacyverklaring
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => setIsPrivacyOpen(true)} 
                            className="hover:text-indigo-400 transition-colors text-left"
                        >
                            Cookiebeleid
                        </button>
                    </li>
                    <li>
                        <a href="mailto:info@kiesjeshop.nl" className="hover:text-indigo-400 transition-colors">Contact</a>
                    </li>
                </ul>
            </div>
            
            {/* Disclaimer Merkenrecht */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                 <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Disclaimer</h4>
                 <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                    Kiesjeshop.nl is een onafhankelijke vergelijkingssite en is geen onderdeel van de genoemde webwinkels.
                 </p>
                 <p className="text-xs text-slate-500 leading-relaxed max-w-xs mt-3">
                    <strong>Merknamen en logo’s zijn eigendom van hun respectievelijke eigenaren.</strong> Het gebruik hiervan dient enkel ter identificatie van de webshops.
                 </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default App;
