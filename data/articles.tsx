import React from 'react';
import { Laptop, Gift, Home, Tag, Book, Lightbulb, Bot, Headphones, Wind, MousePointer2, Zap, ChefHat, Dumbbell, Dog, Cable, ArrowRight, ExternalLink, ShoppingCart, Keyboard, Wifi } from 'lucide-react';

// Helper functie voor affiliate links (deze stond eerst alleen in NicheGuides)
const getSearchLink = (type: 'bol' | 'coolblue' | 'amazon', query: string) => {
  const encoded = encodeURIComponent(query);
  switch (type) {
    case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=${encoded}`;
    case 'coolblue': return `https://www.coolblue.nl/zoeken?query=${encoded}`;
    case 'amazon': return `https://www.amazon.nl/s?k=${encoded}&tag=kiesjeshop-21`;
    default: return '#';
  }
};

interface TextLinkProps {
  to: 'bol' | 'coolblue' | 'amazon';
  query: string;
  children: React.ReactNode;
}

// Herbruikbare Link Component voor in de tekst
const TextLink: React.FC<TextLinkProps> = ({ to, query, children }) => (
  <a 
    href={getSearchLink(to, query)} 
    target="_blank" 
    rel="nofollow noreferrer" 
    className="text-indigo-600 font-bold hover:underline decoration-2 underline-offset-2 inline-flex items-center gap-0.5"
  >
    {children}
    <ExternalLink className="w-3 h-3 opacity-50" />
  </a>
);

