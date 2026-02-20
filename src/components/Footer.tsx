import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const CATEGORY_LINKS = [
  { label: "Серия 180 — 4 Атм", href: "/catalog/seriya-180" },
  { label: "Серия 186 — 6 Атм", href: "/catalog/seriya-186" },
  { label: "Серия 190 — 10-16 Атм", href: "/catalog/seriya-190" },
  { label: "Магистральные NBR", href: "/catalog/magistralnye-nbr" },
  { label: "Буксируемые TPU", href: "/catalog/buksiruemye-tpu" },
];

const INFO_LINKS = [
  { label: "О компании", href: "/about" },
  { label: "Каталог", href: "/catalog" },
  { label: "Характеристики", href: "/specs" },
  { label: "Статьи", href: "/articles" },
  { label: "Контакты", href: "/contacts" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                LayFlat.tech
              </span>
            </Link>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
              Российский производитель плоскосворачиваемых рукавов из ПВХ, ТПУ,
              TPE и резины. Поставляем продукцию для промышленности, сельского
              хозяйства, морской отрасли и строительства.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon name="Send" size={16} />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon name="Youtube" size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Catalog */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Каталог
            </h4>
            <ul className="space-y-2.5">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Info */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Информация
            </h4>
            <ul className="space-y-2.5">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contacts */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Icon
                  name="MapPin"
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="font-body text-sm text-white/70 leading-relaxed">
                  г. Новосибирск, Толмачевская, 43/1
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon
                  name="MapPin"
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="font-body text-sm text-white/70 leading-relaxed">
                  г. Москва, ул. Дорожная, 60Б
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon
                  name="Phone"
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+79529304408"
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    +7 (952) 930-44-08
                  </a>
                  <a
                    href="tel:+74950157384"
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    +7 (495) 015-73-84
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon
                  name="Mail"
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <a
                  href="mailto:sale@holzerflexo.com"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  sale@holzerflexo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/50">
            &copy; 2025 LayFlat.tech &mdash; Российский производитель рукавов
          </p>
          <p className="font-body text-xs text-white/50">
            Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;