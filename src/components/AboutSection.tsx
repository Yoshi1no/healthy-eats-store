import { Leaf, Heart, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              О нас
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Мы верим в силу натуральной еды
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Healthy Foods — это больше, чем магазин. Мы — команда единомышленников, 
              которые хотят сделать здоровое питание доступным для каждой семьи в Казахстане.
            </p>
            <p className="mt-4 text-muted-foreground">
              Мы лично отбираем каждый продукт, работаем напрямую с фермерами и 
              проверенными производителями. Никаких посредников — только качество и честная цена.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-2 text-2xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">натуральных продуктов</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-2 text-2xl font-bold text-foreground">5000+</p>
                <p className="text-sm text-muted-foreground">довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-2 text-2xl font-bold text-foreground">3 года</p>
                <p className="text-sm text-muted-foreground">на рынке</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl bg-leaf-light p-6">
                <p className="font-display text-xl font-semibold text-primary">
                  "Здоровье начинается с того, что мы едим"
                </p>
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                <div className="flex h-full items-center justify-center text-6xl">
                  🥗
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square overflow-hidden rounded-2xl bg-accent/20">
                <div className="flex h-full items-center justify-center text-6xl">
                  🌿
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-80">Натуральные ингредиенты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
