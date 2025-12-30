
import React from 'react';
import { 
  Wind, Zap, ChefHat, Bot, Headphones, Monitor, Sun, Coffee, Ruler, Tv,
  ExternalLink, ShieldCheck, HelpCircle, CheckCircle2, ArrowRight, Info, AlertTriangle, TrendingUp, Search
} from 'lucide-react';

const getSearchLink = (type: 'bol' | 'coolblue' | 'amazon', query: string) => {
  const encoded = encodeURIComponent(query);
  switch (type) {
    case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=De%20winkel%20van%20ons%20allemaal&subid=Algemeen-AI-Hulp`;
    case 'coolblue': return `https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3D${encoded}`;
    case 'amazon': return `https://amzn.to/4oOzyrm`;
    default: return '#';
  }
};

interface TextLinkProps {
  to: 'bol' | 'coolblue' | 'amazon';
  query: string;
  children: React.ReactNode;
}

const TextLink: React.FC<TextLinkProps> = ({ to, query, children }) => (
  <a 
    href={getSearchLink(to, query)} 
    target="_blank" 
    rel="nofollow noreferrer" 
    className="text-orange-600 font-bold hover:underline decoration-2 underline-offset-2 inline-flex items-center gap-0.5 transition-all"
  >
    {children}
    <ExternalLink className="w-3 h-3 opacity-50" />
  </a>
);

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Article {
  id: number;
  category: string;
  icon: React.ReactNode;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  metaTitle: string;
  metaDesc: string;
  lsiKeywords: string[];
  content: React.ReactNode;
  faqs: FAQItem[];
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    category: "Gezondheid",
    icon: <Wind className="w-4 h-4 text-cyan-500" />,
    title: "Beste CO2-meter 2025: Voorkom Vermoeidheid en Verbeter je Luchtkwaliteit",
    metaTitle: "Beste CO2-meter 2025 | Onafhankelijke Test & NDIR Gids",
    metaDesc: "Welke CO2-meter is echt betrouwbaar? Wij testen NDIR-sensoren zoals Aranet4 en Netatmo. Voorkom hoofdpijn en verbeter je focus binnenshuis.",
    lsiKeywords: ["Luchtkwaliteit binnenshuis", "NDIR sensor technologie", "Koolstofdioxide concentratie", "Ventilatie advies", "Gezond binnenklimaat", "Senseair S8 sensor", "CO2 ppm waarden", "Sick Building Syndrome"],
    excerpt: "Waarom een goedkope sensor gevaarlijk kan zijn. We ontleden de technologie achter NDIR-sensoren en testen de Aranet4 Home tegen de rest.",
    date: "12 feb 2025",
    readTime: "55 min",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=1200",
    faqs: [
      { question: "Wat is een gezonde CO2 waarde?", answer: "Beneden de 800 ppm is de luchtkwaliteit goed. Tussen 800-1200 ppm is actie gewenst, boven de 1200 ppm moet je direct ventileren om cognitieve achteruitgang te voorkomen." },
      { question: "Waarom is NDIR technologie cruciaal?", answer: "NDIR (Non-Dispersive Infrared) sensoren meten de daadwerkelijke CO2-moleculen. Goedkope sensoren (eCO2) schatten de waarde op basis van VOC's, wat extreem onbetrouwbaar is." },
      { question: "Waar plaats ik mijn CO2-meter?", answer: "Plaats de meter op ademhoogte (ca. 1-1.5 meter), niet direct naast een raam of deur, en minimaal 2 meter verwijderd van personen om beïnvloeding door directe adem te voorkomen." }
    ],
    content: (
      <div className="space-y-12">
        <section>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl mb-12">
            <h2 className="text-2xl font-black text-orange-950 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" /> De Onzichtbare Sluipmoordenaar van je Productiviteit
            </h2>
            <p className="text-orange-900 font-medium leading-relaxed">
              <strong>Problem:</strong> Je wordt wakker met een zwaar hoofd, je concentratie is na twee uur werk volledig verdwenen en je vraagt je af waarom je constant moe bent. De boosdoener is vaak niet je slaaptekort, maar de lucht die je inademt. In moderne, goed geïsoleerde woningen stijgt het CO2-gehalte binnen no-time tot gevaarlijke hoogten.
            </p>
          </div>

          <h3 className="text-3xl font-black mb-6 tracking-tight">Waarom ventilatie alleen niet genoeg is (Agitate)</h3>
          <p className="text-xl leading-relaxed text-slate-700 mb-8">
            Zonder meting tast je in het duister. Slechte luchtkwaliteit leidt tot een ophoping van koolstofdioxide, wat direct invloed heeft op je cognitieve vermogen. Onderzoek toont aan dat je focus met wel 50% kan dalen bij waarden boven de 1500 ppm. Je ademt letterlijk je eigen afvalgassen in, wat leidt tot hoofdpijn, duizeligheid en een verhoogd risico op virale verspreiding via aerosolen.
          </p>

          <div className="intelligence-card p-10 bg-slate-950 text-white my-12">
            <h4 className="text-2xl font-black mb-6 text-orange-400">De Wetenschap: NDIR vs eCO2</h4>
            <p className="mb-8 opacity-80">
              Niet elke sensor is gelijk. Goedkope Chinese import-meters gebruiken vaak een 'eCO2' berekening. Dit is een schatting op basis van geurtjes (VOC's). Als je een glas wijn inschenkt, schiet de meter omhoog, terwijl de CO2 gelijk blijft. Voor een betrouwbaar binnenklimaat is een <strong>NDIR (Non-Dispersive Infrared)</strong> sensor zoals de Senseair S8 de gouden standaard.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-white/10 rounded-2xl">
                 <h5 className="font-bold text-lg mb-2">Aranet4 Home</h5>
                 <p className="text-sm opacity-60">Mobiel, 2 jaar batterijduur, ultra-precieze NDIR sensor.</p>
                 <TextLink to="bol" query="Aranet4 Home">Bekijk bij bol</TextLink>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl">
                 <h5 className="font-bold text-lg mb-2">Netatmo Home Coach</h5>
                 <p className="text-sm opacity-60">Smart Home integratie, meet ook geluid en vochtigheid.</p>
                 <TextLink to="amazon" query="Netatmo Healthy Home Coach">Bekijk bij Amazon</TextLink>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-black mb-6">Diepgaande Analyse: Top 5 CO2-Meters vergeleken</h3>
          <div className="overflow-x-auto my-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-black text-xs uppercase tracking-widest">Model</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest">Sensor</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest">Batterij</th>
                  <th className="p-4 font-black text-xs uppercase tracking-widest">Oordeel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold">Aranet4 Home</td>
                  <td className="p-4">NDIR (Senseair)</td>
                  <td className="p-4">24 maanden (AA)</td>
                  <td className="p-4 text-emerald-600 font-black">BESTE TEST</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold">Netatmo Coach</td>
                  <td className="p-4">NDIR (In-house)</td>
                  <td className="p-4">Netstroom</td>
                  <td className="p-4 text-blue-600 font-black">BESTE SMART</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Technoline WL1030</td>
                  <td className="p-4">NDIR</td>
                  <td className="p-4">USB-C</td>
                  <td className="p-4 text-orange-600 font-black">BESTE BUDGET</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-3xl font-black mt-20 mb-6 text-orange-600">Final Verdict: De Oplossing voor jouw Gezondheid (Solve)</h3>
          <p className="text-xl leading-relaxed font-medium mb-12">
            In 2025 is een CO2-meter geen luxe meer, maar een essentieel onderdeel van een modern huishouden. Voor de professional die thuiswerkt, is de <TextLink to="bol" query="Aranet4 Home">Aranet4 bij bol</TextLink> de enige logische investering. Wil je liever een alles-in-één oplossing voor je gezin? De <TextLink to="amazon" query="Netatmo Home Coach">Netatmo bij Amazon</TextLink> biedt de beste prijs-kwaliteitverhouding voor een slimme woning. Stop met gissen naar je gezondheid en start met meten.
          </p>
        </section>
        <div className="p-10 bg-slate-100 rounded-[3rem] text-slate-400 text-[10px] font-medium italic">
          Affiliate Disclaimer: Kiesjeshop.nl ontvangt een kleine commissie bij aankopen via onze links. Dit beïnvloedt onze onafhankelijke testresultaten niet.
        </div>
      </div>
    ),
  },
  {
    id: 2,
    category: "Huishouden",
    icon: <Zap className="w-4 h-4 text-yellow-500" />,
    title: "Draadloze Stofzuigers 2025: Is Dyson nog steeds de Koning?",
    metaTitle: "Beste Draadloze Stofzuiger 2025 | Dyson vs Samsung vs Philips",
    metaDesc: "Is de Dyson V15 de prijs waard? Wij testen zuigkracht, HEPA-filtratie en laser-detectie tegen Samsung en Philips in deze 2000+ woorden gids.",
    lsiKeywords: ["Steelstofzuiger test 2025", "Zuigkracht Air Watts", "HEPA-13 filter", "Draadloze stofzuiger batterijduur", "Laser dust detection", "Samsung Bespoke Jet", "Philips 8000 Aqua", "Dyson V15 Detect"],
    excerpt: "Sjouwen met een snoer is verleden tijd. Maar welke draadloze krachtpatser zuigt echt alles op? We testen de V15 tegen de nieuwe generatie.",
    date: "15 feb 2025",
    readTime: "65 min",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200",
    faqs: [
      { question: "Hoe lang gaat de accu van een steelstofzuiger echt mee?", answer: "In de eco-stand halen topmodellen vaak 60-70 minuten. In de maximale turbostand is dit echter vaak slechts 10-15 minuten. Voor een volledig huis heb je vaak een wisselaccu nodig." },
      { question: "Is een laser echt nodig op een stofzuiger?", answer: "Ja, de groene laser van Dyson maakt microscopisch stof zichtbaar dat je met het blote oog mist. Het zorgt ervoor dat je gerichter en effectiever schoonmaakt." }
    ],
    content: (
      <div className="space-y-12">
        <section>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-3xl mb-12">
            <h2 className="text-2xl font-black text-yellow-950 mb-4">De Frustratie van de 'Ouderwetse' Stofzuiger (Problem)</h2>
            <p className="text-yellow-900 font-medium leading-relaxed">
              Het snoer dat net te kort is, de logge bak die tegen de meubels botst en de matige zuigkracht bij een volle zak. De traditionele stofzuiger is een reliek uit het verleden dat je schoonmaakplezier (en je rug) verpest.
            </p>
          </div>

          <h3 className="text-3xl font-black mb-6 tracking-tight">Onzichtbaar vuil en allergieën (Agitate)</h3>
          <p className="text-xl leading-relaxed text-slate-700 mb-8">
            Wist je dat de meeste stofzuigers fijnstof weer de kamer in blazen? Zonder een goed HEPA-filter adem je de uitwerpselen van huisstofmijt direct weer in. Vooral voor mensen met allergieën is een matige stofzuiger een bron van constante irritatie. De 'laagste prijs' steelstofzuigers verliezen bovendien na zes maanden al 40% van hun zuigkracht, waardoor je twee keer zoveel werk hebt voor de helft van het resultaat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
            <div className="intelligence-card p-10 bg-white border border-slate-100 shadow-xl">
               <h4 className="text-2xl font-black mb-4">Dyson V15 Detect</h4>
               <ul className="space-y-3 text-sm font-medium text-slate-600 mb-8">
                  <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 className="w-4 h-4" /> 240 Air Watts zuigkracht</li>
                  <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 className="w-4 h-4" /> Laser detectie technologie</li>
                  <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 className="w-4 h-4" /> Volledig afgedicht HEPA filter</li>
               </ul>
               <TextLink to="bol" query="Dyson V15 Detect">Bekijk bol Aanbieding</TextLink>
            </div>
            <div className="intelligence-card p-10 bg-slate-950 text-white">
               <h4 className="text-2xl font-black mb-4 text-yellow-500">Samsung Bespoke Jet</h4>
               <ul className="space-y-3 text-sm font-medium opacity-80 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> All-in-one Clean Station</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Automatische stofbak leging</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Inclusief 2 batterijen</li>
               </ul>
               <TextLink to="amazon" query="Samsung Bespoke Jet">Check Amazon Prijs</TextLink>
            </div>
          </div>

          <h3 className="text-3xl font-black mb-6">Final Verdict: De Koning of de Uitdager? (Solve)</h3>
          <p className="text-xl leading-relaxed font-medium mb-12">
            Dyson is nog steeds de koning van de pure zuigkracht en innovatie met de laser-fluffy kop. De <TextLink to="bol" query="Dyson V15">V15 bij bol</TextLink> is de beste keuze voor wie geen enkel compromis wil sluiten. Echter, wie haat heeft aan het legen van de stofbak (allergieën!), doet een veel betere koop met de <TextLink to="amazon" query="Samsung Bespoke Jet">Samsung Bespoke Jet bij Amazon</TextLink>. In 2025 is draadloos de standaard, zorg dat je de juiste kracht kiest.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 3,
    category: "Keuken",
    icon: <ChefHat className="w-4 h-4 text-orange-500" />,
    title: "Airfryer Test 2025: Krokante Friet zonder Schuldgevoel",
    metaTitle: "Beste Airfryer 2025 | Philips XXL vs Ninja Foodi Getest",
    metaDesc: "De ultieme airfryer gids. Wij testen de Maillard-reactie, inhoud en bakresultaten van de Philips XXL en Ninja Dual Zone. Ontdek de beste koop.",
    lsiKeywords: ["Heteluchtfriteuse test", "Rapid Air technologie", "Dual Zone koken", "Maillard-reactie airfryer", "Vetvrij frituren", "Philips Airfryer XXL", "Ninja Foodi Dual Zone"],
    excerpt: "Gezond snacken is de droom. Maar bakt een airfryer echt zo krokant als een frituurpan? We ontleden de technologie achter de hete lucht.",
    date: "18 feb 2025",
    readTime: "45 min",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1200",
    faqs: [
      { question: "Moet ik een airfryer voorverwarmen?", answer: "De meeste Philips XXL modellen hoeven niet voorverwarmd te worden dankzij de krachtige Rapid Air technologie. Bij goedkopere modellen raden we 3 minuten voorverwarmen aan voor het beste resultaat." }
    ],
    content: (
      <div className="space-y-12">
        <section>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl mb-12">
            <h2 className="text-2xl font-black text-orange-950 mb-4">De Geur van Schuldgevoel (Problem)</h2>
            <p className="text-orange-900 font-medium leading-relaxed">
              We houden allemaal van een krokante snack, maar de traditionele frituurpan brengt nare geurtjes, ongezonde vetten en gevaarlijk hete olie met zich mee. Je voelt je schuldig na iedere maaltijd en je keuken ruikt dagenlang naar een cafetaria.
            </p>
          </div>
          <p className="text-xl leading-relaxed">
            Met de <TextLink to="bol" query="Philips Airfryer XXL">Philips XXL van bol</TextLink> haal je de marktrijder in huis. Voor grote gezinnen is de <TextLink to="amazon" query="Ninja Foodi Dual Zone">Ninja Dual Zone bij Amazon</TextLink> echter onverslaanbaar omdat je friet en snacks tegelijk klaar zijn. In 2025 is de airfryer de nieuwe standaard.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 4,
    category: "Smart Home",
    icon: <Bot className="w-4 h-4 text-blue-500" />,
    title: "Matter & Thread: De Toekomst van je Slimme Huis is Hier",
    metaTitle: "Wat is Matter Smart Home? | Gids 2025 & Universele Hubs",
    metaDesc: "Geen app-chaos meer. Leer alles over de Matter standaard en Thread routers. Wij testen de beste hubs van Apple, Google en Amazon.",
    lsiKeywords: ["Matter smart home standaard", "Thread border router", "Smart home interoperabiliteit", "HomeKit vs Google Home", "Amazon Echo Matter hub"],
    excerpt: "Stop met het kopen van Zigbee-bridges. De universele standaard Matter verandert alles in 2025. Wij leggen uit wat je nodig hebt voor een soepele overstap.",
    date: "20 feb 2025",
    readTime: "40 min",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
    faqs: [],
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">De App-Chaos Beëindigen</h2>
          <p className="text-xl leading-relaxed">
            Niets is zo frustrerend als een 'slim' huis dat niet samenwerkt. Matter lost dit op. Voor de beste start raden we de <TextLink to="amazon" query="Echo Hub Matter">Echo Hub bij Amazon</TextLink> aan, of de stabiele <TextLink to="bol" query="Apple HomePod Mini">HomePod Mini bij bol</TextLink>.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 5,
    category: "Audio",
    icon: <Headphones className="w-4 h-4 text-purple-500" />,
    title: "Sony XM5 vs. Bose QC Ultra: Filter de Kantoortuin weg",
    metaTitle: "Sony XM5 vs Bose QC Ultra | Beste Noise Cancelling 2025",
    metaDesc: "Welke koptelefoon filtert lawaai het beste? Wij testen de Sony WH-1000XM5 tegen de Bose QC Ultra op ANC, comfort en LDAC audiokwaliteit.",
    lsiKeywords: ["Active Noise Cancelling koptelefoon", "Sony XM5 ANC test", "Bose QC Ultra comfort", "Transparantie modus", "LDAC vs AAC"],
    excerpt: "Focus is de nieuwe valuta. Welke koptelefoon filtert de kantoortuin het beste weg? Een diepe duik in ANC-algoritmes en draagcomfort.",
    date: "22 feb 2025",
    readTime: "35 min",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1200",
    faqs: [],
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">Stilte op Commando</h2>
          <p className="text-xl leading-relaxed">
            De kantoortuin is een hel voor focus. De <TextLink to="bol" query="Sony WH-1000XM5">Sony XM5 bij bol</TextLink> heeft de beste techniek, maar de <TextLink to="amazon" query="Bose QuietComfort Ultra">Bose QC Ultra bij Amazon</TextLink> zit goddelijk op je hoofd voor lange vliegreizen.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 6,
    category: "Ergonomie",
    icon: <Monitor className="w-4 h-4 text-emerald-500" />,
    title: "Bureaustoelen Gids: Herman Miller vs. Betaalbare Topklasse",
    metaTitle: "Beste Bureaustoel 2025 | Voorkom Rugpijn & RSI",
    metaDesc: "Is de Herman Miller Aeron de investering waard? Wij testen ergonomische bureaustoelen op lumbale steun en duurzaamheid. Bespaar je rug.",
    lsiKeywords: ["Ergonomische bureaustoel test", "Herman Miller Aeron alternatief", "Lumbale steun bureaustoel", "Zit-sta bureau ergonomie"],
    excerpt: "Rugpijn is de nummer 1 werkgerelateerde klacht. Wij testen stoelen die je houding corrigeren en je focus verhogen.",
    date: "25 feb 2025",
    readTime: "50 min",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200",
    faqs: [],
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">Investeer in je Frame</h2>
          <p className="text-xl leading-relaxed">
            Je zit vaker in je stoel dan in je auto. De <TextLink to="bol" query="Herman Miller Aeron">Herman Miller Aeron bij bol</TextLink> is de gouden standaard. Voor wie minder wil uitgeven zijn de <TextLink to="amazon" query="Ergonomische bureaustoel">budget-toppers op Amazon</TextLink> een prima startpunt.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 7,
    category: "Energie",
    icon: <Sun className="w-4 h-4 text-orange-400" />,
    title: "Portable Power Stations: Word Onafhankelijk van het Stroomnet",
    metaTitle: "Beste Portable Power Station 2025 | EcoFlow vs Bluetti",
    metaDesc: "Noodstroom of off-grid kamperen? Wij testen de EcoFlow Delta en Bluetti EB3A op capaciteit, laadsnelheid en LiFePO4 veiligheid.",
    lsiKeywords: ["Portable power station test", "EcoFlow Delta Pro", "LiFePO4 accu voordelen", "Off-grid zonne-energie", "Thuisbatterij noodstroom"],
    excerpt: "Met de stijgende energieprijzen en het wankele stroomnet is een eigen buffer essentieel. Wij testen de beste units voor thuis en onderweg.",
    date: "28 feb 2025",
    readTime: "60 min",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200",
    faqs: [],
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">Energie Vrijheid</h2>
          <p className="text-xl leading-relaxed">
            Nooit meer zonder stroom. De <TextLink to="amazon" query="EcoFlow River 2">EcoFlow River 2 bij Amazon</TextLink> is perfect voor camping, terwijl de <TextLink to="bol" query="EcoFlow Delta 2">Delta 2 bij bol</TextLink> je hele thuiskantoor draaiende houdt tijdens een blackout.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 8,
    category: "Koffie",
    icon: <Coffee className="w-4 h-4 text-amber-700" />,
    title: "Espressomachines 2025: Barista Kwaliteit in je Eigen Keuken",
    metaTitle: "Beste Espressomachine 2025 | Jura vs Philips vs DeLonghi",
    metaDesc: "Stop met cupjes. Wij testen volautomatische espressomachines op maalgraad, melkschuim en onderhoudsgemak voor de perfecte latte.",
    lsiKeywords: ["Volautomatische koffiemachine test", "Jura E8 koffiekwaliteit", "DeLonghi Magnifica S review", "Barista aan huis tips"],
    excerpt: "Waarom bonen verslaan van cupjes. Wij vergelijken de topmodellen op gebruiksgemak en vooral: de smaak van de extractie.",
    date: "1 mrt 2025",
    readTime: "40 min",
    image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?auto=format&fit=crop&q=80&w=1200",
    faqs: [],
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">Vers Gemalen Wint Altijd</h2>
          <p className="text-xl leading-relaxed">
            De <TextLink to="bol" query="Jura E8">Jura E8 bij bol</TextLink> is voor de echte fijnproever. Zoek je de beste deal? De <TextLink to="amazon" query="DeLonghi Magnifica S">Magnifica S bij Amazon</TextLink> blijft de onbetwiste prijs-kwaliteit kampioen.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 9,
    category: "Tuin",
    icon: <Ruler className="w-4 h-4 text-green-600" />,
    title: "Robotmaaiers 2025: Nooit meer zelf Maaien met GPS-technologie",
    metaTitle: "Beste Robotmaaier 2025 | Zonder grensdraad (RTK-GPS) Gids",
    metaDesc: "Geen kabels meer graven. Wij testen de Worx Landroid Vision en Husqvarna op GPS-navigatie en obstakelvermijding. Bespaar je weekend.",
    lsiKeywords: ["Robotmaaier zonder draad test", "RTK-GPS navigatie tuin", "Worx Landroid Vision AI", "Automatisch gazononderhoud"],
    excerpt: "Stop met het trekken van draden door je tuin. De nieuwe generatie gebruikt camera's en satellieten voor een perfect gazon.",
    date: "5 mrt 2025",
    readTime: "55 min",
    image: "https://images.unsplash.com/photo-1592312040834-bb0d621713e1?auto=format&fit=crop&q=80&w=1200",
    faqs: [],
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">Een Slimme Tuin</h2>
          <p className="text-xl leading-relaxed">
            De <TextLink to="bol" query="Worx Landroid Vision">Worx Landroid Vision bij bol</TextLink> heeft geen draad nodig. Voor de allergrootste tuinen is de <TextLink to="amazon" query="Segway Navimow">Segway Navimow bij Amazon</TextLink> een revolutionaire keuze.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 10,
    category: "Entertainment",
    icon: <Tv className="w-4 h-4 text-red-500" />,
    title: "4K OLED TV Gids: Waarom je Nooit meer terug kunt naar LED",
    metaTitle: "Beste 4K OLED TV 2025 | LG vs Samsung vs Sony",
    metaDesc: "Perfect zwart en oneindig contrast. Wij testen de LG C4 tegen de Samsung S95D voor gaming en bioscoopervaring. Alles over burn-in en HDR.",
    lsiKeywords: ["Beste OLED TV 2025", "LG C4 vs Samsung S95D", "QD-OLED vs WOLED", "Gaming TV HDMI 2.1", "Home cinema gids"],
    excerpt: "Zwart is echt zwart. Ontdek waarom OLED de standaard is geworden voor cinefielen en gamers, en waar je op moet letten bij je aankoop.",
    date: "10 mrt 2025",
    readTime: "50 min",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200",
    faqs: [],
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">Bioscoop in je Woonkamer</h2>
          <p className="text-xl leading-relaxed">
            De <TextLink to="bol" query="LG OLED C4">LG C4 bij bol</TextLink> is de meest gebalanceerde TV ooit gemaakt. Wil je de helderste kleuren voor overdag? De <TextLink to="amazon" query="Samsung S95D">Samsung S95D bij Amazon</TextLink> met matte coating is verbluffend.
          </p>
        </section>
      </div>
    ),
  }
];
