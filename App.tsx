
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
import { NicheDetail } from './components/NicheDetail';
import { NicheCategory } from './data/niches';
import { TermsModal } from './components/TermsModal';
import { PrivacyModal } from './components/PrivacyModal';
import { AboutModal } from './components/AboutModal';
import { FloatingAiButton } from './components/FloatingAiButton';
import { ShoppingBag, ArrowDown, Menu, X, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeNiche, setActiveNiche] = useState<NicheCategory | null>(null);
  
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitIntentVariant, setExitIntentVariant] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!activeNiche) {
        const aiSection = document.getElementById('advies');
        if (aiSection) {
            setShowFloatingButton(window.scrollY > 600);
        }
      } else {
          setShowFloatingButton(false);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 0 && !sessionStorage.getItem('exitIntentShown')) {
        setExitIntentVariant(Math.floor(Math.random() * 3) + 1);
        setShowExitIntent(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseOut);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [activeNiche]);

  const getExitIntentText = () => {
    // Niche-specifieke logica
    if (activeNiche) {
      switch (activeNiche.id) {
        case 'kabelmanagement': 
          return "Nog steeds een wirwar van snoeren? Vraag onze AI welke oplossing bij jouw bureau past!";
        case 'co2-meter': 
          return "Twijfel je tussen de Aranet en Netatmo? Laat de AI de laatste voorraad bij bol checken.";
        case 'home-gym': 
          return "Niet zeker of die dumbbells passen? Vraag onze AI om de beste compacte oplossing voor jouw ruimte.";
        default: 
          return "Nog niet de perfecte match gevonden? Vraag het onze AI.";
      }
    }

    // Algemene logica voor homepage
    switch (exitIntentVariant) {
      case 1: return "Nog niet de perfecte match gevonden? Vraag het onze AI.";
      case 2: return "Wacht even! Bespaar je niet liever? Laat de AI de huidige prijzen van bol en Amazon checken.";
      case 3: return "Zeker weten dat je de juiste kiest? De redactie heeft de top 3 van 2025 net bijgewerkt.";
      default: return "Nog niet de perfecte match gevonden? Vraag het onze AI.";
    }
  };

  const scrollToSection = (id: string) => {
    if (activeNiche) {
        setActiveNiche(null);
        setTimeout(() => {
            scrollToId(id);
        }, 100);
    } else {
        scrollToId(id);
    }
    setIsMobileMenuOpen(false);
    setShowExitIntent(false); // Sluit popup bij actie
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNicheSelect = (niche: NicheCategory) => {
      setActiveNiche(niche);
      window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
      setActiveNiche(null);
      setTimeout(() => {
          scrollToId('niches');
      }, 100);
  };

  const navLinks = [
    { name: 'Vergelijker', id: 'shop-grid' },
    { name: 'AI Advies', id: 'advies' }, 
    { name: 'Deals', id: 'deals' },
    { name: 'Niches', id: 'niches' },
    { name: 'Koopgidsen', id: 'koopgidsen' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF3E0]">
      {/* Navbar (Gedeeld) */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => { setActiveNiche(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="bg-slate-900 p-2 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Kiesjeshop.nl</span>
            </div>

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

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

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
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {activeNiche ? (
          <NicheDetail guide={activeNiche} onBack={handleBackToHome} />
        ) : (
          <>
            {/* Hero Section */}
            <header className="pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 overflow-hidden">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left z-10">
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-orange-200">
                     <span>🚀</span>
                     <span>Vergelijk slimmer, bestel sneller</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                    Betaal nooit meer te veel bij <span className="text-indigo-600">bol, Coolblue of Amazon</span>.
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                    Stop met twijfelen. Wij vergelijken direct prijs, levertijd en service zodat jij binnen 1 minuut de beste deal sluit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button 
                      onClick={() => scrollToSection('shop-grid')}
                      className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                    >
                      Bekijk direct het overzicht
                      <ArrowDown className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => scrollToSection('advies')}
                      className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-sm active:scale-95"
                    >
                      Start AI keuzehulp
                    </button>
                  </div>
                </div>

                <div className="relative mt-8 md:mt-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/50 to-indigo-200/50 rounded-full blur-3xl -z-10"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                     <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop" alt="Online shoppen vergelijken" className="w-full h-auto object-cover" width="800" height="600" loading="eager" fetchPriority="high" />
                     <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 max-w-[200px]">
                        <div className="bg-green-100 p-2 rounded-full">
                          <ShoppingBag className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Transparant</p>
                          <p className="text-sm font-bold text-slate-900">100% Onafhankelijk</p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 space-y-24">
              <div id="shop-grid" className="scroll-mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
                {SHOPS.map((shop) => <ShopCard key={shop.id} shop={shop} />)}
              </div>
              <section id="advies" className="scroll-mt-28">
                  <AiAdvisor />
              </section>
              <section id="deals" className="scroll-mt-28">
                <ProductShowcase />
              </section>
              <section><ComparisonTable /></section>
              <section id="niches" className="scroll-mt-28">
                <NicheGuides onSelectGuide={handleNicheSelect} />
              </section>
              <section id="koopgidsen" className="scroll-mt-28">
                  <BlogSection />
              </section>
              <section><ReviewSection /></section>
              <section id="faq" className="scroll-mt-28">
                  <FaqSection />
              </section>
              <section className="prose prose-slate max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-slate-800">Waarom wij vergelijken?</h3>
                  <p className="text-slate-600">
                      Niet elke winkel is gelijk. Waar <strong>Coolblue</strong> wint op installatieservice, is <strong>bol</strong> vaak de koning van het assortiment en is <strong>Amazon</strong> dé plek voor de laagste prijs.
                  </p>
              </section>
            </div>
          </>
        )}
      </main>

      <FloatingAiButton visible={showFloatingButton} onClick={() => scrollToSection('advies')} />

      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8 mb-12 text-center max-w-4xl mx-auto">
            <p className="text-slate-200 font-semibold text-base mb-2">🤝 Eerlijk & Transparant</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Wij zijn 100% onafhankelijk. Als jij via onze links iets moois koopt bij bol, Coolblue of Amazon, krijgen wij soms een kleine beloning. 
              Het mooie is: <strong>jij betaalt helemaal niets extra.</strong> Zo houden wij deze site gratis en reclamevrij voor iedereen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-slate-900 pt-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <div className="flex items-center gap-2 mb-4">
                  <ShoppingBag className="w-5 h-5 text-indigo-500" />
                  <span className="text-slate-100 font-bold text-lg">Kiesjeshop.nl</span>
               </div>
               <p className="text-xs text-slate-600">© {new Date().getFullYear()} Kiesjeshop.nl Alle rechten voorbehouden.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Handig</h4>
                <ul className="space-y-3 text-sm">
                    <li><button onClick={() => setIsAboutOpen(true)} className="hover:text-indigo-400 transition-colors">Over ons</button></li>
                    <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-indigo-400 transition-colors">Voorwaarden</button></li>
                    <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-indigo-400 transition-colors">Privacy & Cookies</button></li>
                </ul>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                 <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-wider">Disclaimer</h4>
                 <p className="text-xs text-slate-500 leading-relaxed max-w-xs">Prijzen kunnen wijzigen. Wij zijn een onafhankelijke vergelijker.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup (Globaal) */}
      {showExitIntent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setShowExitIntent(false)}></div>
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-indigo-100 animate-in fade-in zoom-in-95 duration-300">
             <button onClick={() => setShowExitIntent(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"><X className="w-5 h-5" /></button>
             <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"><Sparkles className="w-8 h-8 text-indigo-600" /></div>
             <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">Wacht even!</h3>
             <p className="text-slate-600 text-center mb-8 leading-relaxed font-medium">{getExitIntentText()}</p>
             <div className="flex flex-col gap-3">
                <button onClick={() => { setShowExitIntent(false); scrollToSection('advies'); }} className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Ja, help mij kiezen</button>
                <button onClick={() => setShowExitIntent(false)} className="w-full py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all">Nee, ik kijk zelf verder</button>
             </div>
          </div>
        </div>
      )}

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default App;
