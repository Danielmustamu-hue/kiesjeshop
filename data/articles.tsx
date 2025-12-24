
import React from 'react';
import { 
  Laptop, Gift, Home, Tag, Book, Lightbulb, Bot, Headphones, Wind, 
  MousePointer2, Zap, ChefHat, Dumbbell, Dog, Cable, ArrowRight, 
  ExternalLink, ShoppingCart, Keyboard, Wifi 
} from 'lucide-react';

// Helper functie voor affiliate links
const getSearchLink = (type: 'bol' | 'coolblue' | 'amazon', query: string) => {
  const encoded = encodeURIComponent(query);
  switch (type) {
    case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=${encoded}`;
    case 'coolblue': return `https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3D${encoded}`;
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
    title: "Beste CO2-meter voor thuiswerken 2025: Voorkom hoofdpijn en concentratieverlies",
    excerpt: "Heb je rond 14:00 uur vaak een dip? Grote kans dat de luchtkwaliteit in je werkkamer slecht is. Wij testten de Aranet4 en Netatmo als beste oplossingen.",
    date: "12 dec 2025",
    readTime: "6 min leestijd",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=1200",
    content: (
      <>
        <p className="font-semibold text-lg text-slate-700 mb-4">
          Je kent het wel: je begint fris aan de dag, maar na de lunch kak je in. Is het de lunch? Nee, vaak is het de lucht die je inademt. In dit artikel leggen we uit waarom ventileren essentieel is en welke meter je echt moet hebben.
        </p>
        <p>
          In een kleine werkkamer stijgt het CO2-niveau razendsnel als je de deur en ramen dicht houdt. Buitenlucht bevat ongeveer 420 ppm (parts per million) CO2. Binnen tikt dit al snel de 1500+ ppm aan. Onderzoek toont aan dat cognitieve prestaties bij 1400 ppm al met 50% kunnen dalen.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Aranet4 Home Review: De nauwkeurigste keuze</h3>
        <p>
          Als je budget het toelaat, is de <TextLink to="bol" query="Aranet4 Home">Aranet4 Home</TextLink> de absolute winnaar van 2025. Waarom? Omdat hij een professionele NDIR-sensor gebruikt (echte meting, geen schatting) en een E-ink scherm heeft dat altijd aan staat. Hij is prijzig (€160+), maar gaat jaren mee op twee batterijen. Dit is dé favoriet onder data-analisten.
        </p>
        
        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-4">Netatmo Healthy Home Coach: Beste 'Smart' alternatief</h3>
        <p>
          Wil je historische data en grafiekjes zien op je iPhone of Android? Dan is de <TextLink to="coolblue" query="Netatmo Healthy Home Coach">Netatmo Healthy Home Coach</TextLink> (verkrijgbaar bij <TextLink to="coolblue" query="Netatmo Healthy Home Coach">Coolblue</TextLink> en <TextLink to="bol" query="Netatmo Healthy Home Coach">bol</TextLink>) de betere keuze. Hij meet naast CO2 ook geluid (handig voor luidruchtige buren) en luchtvochtigheid.
        </p>

        <div className="mt-8 p-6 bg-cyan-50 rounded-2xl border border-cyan-100 text-center">
           <h4 className="font-bold text-cyan-900 text-lg mb-2">🤔 Conclusie: Welke moet ik kiezen?</h4>
           <p className="text-slate-700 mb-4">
              Investeer in je gezondheid. De Aranet4 is the beste stand-alone meter, Netatmo wint op connectiviteit.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('bol', 'Aranet4 Home')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 <ShoppingCart className="w-4 h-4" /> Bekijk prijs bij bol
              </a>
              <a href={getSearchLink('amazon', 'Aranet4 Home')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 <ShoppingCart className="w-4 h-4" /> Check Amazon deals
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
    title: "Planar Magnetic vs. Dynamisch: De beste audiofiele koptelefoons van 2025 getest",
    excerpt: "Wil je meer horen dan alleen bas? Ontdek waarom audiofielen zweren bij Planar Magnetic en Open-back koptelefoons zoals de HiFiMAN en Sennheiser.",
    date: "08 dec 2025",
    readTime: "8 min leestijd",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          De meeste standaard koptelefoons (Sony, Bose, Apple) gebruiken 'dynamische drivers'. Dit werkt prima en geeft veel 'boomy' bas, maar mist detail. In 2025 zien we een enorme opmars van betaalbare HiFi-technologie.
        </p>
        <p>
          In onze Audio Niche zie je toppers zoals de <TextLink to="amazon" query="HiFiMAN Sundara">HiFiMAN Sundara</TextLink>. Deze gebruiken 'Planar Magnetic' drivers. Hierbij beweegt een flinterdun vlies tussen magneten. Het resultaat? Ongekende snelheid en detail. Je hoort de ademhaling van de zanger en de vingers over de gitaarsnaren glijden.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Open-back vs Closed-back: Wat is het verschil?</h3>
        <p>
          De <TextLink to="coolblue" query="Sennheiser HD 660S2">Sennheiser HD 660S2</TextLink> is een 'Open-back' koptelefoon. Dat betekent dat de oorschelp open is.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Voordeel:</strong> Het geluid is ruimtelijk en natuurlijk. Het voelt alsof de band in je kamer staat.</li>
            <li><strong>Nadeel:</strong> Iedereen om je heen hoort wat je luistert. Niet geschikt voor in de trein of kantoor!</li>
        </ul>
        
        <p>
          Zoek je de ultieme audio-ervaring voor thuis op de bank? Durf dan eens voorbij de standaard merken te kijken bij specialisten op <TextLink to="amazon" query="Planar Magnetic Headphones">Amazon</TextLink> of <TextLink to="coolblue" query="Sennheiser High End">Coolblue</TextLink>.
        </p>

        <div className="mt-8 p-6 bg-pink-50 rounded-2xl border border-pink-100 text-center">
           <h4 className="font-bold text-pink-900 text-lg mb-2">🎧 Tijd voor een echte upgrade?</h4>
           <p className="text-slate-700 mb-4">
              De HiFiMAN (Beste prijs/kwaliteit) en Sennheiser (Comfort koning) zijn nu scherp geprijsd.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('coolblue', 'Sennheiser HD 660S2')} target="_blank" rel="nofollow noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 Bekijk bij Coolblue
              </a>
              <a href={getSearchLink('amazon', 'HiFiMAN Sundara')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Laagste prijs bij Amazon
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
    title: "EcoFlow Delta 2 vs Bluetti EB3A Review: Beste Power Station voor Camping & Noodstroom (2025)",
    excerpt: "Of je nu gaat kamperen of bang bent voor een blackout: een Power Station is onmisbaar. Wij vergelijken de krachtpatser van EcoFlow met de budgettopper van Bluetti.",
    date: "05 dec 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Vergeet de luidruchtige benzinegeneratoren. De moderne 'solar generator' is stil, schoon en krachtig. Dankzij LiFePO4-batterijtechnologie gaan ze tot wel 10 jaar mee. Maar welke moet je kiezen in 2025?
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">EcoFlow Delta 2: De beste keuze voor thuisback-up</h3>
        <p>
          De <TextLink to="coolblue" query="EcoFlow Delta 2">Delta 2</TextLink> is onze favoriet voor zwaarder gebruik. Dankzij de X-Stream technologie laadt hij op van 0 naar 80% in slechts 50 minuten. Hij levert tot 1800W vermogen, genoeg voor een koffiezetapparaat, föhn of zelfs een kleine airco. Dit is de keuze voor wie echt 'off-grid' wil of zekerheid zoekt voor thuis.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Bluetti EB3A: Beste goedkope power station</h3>
        <p>
          Heb je een kleiner budget? De <TextLink to="amazon" query="Bluetti EB3A">Bluetti EB3A</TextLink> is veel compacter en vriendelijker geprijsd. Perfect om laptops, drones, telefoons en camera's op te laden tijdens een weekend weg. Hij kan geen zware keukenapparatuur aan, maar past wel makkelijk in je rugzak.
        </p>

        <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-100 text-center">
           <h4 className="font-bold text-yellow-900 text-lg mb-2">⚡️ Voorkom dat je zonder stroom zit</h4>
           <p className="text-slate-700 mb-4">
              Kies je voor vermogen (EcoFlow) of draagbaarheid (Bluetti)?
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('coolblue', 'EcoFlow Delta')} target="_blank" rel="nofollow noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 EcoFlow voorraad bij Coolblue
              </a>
              <a href={getSearchLink('amazon', 'Bluetti EB3A')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Bluetti deals bij Amazon
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
    title: "Beste Sous-vide stick 2025: Thuis koken op sterrenniveau (Anova vs. Govee)",
    excerpt: "Wil je biefstuk die altijd perfect medium-rare is? Met een sous-vide stick is mislukken onmogelijk. Wij testen de beste modellen voor beginners.",
    date: "01 dec 2025",
    readTime: "4 min leestijd",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Heb je je wel eens afgevraagd waarom vlees in een goed restaurant altijd perfect mals is, van rand tot rand? Het geheim is Sous-vide.
        </p>
        <p>
          Het principe is simpel: Je vacumeert het vlees (met bijv. de <TextLink to="amazon" query="Caso Vacuümsealer">Caso sealer</TextLink> uit onze gids) en legt het in een waterbad dat precies 54 graden is. Omdat het water nooit heter wordt dan de doeltemperatuur, kan het vlees onmogelijk 'doorslaan' naar well-done. Het is idiot-proof.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Vergelijking: Anova vs. Govee</h3>
        <p>
          De <TextLink to="bol" query="Anova Precision Cooker Nano">Anova Nano</TextLink> is de gouden standaard. Klein, uiterst betrouwbaar en een fantastische app met recepten. De <strong>Govee</strong> is de prijsvechter: vaak goedkoper en beschikt ook over WiFi, zodat je vanuit de supermarkt kunt checken hoe ver je biefstuk is.
        </p>
        
        <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
           <h4 className="font-bold text-orange-900 text-lg mb-2">🥩 Kook als een chef</h4>
           <p className="text-slate-700 mb-4">
              Wil je nooit meer taaie biefstuk? De Anova is onze favoriet.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('bol', 'Anova Sous Vide')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 Bekijk Anova bij bol
              </a>
              <a href={getSearchLink('amazon', 'Govee Sous Vide')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Govee acties bij Amazon
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
    title: "Beste ergonomische muis tegen RSI 2025: Review Logitech MX Vertical & Trust",
    excerpt: "Last van je pols of arm? De Logitech MX Vertical ziet er vreemd uit, maar werkt wonderen. Wij vertellen of de overstap de moeite waard is.",
    date: "28 nov 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Leg je hand eens plat op tafel. Voelt dat natuurlijk? Nee. Laat je arm nu ontspannen langs je lichaam hangen. Je handpalm wijst naar je lichaam. Dat is de 'neutrale stand'.
        </p>
        <p>
          Een gewone muis dwingt je onderarm in een onnatuurlijke draaiing. Een verticale muis zoals de <TextLink to="coolblue" query="Logitech MX Vertical">Logitech MX Vertical</TextLink> (onze testwinnaar) of de goedkopere <TextLink to="bol" query="Trust Verto Ergonomisch">Trust Verto</TextLink> zet je hand in die neutrale 'handdruk' positie. Dit verlaagt de spierspanning direct met 10%.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Ervaring: De eerste week is wennen</h3>
        <p>
          Eerlijk is eerlijk: de eerste 3 dagen klik je soms mis. Je fijne motoriek moet zich aanpassen. Maar na een week wil je niet meer terug. De zeurende spanning in schouders en nek neemt merkbaar af.
        </p>
        
        <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
           <h4 className="font-bold text-indigo-900 text-lg mb-2">🖱️ Gun je pols rust</h4>
           <p className="text-slate-700 mb-4">
              Twijfel je nog? Coolblue heeft vaak demo-modellen. Online bestellen is vaak goedkoper.
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
    title: "Tractive GPS vs Apple AirTag: Wat is de beste kattentracker in 2025?",
    excerpt: "Je kat is weg. Paniek. Werkt een goedkope AirTag van €30 of heb je toch een echt GPS-abonnement van Tractive nodig? Wij zochten het uit.",
    date: "25 nov 2025",
    readTime: "4 min leestijd",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Veel mensen hangen een <TextLink to="bol" query="Apple AirTag">Apple AirTag</TextLink> aan de halsband van hun kat. Het is goedkoop en je hebt geen maandelijkse kosten. Maar er is een groot risico: AirTag werkt op Bluetooth. Het werkt alleen als er iemand met een iPhone in de buurt (10-20 meter) is. Loopt je kat in een weiland, bos of verlaten steeg? Dan heb je <strong>niets</strong> aan een AirTag.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Waarom Tractive de veiligste keuze is</h3>
        <p>
          De <TextLink to="amazon" query="Tractive GPS Cat">Tractive GPS</TextLink> (uit onze niche lijst) heeft een eigen simkaart. Hij heeft overal bereik, ook diep in het bos. Je ziet 'live' op de kaart waar Minoes loopt. Ja, het kost een paar euro per maand aan abonnement, maar dat is de gemoedsrust waard als je huisdier echt zoek is.
        </p>

        <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
           <h4 className="font-bold text-emerald-900 text-lg mb-2">🐾 Raak je kat nooit meer kwijt</h4>
           <p className="text-slate-700 mb-4">
              Wil je zekerheid? Kies dan voor GPS. De Tractive is nu scherp geprijsd.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('bol', 'Tractive GPS')} target="_blank" rel="nofollow noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 Tractive voorraad bij bol
              </a>
              <a href={getSearchLink('amazon', 'Tractive GPS')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Tractive deals bij Amazon
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
    title: "Beste kabelmanagement oplossingen 2025: In 10 minuten een opgeruimd bureau",
    excerpt: "Een rommelig bureau zorgt voor een rommelig hoofd. Met simpele tools van D-Line en Ugreen werk je alles in 10 minuten professioneel weg.",
    date: "20 nov 2025",
    readTime: "3 min leestijd",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Kijk eens onder je bureau. Zie je een spaghetti van stekkers en stofnesten? Dat is niet alleen lelijk, maar ook brandgevaarlijk. Een 'clean setup' motiveert en werkt fijner.
        </p>
        <p>
          Onze tip uit de niche-gids: De <TextLink to="bol" query="D-Line Kabelbox">D-Line Kabelbox</TextLink>. Je gooit je hele stekkerdoos erin, deksel erop, en het ziet er direct strak uit. Combineer dit met de magnetische kabelhouders van <TextLink to="amazon" query="Ugreen Cable Holder">Ugreen</TextLink> (via Amazon) op je bureaublad, zodat je oplaadkabel nooit meer achter je bureau valt als je je laptop loskoppelt.
        </p>
        <p>
          Het is een kleine investering (&lt; €20) die je werkplek direct professioneler maakt.
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
                 Goedkope deals bij Amazon
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
    title: "Bowflex SelectTech Review 2025: Zijn deze verstelbare dumbbells hun geld waard?",
    excerpt: "Thuis sporten is populair, maar gewichten nemen veel ruimte in. Wij testen of de dure Bowflex 552 de investering waard is voor jouw home gym.",
    date: "15 nov 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Als je een volledige set dumbbells (2kg tot 24kg) wilt kopen, ben je honderden euro's kwijt en staat je zolder vol met ijzer. Voor wie klein woont, is dat geen optie.
        </p>
        <p>
          De <TextLink to="coolblue" query="Bowflex SelectTech 552">Bowflex SelectTech 552</TextLink> is dé oplossing. Je draait aan de knop, en het mechanisme pakt alleen de gewichten die je nodig hebt. Het werkt geniaal en soepel.
        </p>
        <p>
          <strong>Nadeel:</strong> Ze zijn vrij breed, wat bij sommige oefeningen even wennen is.
          <br />
          <strong>Groot voordeel:</strong> Je wisselt in 3 seconden van gewicht. Dit is perfect voor 'dropsets' en snelle workouts.
        </p>
        
        <div className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100 text-center">
           <h4 className="font-bold text-red-900 text-lg mb-2">💪 Begin morgen met trainen</h4>
           <p className="text-slate-700 mb-4">
              Bespaar ruimte en geld. Check de voorraad, want ze zijn vaak uitverkocht.
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
    title: "Beste Mechanische Toetsenbord 2025: Gids voor Gamers & Typisten (Switches Uitgelegd)",
    excerpt: "Typt je toetsenbord als een spons? Tijd voor een upgrade. Wij leggen het verschil uit tussen Rode, Blauwe en Bruine switches en tonen de beste koop.",
    date: "12 nov 2025",
    readTime: "6 min leestijd",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Als je nog steeds op het standaard toetsenbord typt dat bij je PC zat, mis je iets. Mechanische toetsenborden gebruiken fysieke schakelaars (switches) onder elke toets. Dit geeft feedback die je sneller en nauwkeuriger maakt. Maar welke switch moet je kiezen?
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-4">Snelcursus Switches</h3>
        <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Rood (Lineair):</strong> Geen klik, geen weerstand. Super licht en snel. De standaard voor gamers (shooters).</li>
            <li><strong>Blauw (Clicky):</strong> Maakt een hard 'klik' geluid (zoals een typemachine). Heerlijk voor typen, vreselijk voor je huisgenoten.</li>
            <li><strong>Bruin (Tactile):</strong> De gulden middenweg. Je voelt een bobbeltje als je drukt, maar zonder de harde klik. Onze favoriet voor allround gebruik.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Onze aanraders voor 2025</h3>
        <p>
          Voor de beste prijs/kwaliteit verhouding raden wij <TextLink to="amazon" query="Keychron K2">Keychron</TextLink> aan. Ze werken perfect met Mac en Windows en zien er minimalistisch uit. Wil je echt gamen met RGB verlichting? Kijk dan naar de bewezen <TextLink to="coolblue" query="Corsair K70">Corsair K70</TextLink>.
        </p>
        
        <div className="mt-8 p-6 bg-purple-50 rounded-2xl border border-purple-100 text-center">
           <h4 className="font-bold text-purple-900 text-lg mb-2">🎮 Upgrade je setup</h4>
           <p className="text-slate-700 mb-4">
              Keychron is vaak goedkoper via Amazon, Corsair scoor je bij Coolblue.
           </p>
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getSearchLink('amazon', 'Keychron Keyboard')} target="_blank" rel="nofollow noreferrer" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Keychron deals (Amazon)
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
    title: "Philips Hue vs WiZ Review 2025: Wat is de beste slimme verlichting voor jou?",
    excerpt: "Slimme verlichting maakt je huis sfeervol en veilig. Maar moet je echt €50 per lamp betalen voor Hue, of is het goedkopere WiZ net zo goed?",
    date: "10 nov 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800",
    content: (
      <>
        <p>
          Philips Hue is al jaren de koning van slimme verlichting. Maar het prijskaartje is fors. WiZ (ook van Signify, het moederbedrijf van Philips) is vaak de helft goedkoper. Waar zit het verschil en is goedkoop hier duurkoop?
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-4">Techniek: Zigbee vs. WiFi</h3>
        <p>
          Dit is het belangrijkste verschil voor jouw keuze:
          <br/>
          <strong>Philips Hue</strong> gebruikt <TextLink to="coolblue" query="Philips Hue Bridge">Zigbee</TextLink>. De lampen praten met een 'Bridge' en niet direct met je WiFi. 
          <br/><em>Voordeel:</em> Super stabiel, reageert direct, en belast je WiFi-netwerk niet.
          <br/>
          <strong>WiZ</strong> werkt via WiFi. Elke lamp maakt apart verbinding met je router. Heb je 30 lampen? Dan kan je Netflix gaan haperen.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">Conclusie</h3>
        <p>
          Wil je je hele huis automatiseren met sensoren en switches? Kies voor de stabiliteit van <TextLink to="coolblue" query="Philips Hue Starterpack">Hue</TextLink>. Wil je gewoon één leuke lamp in de slaapkamer die je met je telefoon kan bedienen? Koop dan lekker een <TextLink to="bol" query="WiZ lamp">WiZ</TextLink> of <TextLink to="amazon" query="Innr Lighting">Innr</TextLink>.
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
