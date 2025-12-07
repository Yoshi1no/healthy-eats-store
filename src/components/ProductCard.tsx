import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₸";
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button (appears on hover) */}
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="cart"
            size="lg"
            className="animate-scale-in"
            onClick={() => addToCart(product)}
          >
            <Plus className="mr-2 h-4 w-4" />
            В корзину
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold text-card-foreground line-clamp-1">
          {product.name}
        </h3>
        
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </article>
  );
}
