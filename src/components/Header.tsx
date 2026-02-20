import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "О компании", href: "/about" },
  { label: "Характеристики", href: "/specs" },
  { label: "Статьи", href: "/articles" },
  { label: "Контакты", href: "/contacts" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold uppercase tracking-wider text-primary">
            LayFlat.tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+79529304408"
            className="flex items-center gap-1.5 font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Icon name="Phone" size={16} className="text-primary" />
            +7 (952) 930-44-08
          </a>
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading uppercase tracking-wide text-sm"
          >
            <Link to="/contacts">Запросить КП</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="tel:+79529304408"
            className="p-2 text-primary"
            aria-label="Позвонить"
          >
            <Icon name="Phone" size={20} />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Открыть меню">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-heading text-lg uppercase tracking-wider text-primary">
                  LayFlat.tech
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 font-body text-base font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 space-y-4 border-t pt-6">
                <a
                  href="tel:+79529304408"
                  className="flex items-center gap-2 font-body text-sm text-foreground"
                >
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (952) 930-44-08
                </a>
                <a
                  href="tel:+74950157384"
                  className="flex items-center gap-2 font-body text-sm text-foreground"
                >
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (495) 015-73-84
                </a>
                <a
                  href="mailto:sale@holzerflexo.com"
                  className="flex items-center gap-2 font-body text-sm text-foreground"
                >
                  <Icon name="Mail" size={16} className="text-primary" />
                  sale@holzerflexo.com
                </a>

                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading uppercase tracking-wide"
                >
                  <Link to="/contacts" onClick={() => setOpen(false)}>
                    Запросить КП
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
