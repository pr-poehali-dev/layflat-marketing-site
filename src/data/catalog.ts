const IMAGES = {
  hero: "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/88918a23-cb5f-492a-a72b-9cad570fd052.jpg",
  applications: "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/cebcb479-fe9b-4915-983d-5f76f5b786ca.jpg",
  factory: "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/5889e81b-8da5-40fb-a132-cfa9b803532d.jpg",
};

export interface SpecRow {
  diameter: number;
  wallThickness: number;
  weight: number;
  burstPressure: number;
  workingPressure: number;
  coilLength: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  material: string;
  description: string;
  pressureRange: string;
  temperatureRange: string;
  diameters: number[];
  applications: string[];
  image: string;
  specs: SpecRow[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "cat-180",
    name: "Серия 180 — Рукава плоские 4 Атм",
    slug: "seriya-180",
    description:
      "Первичный ПВХ и полиэстеровые нити идеально подходят для орошения и сельского хозяйства. Конструкция монолита обеспечивает минимальное удлинение.",
  },
  {
    id: "cat-186",
    name: "Серия 186 — Рукава плоские 6 Атм",
    slug: "seriya-186",
    description:
      "Усиленная серия плоскосворачиваемых рукавов с рабочим давлением 6 атмосфер. Многоплёточный корд из полиэфирного волокна обеспечивает повышенную прочность на разрыв.",
  },
  {
    id: "cat-190",
    name: "Серия 190 — Рукава плоские 10-16 Атм",
    slug: "seriya-190",
    description:
      "Премиальный плоский шланг высокого давления для подачи воды, других жидкостей, удобрений или химикатов. Внутренний слой из абразивостойкого ПВХ, специальный многоплёточный корд из полиэфирного волокна, наружный слой из специального ПВХ ребристой структуры.",
  },
  {
    id: "cat-nbr",
    name: "Транспортирующие (магистральные) шланги из NBR",
    slug: "magistralnye-nbr",
    description:
      "Магистральный плоский рукав Holzer NBR произведён из композита ПВХ и нитрильного каучука с защитой от УФ лучей. Превосходная гибкость и эластичность, прекрасная абразивная стойкость, стойкость к широкому диапазону химикатов, нефтепродуктам, топливу.",
  },
  {
    id: "cat-tpu",
    name: "Буксируемые плоские шланги из TPU",
    slug: "buksiruemye-tpu",
    description:
      "Высокопрочные буксируемые плоские шланги из термопластичного полиуретана (TPU). Повышенная износостойкость, гибкость и устойчивость к агрессивной среде. Абразивная устойчивость в 4-5 раз выше обычного каучука. Усилие на продольный разрыв до 46 тонн.",
  },
];

