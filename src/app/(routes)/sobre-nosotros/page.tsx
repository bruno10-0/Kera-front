import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Creemos en la moda que te hace sentir único</p>
      </header>

      {/* Brand History Section */}
      <section className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="mb-4 text-muted-foreground">
            Fundada en 2015, nuestra marca nació de la pasión por crear prendas que combinan estilo, comodidad y
            personalidad. Lo que comenzó como un pequeño taller, ha crecido hasta convertirse en una marca reconocida
            por su autenticidad.
          </p>
          <p className="mb-4 text-muted-foreground">
            Nuestra misión es simple: diseñar ropa que te permita expresar quién eres, sin comprometer la calidad ni el
            planeta.
          </p>
          <p className="text-muted-foreground">
            Valoramos la creatividad, la inclusión y la sostenibilidad en cada paso de nuestro proceso.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Nuestra tienda" fill className="object-cover" />
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Nuestro Equipo</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Fundador ${i}`}
                  alt={`Fundador ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Nombre Apellido</h3>
              <p className="text-muted-foreground">Cargo</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-secondary p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Nuestro Compromiso</h2>
        <p className="text-center max-w-3xl mx-auto text-muted-foreground">
          Nos comprometemos a utilizar materiales de la más alta calidad y procesos de producción sostenibles. Cada
          prenda está diseñada para durar, reduciendo el impacto ambiental de la moda rápida. Trabajamos con proveedores
          locales siempre que es posible y nos aseguramos de que nuestras prendas se fabriquen en condiciones justas y
          éticas.
        </p>
      </section>

      {/* Contact/Social Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Conéctate con Nosotros</h2>
        <p className="mb-6 text-muted-foreground">
          Síguenos en redes sociales o contáctanos directamente para cualquier consulta.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors">
            <Twitter className="h-6 w-6" />
          </Link>
        </div>
        <Link
          href="/contacto"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Contáctanos
        </Link>
      </section>
    </div>
  )
}

