
import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingBag, Sparkles, X, Cpu, Search, Loader2 } from 'lucide-react';

// Components
import { AiAdvisor } from './components/AiAdvisor';
import { ComparisonTable } from './components/ComparisonTable';
import { ReviewSection } from './components/ReviewSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { NicheGuides } from './components/NicheGuides';
import { NicheDetail } from './components/NicheDetail';
import { TermsModal } from './components/TermsModal';
import { PrivacyModal } from './components/PrivacyModal';
import { AboutModal } from './components/AboutModal';
import { AffiliateModal } from './components/AffiliateModal';
import { ArticleModal } from './components/ArticleModal';
import { CookieBanner } from './components/CookieBanner';
import { ShopCard } from './components/ShopCard';
import { LiveMarketTicker } from './components/LiveMarketTicker';
import { MarketPulseDashboard } from './components/MarketPulseDashboard';
import { ProductShowcase } from './components/ProductShowcase';
import { VersusTool } from './components/VersusTool';
import { CommandPalette } from './components/CommandPalette';
import { FloatingAiButton } from './components/FloatingAiButton';
import { ExitIntentModal } from './components/ExitIntentModal';
import { SectionNav } from './components/SectionNav';
import { SeoContent } from './components/SeoContent';

// Services & Data
import { fetchLiveMarketData, MarketSignal } from './services/MarketIntelligence';
import { SHOPS } from './constants';
import { NicheCategory } from './data/niches';
import { Article } from './data/articles';

