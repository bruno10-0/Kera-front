"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag, User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Minimal Shirt",
      price: 89.99,
      image:
        "https://www.remingtonlatam.com/co/wp-content/uploads/sites/27/2019/09/banner_slider_1600x610-copy.png",
    },
    {
      id: 2,
      name: "Classic Jeans",
      price: 129.99,
      image:
        "https://www.remingtonlatam.com/co/wp-content/uploads/sites/27/2019/09/banner_slider_1600x610-copy.png",
    },
  ];

  const isLoggedIn = true; // This would be determined by your auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left font-serif text-2xl">
                UNIFINED
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4">
              <Link
                href="/sobre-nosotros"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/tienda"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Tienda
              </Link>
              <Link
                href="/contacto"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-medium md:text-2xl">
            UNIFINED
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          <Link
            href="/sobre-nosotros"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/tienda"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Tienda
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contacto
          </Link>
        </nav>

        {/* User and Cart */}
        <div className="flex items-center gap-4">
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <User className="h-5 w-5" />
                <span className="sr-only">Open user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {isLoggedIn ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="#" className="cursor-pointer">
                      Ver perfil
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#" className="cursor-pointer">
                      Mis pedidos
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    Cerrar sesión
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/#" className="cursor-pointer">
                      Iniciar sesión
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/#" className="cursor-pointer">
                      Registrarse
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart */}
          <DropdownMenu open={isCartOpen} onOpenChange={setIsCartOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {cartItems.length}
                  </span>
                )}
                <span className="sr-only">Open cart</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex flex-col gap-4 p-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Carrito de compras</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close cart</span>
                  </Button>
                </div>
                {cartItems.length > 0 ? (
                  <>
                    <div className="flex max-h-[300px] flex-col gap-3 overflow-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-md object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              €{item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <DropdownMenuSeparator />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Total:</span>
                      <span className="font-medium">
                        €
                        {cartItems
                          .reduce((total, item) => total + item.price, 0)
                          .toFixed(2)}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setIsCartOpen(false)}
                        asChild
                      >
                        <Link href="/cart">Ver carrito</Link>
                      </Button>
                      <Button
                        className="w-full"
                        onClick={() => setIsCartOpen(false)}
                        asChild
                      >
                        <Link href="/checkout">Finalizar compra</Link>
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="py-6 text-center">
                    <p className="text-muted-foreground">
                      Tu carrito está vacío
                    </p>
                  </div>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