export interface Article {
  id: number;
  category: string;
  icon: React.ReactNode;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    category: "Gezondheid",
    icon: <Wind className="w-4 h-4 text-cyan-500" />,
    title: "Waarom je hoofdpijn krijgt tijdens het thuiswerken (en hoe CO2 helpt)",
    excerpt: "Moe, hoofdpijn of concentratieverlies rond 14:00 uur? Grote kans dat het CO2-gehalte in je werkkamer te hoog is. Wij testen de Aranet4 en Netatmo.",
    date: "10 dec 2025",
    readTime: "6 min leestijd",
    // Nieuwe, stabiele afbeelding van een frisse werkplek met planten
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=1200",
    content: (
      <>
        <p className="font-semibold text-lg text-slate-700 mb-4">
          Je kent het wel: je begint fris aan de dag, maar na de lunch kak je in. Is het de lunch? Nee, vaak is het de lucht die je inademt.
        </p>
        <p>
          In een kleine werkkamer stijgt het CO2-niveau razendsnel als je de deur en ramen dicht houdt. Buitenlucht bevat ongeveer 420 ppm (parts per million) CO2. Binnen wordt het al snel 1500+ ppm. Onderzoek toont aan dat cognitieve prestaties bij 1400 ppm al met 50% kunnen dalen.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Aranet4 Home: De Gouden Standaard</h3>
        <p>
          In onze niche-gids staat de <TextLink to="bol" query="Aranet4 Home">Aranet4 Home</TextLink> op nummer 1. Waarom? Omdat hij een NDIR-sensor gebruikt (echte meting, geen schatting) en een E-ink scherm heeft dat altijd aan staat zonder stroom te vreten. Hij is duur (€160+), maar hij gaat jaren mee op twee batterijen.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-4">Netatmo: Voor de Data-nerd</h3>
        <p>
          Wil je grafiekjes zien op je telefoon? Dan is de <TextLink to="coolblue" query="Netatmo Healthy Home Coach">Netatmo Healthy Home Coach</TextLink> (verkrijgbaar bij <TextLink to="coolblue" query="Netatmo Healthy Home Coach">Coolblue</TextLink> en <TextLink to="bol" query="Netatmo Healthy Home Coach">bol</TextLink>) de betere keuze. Hij meet ook geluid (handig voor luidruchtige buren) en luchtvochtigheid.
        </p>

        <div className="mt-8 p-6 bg-cyan-50 rounded-2xl border border-cyan-100 text-center">
           <h4 className="font-bold text-cyan-900 text-lg mb-2">🤔 Conclusie: Welke moet ik kiezen?</h4>
           <p className="text-slate-700 mb-4">
              Investeer in je gezondheid. De Aranet4 is de beste stand-alone meter.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('bol', 'Aranet4 Home')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 <ShoppingCart className="w-4 h-4" /> Bekijk bij bol
              </a>
              <a href={getSearchLink('amazon', 'Aranet4 Home')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 <ShoppingCart className="w-4 h-4" /> Bekijk bij Amazon
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 2,
    category: "Audio",
    icon: <Headphones className="w-4 h-4 text-pink-600" />,
    title: "Planar Magnetic vs. Dynamisch: Waarom audiofielen zweren bij HiFiMAN",
    excerpt: "Je ziet termen als 'Planar' en 'Open-back' in onze Audio Niche staan. Wat betekent dit en waarom klinkt het zoveel beter dan je AirPods?",
    date: "5 dec 2025",
    readTime: "8 min leestijd",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          De meeste koptelefoons (Sony, Bose, Apple) gebruiken 'dynamische drivers'. Dit is in feite een klein speakertje dat lucht verplaatst. Het werkt prima en geeft veel bas.
        </p>
        <p>
          Maar in onze Audio Niche zie je de <TextLink to="amazon" query="HiFiMAN Sundara">HiFiMAN Sundara</TextLink> en <TextLink to="coolblue" query="Audeze Maxwell">Audeze Maxwell</TextLink>. Deze gebruiken 'Planar Magnetic' drivers. Hierbij beweegt een flinterdun vlies tussen magneten. Het resultaat? Snelheid. Detail. Je hoort de ademhaling van de zanger en de vingers over de gitaarsnaren glijden.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Open-back vs Closed-back</h3>
        <p>
          De <TextLink to="coolblue" query="Sennheiser HD 660S2">Sennheiser HD 660S2</TextLink> is 'Open-back'. Dat betekent dat de oorschelp open is. Geluid lekt naar buiten (niet geschikt voor in de trein!), maar het geluid klinkt veel ruimtelijker. Alsof de band in je kamer staat, in plaats van in je hoofd zit.
        </p>
        
        <p>
          Zoek je de beste audio-ervaring voor thuis? Durf dan eens voorbij de standaard merken te kijken bij specialisten op <TextLink to="amazon" query="Planar Magnetic Headphones">Amazon</TextLink> of <TextLink to="coolblue" query="Sennheiser High End">Coolblue</TextLink>.
        </p>

        <div className="mt-8 p-6 bg-pink-50 rounded-2xl border border-pink-100 text-center">
           <h4 className="font-bold text-pink-900 text-lg mb-2">🎧 Tijd voor een upgrade?</h4>
           <p className="text-slate-700 mb-4">
              De HiFiMAN en Sennheiser zijn nu scherp geprijsd.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('coolblue', 'Sennheiser HD 660S2')} target="_blank" rel="nofollow noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 Check Coolblue
              </a>
              <a href={getSearchLink('amazon', 'HiFiMAN Sundara')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Check Amazon
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 3,
    category: "Outdoor",
    icon: <Zap className="w-4 h-4 text-yellow-600" />,
    title: "EcoFlow Delta 2 vs Bluetti EB3A: Welke Power Station past bij jou?",
    excerpt: "Of je nu gaat kamperen of bang bent voor stroomuitval: een Power Station is de moderne generator. Wij vergelijken de twee marktleiders.",
    date: "1 dec 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Accutechnologie heeft een sprong gemaakt. De 'gasgeneratoren' zijn verleden tijd. Lithium-ijzerfosfaat (LiFePO4) batterijen gaan 10 jaar mee en zijn veilig.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">EcoFlow Delta 2 (De Krachtpatser)</h3>
        <p>
          De <TextLink to="coolblue" query="EcoFlow Delta 2">Delta 2</TextLink> laadt op van 0 naar 80% in slechts 50 minuten (X-Stream technologie). Hij kan zware apparaten aan tot 1800W. Denk aan een koffiezetapparaat, föhn of zelfs een kleine airco. Dit is de keuze voor wie echt 'off-grid' wil of zekerheid zoekt voor thuis.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Bluetti EB3A (De Budget Kampioen)</h3>
        <p>
          De <TextLink to="amazon" query="Bluetti EB3A">Bluetti</TextLink> is veel kleiner en goedkoper. Perfect om laptops, telefoons en camera's op te laden tijdens een weekend weg. Hij kan geen zware keukenapparatuur aan, maar is wel makkelijk mee te nemen in een rugzak.
        </p>

        <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-100 text-center">
           <h4 className="font-bold text-yellow-900 text-lg mb-2">⚡️ Voorkom dat je zonder stroom zit</h4>
           <p className="text-slate-700 mb-4">
              Ga je voor de lichte Bluetti of de krachtige EcoFlow?
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('coolblue', 'EcoFlow Delta')} target="_blank" rel="nofollow noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 EcoFlow Deals (Coolblue)
              </a>
              <a href={getSearchLink('amazon', 'Bluetti EB3A')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Bluetti Deals (Amazon)
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 4,
    category: "Koken",
    icon: <ChefHat className="w-4 h-4 text-orange-500" />,
    title: "Sous-vide voor beginners: Waarom je steak nooit meer mislukt",
    excerpt: "Sterrenchefs gebruiken het al jaren. Met een Anova stick tover je jouw keuken om tot restaurant. Het geheim zit in de constante temperatuur.",
    date: "28 nov 2025",
    readTime: "4 min leestijd",
    // Afbeelding gewijzigd naar een culinaire foto (steak)
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Heb je je wel eens afgevraagd waarom biefstuk in een restaurant altijd perfect medium-rare is, van rand tot rand? Het antwoord is Sous-vide.
        </p>
        <p>
          Je vacumeert het vlees (met bijv. de <TextLink to="amazon" query="Caso Vacuümsealer">Caso sealer</TextLink> uit onze gids) en legt het in een waterbad dat precies 54 graden is. Omdat het water nooit heter wordt dan 54 graden, kan het vlees ook niet doorslaan ('well done' worden). Het is idiot-proof.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Anova vs. Govee</h3>
        <p>
          De <TextLink to="bol" query="Anova Precision Cooker Nano">Anova Nano</TextLink> is de klassieker. Klein, betrouwbaar en goede app. De <strong>Govee</strong> is de uitdager: vaak goedkoper en heeft ook WiFi, zodat je vanuit de supermarkt kunt checken hoe ver je biefstuk is.
        </p>
        
        <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
           <h4 className="font-bold text-orange-900 text-lg mb-2">🥩 Kook als een chef</h4>
           <p className="text-slate-700 mb-4">
              Wil je nooit meer taaie biefstuk? De Anova is vaak in de aanbieding.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('bol', 'Anova Sous Vide')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 Anova bij bol
              </a>
              <a href={getSearchLink('amazon', 'Govee Sous Vide')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Govee bij Amazon
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 5,
    category: "Ergonomie",
    icon: <MousePointer2 className="w-4 h-4 text-indigo-500" />,
    title: "RSI voorkomen: Is een verticale muis echt wennen?",
    excerpt: "De Logitech MX Vertical ziet er vreemd uit. Toch zweren fysiotherapeuten erbij. Wij vertellen je of de overstap de moeite waard is.",
    date: "25 nov 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Leg je hand eens plat op tafel. Voelt dat natuurlijk? Nee. Laat je arm nu ontspannen langs je lichaam hangen. Je handpalm wijst naar je lichaam. Dat is de 'neutrale stand'.
        </p>
        <p>
          Een gewone muis dwingt je onderarm in een draaiing. Een verticale muis zoals de <TextLink to="coolblue" query="Logitech MX Vertical">Logitech MX Vertical</TextLink> (onze favoriet) of de goedkopere <TextLink to="bol" query="Trust Verto Ergonomisch">Trust Verto</TextLink> zet je hand in die neutrale 'handdruk' positie.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">De eerste week</h3>
        <p>
          Eerlijk is eerlijk: de eerste 3 dagen klik je soms mis. Je motoriek moet wennen. Maar na een week wil je niet meer terug. De spanning in je schouders en nek neemt merkbaar af.
        </p>
        
        <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
           <h4 className="font-bold text-indigo-900 text-lg mb-2">🖱️ Gun je pols rust</h4>
           <p className="text-slate-700 mb-4">
              Twijfel je nog? Coolblue heeft vaak demo-modellen in de winkel. Online bestellen is vaak goedkoper.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('coolblue', 'Logitech MX Vertical')} target="_blank" rel="nofollow noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 Bekijk bij Coolblue
              </a>
              <a href={getSearchLink('bol', 'Logitech MX Vertical')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 Bekijk bij bol
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 6,
    category: "Huisdier",
    icon: <Dog className="w-4 h-4 text-emerald-600" />,
    title: "Tractive GPS vs AirTag: Hoe vind je je kat terug?",
    excerpt: "Je kat is weg. Paniek. Werkt een Apple AirTag van €30 of heb je toch een echt GPS abonnement van Tractive nodig?",
    date: "20 nov 2025",
    readTime: "4 min leestijd",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Veel mensen hangen een <TextLink to="bol" query="Apple AirTag">Apple AirTag</TextLink> aan de halsband van hun kat. Goedkoop en geen maandelijkse kosten. Maar er is een probleem: AirTag werkt alleen als er iemand met een iPhone in de buurt is (Bluetooth). Loopt je kat in een weiland of bosjes? Dan heb je <strong>niets</strong> aan een AirTag.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Waarom Tractive wint</h3>
        <p>
          De <TextLink to="amazon" query="Tractive GPS Cat">Tractive GPS</TextLink> (uit onze niche lijst) heeft een eigen simkaart. Hij heeft overal bereik, ook in het bos. Je ziet 'live' op de kaart waar Minoes loopt. Ja, het kost een paar euro per maand aan abonnement, maar dat is de gemoedsrust waard als je huisdier echt zoek is.
        </p>

        <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
           <h4 className="font-bold text-emerald-900 text-lg mb-2">🐾 Raak je kat nooit meer kwijt</h4>
           <p className="text-slate-700 mb-4">
              Wil je zekerheid? Kies dan voor GPS. De Tractive is nu scherp geprijsd.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('bol', 'Tractive GPS')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 Tractive bij bol
              </a>
              <a href={getSearchLink('amazon', 'Tractive GPS')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Tractive bij Amazon
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 7,
    category: "Organisatie",
    icon: <Cable className="w-4 h-4 text-slate-500" />,
    title: "Kabelmanagement: De €20 upgrade die je kantoor verandert",
    excerpt: "Een rommelig bureau zorgt voor een rommelig hoofd. Met simpele tools van D-Line en Ugreen werk je alles in 10 minuten weg.",
    date: "15 nov 2025",
    readTime: "3 min leestijd",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Kijk eens onder je bureau. Zie je een spaghetti van stekkers en stofnesten? Dat is niet alleen lelijk, maar ook brandgevaarlijk.
        </p>
        <p>
          Onze tip uit de niche-gids: De <TextLink to="bol" query="D-Line Kabelbox">D-Line Kabelbox</TextLink>. Je gooit je stekkerdoos erin, deksel erop, en het ziet er strak uit. Combineer dit met magnetische kabelhouders van <TextLink to="amazon" query="Ugreen Cable Holder">Ugreen</TextLink> (via Amazon) op je bureaublad, zodat je oplaadkabel nooit meer achter je bureau valt.
        </p>
        <p>
          Het is een kleine investering die je werkplek direct professioneler maakt.
        </p>
        
        <div className="mt-8 p-6 bg-slate-100 rounded-2xl border border-slate-200 text-center">
           <h4 className="font-bold text-slate-900 text-lg mb-2">🔌 Maak korte metten met kabels</h4>
           <p className="text-slate-600 mb-4">
              Voor minder dan €20 heb je een opgeruimd bureau.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('bol', 'Kabelbox')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 Kabelboxen bij bol
              </a>
              <a href={getSearchLink('amazon', 'Cable Management')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Deals bij Amazon
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 8,
    category: "Sport",
    icon: <Dumbbell className="w-4 h-4 text-red-500" />,
    title: "Bowflex SelectTech: Is het die €200+ waard?",
    excerpt: "Thuis sporten is populair, maar gewichten nemen ruimte in. Zijn verstelbare dumbbells de oplossing of een gimmick?",
    date: "10 nov 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Als je een volledige set dumbbells (2kg tot 24kg) wilt kopen, ben je honderden euro's kwijt en staat je zolder vol ijzer.
        </p>
        <p>
          De <TextLink to="coolblue" query="Bowflex SelectTech 552">Bowflex SelectTech 552</TextLink> lost dit op. Je draait aan de knop, en het mechanisme pakt alleen de gewichten die je nodig hebt. Het werkt geniaal.
        </p>
        <p>
          <strong>Nadeel:</strong> Ze zijn vrij breed, wat bij sommige oefeningen even wennen is.
          <strong>Voordeel:</strong> Je wisselt in 3 seconden van gewicht (perfect voor dropsets).
        </p>
        
        <div className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100 text-center">
           <h4 className="font-bold text-red-900 text-lg mb-2">💪 Begin morgen met trainen</h4>
           <p className="text-slate-700 mb-4">
              Bespaar ruimte en geld. Check de voorraad van Bowflex, want ze zijn vaak snel uitverkocht.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('coolblue', 'Bowflex SelectTech')} target="_blank" rel="nofollow noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 Voorraad bij Coolblue
              </a>
              <a href={getSearchLink('bol', 'Bowflex SelectTech')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 Voorraad bij bol
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 9,
    category: "Gaming",
    icon: <Keyboard className="w-4 h-4 text-purple-600" />,
    title: "Mechanische Toetsenborden: Rood, Blauw of Bruin?",
    excerpt: "Typt je toetsenbord als een spons? Tijd voor een upgrade. Wij leggen het verschil uit tussen switches en waarom gamers zweren bij mechanisch.",
    date: "5 nov 2025",
    readTime: "6 min leestijd",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Als je nog steeds op het standaard toetsenbord typt dat bij je PC zat, mis je iets. Mechanische toetsenborden gebruiken fysieke schakelaars (switches) onder elke toets. Dit geeft feedback die je sneller en nauwkeuriger maakt.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-4">Welke switch moet ik hebben?</h3>
        <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Rood (Lineair):</strong> Geen klik, geen weerstand. Super licht en snel. De standaard voor gamers.</li>
            <li><strong>Blauw (Clicky):</strong> Maakt een hard 'klik' geluid (zoals een typemachine). Heerlijk voor typen, vreselijk voor je huisgenoten.</li>
            <li><strong>Bruin (Tactile):</strong> De gulden middenweg. Je voelt een bobbeltje als je drukt, maar zonder de harde klik.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Onze aanraders</h3>
        <p>
          Voor de beste prijs/kwaliteit verhouding raden wij <TextLink to="amazon" query="Keychron K2">Keychron</TextLink> aan. Ze werken perfect met Mac en Windows en zien er strak uit. Wil je echt gamen met RGB verlichting? Kijk dan naar <TextLink to="coolblue" query="Corsair K70">Corsair</TextLink>.
        </p>
        
        <div className="mt-8 p-6 bg-purple-50 rounded-2xl border border-purple-100 text-center">
           <h4 className="font-bold text-purple-900 text-lg mb-2">🎮 Upgrade je setup</h4>
           <p className="text-slate-700 mb-4">
              Keychron is vaak goedkoper via Amazon, Corsair scoor je bij Coolblue.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('amazon', 'Keychron Keyboard')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Keychron bij Amazon
              </a>
              <a href={getSearchLink('coolblue', 'Corsair K70')} target="_blank" rel="nofollow noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 Corsair bij Coolblue
              </a>
           </div>
        </div>
      </>
    )
  },
  {
    id: 10,
    category: "Wonen",
    icon: <Lightbulb className="w-4 h-4 text-amber-500" />,
    title: "Philips Hue vs. Wiz: Is goedkoop duurkoop?",
    excerpt: "Slimme verlichting maakt je huis sfeervol en veilig. Maar moet je echt €50 per lamp betalen voor Hue, of is het goedkopere Wiz net zo goed?",
    date: "1 nov 2025",
    readTime: "5 min leestijd",
    // Vervangen door een stabiele foto van gekleurde sfeerverlichting
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Philips Hue is de koning van slimme verlichting. Maar het prijskaartje is fors. WiZ (ook van Signify, het moederbedrijf van Philips) is vaak de helft goedkoper. Waar zit het verschil?
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-4">Zigbee vs. WiFi</h3>
        <p>
          Dit is het belangrijkste technische verschil.
          <br/>
          <strong>Philips Hue</strong> gebruikt <TextLink to="coolblue" query="Philips Hue Bridge">Zigbee</TextLink>. De lampen praten met een 'Bridge' (kastje in je meterkast) en niet direct met je WiFi. Voordeel: Super stabiel, reageert direct, en werkt ook als je internet eruit ligt.
          <br/>
          <strong>WiZ</strong> werkt via WiFi. Elke lamp maakt verbinding met je router. Heb je 30 lampen? Dan kan je router traag worden.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Conclusie</h3>
        <p>
          Wil je je hele huis automatiseren met sensoren en switches? Kies <TextLink to="coolblue" query="Philips Hue Starterpack">Hue</TextLink>. Wil je gewoon één leuke lamp in de slaapkamer die je met je telefoon kan bedienen? Koop dan lekker een <TextLink to="bol" query="WiZ lamp">WiZ</TextLink> of <TextLink to="amazon" query="Innr Lighting">Innr</TextLink>.
        </p>
        
        <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 text-center">
           <h4 className="font-bold text-amber-900 text-lg mb-2">💡 Sfeer in huis halen</h4>
           <p className="text-slate-700 mb-4">
              Beginnen met Hue is prijzig, maar vaak in de aanbieding als 'Starterpack'.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('coolblue', 'Philips Hue Starterpack')} target="_blank" rel="nofollow noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 Hue Deals (Coolblue)
              </a>
              <a href={getSearchLink('bol', 'WiZ Lampen')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 WiZ Deals (bol)
              </a>
           </div>
        </div>
      </>
    )
  }
];