
import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingBag, Sparkles, X, Cpu, Search, Menu, ArrowRight, Zap, ArrowUpRight, Clock, Star, TrendingUp, ChevronRight, Globe, ShieldCheck, BarChart3, PieChart, CheckCircle2, Shield, RefreshCcw, Info, LayoutGrid, ArrowLeftRight, MessageSquare, BookOpen, Layers } from 'lucide-react';

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
import { ContactModal } from './components/ContactModal';
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
  const [aiInitialQuery, setAiInitialQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);

  const [marketSignals, setMarketSignals] = useState<MarketSignal[]>([]);
  const [isMarketLoading, setIsMarketLoading] = useState(true);

  const articleSlugMap: Record<string, number> = {
    "beste-co2-meter-test-bol-amazon": 1,
    "beste-steelstofzuiger-dyson-vs-samsung": 2,
    "airfryer-vergelijken-philips-xxl-vs-ninja": 3,
    "matter-thread-smart-home-hubs-kopen": 4,
    "sony-xm5-vs-bose-qc-ultra-noise-cancelling": 5,
    "beste-ergonomische-bureaustoel-rugpijn-voorkomen": 6,
    "portable-power-station-kopen-ecoflow-vs-bluetti": 7,
    "beste-koffiemachine-volautomaat-bol-coolblue": 8,
    "robotmaaier-zonder-draad-test-worx-husqvarna": 9,
    "beste-4k-oled-tv-vergelijken-lg-vs-samsung": 10
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRouting = useCallback(() => {
    const hash = window.location.hash.replace('#', '');
    const path = window.location.pathname;
    const activePath = hash || path;

    if (activePath === '/' || activePath === '' || activePath === '/index.html' || activePath === 'home') {
      setCurrentView('home');
    } else if (activePath === 'de-grote-drie') {
      setCurrentView('de-grote-drie');
    } else if (activePath === 'koopgidsen') {
      setCurrentView('koopgidsen');
    } else if (activePath === 'redactie') {
      setCurrentView('redactie');
    } else if (activePath === 'over-ons') {
      setCurrentView('over-ons');
    } else if (activePath.startsWith('niche/')) {
      const id = activePath.split('/')[1];
      const guide = NICHE_GUIDES.find(g => g.id === id);
      if (guide) {
        setSelectedGuide(guide);
        setCurrentView('niche-detail');
      } else {
        setCurrentView('koopgidsen');
      }
    } else if (activePath.startsWith('artikelen/')) {
      const slug = activePath.split('/')[1];
      const articleId = articleSlugMap[slug];
      const article = ARTICLES.find(a => a.id === articleId);
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
    let url = 'home';
    switch (view) {
      case 'home': url = 'home'; break;
      case 'de-grote-drie': url = 'de-grote-drie'; break;
      case 'koopgidsen': url = 'koopgidsen'; break;
      case 'redactie': url = 'redactie'; break;
      case 'over-ons': url = 'over-ons'; break;
      case 'niche-detail': if (item) url = `niche/${item.id}`; break;
      case 'artikel-detail': 
        if (item) {
          const slug = Object.keys(articleSlugMap).find(key => articleSlugMap[key] === item.id);
          url = `artikelen/${slug || item.id}`;
        }
        break;
    }
    window.location.hash = url;
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
      case 'DE GROTE 3': return 'de-grote-drie';
      case 'KOOPGIDSEN': return 'koopgidsen';
      case 'REDACTIE': return 'redactie';
      case 'OVER ONS': return 'over-ons';
      default: return 'home';
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-pink-100 text-slate-900 bg-[#F8FAFC]">
      
      {/* Top Intelligence Ticker */}
      <div className="bg-white border-b border-slate-100 py-1.5 overflow-hidden whitespace-nowrap relative z-[60]">
        <div className="flex animate-scroll items-center gap-12">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">LIVE MARKT SYNC:</span>
           </div>
           <span className="text-[9px] font-bold text-slate-400 italic">Verbinden met winkelgegevens...</span>
           {marketSignals.map((s, i) => (
             <span key={i} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{s.message}</span>
           ))}
        </div>
      </div>

      {/* Header - Transparent backdrop */}
      <header role="banner" className="bg-transparent sticky top-0 z-50 h-24 flex items-center">
        <nav role="navigation" className="max-w-[1800px] mx-auto px-6 w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="flex items-center gap-4 group">
              <div className="brand-gradient p-3.5 rounded-2xl shadow-lg">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none uppercase">Kiesjeshop<span className="brand-text-gradient">.nl</span></span>
                <span className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-400 mt-1">Onafhankelijke Experts</span>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-10">
             {['DE GROTE 3', 'KOOPGIDSEN', 'REDACTIE', 'OVER ONS'].map((link) => (
               <a 
                 key={link} 
                 href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                 onClick={(e) => { e.preventDefault(); navigateTo(getLinkView(link)); }}
                 className="text-[13px] font-black text-slate-400 hover:text-slate-900 tracking-widest transition-colors"
               >
                 {link}
               </a>
             ))}
             <button onClick={() => setIsSearchOpen(true)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
               <Search className="w-5 h-5" />
             </button>
             <button 
                onClick={() => { setAiInitialQuery(''); setShowAiAdvisor(true); }}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-brand-pink transition-all"
             >
                ADVISEUR
             </button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <main className="relative">
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-700">
            {/* HERO GRID - MATCHING SCREENSHOT */}
            <section className="max-w-[1800px] mx-auto px-6 pt-6 pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Main Hero Card */}
                <div className="lg:col-span-8 bg-white rounded-[3rem] p-12 md:p-16 relative overflow-hidden flex flex-col justify-center border border-slate-100 shadow-sm min-h-[500px]">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200" 
                      alt="Tech context" 
                      className="w-full h-full object-cover opacity-10" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
                  </div>

                  <div className="relative z-10 max-w-xl">
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] mb-8 text-slate-400 border border-slate-100 shadow-sm">
                      <Star className="w-3 h-3 text-brand-pink fill-brand-pink" /> Onafhankelijk Advies 2025
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 uppercase">
                      Vergelijk.<br />Bespaar.<br />
                      <span className="brand-text-gradient">DIRECT.</span>
                    </h1>

                    <p className="text-lg font-bold text-slate-500 leading-relaxed mb-10">
                      De slimste manier om prijzen en service bij <span className="text-blue-600 font-black">bol</span>, <span className="text-orange-600 font-black">Coolblue</span> & <span className="text-yellow-600 font-black">Amazon</span> objectief te analyseren.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <button onClick={() => { setAiInitialQuery(''); setShowAiAdvisor(true); }} className="bg-[#FF4F6E] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-pink/20 flex items-center gap-3">
                        VRAAG ADVIES <Sparkles className="w-4 h-4" />
                      </button>
                      <button onClick={() => navigateTo('de-grote-drie')} className="bg-white text-slate-900 border border-slate-100 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                        DE GROTE 3
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side Cards */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* Card 1: Markt Polsslag */}
                  <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-center border border-slate-100 shadow-sm flex-1 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-40 h-40 text-slate-900" />
                    </div>
                    <div className="bg-pink-50 p-3 rounded-xl w-fit mb-6">
                      <Zap className="w-5 h-5 text-brand-pink" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Markt Polsslag</h2>
                    <p className="text-slate-400 text-xs font-bold mb-6 leading-relaxed">Real-time prijsdetectie bij de drie grootste retailers.</p>
                    <button className="text-brand-pink text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-2 transition-transform">
                      CHECK FEED <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Winkelmodule */}
                  <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-center border border-slate-100 shadow-sm flex-1 relative overflow-hidden group">
                     <div className="bg-blue-50 p-3 rounded-xl w-fit mb-6">
                        <Cpu className="w-5 h-5 text-blue-500" />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Winkelmodule</h3>
                     <p className="text-slate-400 font-bold text-xs mb-8 leading-relaxed">Objectief eindoordeel op basis van voorraad en NPS-data.</p>
                     <button onClick={() => setShowAiAdvisor(true)} className="bg-slate-900 text-white w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-brand-pink transition-all">START AI ADVIES</button>
                  </div>
                </div>
              </div>

              {/* TRUST BADGES ROW - MATCHING SCREENSHOT */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-4">
                {[
                  { icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, label: "GEVERIFIEERD", desc: "LIVE API DATA SYNC." },
                  { icon: <PieChart className="w-5 h-5 text-blue-500" />, label: "SERVICE SCORE", desc: "NPS WEGING INCLUSIEF." },
                  { icon: <Clock className="w-5 h-5 text-amber-500" />, label: "UPDATE 2025", desc: "ELKE 15 MIN. VERVERST." },
                  { icon: <BarChart3 className="w-5 h-5 text-purple-500" />, label: "ONAFHANKELIJK", desc: "GEEN GESPONSORDE DEALS." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-xl border border-slate-50 shadow-sm shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-900 leading-none mb-1 uppercase tracking-widest">{item.label}</h4>
                      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* PILL NAVIGATION - MATCHING SCREENSHOT */}
              <div className="flex justify-center mt-12">
                 <SectionNav />
              </div>
            </section>

            <div id="market-pulse" className="scroll-mt-24 py-20 bg-slate-50/50">
               <div className="max-w-[1400px] mx-auto px-6">
                 <div className="mb-12">
                   <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase">Markt Dashboards.</h2>
                 </div>
                 <MarketPulseDashboard onRefresh={loadMarketData} isLoading={isMarketLoading} />
               </div>
            </div>

            <div id="compare" className="py-32 scroll-mt-24">
               <div className="max-w-[1400px] mx-auto px-6">
                 <ProductShowcase />
                 <div className="mt-32">
                    <ComparisonTable />
                 </div>
               </div>
            </div>

            <div id="duel" className="py-32 scroll-mt-24 bg-white">
               <div className="max-w-[1400px] mx-auto px-6">
                 <VersusTool />
               </div>
            </div>

            <div id="gidsen" className="py-32 scroll-mt-24">
               <div className="max-w-[1920px] mx-auto px-6 lg:px-12 mb-16 text-center">
                  <div className="inline-flex items-center gap-3 bg-rose-50 text-rose-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-rose-100 shadow-sm">
                    <BookOpen className="w-4 h-4" /> Koopadvies 2026
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase">Beste Koopgidsen 2026.</h2>
               </div>
               <NicheGuides onSelectGuide={(g) => navigateTo('niche-detail', g)} limit={4} />
               <div className="mt-20 text-center">
                  <button onClick={() => navigateTo('koopgidsen')} className="inline-flex items-center gap-4 px-12 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-brand-pink transition-all shadow-lg">ONTDEK ALLE GIDSEN <ArrowRight className="w-5 h-5" /></button>
               </div>
            </div>

            <ReviewSection />
            <SeoContent />
            <div id="faq" className="py-32 scroll-mt-24"><FaqSection /></div>
          </div>
        )}

        {currentView === 'de-grote-drie' && <TheBigThree onNavigate={navigateTo} />}
        {currentView === 'koopgidsen' && <div className="py-16"><NicheGuides onSelectGuide={(g) => navigateTo('niche-detail', g)} /></div>}
        {currentView === 'redactie' && <div className="py-16"><BlogSection onSelectArticle={(a) => navigateTo('artikel-detail', a)} /></div>}
        {currentView === 'niche-detail' && selectedGuide && <NicheDetail guide={selectedGuide} onBack={() => navigateTo('koopgidsen')} />}
        {currentView === 'artikel-detail' && selectedArticle && <ArticleModal article={selectedArticle} onClose={() => navigateTo('redactie')} onNavigateToShops={() => navigateTo('home')} inline={true} />}
        {currentView === 'over-ons' && <AboutPage onNavigate={navigateTo} />}
      </main>

      <footer className="bg-white text-slate-900 pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="brand-gradient p-2.5 rounded-xl shadow-lg shadow-brand-pink/20"><ShoppingBag className="w-5 h-5 text-white" /></div>
                <span className="text-2xl font-black tracking-tighter uppercase">Kiesjeshop<span className="text-slate-400">.nl</span></span>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg mb-10 italic">
                De meest betrouwbare bron voor onafhankelijk koopadvies op basis van retail intelligence en big data.
              </p>
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
                Affiliate Disclaimer: Kiesjeshop.nl is onafhankelijk. Wij ontvangen een commissie bij aankopen via onze links. Dit garandeert onze advertentievrije ervaring.
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-pink mb-8">Systeem</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                <li><button onClick={() => navigateTo('home')} className="hover:text-brand-pink transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('de-grote-drie')} className="hover:text-brand-pink transition-colors">De Grote 3</button></li>
                <li><button onClick={() => navigateTo('koopgidsen')} className="hover:text-brand-pink transition-colors">Koopgidsen</button></li>
                <li><button onClick={() => navigateTo('redactie')} className="hover:text-brand-pink transition-colors">Redactie</button></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-pink mb-8">Service</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                <li><button onClick={() => navigateTo('over-ons')} className="hover:text-brand-pink transition-colors">Onze Methode</button></li>
                <li><button onClick={() => setIsAffiliateOpen(true)} className="hover:text-brand-pink transition-colors">Partners</button></li>
                <li><button onClick={() => setIsContactOpen(true)} className="hover:text-brand-pink transition-colors">Contact</button></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-pink mb-8">Juridisch</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-brand-pink transition-colors">Privacybeleid</button></li>
                <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-brand-pink transition-colors">Voorwaarden</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">© 2026 Kiesjeshop.nl — Retail Intelligence Protocol</p>
          </div>
        </div>
      </footer>

      {!showAiAdvisor && <FloatingAiButton visible={isScrolledPastHero} onClick={() => { setAiInitialQuery(''); setShowAiAdvisor(true); }} />}
      <ScrollToTop />

      {showAiAdvisor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl" onClick={() => setShowAiAdvisor(false)}></div>
          <div className="relative w-full max-w-6xl h-[90vh] overflow-hidden rounded-[3rem] shadow-2xl border border-white/10 bg-white">
             <AiAdvisor initialQuery={aiInitialQuery} />
             <button onClick={() => setShowAiAdvisor(false)} className="absolute top-8 right-8 p-4 bg-slate-100 text-slate-500 rounded-full hover:bg-brand-pink hover:text-white z-[110] transition-all shadow-xl"><X className="w-6 h-6" /></button>
          </div>
        </div>
      )}

      {isSearchOpen && <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onNavigate={navigateTo} />}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <AffiliateModal isOpen={isAffiliateOpen} onClose={() => setIsAffiliateOpen(false)} />
      <CookieBanner />
    </div>
  );
};

export default App;
