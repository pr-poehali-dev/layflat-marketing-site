// Каталог продукции LayFlat.tech — плоскосворачиваемые рукава

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

// ---------- Категории ----------

export const categories: Category[] = [
  {
    id: "cat-pvc",
    name: "Рукава ПВХ напорные",
    slug: "rukava-pvh",
    description:
      "Плоскосворачиваемые напорные рукава из поливинилхлорида (ПВХ) с текстильным армированием. Экономичное решение для полива, дренажа и перекачки воды.",
  },
  {
    id: "cat-tpu",
    name: "Рукава ТПУ напорные",
    slug: "rukava-tpu",
    description:
      "Рукава из термопластичного полиуретана (ТПУ) с высокой стойкостью к истиранию, маслам и химическим средам. Идеальны для промышленности и сельского хозяйства.",
  },
  {
    id: "cat-tpe",
    name: "Рукава TPE",
    slug: "rukava-tpe",
    description:
      "Рукава из термоэластопласта (TPE) сочетают гибкость резины и технологичность пластика. Работают при низких температурах до -40 °C.",
  },
  {
    id: "cat-rubber",
    name: "Рукава резиновые напорные",
    slug: "rukava-rezinovye",
    description:
      "Классические резиновые плоскосворачиваемые рукава с высокой устойчивостью к абразивному износу для тяжёлых условий эксплуатации.",
  },
  {
    id: "cat-tow",
    name: "Буксируемые рукава",
    slug: "buksiruemye-rukava",
    description:
      "Специализированные рукава для буксировки по воде и грунту. Применяются в морских операциях, дноуглублении и аварийных разливах.",
  },
  {
    id: "cat-main",
    name: "Магистральные рукава",
    slug: "magistralnye-rukava",
    description:
      "Транспортирующие магистральные рукава большого диаметра для водоснабжения, ирригации и промышленных трубопроводов.",
  },
];

// ---------- Продукция ----------

