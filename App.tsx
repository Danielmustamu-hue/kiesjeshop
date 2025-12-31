
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
import { NICHE_GUIDES, NicheCategory } from './data/niches';
import { ARTICLES, Article } from './data/articles';

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

  const handleRouting = useCallback(() => {
    const hash = window.location.hash || '#/';
    const path = hash.replace(/^#/, '');
    
    if (path === '/' || path === '') {
      setCurrentView('home');
    } else if (path === '/de-grote-drie') {
      setCurrentView('de-grote-drie');
    } else if (path === '/koopgidsen') {
      setCurrentView('koopgidsen');
    } else if (path === '/redactie') {
      setCurrentView('redactie');
    } else if (path === '/over-ons') {
      setCurrentView('over-ons');
    } else if (path.startsWith('/koopgidsen/')) {
      const id = path.split('/')[2];
      const guide = NICHE_GUIDES.find(g => g.id === id);
      if (guide) {
        setSelectedGuide(guide);
        setCurrentView('niche-detail');
      } else {
        setCurrentView('koopgidsen');
      }
    } else if (path.startsWith('/artikel/')) {
      const id = parseInt(path.split('/')[2]);
      const article = ARTICLES.find(a => a.id === id);
      if (article) {
        setSelectedArticle(article);
        setCurrentView('artikel-detail');
      } else {
        setCurrentView('redactie');
      }
    } else {
      setCurrentView('home');
    }
  }, []);

  useEffect(() => {
    handleRouting();
    window.addEventListener('hashchange', handleRouting);
    return () => window.removeEventListener('hashchange', handleRouting);
  }, [handleRouting]);

  const navigateTo = (view: View, item?: any) => {
    let path = '/';
    switch (view) {
      case 'home': path = '/'; break;
      case 'de-grote-drie': path = '/de-grote-drie'; break;
      case 'koopgidsen': path = '/koopgidsen'; break;
      case 'redactie': path = '/redactie'; break;
      case 'over-ons': path = '/over-ons'; break;
      case 'niche-detail': if (item) path = `/koopgidsen/${item.id}`; break;
      case 'artikel-detail': if (item) path = `/artikel/${item.id}`; break;
    }

    window.location.hash = path;
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
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
    <div className="min-h-screen font-sans selection:bg-brand-pink selection:text-white text-slate-900 bg-transparent">
      
      {/* Top Intelligence Ticker */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/10 py-2.5 overflow-hidden whitespace-nowrap relative z-[60] group/ticker">
        <div className="flex animate-scroll items-center gap-12 group-hover/ticker:[animation-play-state:paused]">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-pulse"></div>
              <span className="text-[9px] font-black text-brand-pink uppercase tracking-[0.3em]">LIVE MARKT SYNC 2026:</span>
           </div>
           {marketSignals.length > 0 ? marketSignals.map((s, i) => (
             <a 
               key={i} 
               href={s.url || getShopLink(s.shop)} 
               target="_blank" 
               rel="nofollow noopener" 
               className="flex items-center gap-3 hover:scale-105 transition-transform"
             >
                <span className={`text-[10px] font-black uppercase tracking-widest ${s.shop === 'bol' ? 'text-blue-600' : s.shop === 'coolblue' ? 'text-orange-600' : 'text-slate-900'}`}>{s.shop}</span>
                <span className="text-[10px] font-bold text-slate-800 hover:text-brand-pink transition-colors">{s.message}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
             </a>
           )) : (
             <span className="text-[10px] font-bold text-slate-500 italic">Verbinden met winkelgegevens...</span>
           )}
        </div>
      </div>

      <header role="banner" className="bg-white/20 backdrop-blur-3xl sticky top-0 z-50 border-b border-white/10 h-20">
        <nav role="navigation" className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="flex items-center gap-2 group">
              <div className="brand-gradient p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-brand-pink/20">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">Kiesjeshop<span className="brand-text-gradient">.nl</span></span>
                <span className="text-[8px] font-black uppercase tracking-[0.15em] text-slate-500">Onafhankelijke Experts</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-6">
               {['De Grote 3', 'Koopgidsen', 'Redactie', 'Over Ons'].map((link) => (
                 <a 
                   key={link} 
                   href={`#/${link.toLowerCase().replace(/ /g, '-').replace('3', 'drie')}`} 
                   onClick={(e) => { e.preventDefault(); navigateTo(getLinkView(link)); }}
                   className={`px-1 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                     currentView === getLinkView(link) ? 'text-brand-pink border-b-2 border-brand-pink' : 'text-slate-600 hover:text-slate-900'
                   }`}
                 >
                   {link}
                 </a>
               ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 text-slate-600 hover:text-brand-pink transition-colors">
               <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setShowAiAdvisor(true)} className="bg-slate-900 text-white px-5 md:px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-brand-pink active:scale-95 transition-all">Adviseur</button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
        
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 shadow-xl relative z-40">
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
            {/* HERO SECTION - Vibrant Background Interaction */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-24">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                <div className="md:col-span-12 lg:col-span-8 bg-white/20 backdrop-blur-[100px] rounded-[4xl] md:rounded-[5xl] p-10 md:p-20 lg:p-28 relative overflow-hidden flex flex-col justify-center border border-white/50 min-h-[500px] md:min-h-[700px] shadow-2xl group">
                  <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <img 
                      src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1600" 
                      alt="Premium Tech Background" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8000ms]" 
                    />
                  </div>

                  <div className="relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-brand-pink border border-white/50 shadow-lg">
                      <Sparkles className="w-4 h-4 text-brand-pink animate-pulse" /> Onafhankelijk Advies 2026
                    </div>
                    
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10 hero-glow">
                      Vergelijk.<br />
                      Bespaar.<br />
                      <span className="brand-text-gradient underline decoration-brand-orange/20 underline-offset-[12px] uppercase">Nu.</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed mb-12 max-w-lg">
                      De slimste manier om prijzen en service bij <span className="text-blue-600 underline decoration-blue-200">bol</span>, <span className="text-orange-600 underline decoration-orange-200">Coolblue</span> & <span className="text-slate-900 underline decoration-slate-200">Amazon</span> objectief te analyseren.
                    </p>

                    <div className="flex flex-wrap gap-5">
                      <button onClick={() => setShowAiAdvisor(true)} className="brand-gradient text-white px-10 md:px-12 py-6 rounded-3xl font-black text-[11px] uppercase tracking-[0.3em] hover:brightness-110 hover:scale-105 transition-all shadow-2xl shadow-brand-pink/40 flex items-center gap-4">
                        Start AI Advies <ArrowRight className="w-5 h-5" />
                      </button>
                      <button onClick={() => navigateTo('de-grote-drie')} className="bg-white/80 backdrop-blur-md text-slate-900 border border-white/50 px-10 md:px-12 py-6 rounded-3xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl">
                        De Grote 3
                      </button>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-8">
                  <div className="intelligence-card bg-white/30 backdrop-blur-[60px] p-10 flex flex-col justify-center h-1/2 min-h-[300px] relative overflow-hidden group hover:scale-[1.02] transition-all border border-white/40">
                    <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:scale-110 transition-transform"><TrendingUp className="w-64 h-64 text-slate-900" /></div>
                    <div className="brand-gradient p-5 rounded-2xl w-fit mb-6 shadow-lg shadow-brand-pink/20">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Markt Polsslag</h2>
                    <p className="text-slate-700 text-base font-medium mb-10 leading-relaxed">Direct inzicht in prijsdetectie bij de drie grootste retailers.</p>
                    <button onClick={() => { const el = document.getElementById('market-pulse'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="text-brand-pink text-[11px] font-black uppercase tracking-widest flex items-center gap-3 hover:gap-6 transition-all">
                      Bekijk Feed <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="bg-slate-950/80 backdrop-blur-[60px] rounded-[3rem] md:rounded-[4rem] p-10 flex flex-col justify-center h-1/2 min-h-[300px] group border border-white/10 shadow-2xl relative overflow-hidden">
                     <div className="absolute inset-0 bg-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="bg-white/10 p-5 rounded-2xl w-fit mb-6 border border-white/10">
                        <Cpu className="w-8 h-8 text-brand-pink" />
                     </div>
                     <h3 className="text-3xl font-black text-white tracking-tight mb-3">Shopping Intelligence</h3>
                     <p className="text-slate-400 font-medium text-base mb-10 leading-relaxed">Objectief oordeel op basis van Tier 1 voorraad en service data.</p>
                     <button onClick={() => setShowAiAdvisor(true)} className="bg-white text-slate-950 w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl hover:bg-brand-pink hover:text-white transition-all">Vraag de AI Expert</button>
                  </div>
                </div>
              </div>
            </section>

            {/* WHITE SECTION START - Transition to solid white for data clarity */}
            <div className="bg-white rounded-t-[4rem] md:rounded-t-[6rem] shadow-[0_-50px_100px_rgba(0,0,0,0.02)] mt-12 relative z-10 border-t border-slate-50">
              <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, label: "Geverifieerd", desc: "Real-time API koppelingen." },
                  { icon: <PieChart className="w-6 h-6 text-blue-500" />, label: "Service Score", desc: "NPS weging inbegrepen." },
                  { icon: <Clock className="w-6 h-6 text-amber-500" />, label: "Update 2026", desc: "Continu ververste data." },
                  { icon: <BarChart3 className="w-6 h-6 text-purple-500" />, label: "Onafhankelijk", desc: "Geen gesponsorde ranking." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left group">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-1">{item.label}</h4>
                      <p className="text-xs text-slate-400 font-medium leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </section>

              <SectionNav />

              {/* PULSE SECTION */}
              <div id="market-pulse" className="py-24 bg-white scroll-mt-24">
                 <div className="max-w-7xl mx-auto px-6">
                   <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                      <div>
                        <span className="brand-text-gradient font-black text-[11px] uppercase tracking-[0.5em] mb-4 block">Intelligence Dashboard</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">Live Marktoverzicht<span className="brand-text-gradient">.</span></h2>
                      </div>
                      <button onClick={loadMarketData} className="flex items-center gap-4 px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-brand-pink hover:bg-white transition-all shadow-sm">
                        <RefreshCcw className={`w-5 h-5 ${isMarketLoading ? 'animate-spin' : ''}`} /> Update Data
                      </button>
                   </div>
                   <MarketPulseDashboard onRefresh={loadMarketData} isLoading={isMarketLoading} />
                 </div>
              </div>

              {/* DEALS SECTION */}
              <div id="compare" className="py-24 bg-slate-50/50 border-y border-slate-100 scroll-mt-24">
                 <div className="max-w-7xl mx-auto px-6">
                   <div className="mb-20 text-center md:text-left">
                      <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 uppercase">Top Vergelijkingen<span className="brand-text-gradient">.</span></h2>
                      <p className="text-slate-500 font-medium text-xl max-w-2xl leading-relaxed">De meest gezochte producten direct afgezet tegen bol, Coolblue en Amazon.</p>
                   </div>
                   <ProductShowcase />
                   <div className="mt-32">
                      <ComparisonTable />
                   </div>
                 </div>
              </div>

              {/* DUEL TOOL */}
              <div id="duel" className="py-32 bg-white scroll-mt-24">
                 <div className="max-w-7xl mx-auto px-6">
                   <VersusTool />
                 </div>
              </div>

              {/* KOOPGIDSEN */}
              <div id="gidsen" className="py-32 bg-slate-50/50 border-y border-slate-100 scroll-mt-24">
                 <div className="max-w-7xl mx-auto px-6">
                   <NicheGuides onSelectGuide={(g) => navigateTo('niche-detail', g)} limit={4} />
                   <div className="mt-20 text-center">
                      <button 
                        onClick={() => navigateTo('koopgidsen')}
                        className="inline-flex items-center gap-6 px-14 py-7 bg-slate-950 text-white font-black text-[12px] uppercase tracking-[0.4em] rounded-[2.5rem] shadow-2xl hover:bg-brand-pink transition-all group active:scale-95"
                      >
                        Bekijk Koopgidsen 2026 <ChevronRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                      </button>
                   </div>
                 </div>
              </div>

              <ReviewSection />
              <SeoContent />
              
              <div id="faq" className="py-32 bg-white scroll-mt-24">
                 <div className="max-w-7xl mx-auto px-6">
                    <FaqSection />
                 </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'de-grote-drie' && <TheBigThree onNavigate={navigateTo} />}
        {currentView === 'koopgidsen' && <div className="max-w-7xl mx-auto py-20 px-6"><NicheGuides onSelectGuide={(g) => navigateTo('niche-detail', g)} /></div>}
        {currentView === 'redactie' && <div className="max-w-7xl mx-auto py-20 px-6"><BlogSection onSelectArticle={(a) => navigateTo('artikel-detail', a)} /></div>}
        {currentView === 'niche-detail' && selectedGuide && <NicheDetail guide={selectedGuide} onBack={() => navigateTo('koopgidsen')} />}
        {currentView === 'artikel-detail' && selectedArticle && <ArticleModal article={selectedArticle} onClose={() => navigateTo('redactie')} onNavigateToShops={() => navigateTo('home')} inline={true} />}
        {currentView === 'over-ons' && <AboutPage onNavigate={navigateTo} />}
      </main>

      <footer role="contentinfo" className="bg-white text-slate-900 pt-32 pb-16 border-t border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-16 md:gap-20 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="brand-gradient p-3 rounded-2xl shadow-lg shadow-brand-pink/20"><ShoppingBag className="w-6 h-6 text-white" /></div>
                <span className="text-2xl font-black tracking-tighter uppercase">Kiesjeshop<span className="text-slate-300">.nl</span></span>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg mb-12 italic">
                Onafhankelijk advies op basis van bol, Amazon en Coolblue servicegegevens.
              </p>
              <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
                Affiliate Disclaimer: Kiesjeshop.nl ontvangt een commissie bij aankopen via onze links. Dit heeft geen invloed op uw prijs.
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-pink mb-10">Platform</h4>
              <ul className="space-y-5 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                <li><button onClick={() => navigateTo('home')} className="hover:text-slate-900 transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('de-grote-drie')} className="hover:text-slate-900 transition-colors">De Grote 3</button></li>
                <li><button onClick={() => navigateTo('koopgidsen')} className="hover:text-slate-900 transition-colors">Koopgidsen</button></li>
                <li><button onClick={() => navigateTo('redactie')} className="hover:text-slate-900 transition-colors">Redactie</button></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-pink mb-10">Service</h4>
              <ul className="space-y-5 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                <li><button onClick={() => navigateTo('over-ons')} className="hover:text-slate-900 transition-colors">Over ons</button></li>
                <li><button onClick={() => setIsAffiliateOpen(true)} className="hover:text-slate-900 transition-colors">Affiliates</button></li>
                <li><button onClick={() => setIsAboutOpen(true)} className="hover:text-slate-900 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-pink mb-10">Legal</h4>
              <ul className="space-y-5 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-slate-900 transition-colors">Privacybeleid</button></li>
                <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-slate-900 transition-colors">Voorwaarden</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-50 text-center">
            <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.6em]">© 2026 Kiesjeshop.nl — Onafhankelijke Retail Intelligence</p>
          </div>
        </div>
      </footer>

      {/* Floating UI elements */}
      {!showAiAdvisor && <FloatingAiButton visible={true} onClick={() => setShowAiAdvisor(true)} />}
      <ScrollToTop />

      {showAiAdvisor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl" onClick={() => setShowAiAdvisor(false)}></div>
          <div className="relative w-full max-w-6xl h-[90vh] overflow-hidden rounded-[3rem] md:rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/20 bg-white">
             <AiAdvisor />
             <button onClick={() => setShowAiAdvisor(false)} className="absolute top-8 md:top-12 right-8 md:right-12 p-4 bg-slate-100 text-slate-400 rounded-full hover:bg-brand-pink hover:text-white z-[110] transition-all"><X className="w-7 h-7" /></button>
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
