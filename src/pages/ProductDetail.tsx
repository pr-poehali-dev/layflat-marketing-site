import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import {
  getProductBySlug,
  getProductsByCategory,
  categories,
} from "@/data/catalog";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">
              Продукт не найден
            </h1>
            <p className="font-body text-muted-foreground mb-6">
              Запрашиваемый продукт не существует или был удалён.
            </p>
            <Button asChild>
              <Link to="/catalog">Вернуться в каталог</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const category = categories.find((c) => c.slug === product.categorySlug);
  const relatedProducts = getProductsByCategory(product.categorySlug).filter(
    (p) => p.id !== product.id
  );

  const scrollToForm = () => {
    document
      .getElementById("product-contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-muted border-b">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 font-body text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <Link
              to="/catalog"
              className="hover:text-primary transition-colors"
            >
              Каталог
            </Link>
            <Icon name="ChevronRight" size={14} />
            <Link
              to={`/catalog/${product.categorySlug}`}
              className="hover:text-primary transition-colors"
            >
              {category?.name}
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 lg:h-[420px] object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-body">
                {product.material}
              </Badge>
            </div>

            {/* Info Panel */}
            <div className="flex flex-col">
              <h1 className="font-heading text-3xl lg:text-4xl font-bold uppercase mb-3">
                {product.name}
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Key specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Icon name="Gauge" size={20} className="text-primary" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground">
                      Рабочее давление
                    </p>
                    <p className="font-heading text-sm font-bold">
                      {product.pressureRange}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Icon
                    name="Thermometer"
                    size={20}
                    className="text-primary"
                  />
                  <div>
                    <p className="font-body text-xs text-muted-foreground">
                      Температура
                    </p>
                    <p className="font-heading text-sm font-bold">
                      {product.temperatureRange}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Icon name="Ruler" size={20} className="text-primary" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground">
                      Диаметры
                    </p>
                    <p className="font-heading text-sm font-bold">
                      {product.diameters[0]}-
                      {product.diameters[product.diameters.length - 1]} мм
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Icon name="Layers" size={20} className="text-primary" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground">
                      Материал
                    </p>
                    <p className="font-heading text-sm font-bold">
                      {product.material}
                    </p>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-3">
                  Области применения
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <Badge
                      key={app}
                      variant="secondary"
                      className="font-body text-xs"
                    >
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Button
                  onClick={scrollToForm}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading uppercase tracking-wide"
                >
                  <Icon name="FileText" size={18} className="mr-2" />
                  Запросить цену
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-heading uppercase tracking-wide"
                  asChild
                >
                  <a href="tel:+79529304408">
                    <Icon name="Phone" size={18} className="mr-2" />
                    +7 (952) 930-44-08
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-6">
            Технические характеристики
          </h2>
          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-heading text-xs uppercase">
                      Диаметр, мм
                    </TableHead>
                    <TableHead className="font-heading text-xs uppercase">
                      Толщина стенки, мм
                    </TableHead>
                    <TableHead className="font-heading text-xs uppercase">
                      Вес, кг/м
                    </TableHead>
                    <TableHead className="font-heading text-xs uppercase">
                      Раб. давление, бар
                    </TableHead>
                    <TableHead className="font-heading text-xs uppercase">
                      Разрывное давление, бар
                    </TableHead>
                    <TableHead className="font-heading text-xs uppercase">
                      Длина бухты, м
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.specs.map((row) => (
                    <TableRow key={row.diameter}>
                      <TableCell className="font-body font-medium">
                        {row.diameter}
                      </TableCell>
                      <TableCell className="font-body">
                        {row.wallThickness}
                      </TableCell>
                      <TableCell className="font-body">{row.weight}</TableCell>
                      <TableCell className="font-body font-medium text-primary">
                        {row.workingPressure}
                      </TableCell>
                      <TableCell className="font-body">
                        {row.burstPressure}
                      </TableCell>
                      <TableCell className="font-body">
                        {row.coilLength}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase mb-6">
              Похожая продукция
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Card
                  key={p.id}
                  className="overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate(`/catalog/product/${p.slug}`)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading text-base font-bold uppercase mb-1">
                      {p.name}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">
                      {p.pressureRange} | {p.temperatureRange}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section id="product-contact" className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase">
                Запросить цену на {product.name}
              </h2>
              <p className="font-body text-muted-foreground mt-2">
                Укажите требуемые параметры — мы подготовим коммерческое
                предложение
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

export default ProductDetail;
