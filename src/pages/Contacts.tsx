import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const OFFICES = [
  {
    city: "Новосибирск",
    address: "г. Новосибирск, Толмачевская, 43/1",
    phone: "+7 (952) 930-44-08",
    phoneRaw: "+79529304408",
  },
  {
    city: "Москва",
    address: "г. Москва, ул. Дорожная, 60Б",
    phone: "+7 (495) 015-73-84",
    phoneRaw: "+74950157384",
  },
];

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white">
            Контакты
          </h1>
          <div className="flex items-center gap-2 mt-3 font-body text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Контакты</span>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {OFFICES.map((office) => (
              <Card
                key={office.city}
                className="border border-border/60 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon name="Building2" size={20} />
                    </div>
                    <h2 className="font-heading text-xl font-bold uppercase">
                      {office.city}
                    </h2>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon
                        name="MapPin"
                        size={18}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span className="font-body text-sm text-foreground leading-relaxed">
                        {office.address}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon
                        name="Phone"
                        size={18}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <a
                        href={`tel:${office.phoneRaw}`}
                        className="font-body text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {office.phone}
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Shared info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <Icon name="Mail" size={20} className="text-primary shrink-0" />
              <div>
                <p className="font-body text-xs text-muted-foreground">Email</p>
                <a
                  href="mailto:sale@holzerflexo.com"
                  className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  sale@holzerflexo.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <Icon name="Clock" size={20} className="text-primary shrink-0" />
              <div>
                <p className="font-body text-xs text-muted-foreground">
                  Режим работы
                </p>
                <p className="font-body text-sm font-medium text-foreground">
                  Пн-Пт 9:00-18:00
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
              <Icon
                name="MessageCircle"
                size={20}
                className="text-primary shrink-0"
              />
              <div>
                <p className="font-body text-xs text-muted-foreground">
                  Мессенджеры
                </p>
                <p className="font-body text-sm font-medium text-foreground">
                  Telegram, WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-2">
                Отправить запрос
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Опишите вашу задачу — мы подготовим коммерческое предложение в
                течение 2 часов
              </p>
              <Card className="p-6 sm:p-8">
                <ContactForm />
              </Card>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-heading text-lg font-bold uppercase mb-4">
                Карта
              </h3>
              {/* Map placeholder */}
              <div className="w-full h-64 lg:h-80 rounded-lg bg-secondary border border-border flex items-center justify-center mb-6">
                <div className="text-center text-muted-foreground">
                  <Icon name="Map" size={40} className="mx-auto mb-2 opacity-40" />
                  <p className="font-body text-sm">Карта</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Navigation"
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <div className="font-body text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">
                      Как добраться (Новосибирск)
                    </p>
                    <p>
                      Офис расположен рядом с аэропортом Толмачёво, удобный подъезд
                      для грузового транспорта.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Navigation"
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <div className="font-body text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">
                      Как добраться (Москва)
                    </p>
                    <p>
                      Офис находится в промзоне района Бирюлёво, рядом с МКАД.
                      Удобный подъезд с Дорожной улицы.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
