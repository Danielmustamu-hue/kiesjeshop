import React from 'react';
import { Laptop, Gift, Home, Tag, Book, Lightbulb } from 'lucide-react';

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
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800", 
    content: (
      <>
        <p>Een nieuwe laptop is een flinke investering. Je wilt niet alleen de beste prijs, maar ook de zekerheid dat je geholpen wordt als er iets mis is. In Nederland domineren twee spelers de markt: <strong>Bol.com</strong> en <strong>Coolblue</strong>. Maar wie biedt nu écht de beste waarde?</p>
        
        <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
            alt="Werken op een laptop" 
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
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800", 
    content: (
      <>
        <p>Je oude wasmachine is stuk en je woont op 3 hoog zonder lift. Dit is het moment waar de keuze voor de webshop cruciaal is. De bezorgservice verschilt namelijk enorm per aanbieder.</p>

        <img 
            src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800" 
            alt="Wasmachine in een moderne badkamer" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
            loading="lazy"
        />

        <h3>Coolblue: De koning van de glimlach</h3>
        <p>Coolblue heeft een eigen bezorgdienst (CoolblueBezorgt). Dit is hun grootste troef. </p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Ze tillen gratis naar boven (t/m 4e verdieping).</li>
            <li>Ze sluiten hem gratis aan (op een bestaande aansluiting).</li>
            <li>Ze nemen je oude apparaat direct mee terug.</li>
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
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800", 
    content: (
      <>
        <p>Het is 21 december. Je bent een cadeau vergeten. Paniek. Welke app moet je openen om zeker te weten dat je pakje er morgen is?</p>
        
        <img 
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800" 
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
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800", 
    content: (
      <>
        <p>Waarom de volle mep betalen als het product alleen maar uit de doos is geweest? Retourdeals worden steeds populairder. Maar de voorwaarden verschillen enorm.</p>
        
        <img 
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800" 
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
    category: "Boeken",
    icon: <Book className="w-5 h-5 text-indigo-500" />,
    title: "E-reader strijd: Kindle (Amazon) of Kobo (Bol)?",
    excerpt: "De zomer komt eraan. Welke e-reader neem je mee? Wij vergelijken de ecosystemen van Amazon Kindle en Bol's Kobo.",
    date: "15 nov 2025",
    readTime: "5 min leestijd",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800", 
    content: (
      <>
        <p>Wie graag digitaal leest, komt uiteindelijk voor de grote keuze te staan: kies je voor het gesloten ecosysteem van Amazon (Kindle) of de Nederlandse favoriet Kobo (via Bol)?</p>
        
        <img 
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800" 
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
    id: 6,
    category: "Smart Home",
    icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
    title: "Smart Home: Google Nest of Amazon Alexa?",
    excerpt: "Je wilt je huis slim maken. Begin je met een Google Nest Mini van Coolblue of een Echo Dot van Amazon?",
    date: "12 nov 2025",
    readTime: "4 min leestijd",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=800", 
    content: (
      <>
        <p>Een slim huis begint bij de spraakassistent. Maar welke 'taal' gaat jouw huis spreken? De keuze voor een platform bepaalt welke apparaten je in de toekomst kunt kopen.</p>

        <img 
            src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800" 
            alt="Smart home interieur" 
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
  }
];