type View = 'home' | 'koopgidsen' | 'redactie' | 'niche-detail' | 'artikel-detail' | 'ai-advisor';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedGuide, setSelectedGuide] = useState<NicheCategory | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showAiAdvisor, setShowAiAdvisor] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);
  
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [marketSignals, setMarketSignals] = useState<MarketSignal[]>([]);
  const [marketSources, setMarketSources] = useState<{uri: string, title: string}[]>([]);
  const [isMarketLoading, setIsMarketLoading] = useState(true);
  const [lastMarketUpdate, setLastMarketUpdate] = useState<string | null>(null);

  const navigateTo = (view: View, item?: any) => {
    setCurrentView(view);
    setIsSearchOpen(false);
    if (view === 'niche-detail' && item) setSelectedGuide(item);
    else if (view === 'artikel-detail' && item) setSelectedArticle(item);
    else if (view === 'home') { setSelectedGuide(null); setSelectedArticle(null); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleModalToShops = () => {
    navigateTo('home');
    setTimeout(() => {
      const el = document.getElementById('shops-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const loadMarketData = useCallback(async () => {
    setIsMarketLoading(true);
    const { signals, sources } = await fetchLiveMarketData();
    if (signals && signals.length > 0) {
      setMarketSignals(signals);
      setMarketSources(sources);
      setLastMarketUpdate(new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }));
    }
    setIsMarketLoading(false);
  }, []);

  useEffect(() => {
    loadMarketData();
    const handleScroll = () => setShowScrollTop(window.scrollY > 1000);
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) { setShowExitIntent(true); setHasShownExitIntent(true); }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseOut);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [hasShownExitIntent, loadMarketData]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-orange-100">
      
      <header role="banner" className="bg-white/90 backdrop-blur-2xl sticky top-0 z-50 border-b border-slate-100 h-20">
        <nav role="navigation" aria-label="Hoofdmenu" className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-12">
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="flex items-center gap-2 cursor-pointer group" aria-label="Kiesjeshop Home">
              <div className="bg-slate-950 p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-lg md:text-xl font-black text-slate-950 tracking-tighter leading-none">Kiesjeshop<span className="text-slate-400">.nl</span></span>
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-emerald-600">Market Intelligence</span>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-4">
               <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${currentView === 'home' ? 'text-orange-600' : 'text-slate-400 hover:text-slate-900'}`} aria-current={currentView === 'home' ? 'page' : undefined}>Intelligence</a>
               <a href="/koopgidsen" onClick={(e) => { e.preventDefault(); navigateTo('koopgidsen'); }} className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${currentView === 'koopgidsen' ? 'text-orange-600' : 'text-slate-400 hover:text-slate-900'}`} aria-current={currentView === 'koopgidsen' ? 'page' : undefined}>Koopgidsen</a>
               <a href="/redactie" onClick={(e) => { e.preventDefault(); navigateTo('redactie'); }} className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${currentView === 'redactie' ? 'text-orange-600' : 'text-slate-400 hover:text-slate-900'}`} aria-current={currentView === 'redactie' ? 'page' : undefined}>Redactie</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(true)} className="hidden sm:flex items-center bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl group hover:border-orange-300 transition-all shadow-sm" aria-label="Zoeken">
               <Search className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
               <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-3">Vraag AI...</span>
            </button>
            <button onClick={() => setShowAiAdvisor(true)} className="bg-slate-950 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">Advisor</button>
          </div>
        </nav>
      </header>

      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onNavigate={navigateTo} />
      <FloatingAiButton visible={currentView === 'home' && !showAiAdvisor} onClick={() => setShowAiAdvisor(true)} />
      <ExitIntentModal isOpen={showExitIntent} onClose={() => setShowExitIntent(false)} onOpenConsultant={() => setShowAiAdvisor(true)} />

      <main id="main-content">
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-1000 max-w-7xl mx-auto px-4 md:px-6 py-12">
            {/* Hero Section */}
            <section className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12 lg:col-span-7 intelligence-card p-12 md:p-24 relative overflow-hidden group border border-slate-100/50 min-h-[600px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" alt="Lifestyle Interior" className="w-full h-full object-cover rounded-l-[5rem]" />
                  <div className="absolute inset-0 bg-gradient-to-l from-white via-white/50 to-transparent"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-12">
                    <Sparkles className="w-4 h-4 animate-pulse" /> Platform 2025
                  </div>
                  <h1 className="text-5xl md:text-[7rem] font-black text-slate-950 leading-[0.85] tracking-tighter mb-16">
                    Vergelijk,<br />Kies &<br /><span className="text-intelligence text-8xl md:text-[10rem]">Bespaar</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-600 font-semibold max-w-xl mb-12 leading-relaxed">
                    De onafhankelijke gids die <br className="hidden md:block" />
                    <span className="inline-block px-4 py-1.5 bg-[#0055CC] text-white rounded-xl shadow-[0_10px_30px_rgba(0,85,204,0.3)] transform hover:-rotate-2 transition-transform cursor-default">bol</span> 
                    <span className="mx-2 text-slate-300">/</span> 
                    <span className="inline-block px-4 py-1.5 bg-[#232F3E] text-[#FF9900] rounded-xl shadow-[0_10px_30px_rgba(35,47,62,0.3)] transform hover:rotate-2 transition-transform cursor-default">Amazon</span> 
                    <span className="mx-2 text-slate-300">/</span> 
                    <span className="inline-block px-4 py-1.5 bg-[#0090E3] text-white rounded-xl shadow-[0_10px_30px_rgba(0,144,227,0.3)] transform hover:-rotate-1 transition-transform italic cursor-default">Coolblue</span> 
                    <br className="hidden md:block" /> voor jou ontleedt.
                  </p>

                  <button onClick={() => setShowAiAdvisor(true)} className="bg-slate-950 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-2xl active:scale-95">
                    Vraag de AI Advisor
                  </button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
                <div className="bg-orange-600 rounded-[3.5rem] p-12 h-1/2 text-white shadow-2xl relative overflow-hidden group border border-white/10">
                   <LiveMarketTicker signals={marketSignals} sources={marketSources} loading={isMarketLoading} lastUpdate={lastMarketUpdate} />
                </div>
                <div className="bg-slate-950 rounded-[3.5rem] p-12 h-1/2 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl border border-white/5">
                  <div className="bg-orange-500/10 p-5 rounded-3xl mb-8 border border-orange-500/20">
                    <Cpu className="w-10 h-10 text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4 tracking-tighter">AI Consultant</h2>
                  <p className="text-slate-400 text-sm font-medium mb-10 max-w-[240px]">Krijg direct antwoord op jouw specifieke shopping-vraag.</p>
                  <button onClick={() => setShowAiAdvisor(true)} className="bg-white text-slate-950 w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-50 transition-colors">Start Chat</button>
                </div>
              </div>
            </section>

            <SectionNav />

            {/* Core Content Blocks */}
            <div id="market-pulse" className="py-24 scroll-mt-32">
               <MarketPulseDashboard onRefresh={loadMarketData} isLoading={isMarketLoading} />
            </div>

            <div id="compare" className="py-24 scroll-mt-32">
               <div className="mb-16">
                  <h2 className="text-5xl font-black text-slate-950 tracking-tighter mb-4">Vergelijk Beste Producten<span className="text-orange-600">.</span></h2>
                  <p className="text-slate-500 font-medium text-xl max-w-xl leading-relaxed">Top-tier producten geanalyseerd op prijs en service bij de Grote 3.</p>
               </div>
               <ProductShowcase />
               <div className="mt-24">
                  <ComparisonTable />
               </div>
            </div>

            <div id="duel" className="py-24 scroll-mt-32">
               <VersusTool />
            </div>

            <div id="shops-section" className="py-24 scroll-mt-32">
               <div className="mb-16 text-center">
                  <h2 className="text-7xl font-black text-slate-950 tracking-tighter mb-4">De Giganten<span className="text-orange-600">.</span></h2>
                  <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto leading-relaxed">Vergeleken op service, prijs en betrouwbaarheid in 2025.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {SHOPS.map(shop => (
                    <ShopCard key={shop.id} shop={shop} />
                  ))}
               </div>
            </div>
            
            <SeoContent />

            <div id="gidsen" className="py-24 scroll-mt-32">
               <NicheGuides onSelectGuide={(g) => navigateTo('niche-detail', g)} limit={4} />
            </div>

            <ReviewSection />
            
            <div id="faq" className="py-24 scroll-mt-32">
               <FaqSection />
            </div>
          </div>
        )}

        {currentView === 'koopgidsen' && <div className="max-w-7xl mx-auto py-12 px-6"><NicheGuides onSelectGuide={(g) => navigateTo('niche-detail', g)} /></div>}
        {currentView === 'redactie' && <div className="max-w-7xl mx-auto py-12 px-6"><BlogSection onSelectArticle={(a) => navigateTo('artikel-detail', a)} /></div>}
        {currentView === 'niche-detail' && selectedGuide && <NicheDetail guide={selectedGuide} onBack={() => navigateTo('koopgidsen')} />}
        {currentView === 'artikel-detail' && selectedArticle && <ArticleModal article={selectedArticle} onClose={() => navigateTo('redactie')} onNavigateToShops={handleModalToShops} inline={true} />}
      </main>

      <footer role="contentinfo" className="bg-slate-950 text-white pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-orange-600 p-2 rounded-lg"><ShoppingBag className="w-6 h-6 text-white" /></div>
                <span className="text-3xl font-black tracking-tighter">Kiesjeshop<span className="text-slate-600">.nl</span></span>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg mb-12">
                Het intelligente vergelijkingsplatform van Nederland. Wij filteren de ruis, jij kiest de kwaliteit.
              </p>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-[10px] text-slate-500 font-medium italic">
                Affiliate Disclaimer: Kiesjeshop.nl ontvangt een commissie bij aankopen via onze links bij bol, Amazon of Coolblue. Dit heeft geen invloed op de prijs die jij betaalt.
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-10">Menu</h4>
              <ul className="space-y-6 text-slate-400 font-bold text-sm">
                <li><a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/koopgidsen" onClick={(e) => { e.preventDefault(); navigateTo('koopgidsen'); }} className="hover:text-white transition-colors">Koopgidsen</a></li>
                <li><a href="/redactie" onClick={(e) => { e.preventDefault(); navigateTo('redactie'); }} className="hover:text-white transition-colors">Redactie</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-10">Bedrijf</h4>
              <ul className="space-y-6 text-slate-400 font-bold text-sm">
                <li><button onClick={() => setIsAboutOpen(true)} className="hover:text-white transition-colors">Over ons</button></li>
                <li><button onClick={() => setIsAffiliateOpen(true)} className="hover:text-white transition-colors">Affiliates</button></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-10">Juridisch</h4>
              <ul className="space-y-6 text-slate-400 font-bold text-sm">
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">Privacybeleid</button></li>
                <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors">Voorwaarden</button></li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] text-center pt-12 border-t border-white/5">© 2025 Kiesjeshop.nl — Intelligent Comparison Platform</p>
        </div>
      </footer>

      {showAiAdvisor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" onClick={() => setShowAiAdvisor(false)}></div>
          <div className="relative w-full max-w-5xl h-[90vh] overflow-hidden rounded-[4rem] shadow-2xl border border-white/10 bg-slate-950">
             <AiAdvisor />
             <button onClick={() => setShowAiAdvisor(false)} className="absolute top-10 right-10 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 z-[110]" aria-label="Sluiten"><X className="w-6 h-6" /></button>
          </div>
        </div>
      )}

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <AffiliateModal isOpen={isAffiliateOpen} onClose={() => setIsAffiliateOpen(false)} />
      <CookieBanner />
    </div>
  );
};

export default App;
