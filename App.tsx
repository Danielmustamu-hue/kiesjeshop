
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X, Globe, Cpu, MapPin, ShieldCheck, ChevronRight, Mail, LayoutGrid, BarChart3, TrendingUp, Cookie, Info, ArrowRight, Zap, Search, Bell, ArrowUp } from 'lucide-react';

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

// Data
import { SHOPS } from './constants';
import { NICHE_GUIDES, NicheCategory } from './data/niches';
import { ARTICLES, Article } from './data/articles';

type View = 'home' | 'koopgidsen' | 'redactie' | 'niche-detail' | 'artikel-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedGuide, setSelectedGuide] = useState<NicheCategory | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showAiAdvisor, setShowAiAdvisor] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cookieBannerKey, setCookieBannerKey] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, [currentView]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    setSelectedGuide(null);
    setSelectedArticle(null);
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setCurrentView('artikel-detail');
  };

  const handleSelectGuide = (guide: NicheCategory) => {
    setSelectedGuide(guide);
    setCurrentView('niche-detail');
  };

  const handleModalToShops = () => {
    setCurrentView('home');
    setSelectedArticle(null);
    setTimeout(() => {
      const shopSection = document.getElementById('shops-section');
      if (shopSection) {
        shopSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const triggerCookieSettings = () => {
    localStorage.removeItem('kiesjeshop-cookie-consent');
    setCookieBannerKey(prev => prev + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-100">
      
      {/* HEADER */}
      <nav className="bg-white/90 backdrop-blur-2xl sticky top-0 z-50 border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => navigateTo('home')}
            >
              <div className="bg-slate-950 p-2 rounded-lg group-hover:bg-indigo-600 transition-colors">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-slate-950 tracking-tighter">
                Kiesjeshop<span className="text-slate-400">.nl</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
               <button 
                 onClick={() => navigateTo('home')}
                 className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all ${currentView === 'home' ? 'bg-indigo-600/10 text-indigo-600' : 'text-slate-400 hover:text-slate-900'}`}
               >
                 <Cpu className="w-3.5 h-3.5" /> Intelligence
               </button>
               <button onClick={() => navigateTo('koopgidsen')} className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${currentView === 'koopgidsen' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-900'}`}>Koopgidsen</button>
               <button onClick={() => navigateTo('redactie')} className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${currentView === 'redactie' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-900'}`}>Redactie</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowAiAdvisor(true)}
              className="hidden md:flex items-center gap-2 bg-slate-950 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl active:scale-95"
            >
              <Cpu className="w-4 h-4 text-indigo-400" /> Consultant
            </button>
            <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* TRENDING TICKER */}
      <div className="bg-slate-900 py-3 overflow-hidden whitespace-nowrap border-b border-white/5">
        <div className="flex items-center animate-scroll gap-12 text-[9px] font-black uppercase tracking-[0.3em]">
           <span className="text-emerald-400 flex items-center gap-2"><Zap className="w-3 h-3" /> Trending: Apple AirPods Pro 2 goedkoopst bij Amazon</span>
           <span className="text-indigo-400 flex items-center gap-2"><TrendingUp className="w-3 h-3" /> bol.com 7-daagse gestart</span>
           <span className="text-orange-400 flex items-center gap-2"><Globe className="w-3 h-3" /> Coolblue service-score gestegen</span>
           <span className="text-emerald-400 flex items-center gap-2"><Zap className="w-3 h-3" /> Sony XM5 Prijscheck voltooid</span>
           <span className="text-white opacity-40">++ Real-time Market Access Enabled ++</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-1000">
            {/* HERO SECTION */}
            <div className="grid lg:grid-cols-12 gap-8 mb-24">
              <div className="lg:col-span-7 intelligence-card p-12 md:p-24 relative overflow-hidden group border border-slate-100/50">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-12">
                    <Sparkles className="w-4 h-4 animate-pulse" /> Platform 2025
                  </div>
                  <h1 className="text-6xl md:text-[9.2rem] font-black text-slate-950 leading-[0.82] tracking-tighter mb-16">
                    Vergelijk.<br/>
                    Bespaar.<br/>
                    <span className="text-intelligence">Geniet.</span>
                  </h1>
                  <p className="text-xl text-slate-500 font-medium max-w-lg mb-12 leading-relaxed">
                    De onafhankelijke gids die <span className="text-blue-500 font-bold underline underline-offset-8">bol</span>, <span className="text-yellow-600 font-bold underline underline-offset-8">Amazon</span> en <span className="text-orange-500 font-bold underline underline-offset-8">Coolblue</span> voor jou ontleedt.
                  </p>
                  
                  <button onClick={() => setIsAffiliateOpen(true)} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors mb-16">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Onafhankelijk & Transparant
                  </button>

                  <div className="flex flex-wrap gap-5">
                    <button onClick={() => setShowAiAdvisor(true)} className="bg-slate-950 text-white px-12 py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all shadow-2xl active:scale-95">
                      Vraag de AI Consultant
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="bg-slate-950 rounded-[3.5rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden h-[360px] shadow-2xl border border-white/5">
                  <div className="bg-indigo-500/10 p-5 rounded-3xl mb-8 border border-indigo-500/20">
                    <Cpu className="w-10 h-10 text-indigo-400" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4 tracking-tighter">AI Advisor</h2>
                  <p className="text-slate-400 text-sm font-medium mb-10 max-w-[240px]">
                    Krijg direct antwoord op jouw specifieke shopping-vraag.
                  </p>
                  <button 
                    onClick={() => setShowAiAdvisor(true)}
                    className="bg-white text-slate-950 w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-50 transition-all"
                  >
                    Start Chat
                  </button>
                </div>

                <div className="bg-indigo-600 rounded-[3.5rem] p-12 flex flex-col justify-between h-[360px] text-white shadow-2xl relative overflow-hidden group border border-white/10">
                   <LiveMarketTicker />
                </div>
              </div>
            </div>

            {/* MARKET PULSE OVERVIEW */}
            <div className="mb-24">
               <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-grow bg-slate-200"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 px-6">Live Market Analysis</span>
                  <div className="h-px flex-grow bg-slate-200"></div>
               </div>
               <MarketPulseDashboard />
            </div>

            {/* DE GROTE 3 */}
            <div id="shops-section" className="mb-32">
               <div className="mb-16 text-center">
                  <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter mb-4">De Grote 3<span className="text-indigo-600">.</span></h2>
                  <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto leading-relaxed">De giganten van de Benelux vergeleken op service, prijs en betrouwbaarheid.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {SHOPS.map(shop => (
                    <ShopCard key={shop.id} shop={shop} />
                  ))}
               </div>
               <div className="mt-24">
                  <ComparisonTable />
               </div>
            </div>

            {/* PRODUCT SHOWCASE */}
            <div className="mb-32">
               <div className="mb-16">
                  <h2 className="text-5xl font-black text-slate-950 tracking-tighter mb-4">Directe Vergelijking<span className="text-indigo-600">.</span></h2>
                  <p className="text-slate-500 font-medium text-xl max-w-xl">Top-tier producten direct geanalyseerd op prijs en levertijd bij de Grote 3.</p>
               </div>
               <ProductShowcase />
            </div>

            {/* KOOPGIDSEN PREVIEW */}
            <div className="mb-32 bg-white rounded-[4rem] p-12 md:p-24 border border-slate-100 shadow-sm">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                  <div>
                    <h2 className="text-5xl font-black text-slate-950 tracking-tighter mb-4">Beste Koop 2025<span className="text-indigo-600">.</span></h2>
                    <p className="text-slate-500 font-medium text-xl max-w-xl">Onze redactie heeft de 8 meest complexe categorieën voor je uitgezocht.</p>
                  </div>
                  <button onClick={() => navigateTo('koopgidsen')} className="flex items-center gap-4 bg-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">
                    Alle Gidsen <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
               <NicheGuides onSelectGuide={handleSelectGuide} limit={4} />
            </div>

            {/* REDACTIE PREVIEW */}
            <div className="mb-32">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                  <div>
                    <h2 className="text-5xl font-black text-slate-950 tracking-tighter mb-4">Latest Intelligence<span className="text-indigo-600">.</span></h2>
                    <p className="text-slate-500 font-medium text-xl max-w-xl">Diepgaande analyses van de nieuwste tech-trends en winkel-psychologie.</p>
                  </div>
                  <button onClick={() => navigateTo('redactie')} className="flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all">
                    Naar Redactie <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {ARTICLES.slice(0, 2).map(article => (
                    <div key={article.id} onClick={() => handleSelectArticle(article)} className="group cursor-pointer bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-[400px] relative">
                        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 right-10">
                           <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-4 block">{article.category}</span>
                           <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-indigo-300 transition-colors">{article.title}</h3>
                        </div>
                    </div>
                  ))}
               </div>
            </div>

            <ReviewSection />
            <FaqSection />
          </div>
        )}

        {currentView === 'koopgidsen' && (
          <div className="animate-in fade-in duration-700">
             <div className="mb-16">
                <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter mb-4">Koopgidsen<span className="text-indigo-600">.</span></h2>
                <p className="text-slate-500 font-medium text-xl">8 Specialistische categorieën waar de verschillen tussen shops het grootst zijn.</p>
             </div>
             <NicheGuides onSelectGuide={handleSelectGuide} />
          </div>
        )}

        {currentView === 'redactie' && (
           <div className="animate-in fade-in duration-700">
             <BlogSection onSelectArticle={handleSelectArticle} />
           </div>
        )}

        {currentView === 'niche-detail' && selectedGuide && <NicheDetail guide={selectedGuide} onBack={() => navigateTo('home')} />}
        {currentView === 'artikel-detail' && selectedArticle && <ArticleModal article={selectedArticle} onClose={() => navigateTo('redactie')} onNavigateToShops={handleModalToShops} inline={true} />}
      </main>

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[90] p-4 bg-slate-950 text-white rounded-full shadow-2xl hover:bg-indigo-600 transition-all animate-in fade-in zoom-in"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-indigo-600 p-2 rounded-lg"><ShoppingBag className="w-6 h-6 text-white" /></div>
                <span className="text-3xl font-black tracking-tighter">Kiesjeshop<span className="text-slate-600">.nl</span></span>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-lg mb-12">
                Intelligence driven platform voor shop-analyse. Wij filteren de ruis, jij kiest de kwaliteit.
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-10">Platform</h4>
              <ul className="space-y-6 text-slate-400 font-bold text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Intelligence</button></li>
                <li><button onClick={() => navigateTo('koopgidsen')} className="hover:text-white transition-colors">Koopgidsen</button></li>
                <li><button onClick={() => navigateTo('redactie')} className="hover:text-white transition-colors">Redactie</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-10">Bedrijf</h4>
              <ul className="space-y-6 text-slate-400 font-bold text-sm">
                <li><button onClick={() => setIsAboutOpen(true)} className="hover:text-white transition-colors">Over ons</button></li>
                <li><a href="mailto:info@kiesjeshop.nl" className="hover:text-white transition-colors">Contact</a></li>
                <li><button onClick={() => setIsAffiliateOpen(true)} className="hover:text-white transition-colors flex items-center gap-2"><Info className="w-3.5 h-3.5" /> Affiliates</button></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-10">Juridisch & AVG</h4>
              <ul className="space-y-6 text-slate-400 font-bold text-sm mb-12">
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-indigo-500" /> Privacybeleid</button></li>
                <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Voorwaarden</button></li>
                <li><button onClick={triggerCookieSettings} className="hover:text-white transition-colors flex items-center gap-2"><Cookie className="w-4 h-4 text-indigo-500" /> Cookie instellingen</button></li>
              </ul>
              <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                   <MapPin className="w-4 h-4 text-indigo-500" /> Regio
                </div>
                <p className="text-sm text-slate-500 font-bold">Amstelveen, Nederland</p>
                <p className="text-[10px] text-slate-600 mt-2 italic">Onafhankelijk Expert Advies</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
              © 2025 Kiesjeshop.nl — Intelligent Comparison Platform
            </p>
            <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
              <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Network Active</span>
            </div>
          </div>
        </div>
      </footer>

      {/* AI OVERLAY */}
      {showAiAdvisor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" onClick={() => setShowAiAdvisor(false)}></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[4rem] shadow-2xl border border-white/10">
             <AiAdvisor />
             <button onClick={() => setShowAiAdvisor(false)} className="absolute top-10 right-10 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all border border-white/10">
                <X className="w-6 h-6" />
             </button>
          </div>
        </div>
      )}

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <AffiliateModal isOpen={isAffiliateOpen} onClose={() => setIsAffiliateOpen(false)} />
      <CookieBanner key={cookieBannerKey} />
    </div>
  );
};

export default App;
