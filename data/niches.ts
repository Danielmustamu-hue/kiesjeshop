
export interface NicheProduct {
  name: string;
  description: string;
  searchQuery: string;
}

export interface NicheCategory {
  id: string;
  title: string;
  image: string;
  seoText: string;
  products: NicheProduct[];
}

export const NICHE_GUIDES: NicheCategory[] = [
  {
    id: "co2-meter",
    title: "Beste CO2-meters 2026",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=800",
    seoText: "Luchtkwaliteit verbetert concentratie met 40%. Wij vonden de 3 meest nauwkeurige meters voor 2026.",
    products: [
      {
        name: "Aranet4 Home (2026 Edition)",
        description: "Blijft de absolute nummer 1. Professionele NDIR-sensor voor de meest nauwkeurige meting in het nieuwe jaar.",
        searchQuery: "Aranet4 Home"
      },
      {
        name: "Netatmo Home Coach",
        description: "Beste slimme keuze. Werkt perfect met Apple HomeKit en Google Home voor een gezond 2026.",
        searchQuery: "Netatmo Healthy Home Coach"
      },
      {
        name: "Tellur Smart Monitor",
        description: "Beste budget optie. Betrouwbare meting voor een fractie van de prijs.",
        searchQuery: "Tellur Luchtkwaliteit"
      }
    ]
  },
  {
    id: "ergonomie",
    title: "Ergonomisch Werken 2026",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=1600",
    seoText: "Start 2026 zonder RSI of rugklachten. Deze 3 tools maken je werkdag direct comfortabeler en productiever.",
    products: [
      {
        name: "Logitech MX Vertical",
        description: "De koning onder de verticale muizen. Voorkomt polsklachten door de natuurlijke handdrukpositie.",
        searchQuery: "Logitech MX Vertical"
      },
      {
        name: "Logitech Ergo K860",
        description: "Het ultieme gesplitste toetsenbord voor een ontspannen houding van nek en schouders.",
        searchQuery: "Logitech Ergo K860"
      },
      {
        name: "VariDesk Pro Plus",
        description: "Upgrade je thuiswerkplek in 2026. Maak van elk bureau een zit-sta bureau zonder nieuwe meubels.",
        searchQuery: "VariDesk Pro Plus 36"
      }
    ]
  },
  {
    id: "hifi-audio",
    title: "High-End Audio Gids 2026",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
    seoText: "Voor de audiofiel in 2026. Wij vergeleken de nieuwste Planar Magnetic en Open-back specialisten.",
    products: [
      {
        name: "Sennheiser HD 660S2",
        description: "De legende in detail. Onze topaanbeveling voor de winter van 2025/2026.",
        searchQuery: "Sennheiser HD 660S2"
      },
      {
        name: "HiFiMAN Sundara",
        description: "Betaalbare Planar Magnetic drivers voor ongekend strak geluid in het nieuwe jaar.",
        searchQuery: "HiFiMAN Sundara"
      },
      {
        name: "FiiO K5 Pro ESS",
        description: "Essentiële versterker om het maximale uit je setup te halen in 2026.",
        searchQuery: "FiiO K5 Pro"
      }
    ]
  },
  {
    id: "power-stations",
    title: "Power Stations Gids 2026",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    seoText: "Van winterkamperen tot noodstroom: dit zijn de 3 beste powerstations van EcoFlow en Bluetti voor 2026.",
    products: [
      {
        name: "EcoFlow River 2 Pro",
        description: "Snelste laadtijd op de markt. Ideaal voor outdoor avonturen in 2026.",
        searchQuery: "EcoFlow River 2 Pro"
      },
      {
        name: "Bluetti EB3A",
        description: "Compacte krachtpatser met LiFePO4 batterij voor een extra lang 2026.",
        searchQuery: "Bluetti EB3A"
      },
      {
        name: "EcoFlow Delta 2",
        description: "De standaard voor thuis-back-up. Onmisbaar bij stroomonzekerheid.",
        searchQuery: "EcoFlow Delta 2"
      }
    ]
  },
  {
    id: "sous-vide",
    title: "Sous-vide Expert Gids 2026",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=800",
    seoText: "Kook als een chef in 2026. Wij kozen de 3 meest betrouwbare immersion circulators van dit moment.",
    products: [
      {
        name: "Anova Precision Cooker",
        description: "De meest verkochte sous-vide stick ter wereld. Super nauwkeurig voor je nieuwjaarsdiner.",
        searchQuery: "Anova Precision Cooker"
      },
      {
        name: "Inkbird ISV-200W",
        description: "Beste prijs-kwaliteit met handige app-bediening voor de moderne keuken.",
        searchQuery: "Inkbird Sous Vide"
      },
      {
        name: "Wartmann Sous-vide",
        description: "Nederlands design, krachtig en zeer stil in gebruik.",
        searchQuery: "Wartmann Sous Vide"
      }
    ]
  },
  {
    id: "home-gym",
    title: "Beste Home Gym Tools 2026",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
    seoText: "Goede voornemens voor 2026? Vervang 15 sets gewichten door één paar. De meest efficiënte oplossing.",
    products: [
      {
        name: "Bowflex SelectTech 552i",
        description: "De gouden standaard voor thuissporters. Wissel van 2 naar 24 kg in één draai.",
        searchQuery: "Bowflex 552i"
      },
      {
        name: "Northwall Verstelbaar",
        description: "Stevig Nederlands alternatief voor een scherpe prijs in januari.",
        searchQuery: "Northwall Dumbbell"
      },
      {
        name: "Tunturi Selector",
        description: "Zeer compact en duurzaam design voor intensieve training in 2026.",
        searchQuery: "Tunturi Selector Dumbbell"
      }
    ]
  },
  {
    id: "huisdier",
    title: "Huisdier-tech Gids 2026",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    seoText: "Een schoon huis met huisdieren in 2026. Deze 3 modellen winnen van elke labrador.",
    products: [
      {
        name: "Dyson V15 Detect Animal",
        description: "Laser-technologie en anti-klit borstels. Onze favoriet voor het nieuwe jaar.",
        searchQuery: "Dyson V15 Detect Animal"
      },
      {
        name: "Miele Complete C3 Cat & Dog",
        description: "Traditionele kracht met actief koolfilter tegen wintergeurtjes.",
        searchQuery: "Miele C3 Cat Dog"
      },
      {
        name: "Bissell Pet Hair Eraser",
        description: "Beste budget handheld voor de bank en de auto.",
        searchQuery: "Bissell Pet Hair Eraser"
      }
    ]
  },
  {
    id: "kabelmanagement",
    title: "Clean Desk Solutions 2026",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    seoText: "Start 2026 met een Zen-werkplek. De 3 beste oplossingen voor kabelchaos onder je bureau.",
    products: [
      {
        name: "D-Line Kabelbox XXL",
        description: "Verberg je stekkerdoos en alle kabels in één strakke box.",
        searchQuery: "D-Line Kabelbox"
      },
      {
        name: "PureMounts Kabelgoot",
        description: "Robuuste goot voor onder je bureau die nooit gaat hangen.",
        searchQuery: "PureMounts Kabelgoot"
      },
      {
        name: "Velcro Kabelbinders",
        description: "Simpel maar effectief: de beste manier om kabels te bundelen in 2026.",
        searchQuery: "Velcro Kabelbinders"
      }
    ]
  }
];