export const products: Product[] = [
  {
    id: "prod-180",
    slug: "rukav-ploskiy-180",
    name: "Серия 180 — Рукав плоский 4 Атм",
    category: "Серия 180 — Рукава плоские 4 Атм",
    categorySlug: "seriya-180",
    material: "ПВХ + полиэстеровые нити",
    description:
      "Первичный ПВХ и полиэстеровые нити идеально подходят для орошения и сельского хозяйства. Конструкция монолита обеспечивает минимальное удлинение.",
    pressureRange: "4 бар",
    temperatureRange: "-40 °C ... +80 °C",
    diameters: [25, 32, 38, 50, 65, 76, 100, 102, 127, 150, 152, 200, 203, 250, 254, 300],
    applications: [
      "Сельское хозяйство",
      "Строительство",
      "Капельное орошение",
      "Промышленность",
    ],
    image: IMAGES.hero,
    specs: [
      { diameter: 25, wallThickness: 1.2, weight: 0.06, burstPressure: 12, workingPressure: 4, coilLength: 100 },
      { diameter: 32, wallThickness: 1.2, weight: 0.08, burstPressure: 12, workingPressure: 4, coilLength: 100 },
      { diameter: 38, wallThickness: 1.3, weight: 0.10, burstPressure: 12, workingPressure: 4, coilLength: 100 },
      { diameter: 50, wallThickness: 1.3, weight: 0.14, burstPressure: 12, workingPressure: 4, coilLength: 100 },
      { diameter: 65, wallThickness: 1.4, weight: 0.18, burstPressure: 11, workingPressure: 4, coilLength: 100 },
      { diameter: 76, wallThickness: 1.4, weight: 0.22, burstPressure: 11, workingPressure: 4, coilLength: 50 },
      { diameter: 100, wallThickness: 1.5, weight: 0.30, burstPressure: 11, workingPressure: 4, coilLength: 50 },
      { diameter: 102, wallThickness: 1.5, weight: 0.31, burstPressure: 11, workingPressure: 4, coilLength: 50 },
      { diameter: 127, wallThickness: 1.6, weight: 0.40, burstPressure: 11, workingPressure: 4, coilLength: 50 },
      { diameter: 150, wallThickness: 1.7, weight: 0.50, burstPressure: 10, workingPressure: 4, coilLength: 50 },
      { diameter: 152, wallThickness: 1.7, weight: 0.51, burstPressure: 10, workingPressure: 4, coilLength: 50 },
      { diameter: 200, wallThickness: 1.8, weight: 0.72, burstPressure: 10, workingPressure: 4, coilLength: 20 },
      { diameter: 203, wallThickness: 1.8, weight: 0.74, burstPressure: 10, workingPressure: 4, coilLength: 20 },
      { diameter: 250, wallThickness: 2.0, weight: 1.00, burstPressure: 10, workingPressure: 4, coilLength: 20 },
      { diameter: 254, wallThickness: 2.0, weight: 1.02, burstPressure: 10, workingPressure: 4, coilLength: 20 },
      { diameter: 300, wallThickness: 2.2, weight: 1.30, burstPressure: 10, workingPressure: 4, coilLength: 20 },
    ],
  },
  {
    id: "prod-186",
    slug: "rukav-ploskiy-186",
    name: "Серия 186 — Рукав плоский 6 Атм",
    category: "Серия 186 — Рукава плоские 6 Атм",
    categorySlug: "seriya-186",
    material: "ПВХ + усиленный полиэстеровый корд",
    description:
      "Усиленная серия плоскосворачиваемых рукавов с рабочим давлением 6 атмосфер. Многоплёточный корд из полиэфирного волокна обеспечивает повышенную прочность на разрыв.",
    pressureRange: "6 бар",
    temperatureRange: "-40 °C ... +80 °C",
    diameters: [25, 32, 38, 50, 65, 76, 100, 102, 127, 150, 152, 200, 203, 250],
    applications: [
      "Промышленное водоснабжение",
      "Пожаротушение",
      "Строительное водопонижение",
      "Ирригация",
    ],
    image: IMAGES.applications,
    specs: [
      { diameter: 25, wallThickness: 1.4, weight: 0.08, burstPressure: 18, workingPressure: 6, coilLength: 100 },
      { diameter: 32, wallThickness: 1.4, weight: 0.10, burstPressure: 18, workingPressure: 6, coilLength: 100 },
      { diameter: 38, wallThickness: 1.5, weight: 0.13, burstPressure: 18, workingPressure: 6, coilLength: 100 },
      { diameter: 50, wallThickness: 1.5, weight: 0.18, burstPressure: 17, workingPressure: 6, coilLength: 100 },
      { diameter: 65, wallThickness: 1.6, weight: 0.24, burstPressure: 17, workingPressure: 6, coilLength: 100 },
      { diameter: 76, wallThickness: 1.7, weight: 0.29, burstPressure: 16, workingPressure: 6, coilLength: 50 },
      { diameter: 100, wallThickness: 1.8, weight: 0.40, burstPressure: 16, workingPressure: 6, coilLength: 50 },
      { diameter: 102, wallThickness: 1.8, weight: 0.41, burstPressure: 16, workingPressure: 6, coilLength: 50 },
      { diameter: 127, wallThickness: 1.9, weight: 0.52, burstPressure: 15, workingPressure: 6, coilLength: 50 },
      { diameter: 150, wallThickness: 2.0, weight: 0.64, burstPressure: 15, workingPressure: 6, coilLength: 50 },
      { diameter: 152, wallThickness: 2.0, weight: 0.65, burstPressure: 15, workingPressure: 6, coilLength: 50 },
      { diameter: 200, wallThickness: 2.2, weight: 0.92, burstPressure: 14, workingPressure: 6, coilLength: 20 },
      { diameter: 203, wallThickness: 2.2, weight: 0.94, burstPressure: 14, workingPressure: 6, coilLength: 20 },
      { diameter: 250, wallThickness: 2.5, weight: 1.28, burstPressure: 14, workingPressure: 6, coilLength: 20 },
    ],
  },
  {
    id: "prod-190",
    slug: "rukav-ploskiy-190",
    name: "Серия 190 — Рукав плоский 10-16 Атм",
    category: "Серия 190 — Рукава плоские 10-16 Атм",
    categorySlug: "seriya-190",
    material: "ПВХ абразивостойкий + специальный многоплёточный корд из полиэфирного волокна",
    description:
      "Премиальный плоский шланг высокого давления для подачи воды, других жидкостей, удобрений или химикатов. Внутренний слой из абразивостойкого ПВХ, специальный многоплёточный корд из полиэфирного волокна, наружный слой из специального ПВХ ребристой структуры.",
    pressureRange: "10-16 бар",
    temperatureRange: "-40 °C ... +80 °C",
    diameters: [25, 32, 38, 50, 65, 76, 100, 102, 127, 150, 152, 200, 250],
    applications: [
      "Орошение",
      "Системы разбрызгивания",
      "Водоснабжение",
      "Горнодобыча",
      "Нефтегазовая отрасль",
    ],
    image: IMAGES.factory,
    specs: [
      { diameter: 25, wallThickness: 1.8, weight: 0.10, burstPressure: 30, workingPressure: 10, coilLength: 100 },
      { diameter: 32, wallThickness: 1.8, weight: 0.13, burstPressure: 30, workingPressure: 10, coilLength: 100 },
      { diameter: 38, wallThickness: 1.9, weight: 0.16, burstPressure: 30, workingPressure: 10, coilLength: 100 },
      { diameter: 50, wallThickness: 2.0, weight: 0.22, burstPressure: 30, workingPressure: 10, coilLength: 100 },
      { diameter: 65, wallThickness: 2.1, weight: 0.30, burstPressure: 28, workingPressure: 10, coilLength: 50 },
      { diameter: 76, wallThickness: 2.2, weight: 0.36, burstPressure: 28, workingPressure: 10, coilLength: 50 },
      { diameter: 100, wallThickness: 2.4, weight: 0.50, burstPressure: 28, workingPressure: 10, coilLength: 50 },
      { diameter: 102, wallThickness: 2.4, weight: 0.52, burstPressure: 28, workingPressure: 10, coilLength: 50 },
      { diameter: 127, wallThickness: 2.6, weight: 0.68, burstPressure: 26, workingPressure: 10, coilLength: 50 },
      { diameter: 150, wallThickness: 2.8, weight: 0.86, burstPressure: 26, workingPressure: 10, coilLength: 20 },
      { diameter: 152, wallThickness: 2.8, weight: 0.88, burstPressure: 26, workingPressure: 10, coilLength: 20 },
      { diameter: 200, wallThickness: 3.0, weight: 1.24, burstPressure: 24, workingPressure: 10, coilLength: 20 },
      { diameter: 250, wallThickness: 3.2, weight: 1.64, burstPressure: 24, workingPressure: 10, coilLength: 20 },
    ],
  },
  {
    id: "prod-nbr",
    slug: "magistralnyy-nbr",
    name: "Транспортирующий (магистральный) шланг из NBR",
    category: "Транспортирующие (магистральные) шланги из NBR",
    categorySlug: "magistralnye-nbr",
    material: "NBR (композит ПВХ и нитрильного каучука)",
    description:
      "Магистральный плоский рукав Holzer NBR произведён из композита ПВХ и нитрильного каучука с защитой от УФ лучей. Превосходная гибкость и эластичность, прекрасная абразивная стойкость, стойкость к широкому диапазону химикатов, нефтепродуктам, топливу.",
    pressureRange: "6-10 бар",
    temperatureRange: "-30 °C ... +70 °C",
    diameters: [76, 100, 102, 127, 150, 152, 200, 250, 300],
    applications: [
      "Сельское хозяйство (доставка воды и жидкого навоза)",
      "Добыча (осушение/наполнение/промывка породы)",
      "Строительство (подача бетона/водных эмульсий)",
      "Нефтегазовый сектор (мобильные нефтегазопроводы)",
      "Химическое производство",
    ],
    image: IMAGES.applications,
    specs: [
      { diameter: 76, wallThickness: 2.0, weight: 0.34, burstPressure: 30, workingPressure: 10, coilLength: 50 },
      { diameter: 100, wallThickness: 2.2, weight: 0.48, burstPressure: 30, workingPressure: 10, coilLength: 50 },
      { diameter: 102, wallThickness: 2.2, weight: 0.50, burstPressure: 30, workingPressure: 10, coilLength: 50 },
      { diameter: 127, wallThickness: 2.4, weight: 0.66, burstPressure: 28, workingPressure: 8, coilLength: 50 },
      { diameter: 150, wallThickness: 2.6, weight: 0.84, burstPressure: 26, workingPressure: 8, coilLength: 50 },
      { diameter: 152, wallThickness: 2.6, weight: 0.86, burstPressure: 26, workingPressure: 8, coilLength: 50 },
      { diameter: 200, wallThickness: 3.0, weight: 1.28, burstPressure: 24, workingPressure: 6, coilLength: 20 },
      { diameter: 250, wallThickness: 3.2, weight: 1.70, burstPressure: 24, workingPressure: 6, coilLength: 20 },
      { diameter: 300, wallThickness: 3.5, weight: 2.20, burstPressure: 24, workingPressure: 6, coilLength: 20 },
    ],
  },
  {
    id: "prod-tpu",
    slug: "buksiruemyy-tpu",
    name: "Буксируемый плоский шланг из TPU",
    category: "Буксируемые плоские шланги из TPU",
    categorySlug: "buksiruemye-tpu",
    material: "Термопластичный полиуретан (TPU) армированный полиэстерной нитью",
    description:
      "Высокопрочные буксируемые плоские шланги из термопластичного полиуретана (TPU). Повышенная износостойкость, гибкость и устойчивость к агрессивной среде. Перенос воды, топлива, химикатов. Абразивная устойчивость в 4-5 раз выше обычного каучука. Усилие на продольный разрыв до 46 тонн.",
    pressureRange: "6-10 бар",
    temperatureRange: "-50 °C ... +75 °C",
    diameters: [76, 100, 102, 127, 132, 150, 152, 200, 250],
    applications: [
      "Сельское хозяйство (шланговые системы утилизации навоза)",
      "Внесение жидких удобрений",
      "Промышленная транспортировка",
      "Буксировка трактором",
      "Ликвидация разливов",
    ],
    image: IMAGES.hero,
    specs: [
      { diameter: 76, wallThickness: 2.2, weight: 0.38, burstPressure: 30, workingPressure: 10, coilLength: 50 },
      { diameter: 100, wallThickness: 2.4, weight: 0.54, burstPressure: 30, workingPressure: 10, coilLength: 50 },
      { diameter: 102, wallThickness: 2.4, weight: 0.56, burstPressure: 30, workingPressure: 10, coilLength: 50 },
      { diameter: 127, wallThickness: 2.6, weight: 0.74, burstPressure: 28, workingPressure: 8, coilLength: 50 },
      { diameter: 132, wallThickness: 2.7, weight: 0.78, burstPressure: 28, workingPressure: 8, coilLength: 50 },
      { diameter: 150, wallThickness: 2.8, weight: 0.92, burstPressure: 26, workingPressure: 8, coilLength: 50 },
      { diameter: 152, wallThickness: 2.8, weight: 0.94, burstPressure: 26, workingPressure: 8, coilLength: 50 },
      { diameter: 200, wallThickness: 3.2, weight: 1.40, burstPressure: 24, workingPressure: 6, coilLength: 20 },
      { diameter: 250, wallThickness: 3.8, weight: 2.00, burstPressure: 24, workingPressure: 6, coilLength: 20 },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}
