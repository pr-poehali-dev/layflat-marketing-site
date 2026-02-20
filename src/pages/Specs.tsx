import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import { categories, getProductsByCategory } from "@/data/catalog";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/7b2e823e-d6a8-4a19-8a90-b4770c4ca061/files/5889e81b-8da5-40fb-a132-cfa9b803532d.jpg";

function pressureColor(pressure: number): string {
  if (pressure <= 4) return "bg-green-100 text-green-800";
  if (pressure <= 10) return "bg-blue-100 text-blue-800";
  if (pressure <= 16) return "bg-amber-100 text-amber-800";
  return "bg-red-100 text-red-800";
}

const Specs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative h-56 lg:h-72 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white">
            Технические характеристики
          </h1>
          <div className="flex items-center gap-2 mt-3 font-body text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Характеристики</span>
          </div>
        </div>
      </section>

      {/* Helper info */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Полные технические характеристики всех серий рукавов. Выберите
                категорию для просмотра спецификаций. Цветовая маркировка
                давления помогает быстро ориентироваться в таблице.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-body bg-green-100 text-green-800">
                  до 4 бар
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-body bg-blue-100 text-blue-800">
                  5-10 бар
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-body bg-amber-100 text-amber-800">
                  11-16 бар
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-body bg-red-100 text-red-800">
                  17+ бар
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="font-heading uppercase tracking-wide text-sm shrink-0"
            >
              <Icon name="Download" size={16} className="mr-2" />
              Скачать спецификации PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs with tables */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue={categories[0].slug}>
            <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-8">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.slug}
                  className="font-body text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => {
              const catProducts = getProductsByCategory(cat.slug);
              return (
                <TabsContent key={cat.id} value={cat.slug}>
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    {cat.description}
                  </p>

                  {catProducts.map((product) => (
                    <div key={product.id} className="mb-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <Link
                            to={`/catalog/product/${product.slug}`}
                            className="font-heading text-xl font-bold uppercase hover:text-primary transition-colors"
                          >
                            {product.name}
                          </Link>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <Badge
                              variant="secondary"
                              className="font-body text-xs"
                            >
                              {product.material}
                            </Badge>
                            <span className="font-body text-xs text-muted-foreground">
                              {product.pressureRange}
                            </span>
                            <span className="font-body text-xs text-muted-foreground">
                              {product.temperatureRange}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="font-body text-xs shrink-0"
                        >
                          <Link to={`/catalog/product/${product.slug}`}>
                            Подробнее
                            <Icon
                              name="ArrowRight"
                              size={14}
                              className="ml-1"
                            />
                          </Link>
                        </Button>
                      </div>

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
                                  <TableCell className="font-body">
                                    {row.weight}
                                  </TableCell>
                                  <TableCell>
                                    <span
                                      className={`inline-block px-2 py-0.5 rounded text-xs font-body font-medium ${pressureColor(row.workingPressure)}`}
                                    >
                                      {row.workingPressure}
                                    </span>
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
                  ))}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase">
                Нужна помощь с выбором?
              </h2>
              <p className="font-body text-muted-foreground mt-2">
                Наши инженеры помогут подобрать оптимальный рукав под ваши
                условия
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

export default Specs;
