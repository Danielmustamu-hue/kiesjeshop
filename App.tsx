import React, { useState, useEffect } from 'react';
import { SHOPS } from './constants';
import { ShopCard } from './components/ShopCard';
import { AiAdvisor } from './components/AiAdvisor';
import { ReviewSection } from './components/ReviewSection';
import { ComparisonTable } from './components/ComparisonTable';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { ProductShowcase } from './components/ProductShowcase';
import { NicheGuides } from './components/NicheGuides';
import { TermsModal } from './components/TermsModal';
import { PrivacyModal } from './components/PrivacyModal';
import { AboutModal } from './components/AboutModal';
import { FloatingAiButton } from './components/FloatingAiButton';
import { ShoppingBag, ArrowDown, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Logic to show floating button only after scrolling past the main AI section
  useEffect(() => {
    const handleScroll = () => {
      const aiSection = document.getElementById('advies');
      if (aiSection) {
        const rect = aiSection.getBoundingClientRect();
        // Show button if AI section is scrolled out of view (top is negative and larger than height)
        // OR if we haven't reached it yet? No, mainly if we scroll PAST it or if it's not in view.
        // Let's keep it simple: Show button if we scroll down a bit (> 600px) so it's always available
        setShowFloatingButton(window.scrollY > 600);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Sluit mobiel menu na klik
    const element = document.getElementById(id);
    if (element) {
      // Offset voor de fixed header (ongeveer 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'Vergelijker', id: 'shop-grid' },
    { name: 'AI Advies', id: 'advies' }, // Naar boven verplaatst in menu
    { name: 'Deals', id: 'deals' },
    { name: 'Niches', id: 'niches' },
    { name: 'Koopgidsen', id: 'koopgidsen' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF3E0]">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="bg-slate-900 p-2 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Kiesjeshop.nl</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('shop-grid')}
                className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors"
              >
                Start Vergelijken
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900"
                aria-label="Menu openen"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <button 
                  onClick={() => scrollToSection('shop-grid')}
                  className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl text-base font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  Start Vergelijken <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
              bol, Coolblue of Amazon? Wij helpen je beslissen op basis van service, snelheid en de beste prijs voor jouw aankoop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('shop-grid')}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
              >
                Start met vergelijken
                <ArrowDown className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('advies')}
                className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-sm active:scale-95"
              >
                Vraag AI advies
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 md:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/50 to-indigo-200/50 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
               <img 
                 src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop" 
                 alt="Online shoppen vergelijken" 
                 className="w-full h-auto object-cover"
                 width="800"
                 height="600"
                 loading="eager" 
                 fetchPriority="high"
               />
               
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

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 space-y-24">
        
        {/* 1. Comparison Grid (The Core) */}
        <div id="shop-grid" className="scroll-mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHOPS.map((shop) => (
            <div key={shop.id} className="h-full">
              <ShopCard shop={shop} />
            </div>
          ))}
        </div>

        {/* 2. AI Advisor (Promoted to High Priority!) */}
        <section id="advies" className="scroll-mt-28">
            <AiAdvisor />
        </section>

        {/* 3. Product Showcase (Deals) */}
        <section id="deals" className="scroll-mt-28">
          <ProductShowcase />
        </section>

        {/* 4. Comparison Table (Fact Check) */}
        <section>
             <ComparisonTable />
        </section>

        {/* 5. Niche Guides */}
        <section id="niches" className="scroll-mt-28">
          <NicheGuides />
        </section>

        {/* 6. Blog / Content Section */}
        <section id="koopgidsen" className="scroll-mt-28">
            <BlogSection />
        </section>

        {/* 7. Reviews Section */}
        <section>
            <ReviewSection />
        </section>

        {/* 8. FAQ Section */}
        <section id="faq" className="scroll-mt-28">
            <FaqSection />
        </section>

        {/* Info Text */}
        <section className="prose prose-slate max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-800">Waarom vergelijken?</h3>
            <p className="text-slate-600">
                Niet elke winkel is gelijk. Waar <strong>Coolblue</strong> uitblinkt in advies en installatie, wint <strong>bol</strong> vaak op het gebied van algemeen assortiment en Nederlandse boeken. <strong>Amazon</strong> is daarentegen vaak de prijsvechter voor internationale gadgets. Kies slim!
            </p>
        </section>
      </main>

      {/* Floating Action Button for AI */}
      <FloatingAiButton 
        visible={showFloatingButton} 
        onClick={() => scrollToSection('advies')} 
      />

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8 mb-12 text-center max-w-4xl mx-auto">
            <p className="text-slate-200 font-semibold text-base mb-2">
              ℹ️ Transparantie over onze inkomsten
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              De links op Kiesjeshop.nl naar webwinkels zijn zogenaamde <strong>affiliate links</strong>. 
              Dit betekent dat wij een kleine commissie kunnen ontvangen wanneer u via onze site een aankoop doet bij bijvoorbeeld bol, Coolblue of Amazon. 
              Dit kost u als gebruiker <strong>niets extra</strong>, maar stelt ons in staat om dit platform gratis en onafhankelijk te houden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-slate-900 pt-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <div className="flex items-center gap-2 mb-4">
                  <ShoppingBag className="w-5 h-5 text-indigo-500" />
                  <span className="text-slate-100 font-bold text-lg">Kiesjeshop.nl</span>
               </div>
               <p className="text-sm text-slate-500 mb-6 max-w-xs">
                 De eerlijke startplek voor al je online aankopen. Vergelijk, kies en shop slim.
               </p>
               <p className="text-xs text-slate-600">
                  © {new Date().getFullYear()} Kiesjeshop.nl Alle rechten voorbehouden. <span className="text-green-500 font-bold ml-1">v1.1 LIVE</span>
               </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Informatie</h4>
                <ul className="space-y-3 text-sm">
                    <li>
                        <button onClick={() => setIsAboutOpen(true)} className="hover:text-indigo-400 transition-colors">Over Kiesjeshop</button>
                    </li>
                    <li>
                        <button onClick={() => setIsTermsOpen(true)} className="hover:text-indigo-400 transition-colors">Algemene Voorwaarden</button>
                    </li>
                    <li>
                        <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-indigo-400 transition-colors">Privacyverklaring</button>
                    </li>
                    <li>
                        <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-indigo-400 transition-colors">Cookiebeleid</button>
                    </li>
                    <li>
                        <a href="mailto:info@kiesjeshop.nl" className="hover:text-indigo-400 transition-colors">Contact</a>
                    </li>
                </ul>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                 <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Disclaimer</h4>
                 <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                    Kiesjeshop.nl is een onafhankelijke vergelijkingssite en is geen onderdeel van de genoemde webwinkels.
                 </p>
            </div>
          </div>
        </div>
      </footer>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default App;