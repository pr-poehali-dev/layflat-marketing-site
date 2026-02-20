import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white">
            Статьи и материалы
          </h1>
          <p className="font-body text-white/70 mt-3 max-w-2xl">
            Полезные материалы по выбору, применению и эксплуатации
            плоскосворачиваемых рукавов
          </p>
          <div className="flex items-center gap-2 mt-4 font-body text-sm text-white/50">
            <Link to="/" className="hover:text-white transition-colors">
              Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white/80">Статьи</span>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-body text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3 font-body text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="CalendarDays" size={13} />
                        {new Date(article.date).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={13} />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading text-lg font-bold uppercase mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Читать далее <Icon name="ArrowRight" size={14} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
