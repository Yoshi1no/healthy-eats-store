import heroImage from "@/assets/hero-healthy-food.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Свежие органические овощи и фрукты"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" />
              Доставка по Казахстану
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground animate-slide-up md:text-5xl lg:text-6xl" style={{ animationDelay: "0.1s" }}>
            Здоровое питание для{" "}
            <span className="text-primary">вашей семьи</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground animate-slide-up md:text-xl" style={{ animationDelay: "0.2s" }}>
            Натуральные продукты, суперфуды и органические деликатесы. 
            Мы отбираем только лучшее для вашего здоровья.
          </p>

          <div className="mt-8 flex flex-col gap-4 animate-slide-up sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#catalog">
                Перейти в каталог
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#about">
                Узнать больше
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 gap-6 animate-fade-in sm:grid-cols-3" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-light">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Быстрая доставка</p>
                <p className="text-xs text-muted-foreground">1-3 дня по городу</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-light">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Гарантия качества</p>
                <p className="text-xs text-muted-foreground">Только проверенное</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-light">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">100% натурально</p>
                <p className="text-xs text-muted-foreground">Без ГМО и добавок</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
