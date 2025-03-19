"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Related from "./sections/Related";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("m");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = {
    name: "Vestido Elegante de Noche",
    price: 89.99,
    description:
      "Un vestido elegante y sofisticado, perfecto para ocasiones especiales. Confeccionado con telas de alta calidad que garantizan comodidad y durabilidad.",
    colors: [
      { name: "Negro", value: "black" },
      { name: "Azul", value: "blue" },
      { name: "Rojo", value: "red" },
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    images: [
      "https://images.pexels.com/photos/20078838/pexels-photo-20078838/free-photo-of-mujer-mono-modelo-maqueta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/20079029/pexels-photo-20079029/free-photo-of-mujer-modelo-maqueta-vestido.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/20078828/pexels-photo-20078828/free-photo-of-mujer-modelo-maqueta-en-pie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/20078825/pexels-photo-20078825/free-photo-of-mujer-modelo-maqueta-en-pie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    details:
      "Este vestido elegante está diseñado para resaltar tu figura con un corte que favorece a todos los tipos de cuerpo. El material premium ofrece una caída perfecta y una sensación lujosa al tacto. Incluye detalles sutiles que añaden un toque de sofisticación.",
    features: [
      "95% Poliéster, 5% Elastano",
      "Cierre con cremallera invisible en la espalda",
      "Lavado a máquina en ciclo suave",
      "Importado",
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Imagen anterior</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Siguiente imagen</span>
            </Button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={cn(
                  "relative w-20 h-24 rounded-md overflow-hidden border-2",
                  currentImageIndex === index
                    ? "border-primary"
                    : "border-transparent"
                )}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - vista ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">
            {product.price.toFixed(2)} €
          </p>
          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">
              Color: <span className="capitalize">{selectedColor}</span>
            </h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.value}
                  className={cn(
                    "w-10 h-10 rounded-full border-2",
                    selectedColor === color.value
                      ? "border-primary"
                      : "border-muted"
                  )}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color.value)}
                  aria-label={`Color ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">
                Talla: <span className="uppercase">{selectedSize}</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={cn(
                    "w-12 h-12 rounded-md border-2 flex items-center justify-center uppercase font-medium",
                    selectedSize === size
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-muted text-foreground hover:border-primary/50"
                  )}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4 mb-8">
            <Button className="flex-1 gap-2" size="lg">
              <ShoppingCart className="w-5 h-5" />
              Añadir al carrito
            </Button>{" "}
          </div>

          {/* Product Information Tabs */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Detalles</TabsTrigger>
              <TabsTrigger value="features">Características</TabsTrigger>
              <TabsTrigger value="shipping">Envío</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-4">
              <p className="text-sm text-muted-foreground">{product.details}</p>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <p className="text-sm text-muted-foreground">
                Envío gratuito en pedidos superiores a 50€. Entrega estimada:
                2-4 días laborables. Devoluciones gratuitas dentro de los 30
                días posteriores a la recepción.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <Related />
    </div>
  );
}
