import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { categories, products, getProductsByCategory } from "@/data/catalog";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/5889e81b-8da5-40fb-a132-cfa9b803532d.jpg";

const Catalog = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const navigate = useNavigate();
  const activeCategory = categorySlug || "all";

  const setActiveCategory = (slug: string) => {
    if (slug === "all") {
      navigate("/catalog");
    } else {
      navigate(`/catalog/${slug}`);
    }
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : getProductsByCategory(activeCategory);

  const activeLabel =
    activeCategory === "all"
      ? "Все категории"
      : categories.find((c) => c.slug === activeCategory)?.name || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero banner */}
      <section className="relative h-56 lg:h-72 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white">
            Каталог продукции
          </h1>
          <div className="flex items-center gap-2 mt-3 font-body text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span>Каталог</span>
            {activeCategory !== "all" && (
              <>
                <Icon name="ChevronRight" size={14} />
                <span className="text-white">{activeLabel}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar / Filter */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-20">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-foreground">
                  Категории
                </h3>
                <nav className="flex flex-row lg:flex-col flex-wrap gap-1.5">
                  <Button
                    variant={activeCategory === "all" ? "default" : "ghost"}
                    size="sm"
                    className="justify-start font-body text-sm"
                    onClick={() => setActiveCategory("all")}
                  >
                    Все категории
                  </Button>
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant={
                        activeCategory === cat.slug ? "default" : "ghost"
                      }
                      size="sm"
                      className="justify-start font-body text-sm"
                      onClick={() => setActiveCategory(cat.slug)}
                    >
                      {cat.name}
                    </Button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="font-body text-sm text-muted-foreground">
                  Найдено продуктов: {filteredProducts.length}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/catalog/product/${product.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-xs">
                          {product.material}
                        </Badge>
                      </div>
                      <CardContent className="p-4 flex-1 flex flex-col">
                        <h3 className="font-heading text-base font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="font-body text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">
                          {product.description}
                        </p>
                        <div className="space-y-1.5 mb-3">
                          <div className="flex items-center gap-2 font-body text-xs">
                            <Icon
                              name="Gauge"
                              size={14}
                              className="text-primary shrink-0"
                            />
                            <span className="text-muted-foreground">
                              Давление:
                            </span>
                            <span className="font-medium text-foreground">
                              {product.pressureRange}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 font-body text-xs">
                            <Icon
                              name="Thermometer"
                              size={14}
                              className="text-primary shrink-0"
                            />
                            <span className="text-muted-foreground">
                              Температура:
                            </span>
                            <span className="font-medium text-foreground">
                              {product.temperatureRange}
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary group-hover:gap-2 transition-all">
                          Подробнее <Icon name="ArrowRight" size={14} />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;