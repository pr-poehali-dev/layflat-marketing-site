import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { categories } from "@/data/catalog";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/88918a23-cb5f-492a-a72b-9cad570fd052.jpg";
const FIELD_IMG =
  "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/cebcb479-fe9b-4915-983d-5f76f5b786ca.jpg";
const FACTORY_IMG =
  "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/5889e81b-8da5-40fb-a132-cfa9b803532d.jpg";

const STATS = [
  { value: "15+", label: "лет опыта" },
  { value: "500+", label: "клиентов" },
  { value: "50+", label: "типоразмеров" },
  { value: "2 года", label: "гарантия" },
];

const ADVANTAGES = [
  {
    icon: "Factory",
    title: "Собственное производство",
    description:
      "Полный цикл производства на территории России. Контролируем качество на каждом этапе — от сырья до готовой продукции.",
  },
  {
    icon: "Ruler",
    title: "Любые диаметры от 25 до 305 мм",
    description:
      "Широкий размерный ряд под любую задачу. Изготовление нестандартных диаметров по запросу заказчика.",
  },
  {
    icon: "Gauge",
    title: "Давление до 20 бар",
    description:
      "Рукава для любых условий эксплуатации — от лёгкого полива до промышленных магистралей высокого давления.",
  },
  {
    icon: "Snowflake",
    title: "Морозостойкость до -40 °C",
    description:
      "Специальные серии TPE и ТПУ для работы в условиях Крайнего Севера и экстремальных температур.",
  },
  {
    icon: "ShieldCheck",
    title: "Сертификация ГОСТ",
    description:
      "Вся продукция сертифицирована в соответствии с ГОСТ и проходит многоступенчатый контроль качества.",
  },
  {
    icon: "Truck",
    title: "Доставка от 1 дня",
    description:
      "Склады в Новосибирске и Москве. Отгрузка в день заказа. Доставка транспортными компаниями по всей России.",
  },
];

const APPLICATIONS = [
  {
    icon: "Wheat",
    title: "Сельское хозяйство",
    description: "Орошение, внесение навоза, транспортировка удобрений",
  },
  {
    icon: "Droplets",
    title: "Водоснабжение",
    description: "Временные и магистральные водоводы, аварийное водоснабжение",
  },
  {
    icon: "Mountain",
    title: "Горнодобыча",
    description: "Водоотведение, перекачка шлама и пульпы, дренаж карьеров",
  },
  {
    icon: "Flame",
    title: "Нефтегазовая отрасль",
    description: "Перекачка нефтепродуктов, промывочных жидкостей, техводы",
  },
  {
    icon: "HardHat",
    title: "Строительство",
    description: "Водопонижение, бетононасосные работы, откачка котлованов",
  },
  {
    icon: "Anchor",
    title: "Морская отрасль",
    description: "Дноуглубление, буксировка, ликвидация разливов на воде",
  },
];

const CATEGORY_IMAGES = [HERO_IMG, FIELD_IMG, FACTORY_IMG, FIELD_IMG, HERO_IMG];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />

        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight text-white mb-6">
              Плоскосворачиваемые рукава от российского производителя
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              ПВХ &bull; ТПУ &bull; TPE &bull; Резина — полный цикл
              производства. Доставка по всей России от 1 дня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading uppercase tracking-wide text-base px-8"
              >
                <Link to="/contacts">Запросить коммерческое предложение</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 font-heading uppercase tracking-wide text-base px-8"
              >
                <Link to="/catalog">Смотреть каталог</Link>
              </Button>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-heading text-3xl lg:text-4xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-white/70 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-foreground">
              Почему выбирают нас
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
              Собственное производство, широкий ассортимент и техническая
              поддержка на каждом этапе сотрудничества
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv) => (
              <Card
                key={adv.title}
                className="border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon name={adv.icon} size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase mb-2">
                    {adv.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {adv.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-foreground">
              Каталог продукции
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
              Полный ассортимент плоскосворачиваемых рукавов для любых
              промышленных задач
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={`/catalog/${cat.slug}`}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={CATEGORY_IMAGES[idx % CATEGORY_IMAGES.length]}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 font-heading text-lg font-bold uppercase text-white">
                      {cat.name}
                    </h3>
                  </div>
                  <CardContent className="p-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 font-body text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-foreground">
              Области применения
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
              Наши рукава используются в ключевых отраслях промышленности России
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPLICATIONS.map((app) => (
              <div
                key={app.title}
                className="flex gap-4 p-5 rounded-lg border border-border/60 hover:border-primary/30 hover:bg-muted/50 transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon name={app.icon} size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold uppercase mb-1">
                    {app.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="bg-primary py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-white mb-4">
            Нужна консультация по выбору рукава?
          </h2>
          <p className="font-body text-lg text-white/80 mb-2">
            Позвоните нам — поможем подобрать оптимальное решение
          </p>
          <a
            href="tel:+79529304408"
            className="inline-block font-heading text-2xl lg:text-3xl font-bold text-accent mb-8"
          >
            +7 (952) 930-44-08
          </a>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading uppercase tracking-wide text-base px-10"
            >
              <Link to="/contacts">Оставить заявку</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 font-heading uppercase tracking-wide text-base px-10"
            >
              <Link to="/catalog">Открыть каталог</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section id="contact-form" className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase text-foreground">
                Запросить коммерческое предложение
              </h2>
              <p className="font-body text-muted-foreground mt-3">
                Заполните форму и получите расчёт стоимости в течение 2 часов
              </p>
            </div>
            <Card className="p-6 sm:p-8">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;