export interface NicheProduct {
  name: string;
  description: string;
  searchQuery: string;
}

export interface NicheCategory {
  id: string; // Added ID for routing/key purposes
  title: string;
  image: string;
  seoText: string;
  products: NicheProduct[];
}

export const NICHE_GUIDES: NicheCategory[] = [
  {
    id: "co2-meter",
    title: "1. Gezond Binnenklimaat & CO₂",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=800",
    seoText: "Een goede luchtkwaliteit verbetert concentratie en gezondheid. Vergelijk de beste CO2-meters.",
    products: [
      {
        name: "Aranet4 Home",
        description: "De absolute nummer 1. E-ink scherm, super nauwkeurig en lange batterijduur.",
        searchQuery: "Aranet4 Home"
      },
      {
        name: "Netatmo Home Coach",
        description: "De slimste keuze. Koppel aan je telefoon voor historie van lucht, geluid en vocht.",
        searchQuery: "Netatmo Healthy Home Coach"
      },
      {
        name: "Tellur Smart Monitor",
        description: "Betaalbare instapper die de basis CO2-waarden prima weergeeft.",
        searchQuery: "Tellur Luchtkwaliteit"
      }
    ]
  },
  {
    id: "ergonomie",
    title: "2. Ergonomie & Thuiswerken",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    seoText: "Voorkom RSI en nekklachten met de juiste ergonomische muis en accessoires.",
    products: [
      {
        name: "Logitech MX Vertical",
        description: "De favoriet van fysiotherapeuten. Unieke 57° hoek voor neutrale polsstand.",
        searchQuery: "Logitech MX Vertical"
      },
      {
        name: "Trust Verto",
        description: "Wil je ergonomie proberen zonder veel uit te geven? Dit is de beste instapper.",
        searchQuery: "Trust Verto Ergonomisch"
      },
      {
        name: "Logitech Ergo K860",
        description: "Het ultieme gespleten toetsenbord voor blinde typers die comfort zoeken.",
        searchQuery: "Logitech Ergo K860"
      }
    ]
  },
  {
    id: "hifi-audio",
    title: "3. Specialistische Audio (HiFi)",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    seoText: "Voor de audiofiel die meer wil dan standaard geluid. Planar en Open-back koptelefoons.",
    products: [
      {
        name: "Sennheiser HD 660S2",
        description: "Legendarisch open geluid. Je hoort details in muziek die je nog nooit hoorde.",
        searchQuery: "Sennheiser HD 660S2"
      },
      {
        name: "HiFiMAN Sundara",
        description: "Planar Magnetic drivers voor een ongekend snelle en strakke basweergave.",
        searchQuery: "HiFiMAN Sundara"
      },
      {
        name: "FiiO K5 Pro ESS",
        description: "De versterker (DAC) die je nodig hebt om deze koptelefoons tot leven te wekken.",
        searchQuery: "FiiO K5 Pro"
      }
    ]
  },
  {
    id: "power-stations",
    title: "4. Noodstroom & Power Stations",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800",
    seoText: "Altijd stroom, ook tijdens een blackout of op de camping. Vergelijk de beste accu's.",
    products: [
      {
        name: "EcoFlow Delta 2",
        description: "Laadt op van 0 naar 80% in 50 minuten. Kan koelkasten en TV's van stroom voorzien.",
        searchQuery: "EcoFlow Delta 2"
      },
      {
        name: "Bluetti EB3A",
        description: "Compacte krachtpatser. Ideaal voor laptops en telefoons tijdens het kamperen.",
        searchQuery: "Bluetti EB3A"
      },
      {
        name: "Xtorm 27.000 mAh",
        description: "De grootste powerbank die je nog mee mag nemen in het vliegtuig.",
        searchQuery: "Xtorm Powerbank 27000"
      }
    ]
  },
  {
    id: "sous-vide",
    title: "5. Sous-vide & Culinair",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
    seoText: "Kook als een sterrenchef. Perfect gegaarde steaks en groenten met precisie-apparatuur.",
    products: [
      {
        name: "Anova Precision Nano",
        description: "De populairste sous-vide stick ter wereld. Compact en zeer betrouwbaar.",
        searchQuery: "Anova Precision Cooker Nano"
      },
      {
        name: "Caso Vacuümsealer",
        description: "Essentieel voor sous-vide: houd je eten luchtdicht verpakt en langer vers.",
        searchQuery: "Caso Vacuümsealer"
      },
      {
        name: "Wartmann Sous-Vide Bak",
        description: "Isoleert beter dan een pan, waardoor je minder energie verbruikt tijdens het garen.",
        searchQuery: "Wartmann Sous Vide"
      }
    ]
  },
  {
    id: "home-gym",
    title: "6. Home Gym Essentials",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    seoText: "Bouw een sportschool op zolder zonder ruimteverlies. Slimme gewichten en herstel.",
    products: [
      {
        name: "Bowflex SelectTech 552",
        description: "Vervangt 15 paar dumbbells. Draai aan de knop en kies je gewicht.",
        searchQuery: "Bowflex SelectTech 552"
      },
      {
        name: "Tunturi Kettlebell",
        description: "Onverwoestbaar gietijzer. Perfect voor full-body workouts en vetverbranding.",
        searchQuery: "Tunturi Kettlebell"
      },
      {
        name: "TriggerPoint Grid Roller",
        description: "De beste foam roller voor spierherstel en het losmaken van knopen.",
        searchQuery: "TriggerPoint Grid"
      }
    ]
  },
  {
    id: "huisdier",
    title: "7. Slimme Huisdier Gadgets",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    seoText: "Technologie voor je hond of kat. Van automatische voerbakken tot GPS trackers.",
    products: [
      {
        name: "PetSafe Voerautomaat",
        description: "Programmeer precies wanneer en hoeveel je huisdier eet. Nooit meer te laat.",
        searchQuery: "PetSafe Voerautomaat"
      },
      {
        name: "Tractive GPS Tracker",
        description: "Volg je kat of hond live via je telefoon. Waterdicht en past op elke halsband.",
        searchQuery: "Tractive GPS"
      },
      {
        name: "Petkit Pura X",
        description: "De zelfreinigende kattenbak die geurtjes elimineert en grit automatisch zeeft.",
        searchQuery: "Petkit Pura X"
      }
    ]
  },
  {
    id: "kabelmanagement",
    title: "8. Kabelmanagement",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    seoText: "Een opgeruimd bureau zorgt voor een opgeruimd hoofd. Werk alle snoeren weg.",
    products: [
      {
        name: "D-Line Kabelbox",
        description: "Verstop die lelijke stekkerdoos veilig onder je bureau of achter de TV.",
        searchQuery: "D-Line Kabelbox"
      },
      {
        name: "BlueLounge CableDrops",
        description: "Plak ze op je bureau zodat je oplaadkabel nooit meer op de grond valt.",
        searchQuery: "CableDrops"
      },
      {
        name: "Velcro Kabelbinders",
        description: "De simpele oplossing om bossen kabels bij elkaar te binden. Herbruikbaar.",
        searchQuery: "Velcro Kabelbinders"
      }
    ]
  }
];