export const products: Product[] = [
  // === ПВХ ===
  {
    id: "pvc-light",
    slug: "layflat-pvc-light",
    name: "LayFlat PVC Light",
    category: "Рукава ПВХ напорные",
    categorySlug: "rukava-pvh",
    material: "ПВХ",
    description:
      "Лёгкая серия плоскосворачиваемых рукавов из ПВХ с рабочим давлением 2-4 бар. Оптимальный выбор для сезонного полива, дренажных систем и перекачки чистой воды. Малый вес обеспечивает удобство транспортировки и быстрый монтаж.",
    pressureRange: "2-4 бар",
    temperatureRange: "-10 °C ... +60 °C",
    diameters: [25, 32, 38, 50, 65, 76, 100, 150],
    applications: [
      "Полив сельскохозяйственных угодий",
      "Дренажные системы",
      "Перекачка чистой воды",
      "Временное водоснабжение",
    ],
    image: IMAGES.hero,
    specs: [
      { diameter: 25, wallThickness: 1.2, weight: 0.08, burstPressure: 12, workingPressure: 4, coilLength: 100 },
      { diameter: 32, wallThickness: 1.2, weight: 0.10, burstPressure: 12, workingPressure: 4, coilLength: 100 },
      { diameter: 38, wallThickness: 1.3, weight: 0.12, burstPressure: 10, workingPressure: 3, coilLength: 100 },
      { diameter: 50, wallThickness: 1.4, weight: 0.15, burstPressure: 10, workingPressure: 3, coilLength: 100 },
      { diameter: 65, wallThickness: 1.5, weight: 0.20, burstPressure: 8, workingPressure: 2.5, coilLength: 50 },
      { diameter: 76, wallThickness: 1.5, weight: 0.24, burstPressure: 8, workingPressure: 2.5, coilLength: 50 },
      { diameter: 100, wallThickness: 1.6, weight: 0.32, burstPressure: 7, workingPressure: 2, coilLength: 50 },
      { diameter: 150, wallThickness: 1.8, weight: 0.48, burstPressure: 6, workingPressure: 2, coilLength: 50 },
    ],
  },
  {
    id: "pvc-standard",
    slug: "layflat-pvc-standard",
    name: "LayFlat PVC Standard",
    category: "Рукава ПВХ напорные",
    categorySlug: "rukava-pvh",
    material: "ПВХ",
    description:
      "Стандартная серия ПВХ-рукавов с рабочим давлением 4-8 бар для универсального применения. Усиленное текстильное армирование обеспечивает высокую надёжность при перекачке воды, слабоагрессивных жидкостей и в строительных работах.",
    pressureRange: "4-8 бар",
    temperatureRange: "-10 °C ... +60 °C",
    diameters: [25, 32, 38, 50, 65, 76, 100, 150, 200],
    applications: [
      "Строительное водопонижение",
      "Пожаротушение (резерв)",
      "Промышленная перекачка воды",
      "Ирригация",
    ],
    image: IMAGES.applications,
    specs: [
      { diameter: 25, wallThickness: 1.5, weight: 0.10, burstPressure: 24, workingPressure: 8, coilLength: 100 },
      { diameter: 32, wallThickness: 1.5, weight: 0.12, burstPressure: 24, workingPressure: 8, coilLength: 100 },
      { diameter: 38, wallThickness: 1.6, weight: 0.15, burstPressure: 22, workingPressure: 7, coilLength: 100 },
      { diameter: 50, wallThickness: 1.7, weight: 0.20, burstPressure: 20, workingPressure: 6, coilLength: 100 },
      { diameter: 65, wallThickness: 1.8, weight: 0.28, burstPressure: 18, workingPressure: 6, coilLength: 50 },
      { diameter: 76, wallThickness: 1.9, weight: 0.33, burstPressure: 16, workingPressure: 5, coilLength: 50 },
      { diameter: 100, wallThickness: 2.0, weight: 0.44, burstPressure: 15, workingPressure: 5, coilLength: 50 },
      { diameter: 150, wallThickness: 2.2, weight: 0.65, burstPressure: 14, workingPressure: 4, coilLength: 50 },
      { diameter: 200, wallThickness: 2.4, weight: 0.88, burstPressure: 12, workingPressure: 4, coilLength: 20 },
    ],
  },
  {
    id: "pvc-heavy",
    slug: "layflat-pvc-heavy",
    name: "LayFlat PVC Heavy",
    category: "Рукава ПВХ напорные",
    categorySlug: "rukava-pvh",
    material: "ПВХ",
    description:
      "Усиленная серия ПВХ-рукавов с рабочим давлением 8-16 бар для промышленного использования. Двойное армирование полиэстером обеспечивает максимальную прочность. Применяется на горнодобывающих предприятиях, в нефтегазовой отрасли и при аварийном водоотведении.",
    pressureRange: "8-16 бар",
    temperatureRange: "-10 °C ... +60 °C",
    diameters: [50, 65, 76, 100, 150, 200, 250, 300],
    applications: [
      "Горнодобывающая промышленность",
      "Нефтегазовая отрасль",
      "Аварийное водоотведение",
      "Промышленное водоснабжение",
    ],
    image: IMAGES.factory,
    specs: [
      { diameter: 50, wallThickness: 2.2, weight: 0.28, burstPressure: 48, workingPressure: 16, coilLength: 100 },
      { diameter: 65, wallThickness: 2.3, weight: 0.36, burstPressure: 45, workingPressure: 15, coilLength: 50 },
      { diameter: 76, wallThickness: 2.4, weight: 0.42, burstPressure: 42, workingPressure: 14, coilLength: 50 },
      { diameter: 100, wallThickness: 2.6, weight: 0.58, burstPressure: 38, workingPressure: 12, coilLength: 50 },
      { diameter: 150, wallThickness: 2.8, weight: 0.85, burstPressure: 32, workingPressure: 10, coilLength: 20 },
      { diameter: 200, wallThickness: 3.0, weight: 1.12, burstPressure: 28, workingPressure: 9, coilLength: 20 },
      { diameter: 250, wallThickness: 3.2, weight: 1.40, burstPressure: 26, workingPressure: 8, coilLength: 20 },
      { diameter: 300, wallThickness: 3.5, weight: 1.72, burstPressure: 24, workingPressure: 8, coilLength: 20 },
    ],
  },

  // === ТПУ ===
  {
    id: "tpu-agro",
    slug: "layflat-tpu-agro",
    name: "LayFlat TPU Agro",
    category: "Рукава ТПУ напорные",
    categorySlug: "rukava-tpu",
    material: "ТПУ",
    description:
      "Рукав из термопластичного полиуретана для сельского хозяйства. Устойчив к воздействию навозных стоков, жидких минеральных удобрений и органических кислот. Рабочее давление 6-10 бар позволяет использовать рукав в системах внесения жидкого навоза и магистральном орошении.",
    pressureRange: "6-10 бар",
    temperatureRange: "-35 °C ... +80 °C",
    diameters: [50, 76, 100, 150, 200],
    applications: [
      "Внесение жидкого навоза",
      "Транспортировка удобрений",
      "Магистральное орошение",
      "Перекачка биомассы",
    ],
    image: IMAGES.applications,
    specs: [
      { diameter: 50, wallThickness: 2.0, weight: 0.24, burstPressure: 30, workingPressure: 10, coilLength: 100 },
      { diameter: 76, wallThickness: 2.2, weight: 0.38, burstPressure: 28, workingPressure: 9, coilLength: 50 },
      { diameter: 100, wallThickness: 2.4, weight: 0.52, burstPressure: 24, workingPressure: 8, coilLength: 50 },
      { diameter: 150, wallThickness: 2.6, weight: 0.78, burstPressure: 20, workingPressure: 6, coilLength: 20 },
      { diameter: 200, wallThickness: 2.8, weight: 1.05, burstPressure: 18, workingPressure: 6, coilLength: 20 },
    ],
  },
  {
    id: "tpu-industrial",
    slug: "layflat-tpu-industrial",
    name: "LayFlat TPU Industrial",
    category: "Рукава ТПУ напорные",
    categorySlug: "rukava-tpu",
    material: "ТПУ",
    description:
      "Промышленная серия ТПУ-рукавов с повышенной химической стойкостью и рабочим давлением 10-20 бар. Выдерживает контакт с нефтепродуктами, маслами, щёлочами и большинством растворителей. Усиленное армирование полиэстером высокой тенасити.",
    pressureRange: "10-20 бар",
    temperatureRange: "-35 °C ... +80 °C",
    diameters: [25, 38, 50, 76, 100, 150, 200, 250],
    applications: [
      "Химическая промышленность",
      "Нефтепереработка",
      "Перекачка масел и топлива",
      "Горнодобывающие работы",
    ],
    image: IMAGES.factory,
    specs: [
      { diameter: 25, wallThickness: 2.0, weight: 0.14, burstPressure: 60, workingPressure: 20, coilLength: 100 },
      { diameter: 38, wallThickness: 2.2, weight: 0.20, burstPressure: 56, workingPressure: 18, coilLength: 100 },
      { diameter: 50, wallThickness: 2.4, weight: 0.30, burstPressure: 50, workingPressure: 16, coilLength: 100 },
      { diameter: 76, wallThickness: 2.6, weight: 0.46, burstPressure: 45, workingPressure: 15, coilLength: 50 },
      { diameter: 100, wallThickness: 2.8, weight: 0.62, burstPressure: 40, workingPressure: 13, coilLength: 50 },
      { diameter: 150, wallThickness: 3.0, weight: 0.92, burstPressure: 35, workingPressure: 11, coilLength: 20 },
      { diameter: 200, wallThickness: 3.2, weight: 1.25, burstPressure: 30, workingPressure: 10, coilLength: 20 },
      { diameter: 250, wallThickness: 3.5, weight: 1.58, burstPressure: 28, workingPressure: 10, coilLength: 20 },
    ],
  },
  {
    id: "tpu-marine",
    slug: "layflat-tpu-marine",
    name: "LayFlat TPU Marine",
    category: "Рукава ТПУ напорные",
    categorySlug: "rukava-tpu",
    material: "ТПУ",
    description:
      "Морская серия ТПУ-рукавов для буксировки и перекачки в морских условиях. Устойчивость к солёной воде, ультрафиолету и морским организмам. Рабочее давление 10-16 бар. Специальная внешняя защита от истирания о грунт и каменистое дно.",
    pressureRange: "10-16 бар",
    temperatureRange: "-30 °C ... +70 °C",
    diameters: [76, 100, 150, 200, 250, 300],
    applications: [
      "Морские буксировочные операции",
      "Дноуглубительные работы",
      "Перекачка морской воды",
      "Ликвидация аварийных разливов",
    ],
    image: IMAGES.hero,
    specs: [
      { diameter: 76, wallThickness: 2.8, weight: 0.50, burstPressure: 48, workingPressure: 16, coilLength: 50 },
      { diameter: 100, wallThickness: 3.0, weight: 0.68, burstPressure: 44, workingPressure: 14, coilLength: 50 },
      { diameter: 150, wallThickness: 3.2, weight: 1.00, burstPressure: 38, workingPressure: 12, coilLength: 20 },
      { diameter: 200, wallThickness: 3.5, weight: 1.35, burstPressure: 34, workingPressure: 11, coilLength: 20 },
      { diameter: 250, wallThickness: 3.8, weight: 1.72, burstPressure: 32, workingPressure: 10, coilLength: 20 },
      { diameter: 300, wallThickness: 4.0, weight: 2.10, burstPressure: 30, workingPressure: 10, coilLength: 20 },
    ],
  },

  // === TPE ===
  {
    id: "tpe-flex",
    slug: "layflat-tpe-flex",
    name: "LayFlat TPE Flex",
    category: "Рукава TPE",
    categorySlug: "rukava-tpe",
    material: "TPE",
    description:
      "Гибкая серия рукавов из термоэластопласта с рабочей температурой до -40 °C. Сохраняет эластичность и не растрескивается в условиях Крайнего Севера. Рабочее давление 4-8 бар. Идеален для районов с экстремальными климатическими условиями.",
    pressureRange: "4-8 бар",
    temperatureRange: "-40 °C ... +80 °C",
    diameters: [25, 38, 50, 76, 100, 150],
    applications: [
      "Работа в условиях Крайнего Севера",
      "Временные трубопроводы",
      "Перекачка воды при низких температурах",
      "Аварийное водоснабжение",
    ],
    image: IMAGES.hero,
    specs: [
      { diameter: 25, wallThickness: 1.8, weight: 0.10, burstPressure: 24, workingPressure: 8, coilLength: 100 },
      { diameter: 38, wallThickness: 2.0, weight: 0.16, burstPressure: 22, workingPressure: 7, coilLength: 100 },
      { diameter: 50, wallThickness: 2.0, weight: 0.22, burstPressure: 20, workingPressure: 6, coilLength: 100 },
      { diameter: 76, wallThickness: 2.2, weight: 0.34, burstPressure: 18, workingPressure: 6, coilLength: 50 },
      { diameter: 100, wallThickness: 2.4, weight: 0.48, burstPressure: 15, workingPressure: 5, coilLength: 50 },
      { diameter: 150, wallThickness: 2.6, weight: 0.72, burstPressure: 12, workingPressure: 4, coilLength: 20 },
    ],
  },
  {
    id: "tpe-universal",
    slug: "layflat-tpe-universal",
    name: "LayFlat TPE Universal",
    category: "Рукава TPE",
    categorySlug: "rukava-tpe",
    material: "TPE",
    description:
      "Универсальная серия TPE-рукавов с рабочим давлением 6-12 бар. Сочетает преимущества резиновых и пластиковых рукавов: гибкость, химстойкость и возможность сварки. Подходит для широкого спектра промышленных задач.",
    pressureRange: "6-12 бар",
    temperatureRange: "-35 °C ... +80 °C",
    diameters: [38, 50, 76, 100, 150, 200],
    applications: [
      "Промышленная перекачка",
      "Химические производства",
      "Строительство",
      "Сельское хозяйство",
    ],
    image: IMAGES.applications,
    specs: [
      { diameter: 38, wallThickness: 2.2, weight: 0.18, burstPressure: 36, workingPressure: 12, coilLength: 100 },
      { diameter: 50, wallThickness: 2.4, weight: 0.26, burstPressure: 32, workingPressure: 10, coilLength: 100 },
      { diameter: 76, wallThickness: 2.6, weight: 0.40, burstPressure: 28, workingPressure: 9, coilLength: 50 },
      { diameter: 100, wallThickness: 2.8, weight: 0.55, burstPressure: 24, workingPressure: 8, coilLength: 50 },
      { diameter: 150, wallThickness: 3.0, weight: 0.82, burstPressure: 20, workingPressure: 6, coilLength: 20 },
      { diameter: 200, wallThickness: 3.2, weight: 1.12, burstPressure: 18, workingPressure: 6, coilLength: 20 },
    ],
  },

  // === Резиновые ===
  {
    id: "rubber-standard",
    slug: "layflat-rubber-standard",
    name: "LayFlat Rubber Standard",
    category: "Рукава резиновые напорные",
    categorySlug: "rukava-rezinovye",
    material: "Резина",
    description:
      "Стандартные резиновые плоскосворачиваемые рукава с рабочим давлением 6-10 бар. Обладают высокой устойчивостью к истиранию, проколам и атмосферным воздействиям. Классическое решение для горнодобычи, строительства и пожаротушения.",
    pressureRange: "6-10 бар",
    temperatureRange: "-30 °C ... +80 °C",
    diameters: [38, 50, 65, 76, 100, 150],
    applications: [
      "Горнодобывающая промышленность",
      "Строительство",
      "Пожаротушение",
      "Водоотведение",
    ],
    image: IMAGES.factory,
    specs: [
      { diameter: 38, wallThickness: 2.5, weight: 0.22, burstPressure: 30, workingPressure: 10, coilLength: 50 },
      { diameter: 50, wallThickness: 2.6, weight: 0.30, burstPressure: 28, workingPressure: 9, coilLength: 50 },
      { diameter: 65, wallThickness: 2.8, weight: 0.38, burstPressure: 26, workingPressure: 8, coilLength: 50 },
      { diameter: 76, wallThickness: 3.0, weight: 0.46, burstPressure: 24, workingPressure: 8, coilLength: 50 },
      { diameter: 100, wallThickness: 3.2, weight: 0.62, burstPressure: 20, workingPressure: 6, coilLength: 20 },
      { diameter: 150, wallThickness: 3.5, weight: 0.95, burstPressure: 18, workingPressure: 6, coilLength: 20 },
    ],
  },
  {
    id: "rubber-heavy",
    slug: "layflat-rubber-heavy-duty",
    name: "LayFlat Rubber Heavy Duty",
    category: "Рукава резиновые напорные",
    categorySlug: "rukava-rezinovye",
    material: "Резина",
    description:
      "Тяжёлая серия резиновых рукавов с рабочим давлением 10-20 бар и повышенной абразивостойкостью. Специальная резиновая смесь и многослойное армирование позволяют транспортировать шламы, пульпу и абразивные суспензии в самых тяжёлых условиях.",
    pressureRange: "10-20 бар",
    temperatureRange: "-30 °C ... +80 °C",
    diameters: [50, 76, 100, 150, 200, 250, 300],
    applications: [
      "Транспортировка шлама и пульпы",
      "Абразивные суспензии",
      "Горнодобывающая промышленность",
      "Тяжёлое строительство",
    ],
    image: IMAGES.hero,
    specs: [
      { diameter: 50, wallThickness: 3.0, weight: 0.38, burstPressure: 60, workingPressure: 20, coilLength: 50 },
      { diameter: 76, wallThickness: 3.2, weight: 0.55, burstPressure: 54, workingPressure: 18, coilLength: 50 },
      { diameter: 100, wallThickness: 3.5, weight: 0.76, burstPressure: 48, workingPressure: 16, coilLength: 20 },
      { diameter: 150, wallThickness: 3.8, weight: 1.15, burstPressure: 42, workingPressure: 14, coilLength: 20 },
      { diameter: 200, wallThickness: 4.0, weight: 1.55, burstPressure: 36, workingPressure: 12, coilLength: 20 },
      { diameter: 250, wallThickness: 4.2, weight: 1.95, burstPressure: 32, workingPressure: 10, coilLength: 20 },
      { diameter: 300, wallThickness: 4.5, weight: 2.40, burstPressure: 30, workingPressure: 10, coilLength: 20 },
    ],
  },

  // === Буксируемые ===
  {
    id: "tow-light",
    slug: "layflat-tow-light",
    name: "LayFlat Tow Light",
    category: "Буксируемые рукава",
    categorySlug: "buksiruemye-rukava",
    material: "ТПУ / ПВХ",
    description:
      "Лёгкие буксируемые рукава с рабочим давлением до 6 бар. Конструкция с усиленными концевыми соединениями позволяет буксировать рукав по воде и пересечённой местности. Применяются для временных водоводов и операций по ликвидации разливов.",
    pressureRange: "до 6 бар",
    temperatureRange: "-20 °C ... +60 °C",
    diameters: [76, 100, 150, 200, 250],
    applications: [
      "Буксировка по воде",
      "Временные водоводы",
      "Ликвидация разливов",
      "Дноуглубительные работы",
    ],
    image: IMAGES.applications,
    specs: [
      { diameter: 76, wallThickness: 2.5, weight: 0.42, burstPressure: 18, workingPressure: 6, coilLength: 50 },
      { diameter: 100, wallThickness: 2.8, weight: 0.58, burstPressure: 16, workingPressure: 5, coilLength: 50 },
      { diameter: 150, wallThickness: 3.0, weight: 0.88, burstPressure: 14, workingPressure: 4, coilLength: 20 },
      { diameter: 200, wallThickness: 3.2, weight: 1.20, burstPressure: 12, workingPressure: 4, coilLength: 20 },
      { diameter: 250, wallThickness: 3.5, weight: 1.55, burstPressure: 10, workingPressure: 3, coilLength: 20 },
    ],
  },
  {
    id: "tow-heavy",
    slug: "layflat-tow-heavy",
    name: "LayFlat Tow Heavy",
    category: "Буксируемые рукава",
    categorySlug: "buksiruemye-rukava",
    material: "ТПУ",
    description:
      "Усиленные буксируемые рукава с рабочим давлением до 16 бар. Многослойная конструкция с внешней защитной оболочкой обеспечивает устойчивость к порезам, проколам и истиранию при буксировке по каменистому грунту и морскому дну.",
    pressureRange: "до 16 бар",
    temperatureRange: "-30 °C ... +70 °C",
    diameters: [100, 150, 200, 250, 300, 400],
    applications: [
      "Морские буксировочные операции",
      "Дноуглубление",
      "Промышленная перекачка больших объёмов",
      "Аварийные операции на воде",
    ],
    image: IMAGES.hero,
    specs: [
      { diameter: 100, wallThickness: 3.5, weight: 0.78, burstPressure: 48, workingPressure: 16, coilLength: 50 },
      { diameter: 150, wallThickness: 3.8, weight: 1.15, burstPressure: 42, workingPressure: 14, coilLength: 20 },
      { diameter: 200, wallThickness: 4.0, weight: 1.55, burstPressure: 38, workingPressure: 12, coilLength: 20 },
      { diameter: 250, wallThickness: 4.2, weight: 1.98, burstPressure: 34, workingPressure: 11, coilLength: 20 },
      { diameter: 300, wallThickness: 4.5, weight: 2.45, burstPressure: 30, workingPressure: 10, coilLength: 20 },
      { diameter: 400, wallThickness: 5.0, weight: 3.30, burstPressure: 26, workingPressure: 8, coilLength: 20 },
    ],
  },

  // === Магистральные ===
  {
    id: "main-water",
    slug: "layflat-main-water",
    name: "LayFlat Main Water",
    category: "Магистральные рукава",
    categorySlug: "magistralnye-rukava",
    material: "ПВХ / ТПУ",
    description:
      "Магистральные рукава для водоснабжения с рабочим давлением до 10 бар. Большие диаметры и длинные секции позволяют быстро развернуть временный водовод протяжённостью до нескольких километров. Сертифицированы для контакта с питьевой водой.",
    pressureRange: "до 10 бар",
    temperatureRange: "-15 °C ... +60 °C",
    diameters: [100, 150, 200, 250, 300, 400, 500],
    applications: [
      "Временное водоснабжение",
      "Магистральное орошение",
      "Аварийное водоснабжение населённых пунктов",
      "Пожарные водоводы большой длины",
    ],
    image: IMAGES.applications,
    specs: [
      { diameter: 100, wallThickness: 2.5, weight: 0.52, burstPressure: 30, workingPressure: 10, coilLength: 50 },
      { diameter: 150, wallThickness: 2.8, weight: 0.78, burstPressure: 26, workingPressure: 8, coilLength: 50 },
      { diameter: 200, wallThickness: 3.0, weight: 1.05, burstPressure: 22, workingPressure: 7, coilLength: 20 },
      { diameter: 250, wallThickness: 3.2, weight: 1.35, burstPressure: 20, workingPressure: 6, coilLength: 20 },
      { diameter: 300, wallThickness: 3.5, weight: 1.70, burstPressure: 18, workingPressure: 6, coilLength: 20 },
      { diameter: 400, wallThickness: 3.8, weight: 2.30, burstPressure: 15, workingPressure: 5, coilLength: 20 },
      { diameter: 500, wallThickness: 4.0, weight: 2.90, burstPressure: 12, workingPressure: 4, coilLength: 20 },
    ],
  },
  {
    id: "main-industrial",
    slug: "layflat-main-industrial",
    name: "LayFlat Main Industrial",
    category: "Магистральные рукава",
    categorySlug: "magistralnye-rukava",
    material: "ТПУ",
    description:
      "Промышленные магистральные рукава с рабочим давлением до 20 бар для транспортировки больших объёмов жидкости на расстояния до нескольких километров. Усиленная конструкция с многослойным армированием для работы в промышленных условиях.",
    pressureRange: "до 20 бар",
    temperatureRange: "-30 °C ... +80 °C",
    diameters: [100, 150, 200, 250, 300],
    applications: [
      "Промышленные магистрали",
      "Горнодобыча (отвод воды)",
      "Транспортировка технической воды",
      "Ирригационные системы большого масштаба",
    ],
    image: IMAGES.factory,
    specs: [
      { diameter: 100, wallThickness: 3.5, weight: 0.72, burstPressure: 60, workingPressure: 20, coilLength: 50 },
      { diameter: 150, wallThickness: 3.8, weight: 1.08, burstPressure: 52, workingPressure: 17, coilLength: 20 },
      { diameter: 200, wallThickness: 4.0, weight: 1.45, burstPressure: 46, workingPressure: 15, coilLength: 20 },
      { diameter: 250, wallThickness: 4.2, weight: 1.85, burstPressure: 40, workingPressure: 13, coilLength: 20 },
      { diameter: 300, wallThickness: 4.5, weight: 2.28, burstPressure: 36, workingPressure: 12, coilLength: 20 },
    ],
  },
];

// ---------- Утилиты ----------

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}
