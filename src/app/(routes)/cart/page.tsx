"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Camisa Oversize Premium",
    size: "M",
    color: "Negro",
    price: 49.99,
    quantity: 1,
    image: "https://www.remingtonlatam.com/co/wp-content/uploads/sites/27/2019/09/banner_slider_1600x610-copy.png",
},
  {
    id: 2,
    name: "Pantalón Cargo Slim Fit",
    size: "32",
    color: "Beige",
    price: 69.99,
    quantity: 2,
    image:
      "https://www.remingtonlatam.com/co/wp-content/uploads/sites/27/2019/09/banner_slider_1600x610-copy.png",
  },
  {
    id: 3,
    name: "Zapatillas Urbanas Minimalistas",
    size: "42",
    color: "Blanco",
    price: 89.99,
    quantity: 1,
    image:
      "https://www.remingtonlatam.com/co/wp-content/uploads/sites/27/2019/09/banner_slider_1600x610-copy.png",
  },
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculate subtotal for each item
  const getItemSubtotal = (price: any, quantity: any) => {
    return price * quantity;
  };

  // Calculate cart subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + getItemSubtotal(item.price, item.quantity);
  }, 0);

  // Calculate taxes (10%)
  const taxes = subtotal * 0.1;

  // Shipping cost
  const shipping = subtotal > 100 ? 0 : 9.99;

  // Calculate discount (15% if promo applied)
  const discount = promoApplied ? subtotal * 0.15 : 0;

  // Calculate total
  const total = subtotal + taxes + shipping - discount;

  // Update item quantity
  const updateQuantity = (id: any, newQuantity: any) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: any) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "unifined15") {
      setPromoApplied(true);
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-medium mb-2">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mb-8">
            Parece que aún no has añadido productos a tu carrito
          </p>
          <Button asChild size="lg">
            <Link href="#">Explorar Productos</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative h-[120px] w-full sm:w-[90px] bg-muted">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="text-sm text-muted-foreground mt-1">
                            <span>Talla: {item.size}</span>
                            <span className="mx-2">|</span>
                            <span>Color: {item.color}</span>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-0 text-right">
                          <div className="font-medium">
                            ${item.price.toFixed(2)}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Subtotal: $
                            {getItemSubtotal(item.price, item.quantity).toFixed(
                              2
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Resumen de Compra
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Impuestos (10%)
                    </span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envío</span>
                    <span>
                      {shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Descuento (15%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <Separator className="my-3" />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      Finalizar Compra
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/tienda">Continuar Comprando</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
