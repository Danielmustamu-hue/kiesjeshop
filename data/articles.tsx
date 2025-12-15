import React from 'react';
import { Laptop, Gift, Home, CheckCircle, XCircle, Tag, AlertTriangle, Briefcase } from 'lucide-react';

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
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
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
  },
  {
    id: 4,
    category: "Besparen",
    icon: <Tag className="w-5 h-5 text-green-600" />,
    title: "Retourdeals: Slim besparen of kat in de zak?",
    excerpt: "Bol Retourkansjes, Coolblue Tweedekans en Amazon Warehouse. Wat zijn de verschillen en waar is de korting het hoogst?",
    date: "1 dec 2025",
    readTime: "4 min leestijd",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p>Waarom de volle mep betalen als het product alleen maar uit de doos is geweest? Retourdeals worden steeds populairder. Maar de voorwaarden verschillen enorm.</p>
        
        <img 
            src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop" 
            alt="Stapel kartonnen dozen" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
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
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p>Je ziet een onbekend merk oordopjes voor €20 met 5000 vijf-sterren reviews. Trap er niet in. Veel marketplaces kampen met nepreviews.</p>
        
        <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop" 
            alt="Iemand checkt reviews op smartphone" 
            className="w-full h-64 object-cover rounded-xl shadow-md my-6"
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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p>Niets is frustrerender dan aan het eind van het kwartaal achter facturen aan moeten bellen. Voor zakelijke aankopen werkt niet elke consumentenshop even lekker.</p>
        
        <h3>Amazon Business</h3>
        <p>Amazon heeft een specifiek zakelijk account (Amazon Business). Als je dit instelt, krijg je automatisch facturen met BTW-uitsplitsing. Let op bij externe verkopers: soms sturen zij geen BTW-factuur als ze in het buitenland zitten (intracommunautaire prestaties).</p>

        <h3>Coolblue Zakelijk</h3>
        <p>Coolblue levert altijd een kraakheldere Nederlandse BTW-factuur direct in je mail en account. Voor grotere offertes kun je zelfs bellen met een accountmanager. Voor de Nederlandse ZZP'er vaak de makkelijkste optie.</p>

        <h3>Bol.com Zakelijk</h3>
        <p>Ook Bol heeft een zakelijk account. Het voordeel is dat je achteraf kunt betalen. De facturatie is over het algemeen goed geregeld, tenzij je bij een kleine externe partner koopt die zijn administratie niet op orde heeft.</p>
      </>
    )
  }
];