import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">MINIMA</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/tienda"
            className="transition-colors hover:text-foreground/80"
          >
            Tienda
          </Link>
          <Link
            href="/sobre-nosotros"
            className="transition-colors hover:text-foreground/80"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contacto"
            className="transition-colors hover:text-foreground/80"
          >
            Contacto
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <DialogTitle></DialogTitle>
            <nav className="grid gap-6 text-lg font-medium mt-2 px-4">
              <Link href="/tienda" className="hover:text-foreground/80">
                Tienda
              </Link>
              <Link href="/sobre-nosotros" className="hover:text-foreground/80">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="hover:text-foreground/80">
                Contacto
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
