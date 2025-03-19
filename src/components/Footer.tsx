import { Facebook, Instagram, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-medium">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tienda"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Políticas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terminos"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/envios"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Envíos y Devoluciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Redes Sociales</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Email: contacto@minima.com
                <br />
                Teléfono: +54 11 1234-5678
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 MINIMA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
