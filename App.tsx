
import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingBag, Sparkles, X, Cpu, Search, Menu, ArrowRight, Zap, ArrowUpRight, Clock, Star, TrendingUp, ChevronRight, Globe, ShieldCheck, BarChart3, PieChart, CheckCircle2, Shield, RefreshCcw, Info, LayoutGrid, ArrowLeftRight, MessageSquare } from 'lucide-react';

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
import { MarketPulseDashboard } from './components/MarketPulseDashboard';
import { ProductShowcase } from './components/ProductShowcase';
import { VersusTool } from './components/VersusTool';
import { CommandPalette } from './components/CommandPalette';
import { SectionNav } from './components/SectionNav';
import { SeoContent } from './components/SeoContent';
import { AboutPage } from './components/AboutPage';
import { TheBigThree } from './components/TheBigThree';
import { FloatingAiButton } from './components/FloatingAiButton';
import { ScrollToTop } from './components/ScrollToTop';

// Services & Data
import { fetchLiveMarketData, MarketSignal } from './services/MarketIntelligence';
import { SHOPS, AFFILIATE_LINKS } from './constants';
import { NicheCategory } from './data/niches';
import { Article } from './data/articles';

type View = 'home' | 'koopgidsen' | 'redactie' | 'niche-detail' | 'artikel-detail' | 'ai-advisor' | 'over-ons' | 'de-grote-drie';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedGuide, setSelectedGuide] = useState<NicheCategory | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showAiAdvisor, setShowAiAdvisor] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);

  const [marketSignals, setMarketSignals] = useState<MarketSignal[]>([]);
  const [isMarketLoading, setIsMarketLoading] = useState(true);

  const navigateTo = (view: View, item?: any) => {
    setCurrentView(view);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    if (view === 'niche-detail' && item) setSelectedGuide(item);
    else if (view === 'artikel-detail' && item) setSelectedArticle(item);
    else if (view === 'home') { setSelectedGuide(null); setSelectedArticle(null); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadMarketData = useCallback(async () => {
    setIsMarketLoading(true);
    const { signals } = await fetchLiveMarketData();
    if (signals && signals.length > 0) {
      setMarketSignals(signals);
    }
    setIsMarketLoading(false);
  }, []);

  useEffect(() => {
    loadMarketData();
  }, [loadMarketData]);

  const getLinkView = (label: string): View => {
    switch(label) {
      case 'De Grote 3': return 'de-grote-drie';
      case 'Koopgidsen': return 'koopgidsen';
      case 'Redactie': return 'redactie';
      case 'Over Ons': return 'over-ons';
      default: return 'home';
    }
  };

  const getShopLink = (shop: string) => {
    const s = shop.toLowerCase();
    if (s.includes('bol')) return AFFILIATE_LINKS.bol;
    if (s.includes('amazon')) return AFFILIATE_LINKS.amazon;
    if (s.includes('coolblue')) return AFFILIATE_LINKS.coolblue;
    return AFFILIATE_LINKS.bol;
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-100 text-slate-900">
      
      {/* Top Intelligence Ticker with CTA Links */}
      <div className="bg-slate-50 border-b border-slate-100 py-2.5 overflow-hidden whitespace-nowrap relative z-[60] group/ticker">
        <div className="flex animate-scroll items-center gap-12 group-hover/ticker:[animation-play-state:paused]">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">LIVE MARKET SYNC 2025:</span>
           </div>
           {marketSignals.length > 0 ? marketSignals.map((s, i) => (
             <a 
               key={i} 
               href={s.url || getShopLink(s.shop)} 
               target="_blank" 
               rel="nofollow noopener" 
               className="flex items-center gap-3 hover:scale-105 transition-transform"
             >
                <span className={`text-[10px] font-black uppercase tracking-widest ${s.shop === 'bol' ? 'text-blue-600' : s.shop === 'coolblue' ? 'text-orange-600' : 'text-yellow-600'}`}>{s.shop}</span>
                <span className="text-[10px] font-bold text-slate-500 hover:text-brand-pink transition-colors">{s.message}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-300" />
             </a>
           )) : (
             <span className="text-[10px] font-bold text-slate-300 italic">Verbinden met bol, Amazon & Coolblue intelligence...</span>
           )}
        </div>
      </div>

      <header role="banner" className="bg-white/80 backdrop-blur-2xl sticky top-0 z-50 border-b border-slate-100 h-20">
        <nav role="navigation" className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="flex items-center gap-2 group">
              <div className="brand-gradient p-2 rounded-xl group-hover:scale-110 transition-transform shadow-md shadow-brand-pink/20">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">Kiesjeshop<span className="brand-text-gradient">.nl</span></span>
                <span className="text-[8px] font-black uppercase tracking-[0.15em] text-slate-400">Expert Comparison</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-6">
               {['De Grote 3', 'Koopgidsen', 'Redactie', 'Over Ons'].map((link) => (
                 <a 
                   key={link} 
                   href={`/${link.toLowerCase().replace(' ', '-')}`} 
                   onClick={(e) => { e.preventDefault(); navigateTo(getLinkView(link)); }}
                   className={`px-1 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                     currentView === getLinkView(link) ? 'text-brand-pink border-b-2 border-brand-pink' : 'text-slate-400 hover:text-slate-900'
                   }`}
                 >
                   {link}
                 </a>
               ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 text-slate-400 hover:text-brand-pink">
               <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setShowAiAdvisor(true)} className="bg-slate-900 text-white px-5 md:px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-brand-pink active:scale-95 transition-all">Advisor</button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
        
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 shadow-xl relative z-40">
             {['De Grote 3', 'Koopgidsen', 'Redactie', 'Over Ons'].map((link) => (
               <button 
                 key={link} 
                 onClick={() => navigateTo(getLinkView(link))}
                 className="text-left py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-600 border-b border-slate-50 last:border-0"
               >
                 {link}
               </button>
             ))}
          </div>
        )}
      </header>

      <main>
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-700">
            
            {/* CLEAN CONVERSION HERO */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                <div className="md:col-span-12 lg:col-span-8 bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 lg:p-24 relative overflow-hidden flex flex-col justify-center border border-slate-100 min-h-[500px] md:min-h-[600px] shadow-sm group">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1600" 
                      alt="Premium Tech Selection" 
                      className="w-full h-full object-cover opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-[8000ms]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                  </div>

                  <div className="relative z-10 max-w-xl">
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] mb-6 text-slate-900 border border-slate-200 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-brand-pink text-brand-pink" /> Independent Advisor 2025
                    </div>
                    
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
                      Vergelijk.<br />Bespaar.<br />
                      <span className="brand-text-gradient underline decoration-slate-200 underline-offset-8 uppercase">Direct.</span>
                    </h1>

                    <p className="text-lg md:text-xl font-bold text-slate-600 leading-relaxed mb-10 max-w-lg">
                      De slimste manier om prijzen en service bij <span className="text-blue-600">bol</span>, <span className="text-orange-600">Coolblue</span> & <span className="text-amber-600">Amazon</span> objectief te analyseren.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <button onClick={() => setShowAiAdvisor(true)} className="brand-gradient text-white px-8 md:px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-brand-pink/20 flex items-center gap-3">
                        Vraag Advies <Sparkles className="w-5 h-5" />
                      </button>
                      <button onClick={() => navigateTo('de-grote-drie')} className="bg-white text-slate-900 border border-slate-200 px-8 md:px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-slate-50 transition-all shadow-md">
                        De Grote 3
                      </button>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                  <div className="bg-white rounded-[2.5rem] p-8 flex flex-col justify-center border border-slate-100 shadow-sm h-1/2 min-h-[250px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><TrendingUp className="w-40 h-40 text-slate-900" /></div>
                    <div className="bg-pink-50 p-4 rounded-2xl w-fit mb-4 border border-pink-100">
                      <Zap className="w-6 h-6 text-brand-pink" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Market Pulse</h2>
                    <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">AI-gestuurde prijsdetectie bij de Big 3 retailers.</p>
                    <button onClick={() => { const el = document.getElementById('market-pulse'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="text-brand-pink text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                      Check Feed <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-slate-50 rounded-[2.5rem] p-8 flex flex-col justify-center border border-slate-100 shadow-sm h-1/2 min-h-[250px] group">
                     <div className="bg-blue-50 p-4 rounded-2xl w-fit mb-4 border border-blue-100">
                        <Cpu className="w-6 h-6 text-blue-600" />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Shopping Engine</h3>
                     <p className="text-slate-500 font-medium text-sm mb-6">Objectief oordeel op basis van voorraad en service.</p>
                     <button onClick={() => setShowAiAdvisor(true)} className="bg-slate-900 text-white w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-brand-pink transition-all">Start Consult</button>
                  </div>
                </div>
              </div>
            </section>

            {/* EXPERT TRUST GRID */}
            <section className="bg-white border-y border-slate-100 py-12 mb-12">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  { icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, label: "Geverifieerd", desc: "Live retail API data." },
                  { icon: <PieChart className="w-5 h-5 text-blue-500" />, label: "Service Score", desc: "NPS weging inbegrepen." },
                  { icon: <Clock className="w-5 h-5 text-amber-500" />, label: "Update 2025", desc: "Elke 15 min. ververst." },
                  { icon: <BarChart3 className="w-5 h-5 text-purple-500" />, label: "Onafhankelijk", desc: "Geen gesponsorde deals." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">{item.icon}</div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-0.5">{item.label}</h4>
                      <p className="text-[10px] text-slate-400 font-medium leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <SectionNav />

            {/* PULSE SECTION */}
            <div id="market-pulse" className="py-20 bg-slate-50 border-b border-slate-100 scroll-mt-24">
               <div className="max-w-7xl mx-auto px-6">
                 <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <span className="brand-text-gradient font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Intelligence Data</span>
                      <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">Market Intelligence Feed<span className="brand-text-gradient">.</span></h2>
                    </div>
                    <button onClick={loadMarketData} className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-pink transition-all shadow-sm">
                      <RefreshCcw className={`w-4 h-4 ${isMarketLoading ? 'animate-spin' : ''}`} /> Update Data
                    </button>
                 </div>
                 <MarketPulseDashboard onRefresh={loadMarketData} isLoading={isMarketLoading} />
               </div>
            </div>

            {/* DEALS SECTION */}
            <div id="compare" className="py-24 bg-white scroll-mt-24">
               <div className="max-w-7xl mx-auto px-6">
                 <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 uppercase">Populaire Vergelijkingen<span className="brand-text-gradient">.</span></h2>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">De meest gezochte producten direct afgezet tegen bol, Coolblue en Amazon.</p>
                 </div>
                 <ProductShowcase />
                 <div className="mt-24">
                    <ComparisonTable />
                 </div>
               </div>
            </div>

            {/* DUEL TOOL */}
            <div id="duel" className="py-24 bg-slate-50 border-y border-slate-100 scroll-mt-24">
               <div className="max-w-7xl mx-auto px-6">
                 <VersusTool />
               </div>
            </div>

            {/* KOOPGIDSEN */}
            <div id="gidsen" className="py-24 bg-white scroll-mt-24">
               <div className="max-w-7xl mx-auto px-6">
                 <NicheGuides onSelectGuide={(g) => navigateTo('niche-detail', g)} limit={4} />
                 <div className="mt-16 text-center">
                    <button 
                      onClick={() => navigateTo('koopgidsen')}
                      className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.4em] rounded-2xl shadow-xl hover:bg-brand-pink transition-all group"
                    >
                      Alle Koopgidsen 2025 <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
               </div>
            </div>

            <ReviewSection />
            <SeoContent />
            
            <div id="faq" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-24">
               <div className="max-w-7xl mx-auto px-6">
                  <FaqSection />
               </div>
            </div>
          </div>
        )}

        {currentView === 'de-grote-drie' && <TheBigThree onNavigate={navigateTo} />}
        {currentView === 'koopgidsen' && <div className="max-w-7xl mx-auto py-12 px-6"><NicheGuides onSelectGuide={(g) => navigateTo('niche-detail', g)} /></div>}
        {currentView === 'redactie' && <div className="max-w-7xl mx-auto py-12 px-6"><BlogSection onSelectArticle={(a) => navigateTo('artikel-detail', a)} /></div>}
        {currentView === 'niche-detail' && selectedGuide && <NicheDetail guide={selectedGuide} onBack={() => navigateTo('koopgidsen')} />}
        {currentView === 'artikel-detail' && selectedArticle && <ArticleModal article={selectedArticle} onClose={() => navigateTo('redactie')} onNavigateToShops={() => navigateTo('home')} inline={true} />}
        {currentView === 'over-ons' && <AboutPage onNavigate={navigateTo} />}
      </main>

      <footer role="contentinfo" className="bg-white text-slate-900 pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-16 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="brand-gradient p-2 rounded-xl"><ShoppingBag className="w-6 h-6 text-white" /></div>
                <span className="text-2xl font-black tracking-tighter uppercase">Kiesjeshop<span className="text-slate-300">.nl</span></span>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg mb-10 italic">
                Onafhankelijk advies op basis van bol, Amazon en Coolblue service intelligence.
              </p>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
                Affiliate Disclaimer: Kiesjeshop.nl ontvangt een commissie bij aankopen via onze links. Dit heeft geen invloed op uw prijs.
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink mb-8">Platform</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                <li><button onClick={() => navigateTo('home')} className="hover:text-slate-900 transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('de-grote-drie')} className="hover:text-slate-900 transition-colors">De Grote 3</button></li>
                <li><button onClick={() => navigateTo('koopgidsen')} className="hover:text-slate-900 transition-colors">Koopgidsen</button></li>
                <li><button onClick={() => navigateTo('redactie')} className="hover:text-slate-900 transition-colors">Redactie</button></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink mb-8">Service</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                <li><button onClick={() => navigateTo('over-ons')} className="hover:text-slate-900 transition-colors">Over ons</button></li>
                <li><button onClick={() => setIsAffiliateOpen(true)} className="hover:text-slate-900 transition-colors">Affiliates</button></li>
                <li><button onClick={() => setIsAboutOpen(true)} className="hover:text-slate-900 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink mb-8">Legal</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-slate-900 transition-colors">Privacybeleid</button></li>
                <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-slate-900 transition-colors">Voorwaarden</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-50 text-center">
            <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.5em]">© 2025 Kiesjeshop.nl — Onafhankelijke Retail Intelligence</p>
          </div>
        </div>
      </footer>

      {/* Floating UI elements */}
      {!showAiAdvisor && <FloatingAiButton visible={true} onClick={() => setShowAiAdvisor(true)} />}
      <ScrollToTop />

      {showAiAdvisor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setShowAiAdvisor(false)}></div>
          <div className="relative w-full max-w-5xl h-[90vh] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-slate-100 bg-white">
             <AiAdvisor />
             <button onClick={() => setShowAiAdvisor(false)} className="absolute top-6 md:top-10 right-6 md:right-10 p-3 bg-slate-100 text-slate-400 rounded-full hover:bg-brand-pink hover:text-white z-[110] transition-all"><X className="w-6 h-6" /></button>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <CommandPalette 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
          onNavigate={navigateTo} 
        />
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
