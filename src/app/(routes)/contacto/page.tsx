import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Contacto</h1>
        <p className="text-xl text-muted-foreground">
          Estamos aquí para ayudarte
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea
                id="mensaje"
                placeholder="¿En qué podemos ayudarte?"
                className="min-h-[150px]"
              />
            </div>
            <Button size="lg" className="w-full md:w-auto">
              Enviar mensaje
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Información de contacto</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <p>Calle Ejemplo 123, Ciudad, CP 12345</p>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <p>+34 123 456 789</p>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <p>info@tutienda.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Síguenos</h2>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Ubicación</h2>
            <div className="aspect-video bg-muted rounded-md overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.96315791531866!3d-37.81410797975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c19ed2abce760!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1613946156239!5m2!1sen!2sau"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
