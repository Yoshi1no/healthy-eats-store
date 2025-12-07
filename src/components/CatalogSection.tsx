import { useState } from "react";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

export function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="catalog" className="bg-background py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Каталог
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Наши продукты
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Отборные натуральные продукты для здорового образа жизни. 
            Мы лично проверяем каждого поставщика.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              В этой категории пока нет товаров
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
