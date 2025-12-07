import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₸";
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-display text-xl font-semibold">Корзина</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
              <p className="mt-4 text-lg font-medium text-muted-foreground">
                Корзина пуста
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Добавьте товары из каталога
              </p>
              <Button
                variant="default"
                className="mt-6"
                onClick={() => setIsCartOpen(false)}
              >
                Перейти к покупкам
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-xl bg-card p-3 shadow-soft"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <h3 className="font-medium text-card-foreground line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {formatPrice(item.price)}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:bg-destructive/10"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted-foreground">Итого:</span>
              <span className="text-2xl font-bold text-foreground">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Button variant="hero" size="lg" className="w-full">
              Оформить заказ
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 w-full text-muted-foreground"
              onClick={clearCart}
            >
              Очистить корзину
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
