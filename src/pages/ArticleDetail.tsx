import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { articles, getArticleBySlug } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">
              Статья не найдена
            </h1>
            <p className="font-body text-muted-foreground mb-6">
              Запрашиваемая статья не существует или была удалена.
            </p>
            <Button asChild>
              <Link to="/articles">Все статьи</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id);

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
              to="/articles"
              className="hover:text-primary transition-colors"
            >
              Статьи
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground font-medium line-clamp-1">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2">
              {/* Header image */}
              <div className="relative rounded-lg overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-accent text-accent-foreground font-body text-xs">
                  {article.category}
                </Badge>
                <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                  <Icon name="CalendarDays" size={13} />
                  {new Date(article.date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                  <Icon name="Clock" size={13} />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Content */}
              <div
                className="font-body prose prose-sm sm:prose-base max-w-none
                  prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-wide
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:font-bold
                  prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-h3:font-bold
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-li:text-muted-foreground prose-li:leading-relaxed
                  prose-ul:my-4 prose-ul:pl-5
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Related articles */}
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
                    Другие статьи
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((ra) => (
                      <Link
                        key={ra.id}
                        to={`/articles/${ra.slug}`}
                        className="group block"
                      >
                        <Card className="overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-md transition-all">
                          <div className="h-32 overflow-hidden">
                            <img
                              src={ra.image}
                              alt={ra.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="p-3">
                            <p className="font-body text-xs text-muted-foreground mb-1">
                              {ra.readTime} &middot; {ra.category}
                            </p>
                            <h4 className="font-heading text-sm font-bold uppercase line-clamp-2 group-hover:text-primary transition-colors">
                              {ra.title}
                            </h4>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-5">
                    <h3 className="font-heading text-base font-bold uppercase mb-2">
                      Нужна консультация?
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/80 mb-4">
                      Наши инженеры помогут подобрать рукав под ваши задачи
                    </p>
                    <Button
                      asChild
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading uppercase tracking-wide text-sm"
                    >
                      <Link to="/contacts">Связаться с нами</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase text-white mb-3">
            Готовы подобрать рукав для вашей задачи?
          </h2>
          <p className="font-body text-white/80 mb-6 max-w-xl mx-auto">
            Оставьте заявку — мы подготовим технико-коммерческое предложение в
            течение 2 часов
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading uppercase tracking-wide"
            >
              <Link to="/contacts">Оставить заявку</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 font-heading uppercase tracking-wide"
            >
              <Link to="/catalog">Открыть каталог</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold uppercase">
                Запросить коммерческое предложение
              </h2>
              <p className="font-body text-muted-foreground mt-2">
                Заполните форму и получите расчёт стоимости
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

export default ArticleDetail;
