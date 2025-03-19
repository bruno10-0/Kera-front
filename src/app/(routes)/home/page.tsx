import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex-1">
      <section className="relative">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Colección de moda"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Nueva colección 2025
            </h1>
            <p className="mt-4 max-w-xl text-xl">Descubrí tu estilo</p>
            <Button
              size="lg"
              className="mt-8 bg-white text-black hover:bg-white/90"
            >
              Ver Tienda
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/producto/${product.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-md">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <blockquote className="mx-auto max-w-3xl text-center text-2xl font-light italic">
            "La moda se desvanece, solo el estilo permanece."
            <footer className="mt-4 text-sm font-medium">— Coco Chanel</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
};

export default Home;

const products = [
  {
    id: 1,
    name: "Camisa Minimalista",
    price: "29.990",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    id: 2,
    name: "Pantalón Recto",
    price: "39.990",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    id: 3,
    name: "Vestido Esencial",
    price: "49.990",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    id: 4,
    name: "Chaqueta Atemporal",
    price: "59.990",
    image: "/placeholder.svg?height=500&width=400",
  },
];
