import React from 'react';
import { TrendingUp, Award, Zap, PiggyBank, ExternalLink } from 'lucide-react';

interface NicheProduct {
  name: string;
  description: string;
  searchQuery: string;
}

interface NicheCategory {
  title: string;
  image: string;
  seoText: string;
  products: NicheProduct[];
}

export const NicheGuides: React.FC = () => {
  
  // Helper om zoek-URL's te genereren
  const getSearchLink = (type: 'bol' | 'coolblue' | 'amazon', query: string) => {
    const encoded = encodeURIComponent(query);
    switch (type) {
      case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=${encoded}`;
      case 'coolblue': return `https://www.coolblue.nl/zoeken?query=${encoded}`;
      case 'amazon': return `https://www.amazon.nl/s?k=${encoded}&tag=kiesjeshop-21`;
      default: return '#';
    }
  };

  const guides: NicheCategory[] = [
    {
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
      title: "5. Sous-vide & Culinair",
      // Afbeelding gewijzigd naar een culinaire foto (steak)
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-rose-200">
           <TrendingUp className="w-4 h-4" />
           <span>Trending Categorieën</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Top 8 Trending Koopgidsen</h2>
        <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
          Wij hebben het uitzoekwerk al gedaan. Kies je niche en vergelijk direct de beschikbaarheid bij de grote drie.
        </p>
      </div>

      <div className="space-y-16">
        {guides.map((guide, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            
            {/* 1. Niche Header Block */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-100 group h-48 sm:h-56">
                <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent flex flex-col justify-center px-6 sm:px-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{guide.title}</h3>
                    <p className="text-slate-200 text-sm sm:text-base max-w-lg hidden sm:block">
                        {guide.seoText}
                    </p>
                </div>
            </div>

            {/* 2. Products Grid Block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guide.products.map((product, pIdx) => (
                <div key={pIdx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                    
                    {/* Badge */}
                    <div className="mb-3">
                        {pIdx === 0 && (
                            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200">
                                <Award className="w-3 h-3" /> Premium Keuze
                            </span>
                        )}
                        {pIdx === 1 && (
                            <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-200">
                                <Zap className="w-3 h-3" /> Slimme Keuze
                            </span>
                        )}
                        {pIdx === 2 && (
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200">
                                <PiggyBank className="w-3 h-3" /> Budget / Accessoire
                            </span>
                        )}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight min-h-[3rem] line-clamp-2">
                        {product.name}
                    </h4>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                        {product.description}
                    </p>

                    {/* Shop Buttons Grid */}
                    <div className="pt-4 border-t border-slate-50">
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-2 text-center tracking-wider">Vergelijk Prijzen</p>
                        <div className="grid grid-cols-3 gap-2">
                            <a 
                                href={getSearchLink('bol', product.searchQuery)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors group/btn"
                                aria-label={`Zoek ${product.name} bij bol`}
                            >
                                <span className="text-xs font-bold">bol</span>
                                <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 mt-0.5" />
                            </a>
                            <a 
                                href={getSearchLink('coolblue', product.searchQuery)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="flex flex-col items-center justify-center p-2 rounded-lg bg-orange-50 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors group/btn"
                                aria-label={`Zoek ${product.name} bij Coolblue`}
                            >
                                <span className="text-xs font-bold">Coolblue</span>
                                <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 mt-0.5" />
                            </a>
                            <a 
                                href={getSearchLink('amazon', product.searchQuery)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="flex flex-col items-center justify-center p-2 rounded-lg bg-yellow-50 text-yellow-800 hover:bg-yellow-400 hover:text-slate-900 transition-colors group/btn"
                                aria-label={`Zoek ${product.name} bij Amazon`}
                            >
                                <span className="text-xs font-bold">Amazon</span>
                                <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 mt-0.5" />
                            </a>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};