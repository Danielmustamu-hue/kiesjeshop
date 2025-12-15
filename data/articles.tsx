import React from 'react';
import { Laptop, Gift, Home, CheckCircle, XCircle } from 'lucide-react';

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
    image: "https://images.unsplash.com/photo-1593642632823-8f7853670f40?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p>Een nieuwe laptop is een flinke investering. Je wilt niet alleen de beste prijs, maar ook de zekerheid dat je geholpen wordt als er iets mis is. In Nederland domineren twee spelers de markt: <strong>Bol.com</strong> en <strong>Coolblue</strong>. Maar wie biedt nu écht de beste waarde?</p>
        
        <img 
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop" 
            alt="Werken op een laptop" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
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
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p>Je oude wasmachine is stuk en je woont op 3 hoog zonder lift. Dit is het moment waar de keuze voor de webshop cruciaal is. De bezorgservice verschilt namelijk enorm per aanbieder.</p>

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
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p>Het is 21 december. Je bent een cadeau vergeten. Paniek. Welke app moet je openen om zeker te weten dat je pakje er morgen is?</p>

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
  }
];