"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex-1">
      <section className="container px-4 py-10 md:py-12 lg:py-16">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tienda
          </h1>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Descubre nuestra colección de prendas minimalistas diseñadas para
            durar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 lg:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 md:hidden"
              >
                <Filter className="h-4 w-4" />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
                <SheetDescription>
                  Refina tu búsqueda con nuestros filtros
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-6 py-4">
                <div>
                  <h3 className="font-medium mb-4">Categorías</h3>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="cat-1" />
                      <label htmlFor="cat-1" className="text-sm">
                        Camisetas
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="cat-2" />
                      <label htmlFor="cat-2" className="text-sm">
                        Pantalones
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="cat-3" />
                      <label htmlFor="cat-3" className="text-sm">
                        Vestidos
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="cat-4" />
                      <label htmlFor="cat-4" className="text-sm">
                        Abrigos
                      </label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-4">Talles</h3>
                  <div className="grid grid-cols-4 gap-2">
                    <Badge
                      variant="outline"
                      className="rounded-md cursor-pointer hover:bg-muted"
                    >
                      XS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-md cursor-pointer hover:bg-muted"
                    >
                      S
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-md cursor-pointer hover:bg-muted"
                    >
                      M
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-md cursor-pointer hover:bg-muted"
                    >
                      L
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-md cursor-pointer hover:bg-muted"
                    >
                      XL
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-md cursor-pointer hover:bg-muted"
                    >
                      XXL
                    </Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-4">Precio</h3>
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">$0</span>
                    <span className="text-sm">$500</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-4">Colores</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 w-6 rounded-full bg-black border cursor-pointer"></div>
                    <div className="h-6 w-6 rounded-full bg-white border cursor-pointer"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-500 border cursor-pointer"></div>
                    <div className="h-6 w-6 rounded-full bg-neutral-200 border cursor-pointer"></div>
                    <div className="h-6 w-6 rounded-full bg-stone-700 border cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden md:block">
            <div className="sticky top-24 grid gap-6">
              <div>
                <h3 className="font-medium mb-4">Categorías</h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="cat-desktop-1" />
                    <label htmlFor="cat-desktop-1" className="text-sm">
                      Camisetas
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cat-desktop-2" />
                    <label htmlFor="cat-desktop-2" className="text-sm">
                      Pantalones
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cat-desktop-3" />
                    <label htmlFor="cat-desktop-3" className="text-sm">
                      Vestidos
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cat-desktop-4" />
                    <label htmlFor="cat-desktop-4" className="text-sm">
                      Abrigos
                    </label>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Talles</h3>
                <div className="grid grid-cols-4 gap-2">
                  <Badge
                    variant="outline"
                    className="rounded-md cursor-pointer hover:bg-muted"
                  >
                    XS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-md cursor-pointer hover:bg-muted"
                  >
                    S
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-md cursor-pointer hover:bg-muted"
                  >
                    M
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-md cursor-pointer hover:bg-muted"
                  >
                    L
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-md cursor-pointer hover:bg-muted"
                  >
                    XL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-md cursor-pointer hover:bg-muted"
                  >
                    XXL
                  </Badge>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Precio</h3>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="my-6"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm">$0</span>
                  <span className="text-sm">$500</span>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-4">Colores</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="h-6 w-6 rounded-full bg-black border cursor-pointer"></div>
                  <div className="h-6 w-6 rounded-full bg-white border cursor-pointer"></div>
                  <div className="h-6 w-6 rounded-full bg-gray-500 border cursor-pointer"></div>
                  <div className="h-6 w-6 rounded-full bg-neutral-200 border cursor-pointer"></div>
                  <div className="h-6 w-6 rounded-full bg-stone-700 border cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-xl border bg-white"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="https://www.remingtonlatam.com/co/wp-content/uploads/sites/27/2019/09/banner_slider_1600x610-copy.png"
                      alt={`Producto ${i + 1}`}
                      className="object-cover transition-transform group-hover:scale-105"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Producto {i + 1}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Categoría
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        ${(Math.random() * 100 + 20).toFixed(2)}
                      </span>
                      <Button variant="outline" size="sm">
                        Ver más
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
