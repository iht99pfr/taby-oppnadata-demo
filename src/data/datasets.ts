export interface Dataset {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publisher: string;
  license: string;
  format: string[];
  updated: string;
  frequency: string;
  category: string;
}

export const datasets: Dataset[] = [
  {
    slug: "kommunala-skolor",
    title: "Kommunala skolor",
    description:
      "Lista \u00f6ver alla kommunala grund- och gymnasieskolor i T\u00e4by kommun med adress, kontaktuppgifter och antal elever. Datan uppdateras terminsvis och inkluderar b\u00e5de grundskolor och gymnasieskolor.",
    keywords: ["skolor", "utbildning", "grundskola", "gymnasium"],
    publisher: "T\u00e4by kommun - Barn- och grundskoln\u00e4mnden",
    license: "CC0 1.0",
    format: ["CSV", "JSON", "XML"],
    updated: "2026-01-15",
    frequency: "Varje termin",
    category: "Utbildning",
  },
  {
    slug: "parker-och-gronomraden",
    title: "Parker och gr\u00f6nomr\u00e5den",
    description:
      "Geografisk data \u00f6ver kommunens parker, lekplatser och gr\u00f6nomr\u00e5den med koordinater och sk\u00f6tselansvar. Inneh\u00e5ller information om parkernas storlek, faciliteter och tillg\u00e4nglighet.",
    keywords: ["parker", "gr\u00f6nomr\u00e5den", "geodata", "lekplatser"],
    publisher: "T\u00e4by kommun - Samh\u00e4llsutvecklingskontoret",
    license: "CC0 1.0",
    format: ["GeoJSON", "CSV", "SHP"],
    updated: "2026-02-01",
    frequency: "\u00c5rligen",
    category: "Milj\u00f6 & Natur",
  },
  {
    slug: "befolkningsstatistik",
    title: "Befolkningsstatistik",
    description:
      "\u00c5rlig befolkningsstatistik per stadsdel med uppdelning p\u00e5 \u00e5lder och k\u00f6n. Datan str\u00e4cker sig fr\u00e5n 2015 och framf\u00e5t och uppdateras \u00e5rligen med nya siffror fr\u00e5n SCB.",
    keywords: ["befolkning", "statistik", "demografi", "invånare"],
    publisher: "T\u00e4by kommun - Kommunstyrelsens kontor",
    license: "CC0 1.0",
    format: ["CSV", "JSON", "XLSX"],
    updated: "2026-01-30",
    frequency: "\u00c5rligen",
    category: "Samh\u00e4lle & Befolkning",
  },
];

export function getDatasetBySlug(slug: string): Dataset | undefined {
  return datasets.find((d) => d.slug === slug);
}
