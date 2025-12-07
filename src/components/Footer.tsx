import { Leaf, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacts" className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-lg font-semibold">
                  Healthy Foods
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Магазин здорового питания в Казахстане. 
              Натуральные продукты для вашего здоровья.
            </p>
            <a
              href="https://www.instagram.com/healthy_foods.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              @healthy_foods.kz
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold">Навигация</h3>
            <ul className="mt-4 space-y-2">
              {["Каталог", "О нас", "Доставка", "Контакты"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display text-lg font-semibold">Категории</h3>
            <ul className="mt-4 space-y-2">
              {["Суперфуды", "Орехи", "Напитки", "Завтраки"].map((cat) => (
                <li key={cat}>
                  <a
                    href="#catalog"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold">Контакты</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                +7 (777) 123-45-67
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                info@healthyfoods.kz
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>г. Алматы, ул. Достык, 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© 2024 Healthy Foods Kazakhstan. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
