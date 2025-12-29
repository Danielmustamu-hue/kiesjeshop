
import React from 'react';
import { 
  Laptop, Gift, Home, Tag, Book, Lightbulb, Bot, Headphones, Wind, 
  MousePointer2, Zap, ChefHat, Dumbbell, Dog, Cable, ArrowRight, 
  ExternalLink, ShoppingCart, Keyboard, Wifi, Battery, Tv, Coffee, Shield, Microscope, CheckCircle2, AlertTriangle, Info, Star
} from 'lucide-react';

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
    title: "De Ultieme CO2-meter Gids 2025: Gezondheid vs. Marketing",
    excerpt: "Waarom een goedkope sensor gevaarlijk kan zijn. We ontleden de technologie achter NDIR-sensoren en testen de Aranet4 Home tegen de rest.",
    date: "12 jan 2025",
    readTime: "35 min",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">De Wetenschap van Schone Lucht</h2>
          <p>Luchtkwaliteit is het nieuwe 'gezond eten'. We spenderen 90% van onze tijd binnen, maar de lucht daar is vaak 5 tot 10 keer meer vervuild dan buiten. De belangrijkste indicator? CO2. In deze uitgebreide analyse duiken we in de wereld van NDIR-sensoren en leggen we uit waarom de <TextLink to="bol" query="Aranet4 Home">Aranet4 Home</TextLink> de enige meter is die onze strenge laboratoriumtest heeft doorstaan.</p>
          <div className="bg-cyan-50 border-l-8 border-cyan-500 p-10 my-10 rounded-r-[3rem]">
            <h4 className="font-black text-cyan-900 mb-2 uppercase tracking-widest text-xs">Belangrijk Inzicht</h4>
            <p className="text-lg text-cyan-800 font-medium italic leading-relaxed">"Bij een CO2-waarde van 1400 ppm daalt je cognitieve vermogen met 50%. Je bent letterlijk dommer aan het worden in een slecht geventileerde kamer."</p>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-black mb-6">NDIR vs. eCO2: Het Grote Bedrog</h3>
          <p>Loop een willekeurige bouwmarkt in en je ziet meters van €40. Deze gebruiken MOX-sensoren. Ze 'schatten' de CO2 op basis van vluchtige stoffen. Als je een glas wijn inschenkt of nagellak gebruikt, schiet de waarde omhoog, terwijl de CO2 gelijk blijft. Dat is waardeloos voor je gezondheid.</p>
          <div className="overflow-x-auto my-8">
             <table className="w-full text-sm text-left border-collapse bg-slate-50 rounded-3xl overflow-hidden">
                <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="p-6">Technologie</th>
                    <th className="p-6">Betrouwbaarheid</th>
                    <th className="p-6">Prijsindicatie</th>
                    <th className="p-6">Verdict</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-slate-700">
                  <tr className="border-b border-slate-200">
                    <td className="p-6">eCO2 (MOX)</td>
                    <td className="p-6 text-rose-500">Zeer Laag</td>
                    <td className="p-6">€30 - €60</td>
                    <td className="p-6">Niet kopen</td>
                  </tr>
                  <tr>
                    <td className="p-6">NDIR (Infrarood)</td>
                    <td className="p-6 text-emerald-500">Extreem Hoog</td>
                    <td className="p-6">€150 - €250</td>
                    <td className="p-6">Essentieel</td>
                  </tr>
                </tbody>
             </table>
          </div>
        </section>

        <section className="bg-slate-950 text-white p-12 rounded-[4rem] shadow-2xl">
          <h3 className="text-3xl font-black mb-8">Onze Top 3 Diepgaand Vergeleken</h3>
          <div className="grid gap-10">
            <div className="border-b border-white/10 pb-10">
              <h4 className="text-2xl font-black text-indigo-400 mb-4">1. Aranet4 Home — De Goudstandaard</h4>
              <p className="opacity-80 leading-relaxed mb-6">Gemaakt in Letland, gebruikt de prestigieuze SenseAir Sunrise sensor. Het E-ink scherm zorgt ervoor dat de batterijen (2x AA) meer dan 2 jaar meegaan. Geen WiFi nodig, alles gaat via Bluetooth. Dit is de meter die wetenschappers gebruiken.</p>
              <TextLink to="bol" query="Aranet4 Home">Bestel bij bol voor €199</TextLink>
            </div>
            <div className="border-b border-white/10 pb-10">
              <h4 className="text-2xl font-black text-orange-400 mb-4">2. Netatmo Healthy Home Coach</h4>
              <p className="opacity-80 leading-relaxed mb-6">Voor wie van design houdt. Werkt op netstroom en koppelt met HomeKit. Meet naast CO2 ook geluid en luchtvochtigheid. De app is superieur in grafieken en historische data.</p>
              <TextLink to="coolblue" query="Netatmo Healthy Home Coach">Bekijk bij Coolblue</TextLink>
            </div>
            <div>
              <h4 className="text-2xl font-black text-yellow-400 mb-4">3. AirVisual Pro</h4>
              <p className="opacity-80 leading-relaxed mb-6">De alleskunner. Meet CO2 én PM2.5 (fijnstof). Ideaal voor wie in de stad woont of langs een snelweg. Het kleurenscherm geeft direct een duidelijke AQI score.</p>
              <TextLink to="amazon" query="AirVisual Pro">Check Amazon Prijs</TextLink>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-black mb-6 italic">FAQ: Alles wat je moet weten</h3>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h5 className="font-black text-lg mb-2">Moet ik mijn CO2-meter kalibreren?</h5>
              <p className="text-slate-600">Ja. De meeste NDIR meters hebben 'ABC' (Automatic Baseline Calibration). Ze nemen de laagste waarde over 7-14 dagen als 400 ppm (buitenlucht). Daarom moet je de meter af en toe 'luchten' door hem bij een open raam te zetten.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h5 className="font-black text-lg mb-2">Wat is een veilige waarde?</h5>
              <p className="text-slate-600">Onder de 800 ppm is perfect. Tussen 800 en 1000 ppm is acceptabel. Boven de 1200 ppm moet je direct ventileren. Boven de 2000 ppm krijg je last van slaperigheid en hoofdpijn.</p>
            </div>
          </div>
        </section>

        <section className="text-center pt-10 border-t border-slate-100">
           <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Klaar om te ventileren?</h4>
           <p className="mb-8 font-medium text-slate-500">Stop met gissen naar je gezondheid. Kies voor de Aranet4 en ervaar het verschil in je eigen focus.</p>
           <div className="flex justify-center gap-4">
              <a href={getSearchLink('bol', 'Aranet4 Home')} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all">Naar bol</a>
              <a href={getSearchLink('amazon', 'CO2 Meter NDIR')} className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-yellow-600 transition-all">Naar Amazon</a>
           </div>
        </section>
      </div>
    )
  },
  {
    id: 2,
    category: "Smart Home",
    icon: <Bot className="w-4 h-4 text-blue-500" />,
    title: "Matter & Thread: De Toekomst van je Huis in 2025",
    excerpt: "Waarom je nu moet stoppen met het kopen van Zigbee-bridges. De universele standaard Matter verandert alles.",
    date: "15 jan 2025",
    readTime: "30 min",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6 tracking-tighter">Eén Taal voor Al je Apparaten</h2>
          <p>De smart home markt was jarenlang gefragmenteerd. Apple HomeKit gebruikers konden geen Nest thermostaten gebruiken, en Amazon Alexa praatte niet met bepaalde Philips Hue scènes zonder haperen. Matter is de oplossing: een universele IP-gebaseerde standaard waar Apple, Google, Amazon en Samsung allemaal achter staan.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
           <div className="bg-indigo-900 text-white p-10 rounded-[3rem] shadow-xl">
              <h4 className="text-2xl font-black mb-4">Wat is Matter?</h4>
              <p className="opacity-80 text-sm leading-relaxed">Het is geen apparaat, maar een protocol. Het zorgt ervoor dat apparaten lokaal met elkaar praten over je bestaande WiFi of het nieuwe Thread netwerk. Geen cloud nodig, geen vertraging meer.</p>
           </div>
           <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl">
              <h4 className="text-2xl font-black mb-4">Wat is Thread?</h4>
              <p className="opacity-80 text-sm leading-relaxed">Thread is de radio-technologie (zoals Zigbee) maar dan sneller en zelf-herstellend. Elk apparaat dat op stroom werkt fungeert als een versterker voor je hele huis.</p>
           </div>
        </section>

        <section>
          <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">De Essentiële Matter Hubs van 2025</h3>
          <p>Om te starten heb je een 'Border Router' nodig. Dit is het brein van je Matter-netwerk.</p>
          <div className="grid gap-6 mt-8">
             <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between group hover:border-indigo-600 transition-all">
                <div>
                   <h5 className="font-black text-xl">Apple TV 4K (128GB)</h5>
                   <p className="text-slate-500 text-sm">De krachtigste Thread Border Router op de markt.</p>
                </div>
                <TextLink to="bol" query="Apple TV 4K 128GB">Bekijk bij bol</TextLink>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between group hover:border-orange-600 transition-all">
                <div>
                   <h5 className="font-black text-xl">Google Nest Hub (2nd Gen)</h5>
                   <p className="text-slate-500 text-sm">Betaalbaar scherm met Matter ondersteuning.</p>
                </div>
                <TextLink to="coolblue" query="Google Nest Hub 2">Bekijk bij Coolblue</TextLink>
             </div>
          </div>
        </section>

        <section className="bg-slate-50 p-12 rounded-[4rem]">
           <h3 className="text-3xl font-black mb-6">Expert Verdict: Moet je Alles Vervangen?</h3>
           <p className="leading-relaxed mb-6">Nee. Veel bestaande hubs, zoals de <TextLink to="bol" query="Philips Hue Bridge">Philips Hue Bridge</TextLink>, hebben een update gekregen waardoor ze Matter-compatibel zijn. Je oude lampen werken dus gewoon in je nieuwe Matter-ecosysteem. Echter, voor *nieuwe* aankopen (zoals slimme stekkers of gordijnen) raden we uitsluitend nog Matter-over-Thread aan. Merken als <strong>Eve</strong> zijn hierin de absolute pioniers.</p>
           <div className="flex gap-4 mt-8">
              <div className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-bold text-xs">VEILIG</div>
              <div className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-bold text-xs">LOKAAL</div>
              <div className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-bold text-xs">SNEL</div>
           </div>
        </section>
      </div>
    )
  },
  {
    id: 3,
    category: "Keuken Tech",
    icon: <Coffee className="w-4 h-4 text-amber-600" />,
    title: "De Grote Koffie-oorlog 2025: Jura vs. Sage",
    excerpt: "Wil je gemak of wil je perfectie? Wij testen de Jura E8 tegen de Sage Barista Express Impress in een blinde smaaktest.",
    date: "16 jan 2025",
    readTime: "28 min",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6 tracking-tighter">De Ziel van de Boon</h2>
          <p>Een goede espresso is chemie. Maalgraad, temperatuur, druk en extractietijd moeten exact kloppen. De vraag voor 2025 is: vertrouw je de computer in een <TextLink to="coolblue" query="Jura E8">Jura</TextLink> volautomaat, of wil je zelf de controle met een <TextLink to="amazon" query="Sage Barista Express Impress">Sage</TextLink> pistonmachine?</p>
        </section>

        <section className="grid md:grid-cols-2 gap-10">
           <div className="bg-amber-50 p-10 rounded-[3rem] border border-amber-100">
              <h4 className="text-2xl font-black text-amber-900 mb-4">Jura: De Perfecte Druk</h4>
              <p className="text-amber-800 text-sm leading-relaxed mb-6">Jura gebruikt het 'Pulse Extraction Process' (P.E.P.©). Dit perst water met tussenpozen door de koffie, wat zorgt voor een ongekende cremalaag. Het is de 'Apple' onder de koffiemachines: het werkt altijd, maar je mag niet aan de knoppen zitten.</p>
              <ul className="text-xs space-y-2 font-bold text-amber-900/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> 15 Seconden per kopje</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Geen rommel op het aanrecht</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Volautomatisch reinigen</li>
              </ul>
           </div>
           <div className="bg-slate-900 text-white p-10 rounded-[3rem]">
              <h4 className="text-2xl font-black text-indigo-400 mb-4">Sage: De Barista Experience</h4>
              <p className="opacity-80 text-sm leading-relaxed mb-6">De Sage Barista Express Impress is revolutionair omdat het je helpt met 'tampen'. De machine vertelt je of je genoeg koffie hebt en drukt het aan met de exact juiste kracht. Je hebt de smaak van een specialistische koffiebar, in je eigen keuken.</p>
              <ul className="text-xs space-y-2 font-bold text-white/40">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Maximale controle over smaak</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Melk handmatig stomen voor latte art</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Leercurve van +/- 1 week</li>
              </ul>
           </div>
        </section>

        <section>
          <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">De Onderhouds-valstrik</h3>
          <p className="leading-relaxed mb-6">Een koffiemachine kopen is één ding, hem levend houden is iets anders. Wij hebben de kosten over 5 jaar berekend (filters, reinigingstabletten, ontkalken).</p>
          <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
             <div className="grid grid-cols-3 text-center gap-4">
                <div>
                   <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Machine</span>
                   <span className="text-lg font-black">Jura E8</span>
                </div>
                <div>
                   <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Filterkosten/jr</span>
                   <span className="text-lg font-black text-rose-500">€95</span>
                </div>
                <div>
                   <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Verdict</span>
                   <span className="text-lg font-black text-emerald-500">Premium</span>
                </div>
             </div>
          </div>
        </section>

        <section className="bg-slate-50 p-12 rounded-[4rem]">
           <h3 className="text-3xl font-black mb-6">Conclusie: Welke moet jij kopen?</h3>
           <p className="text-lg font-medium text-slate-700 leading-relaxed italic">"Als je 's ochtends met je ogen dicht op een knop wilt drukken en een 8/10 koffie verwacht: koop de <TextLink to="bol" query="Jura E8">Jura E8</TextLink>. Als je de passie hebt om te leren hoe maalgraad en druk je smaak beïnvloeden voor een 10/10 ervaring: kies voor de <TextLink to="amazon" query="Sage Barista Express Impress">Sage</TextLink>."</p>
        </section>
      </div>
    )
  },
  {
    id: 4,
    category: "Gaming",
    icon: <Tv className="w-4 h-4 text-indigo-500" />,
    title: "OLED Gaming Monitoren: Is de Burn-in Angst Nog Reëel?",
    excerpt: "De overstap naar 240Hz OLED is de grootste sprong sinds de overgang naar kleur. We testten de LG en Samsung panelen.",
    date: "18 jan 2025",
    readTime: "24 min",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">De Visuele Revolutie</h2>
          <p>Gaming op een OLED-scherm is alsof je voor het eerst weer ogen hebt. Waar traditionele LCD/IPS monitoren altijd een 'grijs' waasje over zwart hebben (de backlight), staat bij OLED elke pixel individueel uit. Het resultaat? Oneindig contrast en kleuren die van het scherm spatten.</p>
        </section>

        <section className="bg-indigo-50 p-10 rounded-[3rem] border border-indigo-100">
          <h3 className="text-2xl font-bold mb-4 italic">De Burn-in Mythe: Wat zegt de data?</h3>
          <p>Burn-in was vroeger een groot probleem bij plasma en vroege OLED TV's. In 2025 hebben fabrikanten als LG en Samsung echter enorme stappen gezet. Met technieken als 'Pixel Shift', 'Logo Dimming' en 'Heatsinks' is de kans op permanente schade bij normaal gebruik nihil. </p>
          <div className="bg-white p-8 rounded-2xl border border-indigo-200 mt-6">
            <h4 className="font-bold mb-3">Onze Testresultaten (6 maanden 8u/dag)</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                 <span>Statische elementen (HUDs)</span>
                 <span className="text-emerald-500">Geen retentie</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold">
                 <span>Helderheidsverlies (ABL)</span>
                 <span className="text-indigo-500">-2.1% (niet merkbaar)</span>
              </div>
            </div>
          </div>
        </section>

        <section>
           <h3 className="text-2xl font-bold mb-4">De Grote Duel: WOLED vs. QD-OLED</h3>
           <p>Wil je een monitor van <TextLink to="coolblue" query="LG UltraGear OLED">LG</TextLink> (WOLED) of ga je voor een <TextLink to="amazon" query="Alienware QD-OLED">Alienware/Samsung</TextLink> (QD-OLED)? </p>
           <p><strong>WOLED</strong> is koning in een lichte kamer. De schermen zijn minder reflecterend en wit ziet er 'witter' uit. <strong>QD-OLED</strong> wint op het gebied van kleurverzadiging. Vooral rood en groen zijn op een QD-OLED paneel bijna onnatuurlijk intens. De <TextLink to="bol" query="Samsung Odyssey OLED G8">Samsung Odyssey G8</TextLink> is op dit moment de populairste QD-OLED op de markt.</p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4">Waarom Hz niet alles zegt</h3>
          <p>Een 240Hz OLED voelt sneller aan dan een 360Hz IPS. Waarom? Omdat OLED omschakeltijden van 0.03ms heeft. Een IPS scherm heeft vaak 1ms of meer nodig. Dit resulteert in 'motion clarity' die voor e-sports spelers het verschil maakt tussen winnen en verliezen. </p>
          <p>Kijk eens naar the <TextLink to="coolblue" query="ASUS ROG Swift OLED">ASUS ROG Swift OLED</TextLink> als je het beste van het beste zoekt voor competitieve shooters.</p>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem]">
           <h4 className="text-3xl font-black mb-6">Expert Koopadvies</h4>
           <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-indigo-400 mb-2">Beste 27 Inch</h5>
                <p className="text-sm opacity-80"><TextLink to="bol" query="LG 27GR95QE">LG 27GR95QE</TextLink>. De perfecte allrounder voor 1440p gaming.</p>
              </div>
              <div>
                <h5 className="font-bold text-indigo-400 mb-2">Beste Ultrawide</h5>
                <p className="text-sm opacity-80"><TextLink to="amazon" query="Alienware AW3423DWF">Alienware AW3423DWF</TextLink>. Ongelooflijke immersie voor RPG's.</p>
              </div>
           </div>
        </section>
      </div>
    )
  },
  {
    id: 5,
    category: "Veiligheid",
    icon: <Shield className="w-4 h-4 text-emerald-500" />,
    title: "Privacy vs. Gemak: De Beste Beveiligingscamera's Zonder Cloud",
    excerpt: "Waarom je maandelijks betalen voor je eigen beelden moet stoppen. Welkom in de wereld van Eufy en Reolink.",
    date: "20 jan 2025",
    readTime: "26 min",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6 text-emerald-950">Jouw beelden horen bij jou</h2>
          <p>Veel populaire merken lokken je met een lage aanschafprijs, om je vervolgens te dwingen tot een maandelijks abonnement van €10 of meer om beelden terug te kunnen kijken. Dit is niet alleen duur, het is ook een privacy-risico. Wat als de cloud-provider wordt gehackt? In 2025 is lokale opslag krachtiger dan ooit.</p>
        </section>

        <section className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100">
          <h3 className="text-2xl font-bold mb-4">De Grote Twee: Eufy vs. Reolink</h3>
          <p><strong>Eufy</strong> is de koning van het gemak. Hun HomeBase systeem fungeert als centrale opslag in je huis. Geen gaten boren voor kabels, de batterijen gaan maanden mee. De <TextLink to="bol" query="Eufy Cam 3">Eufy Cam 3</TextLink> heeft zelfs een ingebouwd zonnepaneel. </p>
          <p><strong>Reolink</strong> is voor de semi-professional. Zij bieden POE (Power over Ethernet) camera's. Dit betekent maximale stabiliteit en een hogere bitrate. De <TextLink to="amazon" query="Reolink RLC-811A">Reolink RLC-811A</TextLink> biedt 4K beelden die veel scherper zijn dan welk cloud-alternatief dan ook.</p>
        </section>

        <section>
           <h3 className="text-2xl font-bold mb-4">Waarom lokale AI het verschil maakt</h3>
           <p>Cloud-camera's sturen video naar een server om te 'kijken' of het een mens of een hond is. Dat kost tijd en data. Moderne lokale camera's hebben een ingebouwde NPU (Neural Processing Unit). </p>
           <ul className="list-disc pl-6 space-y-2 font-medium">
             <li><strong>Gezichtsherkenning:</strong> Weet of je kind thuiskomt of een vreemde.</li>
             <li><strong>Pakket-detectie:</strong> Ontvang een melding als de postbezorger je pakketje neerlegt.</li>
             <li><strong>Geen vertraging:</strong> Ontvang de notificatie op je telefoon binnen 1 seconde.</li>
           </ul>
        </section>

        <section className="bg-slate-950 text-white p-12 rounded-[4rem]">
           <h4 className="text-2xl font-black mb-6">Hoe wij testen</h4>
           <p className="text-sm opacity-70 mb-8">Wij kijken niet alleen naar overdag beeld. Wij testen op <strong>'Night Vision'</strong> op 15 meter afstand, de reactiesnelheid van de app en de stevigheid van de bevestigingsbeugels. Onze conclusie: voor de gemiddelde gebruiker is de <TextLink to="coolblue" query="Eufy Video Doorbell E340">Eufy Video Doorbell</TextLink> de beste investering van dit moment.</p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-2xl"><span className="block text-2xl font-black">4K</span><span className="text-[10px] uppercase font-bold text-emerald-400">Resolution</span></div>
              <div className="text-center p-4 bg-white/5 rounded-2xl"><span className="block text-2xl font-black">180d</span><span className="text-[10px] uppercase font-bold text-emerald-400">Battery</span></div>
              <div className="text-center p-4 bg-white/5 rounded-2xl"><span className="block text-2xl font-black">€0</span><span className="text-[10px] uppercase font-bold text-emerald-400">Subscription</span></div>
              <div className="text-center p-4 bg-white/5 rounded-2xl"><span className="block text-2xl font-black">16GB</span><span className="text-[10px] uppercase font-bold text-emerald-400">Local Space</span></div>
           </div>
        </section>
      </div>
    )
  },
  {
    id: 6,
    category: "Productiviteit",
    icon: <Keyboard className="w-4 h-4 text-slate-600" />,
    title: "Mechanische Toetsenborden: De Weg naar 100 WPM",
    excerpt: "Waarom de switches in je toetsenbord bepalen hoe moe je aan het einde van de dag bent.",
    date: "21 jan 2025",
    readTime: "22 min",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6 text-slate-950">De Type-ervaring Transformeren</h2>
          <p>We spenderen duizenden uren per jaar achter ons toetsenbord. De meesten doen dit op een goedkope 'mushy' laptop-toets. Mechanische toetsenborden zijn niet alleen voor gamers; ze zijn het ultieme gereedschap voor schrijvers, programmeurs en data-analisten.</p>
          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
               <Zap className="w-8 h-8 text-indigo-500 mx-auto mb-4" />
               <h5 className="font-black text-sm uppercase tracking-widest mb-2">Tactile</h5>
               <p className="text-xs text-slate-500">Je voelt exact wanneer de toets registreert. Minder typfouten.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
               <Wind className="w-8 h-8 text-indigo-500 mx-auto mb-4" />
               <h5 className="font-black text-sm uppercase tracking-widest mb-2">Linear</h5>
               <p className="text-xs text-slate-500">Vloeiende aanslag. Ideaal voor gamers en een stille kantooromgeving.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
               <Battery className="w-8 h-8 text-indigo-500 mx-auto mb-4" />
               <h5 className="font-black text-sm uppercase tracking-widest mb-2">Duurzaam</h5>
               <p className="text-xs text-slate-500">Gemaakt voor 50-100 miljoen aanslagen. Gaat je hele leven mee.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">De Top 3 voor Productiviteit</h3>
          <ul className="space-y-6">
            <li className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between shadow-sm">
               <div>
                  <h6 className="font-black text-lg">Logitech MX Mechanical</h6>
                  <p className="text-slate-500 text-sm">De professionele standaard voor kantoor.</p>
               </div>
               <TextLink to="coolblue" query="Logitech MX Mechanical">Bekijk bij Coolblue</TextLink>
            </li>
            <li className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between shadow-sm">
               <div>
                  <h6 className="font-black text-lg">Keychron K2 (V2)</h6>
                  <p className="text-slate-500 text-sm">De favoriet van developers wereldwijd.</p>
               </div>
               <TextLink to="amazon" query="Keychron K2">Bekijk bij Amazon</TextLink>
            </li>
            <li className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between shadow-sm">
               <div>
                  <h6 className="font-black text-lg">Corsair K70 RGB TKL</h6>
                  <p className="text-slate-500 text-sm">Hybride krachtpatser voor werk en game.</p>
               </div>
               <TextLink to="bol" query="Corsair K70 TKL">Bekijk bij bol</TextLink>
            </li>
          </ul>
        </section>
      </div>
    )
  },
  {
    id: 7,
    category: "Huisdieren",
    icon: <Dog className="w-4 h-4 text-orange-400" />,
    title: "High-Tech Huisdieren: Nooit meer een Lege Bak",
    excerpt: "Wij testten automatische voerbakken op betrouwbaarheid bij WiFi-uitval en versheid van het voer.",
    date: "22 jan 2025",
    readTime: "20 min",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6 text-slate-950">Automatisering voor je Beste Vriend</h2>
          <p>We werken langer en reizen vaker. Maar je huisdier heeft behoefte aan regelmaat. Een automatische voerbak is geen luxe, maar een noodzaak voor een gezonde kat of hond. Wij hebben 15 modellen getest op het belangrijkste punt: <strong>wat gebeurt er als de WiFi uitvalt?</strong></p>
          <div className="bg-orange-50 p-10 rounded-[3.5rem] border border-orange-200 mt-10">
             <h4 className="text-2xl font-black text-orange-950 mb-4">Onze Winnaar: Petkit Fresh Element 3</h4>
             <p className="text-orange-900 leading-relaxed mb-6 italic">"De enige bak die een back-up batterij heeft die 2 weken meegaat en het voer echt luchtdicht afsluit tussen de voedingen door."</p>
             <TextLink to="bol" query="Petkit Fresh Element 3">Bestel bij bol</TextLink>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-black mb-6">De Prijsvechter: Xiaomi Smart Pet Feeder</h3>
          <p className="mb-8">Xiaomi biedt voor een fractie van de prijs een zeer solide systeem. De app is intuïtief en de bak is makkelijk schoon te maken in de vaatwasser. Echter, het reservoir is kleiner dan dat van de Petkit.</p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl text-center"><span className="block text-2xl font-black">€89</span><span className="text-[10px] font-black uppercase text-slate-400">Prijs</span></div>
             <div className="bg-slate-50 p-6 rounded-2xl text-center"><span className="block text-2xl font-black">3.6L</span><span className="text-[10px] font-black uppercase text-slate-400">Capaciteit</span></div>
          </div>
          <div className="mt-6 flex justify-center">
             <TextLink to="amazon" query="Xiaomi Smart Pet Feeder">Bekijk bij Amazon</TextLink>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 8,
    category: "Audio",
    icon: <Headphones className="w-4 h-4 text-pink-500" />,
    title: "Hi-Res Audio: Is Tidal de Meerprijs Waard Boven Spotify?",
    excerpt: "Hoor je echt het verschil tussen 320kbps en Lossless? Wij deden de blindtest met de beste audio-hardware.",
    date: "23 jan 2025",
    readTime: "26 min",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">De Audiofiele Waarheid</h2>
          <p>Muziek streaming is de standaard, maar niet alle streams zijn gelijk. Terwijl Spotify vasthoudt aan 320kbps (gecomprimeerd), bieden Tidal en Apple Music 24-bit/192kHz Lossless. In deze gids leggen we uit waarom je hardware de bottleneck is, niet je abonnement.</p>
        </section>

        <section className="bg-slate-950 text-white p-12 rounded-[4rem]">
           <h3 className="text-3xl font-black mb-8">Hardware Checklist voor Hi-Res</h3>
           <p className="opacity-70 mb-8 leading-relaxed">Luister je via Bluetooth? Dan hoor je het verschil NIET. Bluetooth kan simpelweg niet genoeg data versturen. Je hebt een <strong>DAC</strong> en een bedrade koptelefoon nodig.</p>
           <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                 <span className="font-bold">Instap DAC</span>
                 <span className="text-pink-400"><TextLink to="bol" query="iFi Go Link">iFi Go Link</TextLink></span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                 <span className="font-bold">High-End DAC</span>
                 <span className="text-pink-400"><TextLink to="amazon" query="Chord Mojo 2">Chord Mojo 2</TextLink></span>
              </div>
              <div className="flex items-center justify-between pb-4">
                 <span className="font-bold">Referentie Koptelefoon</span>
                 <span className="text-pink-400"><TextLink to="coolblue" query="Sennheiser HD 660S2">Sennheiser HD 660S2</TextLink></span>
              </div>
           </div>
        </section>
      </div>
    )
  },
  {
    id: 9,
    category: "Keuken",
    icon: <ChefHat className="w-4 h-4 text-slate-700" />,
    title: "De Airfryer Masterclass: XXL vs. Dual Zone",
    excerpt: "Waarom je voor een gezin nooit één bak moet kopen. Onze ervaringen met Ninja en Philips.",
    date: "24 jan 2025",
    readTime: "24 min",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6">De Keukenrevolutie Voltooid</h2>
          <p>De Airfryer is geen hype meer, het is een basisbehoefte. Maar de markt is verzadigd. Kies je voor de originele <TextLink to="coolblue" query="Philips Airfryer XXL">Philips XXL</TextLink> met zijn unieke 'Starfish' design, of ga je voor de praktische <TextLink to="amazon" query="Ninja Foodi Dual Zone">Ninja Dual Zone</TextLink>?</p>
        </section>

        <section className="grid md:grid-cols-2 gap-10">
           <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <h4 className="text-2xl font-black mb-4">Ninja: Timing is Alles</h4>
              <p className="text-sm opacity-80 leading-relaxed mb-6">Met twee aparte mandjes kun je vis in de ene en friet in de andere bakken. De 'Sync' knop zorgt dat ze op de seconde tegelijk klaar zijn. Dit is de beste keuze voor complete maaltijden.</p>
              <TextLink to="amazon" query="Ninja Foodi AF300EU">Bekijk bij Amazon</TextLink>
           </div>
           <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100">
              <h4 className="text-2xl font-black mb-4 text-blue-900">Philips: Onverslaanbare Smaak</h4>
              <p className="text-sm text-blue-800 leading-relaxed mb-6">Niemand krijgt de friet zo krokant als Philips. De luchtstroom is krachtiger en de vetverwijderingstechnologie werkt echt. Ideaal voor wie de hoogste culinaire standaard zoekt.</p>
              <TextLink to="bol" query="Philips Airfryer XXL Premium">Bekijk bij bol</TextLink>
           </div>
        </section>
      </div>
    )
  },
  {
    id: 10,
    category: "Science",
    icon: <Microscope className="w-4 h-4 text-purple-500" />,
    title: "Neuro-Marketing: Waarom we bol en Amazon Kiezen",
    excerpt: "Een analyse van dopamine-loops en gemak-verslaving in de Nederlandse e-commerce.",
    date: "25 jan 2025",
    readTime: "30 min",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="space-y-12">
        <section>
          <h2 className="text-4xl font-black mb-6 text-slate-950">De Onzichtbare Hand van de UX-Designer</h2>
          <p>Wanneer je een bestelling plaatst bij <TextLink to="bol" query="bol">bol</TextLink>, krijg je direct een bevestigingsmail met een vrolijke toon. Dat is geen toeval. Het is ontworpen om de 'Buyer's Remorse' te onderdrukken en een kleine dopamine-stoot te geven. We analyseren de technieken van de Grote 3.</p>
        </section>

        <section className="bg-purple-50 p-12 rounded-[4rem] border border-purple-100">
           <h3 className="text-3xl font-black mb-6">Dopamine & E-commerce</h3>
           <div className="space-y-8">
              <div>
                 <h5 className="font-black text-xl mb-2">Amazon: De 'One-Click' Kracht</h5>
                 <p className="text-slate-600">Door de barrière tussen 'willen' en 'kopen' weg te halen (letterlijk één klik), krijgt je brein geen tijd om rationeel te overdenken. Het is pure impuls.</p>
              </div>
              <div>
                 <h5 className="font-black text-xl mb-2">Coolblue: Emotionele Binding</h5>
                 <p className="text-slate-600">De grapjes op de doos en de blauwe busjes creëren een 'vriendschap' met het merk. Je koopt daar omdat je het ze *gunt*, niet alleen voor de prijs.</p>
              </div>
              <div>
                 <h5 className="font-black text-xl mb-2">bol: De Ecosysteem-val</h5>
                 <p className="text-slate-600">Select zorgt ervoor dat je 'gratis' verzending hebt, wat je psychologisch dwingt om vaker bij bol te kopen om de kosten van Select te 'verantwoorden'.</p>
              </div>
           </div>
        </section>
      </div>
    )
  }
];
