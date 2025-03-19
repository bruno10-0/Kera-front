import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Related = () => {
  const relatedProducts = [
    {
      id: 1,
      name: "Vestido amarillo de manga larga",
      price: 49.99,
      image:
        "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Estilo fashion de mujer Cafe",
      price: 59.99,
      image:
        "https://images.pexels.com/photos/31030444/pexels-photo-31030444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Pack de accesorios aire libre",
      price: 69.99,
      image:
        "https://images.pexels.com/photos/14461348/pexels-photo-14461348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Abrigo beige",
      price: 99.99,
      image:
        "https://images.pexels.com/photos/19243486/pexels-photo-19243486/free-photo-of-moda-gafas-de-sol-mujer-calle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[2/3] overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <Link href="#" className="hover:underline">
                <h3 className="font-medium mb-1 line-clamp-1">
                  {product.name}
                </h3>
              </Link>
              <p className="font-semibold">{product.price.toFixed(2)} €</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Related;
