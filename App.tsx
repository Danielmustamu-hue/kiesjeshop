import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronLeft, LayoutDashboard, Newspaper, TrendingUp, ShoppingCart, Sparkles, Menu, X, ArrowLeft } from 'lucide-react';

// Components
import { ShopCard } from './components/ShopCard';
import { AiAdvisor } from './components/AiAdvisor';
import { ComparisonTable } from './components/ComparisonTable';
import { ReviewSection } from './components/ReviewSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { NicheGuides } from './components/NicheGuides';
import { ProductShowcase } from './components/ProductShowcase';
import { FloatingAiButton } from './components/FloatingAiButton';
import { NicheDetail } from './components/NicheDetail';
import { TermsModal } from './components/TermsModal';
import { PrivacyModal } from './components/PrivacyModal';
import { AboutModal } from './components/AboutModal';

// Data & Types
import { SHOPS } from './constants';
import { NicheCategory } from './data/niches';

type View = 'home' | 'redactie' | 'koopgidsen' | 'trending' | 'niche-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedGuide, setSelectedGuide] = useState<NicheCategory | null>(null);
  const [showAiAdvisor, setShowAiAdvisor] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // SEO METADATA MANAGER
  useEffect(() => {
    let title = "Kiesjeshop.nl | De Grote 3 Vergelijker: bol, Amazon & Coolblue";
    let description = "Kies de webshop die bij jou past. bol, Coolblue of Amazon? Wij helpen je beslissen op basis van service, snelheid en de beste prijs voor jouw aankoop.";

    switch (currentView) {
      case 'redactie':
        title = "Redactie & Shopping Advies | Kiesjeshop.nl";
        description = "Diepgaande reviews, insider-tips en achtergrondverhalen over de nieuwste producten en webshop trends bij bol, Amazon en Coolblue.";
        break;
      case 'koopgidsen':
        title = "Onafhankelijke Koopgidsen 2025 | Vergelijk bol, Amazon & Coolblue";
        description = "Directe productvergelijkingen voor elektronica, wonen en huishouden. Bekijk wie van bol, Amazon of Coolblue vandaag de beste prijs heeft.";
        break;
      case 'trending':
        title = "Trending Productcategorieën 2025 | Kiesjeshop.nl Top Picks";
        description = "Onze experts hebben de 8 belangrijkste niches van 2025 geanalyseerd voor bol, Amazon en Coolblue shoppers.";
        break;
      case 'niche-detail':
        if (selectedGuide) {
          title = `${selectedGuide.title} | Top 3 Advies 2025 - Kiesjeshop`;
          description = selectedGuide.seoText;
        }
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, [currentView, selectedGuide]);

  const handleSelectGuide = (guide: NicheCategory) => {
    setSelectedGuide(guide);
    setCurrentView('niche-detail');
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    setSelectedGuide(null);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'koopgidsen', label: 'Koopgidsen', icon: ShoppingCart },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'redactie', label: 'Redactie', icon: Newspaper },
  ];

  return (
    <div className="min-h-screen bg-[#FFF3E0] font-sans selection:bg-orange-200">
      
      {/* HEADER */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigateTo('home')}
          >
            <div className="bg-orange-500 p-2 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-orange-500/20">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              Kiesjeshop<span className="text-orange-500">.nl</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => navigateTo(link.id as View)} 
                className={`hover:text-orange-500 transition-colors flex items-center gap-2 py-2 px-1 border-b-2 transition-all ${
                  currentView === link.id ? 'text-orange-600 border-orange-500' : 'border-transparent'
                }`}
              >
                <link.icon className="w-4 h-4" /> {link.label}
              </button>
            ))}
            <button 
              onClick={() => setShowAiAdvisor(true)} 
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-orange-500 transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2 active:scale-95"
            >
              <Sparkles className="w-4 h-4" /> AI Advies
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-orange-100 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-40">
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => navigateTo(link.id as View)}
                  className={`flex items-center gap-4 p-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-colors ${
                    currentView === link.id ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <link.icon className="w-5 h-5" /> {link.label}
                </button>
              ))}
              <button 
                onClick={() => setShowAiAdvisor(true)}
                className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-slate-900 text-white font-black text-sm uppercase tracking-widest"
              >
                <Sparkles className="w-5 h-5 text-orange-400" /> AI Advies
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* VIEW LOGIC */}
      <main className="min-h-[70vh]">
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-700">
            {/* HERO SECTION */}
            <div className="bg-gradient-to-b from-white to-[#FFF3E0] py-16 sm:py-24 px-4 overflow-hidden relative">
              <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 -mr-48"></div>
              <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    ⚡️ Real-time Prijsintelligentie 2025
                  </div>
                  <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
                    Betaal je nog steeds <br/>
                    <span className="text-orange-500">te veel voor gemak?</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-10 max-w-xl font-medium leading-relaxed">
                    Online shoppen is vermoeiend door prijsstunts en vage service. 
                    Kiesjeshop.nl filtert de ruis en brengt de beste deals van <strong>bol</strong>, <strong>Amazon</strong> en <strong>Coolblue</strong> direct naar je scherm.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button 
                       onClick={() => navigateTo('koopgidsen')}
                       className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-orange-500 transition-all active:scale-95"
                    >
                      Bekijk de deals
                    </button>
                    <button 
                       onClick={() => setShowAiAdvisor(true)}
                       className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-orange-500 transition-all shadow-sm"
                    >
                      Vraag onze AI
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                   <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-orange-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                      <ComparisonTable />
                   </div>
                </div>
              </div>
            </div>

            {/* SHOP GRID SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="shop-grid">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                   <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">De Grote Drie Ontleed.</h2>
                   <p className="text-slate-500 font-medium text-lg">Wie wint het vandaag op service, prijs en snelheid?</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SHOPS.map((shop) => (
                  <ShopCard key={shop.id} shop={shop} />
                ))}
              </div>
            </div>

            {/* AI ADVISOR SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white rounded-[4rem] shadow-sm mb-20 border border-orange-50/50">
              <AiAdvisor />
            </div>

            {/* SEO AUTHORITY SECTION */}
            <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
              <div className="max-w-4xl mx-auto px-6 relative z-10">
                <span className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-4 block">Kiesjeshop Intelligence</span>
                <h2 className="text-4xl font-black text-white mb-8 tracking-tighter leading-tight">De impact van prijselasticiteit op uw dagelijkse aankopen</h2>
                <div className="prose prose-invert prose-lg max-w-none text-slate-400 leading-relaxed font-medium">
                  <p>
                    Online shoppen is in 2025 een spel van data geworden. Grote spelers zoals <strong>bol</strong>, <strong>Amazon</strong> en <strong>Coolblue</strong> gebruiken geavanceerde algoritmes om prijzen real-time aan te passen. 
                    Wij helpen u begrijpen wanneer u waar moet toeslaan.
                  </p>
                  <p className="mt-6">
                    Wist u dat de prijs van een CO2-meter bij Amazon op een regenachtige dinsdag soms 15% lager ligt dan in het weekend? 
                    Dit is <strong>prijsintelligentie</strong>. Kiesjeshop.nl fungeert als uw onafhankelijke gids om deze schommelingen in uw voordeel te gebruiken.
                  </p>
                </div>
              </div>
            </section>

            <ReviewSection />
            <FaqSection />
          </div>
        )}

        {currentView === 'redactie' && (
          <div className="py-20 animate-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center text-center">
               <span className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-4 block">Diepgang & Reviews</span>
               <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Redactie Feed.</h1>
               <p className="text-xl text-slate-600 font-medium max-w-2xl">Onafhankelijke reviews en koopadvies van onze experts die de diepte in gaan bij bol, Amazon en Coolblue.</p>
            </div>
            <BlogSection />
            <div className="max-w-7xl mx-auto px-4 text-center mt-20">
               <button onClick={() => navigateTo('home')} className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 font-bold text-sm transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Terug naar Dashboard
               </button>
            </div>
          </div>
        )}

        {currentView === 'koopgidsen' && (
          <div className="py-20 animate-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center text-center">
               <span className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-4 block">Prijsvergelijking</span>
               <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Koopgidsen 2025.</h1>
               <p className="text-xl text-slate-600 font-medium max-w-2xl">Directe vergelijkingen van de meest gezochte producten van dit moment bij de grote drie.</p>
            </div>
            <ProductShowcase />
            <div className="mt-20">
              <ComparisonTable />
            </div>
            <div className="max-w-7xl mx-auto px-4 text-center mt-20">
               <button onClick={() => navigateTo('home')} className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 font-bold text-sm transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Terug naar Dashboard
               </button>
            </div>
          </div>
        )}

        {currentView === 'trending' && (
          <div className="py-20 animate-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center text-center">
               <span className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-4 block">Niches & Trends</span>
               <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Trending Nu.</h1>
               <p className="text-xl text-slate-600 font-medium max-w-2xl">De 8 belangrijkste categorieën van dit jaar volledig geanalyseerd voor jou.</p>
            </div>
            <NicheGuides onSelectGuide={handleSelectGuide} />
            <div className="max-w-7xl mx-auto px-4 text-center mt-20">
               <button onClick={() => navigateTo('home')} className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 font-bold text-sm transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Terug naar Dashboard
               </button>
            </div>
          </div>
        )}

        {currentView === 'niche-detail' && selectedGuide && (
          <NicheDetail guide={selectedGuide} onBack={() => navigateTo('trending')} />
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-20 mt-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <ShoppingBag className="w-8 h-8 text-orange-500" />
                <span className="text-3xl font-black tracking-tighter text-white">Kiesjeshop<span className="text-orange-500">.nl</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 font-medium leading-relaxed">
                De #1 onafhankelijke shopping guide van Nederland. Wij brengen transparantie terug in de wereld van de grote webshops.
              </p>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-orange-500 mb-8">Menu</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><button onClick={() => navigateTo('home')} className="hover:text-orange-500 transition-colors">Dashboard</button></li>
                <li><button onClick={() => navigateTo('koopgidsen')} className="hover:text-orange-500 transition-colors">Koopgidsen</button></li>
                <li><button onClick={() => navigateTo('trending')} className="hover:text-orange-500 transition-colors">Trending</button></li>
                <li><button onClick={() => navigateTo('redactie')} className="hover:text-orange-500 transition-colors">Redactie</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-orange-500 mb-8">Informatie</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><button onClick={() => setIsAboutOpen(true)} className="hover:text-orange-500 transition-colors">Over Ons</button></li>
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-orange-500 transition-colors">Privacy</button></li>
                <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-orange-500 transition-colors">Voorwaarden</button></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-4 px-4">
                Affiliate Disclaimer: Wij ontvangen een kleine commissie bij aankopen via onze links bij bol, Amazon of Coolblue. Dit kost u niets extra.
             </p>
             <p className="text-slate-600 text-xs">© 2025 Kiesjeshop.nl - Intelligence Driven Shopping Experience</p>
          </div>
        </div>
      </footer>

      {/* MODALS & OVERLAYS */}
      <FloatingAiButton visible={!showAiAdvisor} onClick={() => setShowAiAdvisor(true)} />
      
      {showAiAdvisor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setShowAiAdvisor(false)}></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl animate-in zoom-in-95">
             <AiAdvisor />
             <button 
                onClick={() => setShowAiAdvisor(false)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20 backdrop-blur-md"
             >
                <X className="w-5 h-5" />
             </button>
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