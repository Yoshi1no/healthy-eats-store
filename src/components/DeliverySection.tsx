import { Truck, Clock, CreditCard, MapPin } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Бесплатная доставка",
    description: "При заказе от 15 000 ₸ доставка по Алматы бесплатно",
  },
  {
    icon: Clock,
    title: "Быстро и удобно",
    description: "Доставка в день заказа при оформлении до 14:00",
  },
  {
    icon: CreditCard,
    title: "Оплата",
    description: "Наличными, картой или переводом на Kaspi",
  },
  {
    icon: MapPin,
    title: "По всему Казахстану",
    description: "Отправляем транспортными компаниями в любой город",
  },
];

export function DeliverySection() {
  return (
    <section id="delivery" className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Доставка и оплата
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Как получить заказ
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
