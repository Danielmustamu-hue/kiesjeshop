import React from 'react';
import { Laptop, Gift, Home, CheckCircle, Tag, AlertTriangle, Briefcase, Book, Gamepad2, Lightbulb, Smile } from 'lucide-react';

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
    category: "Elektronica",
    icon: <Laptop className="w-5 h-5 text-blue-500" />,
    title: "Laptop kopen: Coolblue of Bol.com?",
    excerpt: "Zoek je een nieuwe laptop? Wij vergelijken de garantievoorwaarden, pixel-garantie en klantenservice van beide giganten.",
    date: "10 dec 2025",
    readTime: "4 min leestijd",
    // NIEUWE AFBEELDING: Laptop op bureau, zeer stabiele link
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Een nieuwe laptop is een flinke investering. Je wilt niet alleen de beste prijs, maar ook de zekerheid dat je geholpen wordt als er iets mis is. In Nederland domineren twee spelers de markt: <strong>Bol.com</strong> en <strong>Coolblue</strong>. Maar wie biedt nu écht de beste waarde?</p>
        
        <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=800&auto=format&fit=crop" 
            alt="MacBook op bureau in lichte werkomgeving" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>1. Het Assortiment</h3>
        <p><strong>Bol.com</strong> werkt samen met duizenden partners. Hierdoor is hun aanbod gigantisch. Zoek je een specifiek, ouder model of een budget-laptop van een minder bekend merk? Grote kans dat Bol.com hem heeft. <strong>Coolblue</strong> daarentegen hanteert een gecureerd assortiment. Ze verkopen alleen modellen waar ze zelf achter staan. Dit maakt kiezen makkelijker (minder keuzestress), maar beperkt wel je opties.</p>

        <h3>2. Garantie en Pixelgarantie</h3>
        <p>Hier zien we een duidelijk verschil:</p>
        <ul>
          <li><strong>Coolblue:</strong> Staat bekend om hun unieke 'Pixelgarantie' op veel monitoren en laptops. Heb je één dood pixel? Dan ruilen ze hem vaak om. Ook hebben ze fysieke winkels waar je direct met je laptop naartoe kunt.</li>
          <li><strong>Bol.com:</strong> Volgt de fabrieksgarantie. Reparaties gaan vaak via externe reparatiecentra, wat soms iets langer kan duren (2-3 weken).</li>
        </ul>

        <h3>3. Advies nodig?</h3>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
          <strong>Onze tip:</strong> Heb je geen verstand van specificaties (RAM, SSD, processoren)? Kies dan voor <strong>Coolblue</strong>. Hun 'Coolblue's Keuze' helpt je echt de juiste machine te vinden. Weet je precies welk modelnummer je wilt? Check dan <strong>Bol.com</strong> of <strong>Amazon</strong> voor de scherpste prijs.
        </div>

        <h3>Conclusie</h3>
        <p>Kies voor <strong>Coolblue</strong> als je service, advies en een fysiek aanspreekpunt belangrijk vindt. Kies voor <strong>Bol.com</strong> als je op zoek bent naar een specifieke deal of een model dat bij Coolblue niet meer leverbaar is.</p>
      </>
    )
  },
  {
    id: 2,
    category: "Wonen",
    icon: <Home className="w-5 h-5 text-orange-500" />,
    title: "Grote huishoudelijke apparaten bezorgen: Wie tilt 'm naar zolder?",
    excerpt: "Wasmachine naar de 4e etage? Lees hier welke webshop gratis naar boven tilt en wie de oude machine direct meeneemt.",
    date: "8 dec 2025",
    readTime: "3 min leestijd",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Je oude wasmachine is stuk en je woont op 3 hoog zonder lift. Dit is het moment waar de keuze voor de webshop cruciaal is. De bezorgservice verschilt namelijk enorm per aanbieder.</p>

        <img 
            src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=800&auto=format&fit=crop" 
            alt="Wasmachine in een moderne badkamer" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>Coolblue: De koning van de glimlach</h3>
        <p>Coolblue heeft een eigen bezorgdienst (CoolblueBezorgt). Dit is hun grootste troef. </p>
        <ul className="list-none pl-0 space-y-2">
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> <span>Ze tillen gratis naar boven (t/m 4e verdieping).</span></li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> <span>Ze sluiten hem gratis aan (op een bestaande aansluiting).</span></li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> <span>Ze nemen je oude apparaat direct mee terug.</span></li>
        </ul>

        <h3>Bol.com: Dynalogic en PostNL Extra</h3>
        <p>Bol.com besteedt groot transport uit aan partners zoals Dynalogic. De standaardservice is vaak "drempellevering" (tot aan de voordeur). Wil je dat ze hem naar boven tillen en aansluiten? Dan moet je vaak betalen voor een <strong>extra servicepakket</strong>. Let hier goed op bij het afrekenen!</p>

        <h3>Amazon.nl</h3>
        <p>Bij Amazon is het vaak drempellevering. Installatieservice is in Nederland nog beperkt beschikbaar vergeleken met de andere twee.</p>

        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
          <strong>Conclusie:</strong> Voor witgoed is <strong>Coolblue</strong> de absolute winnaar. De meerprijs van het product verdien je direct terug doordat installatie en tillen vaak gratis is, waar je bij anderen voor moet bijbetalen.
        </div>
      </>
    )
  },
  {
    id: 3,
    category: "Cadeaus",
    icon: <Gift className="w-5 h-5 text-purple-500" />,
    title: "Last-minute cadeaus: Wie redt je kerst?",
    excerpt: "Heb je haast? Amazon Prime vs Bol Select. Wie bezorgt er echt de volgende dag (of dezelfde avond) in Nederland?",
    date: "5 dec 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Het is 21 december. Je bent een cadeau vergeten. Paniek. Welke app moet je openen om zeker te weten dat je pakje er morgen is?</p>
        
        <img 
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop" 
            alt="Cadeaus inpakken met rood papier" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>De Cut-off tijden</h3>
        <p>Dit is het tijdstip waarop je uiterlijk besteld moet hebben voor levering de volgende dag:</p>
        <ul>
            <li><strong>Bol.com:</strong> Vaak tot 23:59 uur voor levering morgen. Met 'Select' soms zelfs dezelfde dag nog als je 's ochtends bestelt (in de Randstad).</li>
            <li><strong>Coolblue:</strong> Tot 23:59 uur. Zondag levering is ook standaard geworden.</li>
            <li><strong>Amazon.nl:</strong> Variabel. Met Prime vaak tot laat in de avond, maar let op: Amazon verstuurt soms ook vanuit Duitsland of Frankrijk (1-2 dagen).</li>
        </ul>

        <h3>Zondag en Avondlevering</h3>
        <p>Hier wint <strong>Bol.com</strong> terrein met de 'Select' optie (ca. €12 per jaar). Hiermee krijg je standaard avondlevering en zondaglevering zonder extra kosten. <strong>Coolblue</strong> biedt dit ook, maar rekent vaak verzendkosten voor bestellingen onder de €20,-, waar Bol Select en Amazon Prime dan gratis blijven.</p>

        <h3>Het risico van partners</h3>
        <p>Let op bij Bol.com en Amazon: kijk of het product door de webshop zélf wordt verstuurd of door een externe partner. Externe partners hebben vaak langere levertijden (2-3 dagen). Filter op "Levering morgen" om teleurstelling te voorkomen.</p>
      </>
    )
  },
  {
    id: 4,
    category: "Besparen",
    icon: <Tag className="w-5 h-5 text-green-600" />,
    title: "Retourdeals: Slim besparen of kat in de zak?",
    excerpt: "Bol Retourkansjes, Coolblue Tweedekans en Amazon Warehouse. Wat zijn de verschillen en waar is de korting het hoogst?",
    date: "1 dec 2025",
    readTime: "4 min leestijd",
    // NIEUWE AFBEELDING: Magazijn met dozen
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Waarom de volle mep betalen als het product alleen maar uit de doos is geweest? Retourdeals worden steeds populairder. Maar de voorwaarden verschillen enorm.</p>
        
        <img 
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop" 
            alt="Stapel kartonnen dozen in opslag" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>Coolblue Tweedekans</h3>
        <p>Hier krijg je de meeste zekerheid. Coolblue controleert het product handmatig en maakt er eigen foto's van als er schade is. Je krijgt gewoon <strong>2 jaar garantie</strong> en mag het binnen 30 dagen retourneren. De korting is vaak bescheiden (5-15%).</p>

        <h3>Bol.com Retourkansjes</h3>
        <p>Het aanbod is enorm. De status wordt aangegeven (bijv. "Als nieuw" of "Lichte gebruikerssporen"). De korting kan flink oplopen, maar let op: de garantievoorwaarden zijn soms anders dan bij een nieuw product als het via een externe partner gaat.</p>

        <h3>Amazon Warehouse</h3>
        <p>Hier vind je vaak de <strong>hoogste kortingen</strong> (soms wel 30-50%). De omschrijving is echter vaak summier ("Acceptabel - krasje op achterkant"). Het is meer een gok, maar dankzij het soepele retourbeleid van Amazon kun je het risico vaak wel nemen.</p>
      </>
    )
  },
  {
    id: 5,
    category: "Veiligheid",
    icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
    title: "Pas op voor nepreviews: Zo herken je ze",
    excerpt: "Lijkt dat goedkope product te mooi om waar te zijn? Wij leggen uit hoe je fake reviews spot op Amazon en Bol.",
    date: "28 nov 2025",
    readTime: "3 min leestijd",
    image: "https://images.unsplash.com/photo-1555421689-49172292529e?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Je ziet een onbekend merk oordopjes voor €20 met 5000 vijf-sterren reviews. Trap er niet in. Veel marketplaces kampen met nepreviews.</p>
        
        <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
            alt="Persoon die data en reviews checkt op scherm" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>De Rode Vlaggen</h3>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Gebroken Nederlands:</strong> "Dit product is zeer goed gemaakt en ik hou van de kleur." (Vertaald met Google Translate).</li>
            <li><strong>Alleen maar 5 sterren:</strong> Geen enkel product is perfect. Zoek altijd naar de 2, 3 of 4 sterren reviews voor een eerlijk beeld.</li>
            <li><strong>Recente explosie:</strong> Heeft het product in 2 dagen tijd 100 reviews gekregen? Verdacht.</li>
        </ul>

        <h3>Het verschil per platform</h3>
        <p><strong>Amazon</strong> heeft internationaal veel last van review-manipulatie, maar hun algoritmes worden steeds strenger. <strong>Bol.com</strong> labelt reviews met "Geverifieerde koper", wat iets meer zekerheid geeft. <strong>Coolblue</strong> heeft hier het minste last van, omdat zij producten zelf cureren en minder met vage externe partijen werken.</p>
      </>
    )
  },
  {
    id: 6,
    category: "Zakelijk",
    icon: <Briefcase className="w-5 h-5 text-slate-500" />,
    title: "Zakelijk bestellen: Welke shop heeft de beste factuur?",
    excerpt: "ZZP'er of MKB? Een correcte BTW-factuur is essentieel. Waar gaat dit automatisch en waar is het een drama?",
    date: "20 nov 2025",
    readTime: "3 min leestijd",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Niets is frustrerender dan aan het eind van het kwartaal achter facturen aan moeten bellen. Voor zakelijke aankopen werkt niet elke consumentenshop even lekker.</p>
        
        <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" 
            alt="Administratie en rekenmachine op bureau" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>Amazon Business</h3>
        <p>Amazon heeft een specifiek zakelijk account (Amazon Business). Als je dit instelt, krijg je automatisch facturen met BTW-uitsplitsing. Let op bij externe verkopers: soms sturen zij geen BTW-factuur als ze in het buitenland zitten (intracommunautaire prestaties).</p>

        <h3>Coolblue Zakelijk</h3>
        <p>Coolblue levert altijd een kraakheldere Nederlandse BTW-factuur direct in je mail en account. Voor grotere offertes kun je zelfs bellen met een accountmanager. Voor de Nederlandse ZZP'er vaak de makkelijkste optie.</p>

        <h3>Bol.com Zakelijk</h3>
        <p>Ook Bol heeft een zakelijk account. Het voordeel is dat je achteraf kunt betalen. De facturatie is over het algemeen goed geregeld, tenzij je bij een kleine externe partner koopt die zijn administratie niet op orde heeft.</p>
      </>
    )
  },
  {
    id: 7,
    category: "Boeken",
    icon: <Book className="w-5 h-5 text-indigo-500" />,
    title: "E-reader strijd: Kindle (Amazon) of Kobo (Bol)?",
    excerpt: "De zomer komt eraan. Welke e-reader neem je mee? Wij vergelijken de ecosystemen van Amazon Kindle en Bol's Kobo.",
    date: "15 nov 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Wie graag digitaal leest, komt uiteindelijk voor de grote keuze te staan: kies je voor het gesloten ecosysteem van Amazon (Kindle) of de Nederlandse favoriet Kobo (via Bol)?</p>
        
        <img 
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop" 
            alt="Persoon leest boek met koffie" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>Bol.com & Kobo: De Nederlandse Vrijheid</h3>
        <p>Bol.com werkt nauw samen met Kobo. Het allergrootste voordeel hiervan is <strong>Kobo Plus</strong>: een 'Netflix voor boeken' abonnement. Daarnaast ondersteunt Kobo het open <strong>ePub-formaat</strong>. Dit betekent dat je makkelijk boeken van de bibliotheek of andere winkels op je e-reader kunt zetten. Dit maakt Kobo de absolute winnaar voor de Nederlandse lezer die flexibiliteit wil.</p>

        <h3>Amazon & Kindle: Wereldwijde Kwaliteit</h3>
        <p>De Kindle hardware (Paperwhite, Oasis) is vaak net iets robuuster en sneller. Het nadeel? Het is een gesloten systeem. Je koopt je boeken bij Amazon. Als je veel Engelse boeken leest, is Amazon vaak goedkoper en is het aanbod groter. Maar let op: Nederlandse bibliotheekboeken op een Kindle zetten is een gedoe.</p>

        <h3>Conclusie</h3>
        <p>Lees je vooral Nederlands en wil je gebruikmaken van de Bibliotheek of een all-you-can-read abonnement? Ga voor een <strong>Kobo via Bol.com</strong>. Lees je veel Engels en wil je de beste bouwkwaliteit? Kies de <strong>Kindle via Amazon</strong>.</p>
      </>
    )
  },
  {
    id: 8,
    category: "Smart Home",
    icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
    title: "Smart Home beginnen: Google Nest of Amazon Alexa?",
    excerpt: "Je wilt je huis slim maken. Begin je met een Google Nest Mini van Coolblue of een Echo Dot van Amazon?",
    date: "12 nov 2025",
    readTime: "4 min leestijd",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Een slim huis begint bij de spraakassistent. Maar welke 'taal' gaat jouw huis spreken? De keuze voor een platform bepaalt welke apparaten je in de toekomst kunt kopen.</p>

        <img 
            src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800&auto=format&fit=crop" 
            alt="Smartphone met smart home app interface" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>Google Nest (via Coolblue & Bol)</h3>
        <p>In Nederland is Google Assistant (Nest) veruit het populairst. Waarom? Omdat hij <strong>Nederlands</strong> veel beter verstaat dan de concurrentie. Coolblue verkoopt veel bundels met Google Nest Hubs en Philips Hue lampen. Als je Android gebruiker bent, is dit de logische keuze.</p>

        <h3>Amazon Alexa (Echo)</h3>
        <p>Amazon's Alexa is in de VS marktleider en werkt met duizenden apparaten (vaak meer dan Google). Echter, de Nederlandse ondersteuning loopt soms nog wat achter. Wel zijn de Amazon Echo speakers vaak <strong>goedkoper</strong>, zeker tijdens Prime Days. Ook integreert het perfect met Ring deurbellen (want Ring is van Amazon).</p>

        <h3>Advies</h3>
        <p>Wil je dat je oma of kinderen ook tegen het huis kunnen praten? Kies <strong>Google Nest</strong> bij Coolblue of Bol. Ben je een tech-tweaker en wil je de goedkoopste sensoren uit China koppelen? Dan is <strong>Alexa via Amazon</strong> vaak flexibeler.</p>
      </>
    )
  },
  {
    id: 9,
    category: "Speelgoed",
    icon: <Smile className="w-5 h-5 text-pink-500" />,
    title: "Speelgoed & LEGO: Waar vind je de zeldzame sets?",
    excerpt: "Sinterklaas en Kerst komen eraan. Waar is het Grote Speelgoedboek de baas en waar scoor je die exclusieve LEGO set?",
    date: "8 nov 2025",
    readTime: "3 min leestijd",
    image: "https://images.unsplash.com/photo-1558877385-84a181d252bf?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Voor ouders is het najaar een dure tijd. Prijzen vergelijken loont enorm, zeker bij duur speelgoed zoals LEGO Technic of grote poppenhuizen.</p>
        
        <img 
            src="https://images.unsplash.com/photo-1566576912906-25433180e988?q=80&w=800&auto=format&fit=crop" 
            alt="Kind speelt met LEGO stenen" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>Bol.com: Het Grote Speelgoedboek</h3>
        <p>Bol heeft een briljante marketingzet met hun papieren speelgoedboek. Kinderen kunnen knippen en plakken. Het assortiment is enorm en ze hebben vaak 'volume-deals' (3 halen, 2 betalen) op spellen. Voor het standaard verlanglijstje is Bol.com vaak de makkelijkste 'one-stop-shop'.</p>

        <h3>Amazon: De LEGO Koning</h3>
        <p>Hier is een geheim: <strong>Amazon is bijna altijd goedkoper met LEGO</strong>. Zeker de grotere sets (Star Wars, Technic) zijn bij Amazon.nl soms wel 20% tot 30% goedkoper dan de adviesprijs. Ze matchen vaak prijzen uit Duitsland. Verzamelaars kijken altijd eerst op Amazon.</p>

        <h3>Coolblue?</h3>
        <p>Coolblue verkoopt wel bordspellen en consoles, maar is geen speelgoedwinkel. Voor LEGO of poppen moet je hier niet zijn.</p>
      </>
    )
  },
  {
    id: 10,
    category: "Gaming",
    icon: <Gamepad2 className="w-5 h-5 text-purple-600" />,
    title: "Games Pre-orderen: Wie levert op releaseday?",
    excerpt: "De nieuwe FIFA of Call of Duty komt uit. Je wilt hem OP de dag van release hebben. Waar moet je bestellen?",
    date: "5 nov 2025",
    readTime: "3 min leestijd",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop", 
    content: (
      <>
        <p>Voor gamers is er niets erger dan wachten terwijl je vrienden al online zijn. 'Release Day Delivery' is heilig.</p>
        
        <img 
            src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800&auto=format&fit=crop" 
            alt="PlayStation controller in handen van gamer" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>Bol.com: De zekerheid</h3>
        <p>Bol.com heeft dit proces zeer goed op orde. Ze versturen pre-orders vaak een dag eerder, zodat het op de releasedag bij jou op de mat ligt. Door hun samenwerking met PostNL is de betrouwbaarheid in Nederland erg hoog (ca. 95%).</p>

        <h3>Coolblue: De middernacht optie</h3>
        <p>Woon je in een grote stad? Coolblue bezorgt soms nog dezelfde avond. Maar hun game-assortiment is kleiner. Ze richten zich meer op de hardware (Consoles, headsets, monitoren) dan op de losse games.</p>

        <h3>Amazon: De prijsvechter</h3>
        <p>Bij Amazon zijn games vaak €5 tot €10 goedkoper in de pre-order. Echter, de levering komt soms uit een distributiecentrum in Frankrijk of Duitsland. Hierdoor kan het gebeuren dat je game pas 1 of 2 dagen na de release binnenkomt. Is geld belangrijker dan tijd? Kies Amazon. Wil je spelen op minuut 1? Kies Bol.</p>
      </>
    )
  }
];