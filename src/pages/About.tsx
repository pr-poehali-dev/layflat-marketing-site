import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FACTORY_IMG =
  "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/5889e81b-8da5-40fb-a132-cfa9b803532d.jpg";
const FIELD_IMG =
  "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/cebcb479-fe9b-4915-983d-5f76f5b786ca.jpg";

const NUMBERS = [
  { value: "15+", label: "лет на рынке", icon: "Calendar" },
  { value: "500+", label: "постоянных клиентов", icon: "Users" },
  { value: "50+", label: "типоразмеров продукции", icon: "Layers" },
  { value: "10 000+", label: "км рукавов произведено", icon: "Ruler" },
];

const PROCESS_STEPS = [
  {
    icon: "Lightbulb",
    title: "Разработка",
    description:
      "Инженеры проектируют рукав под конкретные условия эксплуатации: подбирают материал, армирование, параметры экструзии.",
  },
  {
    icon: "Cog",
    title: "Экструзия",
    description:
      "Производство на современных экструзионных линиях с точным контролем температуры, давления и скорости.",
  },
  {
    icon: "ShieldCheck",
    title: "Контроль качества",
    description:
      "Каждая партия проходит гидравлические испытания, проверку толщины стенки, разрывного давления и визуальный контроль.",
  },
  {
    icon: "PackageCheck",
    title: "Упаковка и доставка",
    description:
      "Намотка на катушки или укладка в бухты. Отгрузка со складов Новосибирска и Москвы в течение 1 дня.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative h-56 lg:h-72 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${FACTORY_IMG})` }}
        />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white">
            О компании
          </h1>
          <div className="flex items-center gap-2 mt-3 font-body text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">О компании</span>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-4">
                Российский производитель плоскосворачиваемых рукавов
              </h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Компания LayFlat.tech — один из ведущих российских
                  производителей плоскосворачиваемых (lay flat) рукавов. Мы
                  специализируемся на выпуске напорных рукавов из ПВХ, ТПУ, TPE
                  и резины для промышленности, сельского хозяйства, морской
                  отрасли и строительства.
                </p>
                <p>
                  Собственная производственная база оснащена современными
                  экструзионными линиями, что позволяет выпускать продукцию
                  мирового уровня качества по конкурентным ценам. Мы контролируем
                  каждый этап — от закупки сырья до отгрузки готовой продукции.
                </p>
                <p>
                  За более чем 15 лет работы мы накопили уникальную экспертизу в
                  области плоскосворачиваемых рукавов и помогли сотням предприятий
                  найти оптимальные решения для своих задач.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={FIELD_IMG}
                alt="Производство рукавов"
                className="w-full h-72 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-primary py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-4">
            Наша миссия
          </h2>
          <p className="font-body text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
            Обеспечить российскую промышленность плоскосворачиваемыми рукавами
            мирового класса по конкурентным ценам. Мы стремимся к тому, чтобы
            каждое предприятие могло получить надёжный рукав точно под свои задачи
            — без переплат и долгого ожидания.
          </p>
        </div>
      </section>

      {/* Numbers */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-center mb-10">
            Компания в цифрах
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {NUMBERS.map((n) => (
              <Card key={n.label} className="text-center">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <Icon name={n.icon} size={24} />
                  </div>
                  <p className="font-heading text-3xl lg:text-4xl font-bold text-primary">
                    {n.value}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {n.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase">
              Производственный процесс
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
              Четыре этапа от проектирования до поставки готовой продукции
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.title} className="relative text-center">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-accent text-accent-foreground mb-4">
                  <Icon name={step.icon} size={28} />
                </div>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 font-heading text-5xl font-bold text-muted/80">
                  {idx + 1}
                </span>
                <h3 className="font-heading text-lg font-bold uppercase mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Icon name="Award" size={32} />
            </div>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-4">
              Сертификация и качество
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Вся продукция LayFlat.tech сертифицирована в соответствии с
              требованиями ГОСТ. Каждая партия проходит обязательные
              гидравлические испытания с протоколированием результатов. Мы
              предоставляем паспорт качества на каждую поставку и готовы провести
              дополнительные испытания по запросу заказчика.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border font-body text-sm">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                ГОСТ Р
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border font-body text-sm">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                Гидравлические испытания
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border font-body text-sm">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                Паспорт качества
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border font-body text-sm">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                Гарантия 2 года
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
            <Icon name="MapPin" size={28} />
          </div>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-4">
            География поставок
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Мы осуществляем поставки по всей территории России — от Калининграда
            до Владивостока. Собственные склады в Новосибирске и Москве
            обеспечивают оперативную отгрузку. Работаем со всеми крупными
            транспортными компаниями.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <Icon name="Building2" size={20} className="text-primary" />
              <div className="text-left">
                <p className="font-heading text-sm font-bold">Новосибирск</p>
                <p className="font-body text-xs text-muted-foreground">
                  Толмачевская, 43/1
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <Icon name="Building2" size={20} className="text-primary" />
              <div className="text-left">
                <p className="font-heading text-sm font-bold">Москва</p>
                <p className="font-body text-xs text-muted-foreground">
                  ул. Дорожная, 60Б
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase">
                Свяжитесь с нами
              </h2>
              <p className="font-body text-muted-foreground mt-2">
                Расскажите о вашей задаче — мы подготовим предложение
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

export default About;
