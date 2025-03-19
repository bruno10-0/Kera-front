import Link from "next/link";
import {
  Box,
  Clock,
  CreditCard,
  Globe,
  HelpCircle,
  Package,
  RotateCcw,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ShippingPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Envíos
        </h1>
        <p className="text-muted-foreground text-lg">
          Toda la información sobre nuestros métodos de envío
        </p>
        <Separator className="mx-auto max-w-xs" />
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Truck className="h-6 w-6" />
            <div>
              <CardTitle>Métodos de Envío</CardTitle>
              <CardDescription>
                Opciones disponibles para recibir tu pedido
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="font-semibold">Envío Estándar</h3>
                <p className="text-sm text-muted-foreground">
                  Nuestro método de envío más económico. Ideal para compras
                  regulares sin urgencia.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="font-semibold">Envío Exprés</h3>
                <p className="text-sm text-muted-foreground">
                  Entrega prioritaria para cuando necesitas tu pedido lo antes
                  posible.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Clock className="h-6 w-6" />
            <div>
              <CardTitle>Tiempo de Entrega</CardTitle>
              <CardDescription>
                Plazos estimados según el método de envío
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Envío Estándar</h3>
                  <p className="text-sm text-muted-foreground">
                    3-5 días hábiles
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Envío Exprés</h3>
                  <p className="text-sm text-muted-foreground">
                    1-2 días hábiles
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Los tiempos de entrega pueden variar según la ubicación y
                disponibilidad de stock.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <CreditCard className="h-6 w-6" />
            <div>
              <CardTitle>Costos de Envío</CardTitle>
              <CardDescription>
                Tarifas y condiciones para envíos gratuitos
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Envío Estándar</h3>
                  <p className="text-sm text-muted-foreground">€4.99</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Envío Exprés</h3>
                  <p className="text-sm text-muted-foreground">€9.99</p>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg mt-2">
                <p className="font-medium">
                  ¡Envío gratis en pedidos superiores a €50!
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Aplica solo para envío estándar dentro del territorio
                  nacional.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Globe className="h-6 w-6" />
            <div>
              <CardTitle>Áreas de Envío</CardTitle>
              <CardDescription>
                Regiones donde realizamos entregas
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="font-semibold">Envíos Nacionales</h3>
                <p className="text-sm text-muted-foreground">
                  Realizamos envíos a todo el territorio nacional, incluyendo
                  islas y territorios especiales.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="font-semibold">Envíos Internacionales</h3>
                <p className="text-sm text-muted-foreground">
                  Enviamos a la Unión Europea y otros países seleccionados. Los
                  costos y tiempos de entrega pueden variar.
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Para consultas sobre envíos a destinos específicos, por favor
                <Link
                  href="/contacto"
                  className="text-primary hover:underline ml-1"
                >
                  contáctanos
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Package className="h-6 w-6" />
            <div>
              <CardTitle>Seguimiento de Pedido</CardTitle>
              <CardDescription>
                Cómo rastrear el estado de tu envío
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <p className="text-sm text-muted-foreground">
                Una vez que tu pedido haya sido enviado, recibirás un correo
                electrónico con el número de seguimiento y un enlace para
                rastrear tu paquete.
              </p>
              <p className="text-sm text-muted-foreground">
                También puedes consultar el estado de tu pedido en cualquier
                momento desde tu cuenta en la sección "Mis Pedidos".
              </p>
              <div className="flex justify-center mt-2">
                <Button variant="outline" asChild>
                  <Link href="/seguimiento">
                    <Box className="mr-2 h-4 w-4" />
                    Rastrear mi pedido
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <HelpCircle className="h-6 w-6" />
            <div>
              <CardTitle>Problemas con el Envío</CardTitle>
              <CardDescription>
                Qué hacer si hay inconvenientes con tu pedido
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <p className="text-sm text-muted-foreground">
                Si tu pedido se retrasa más allá del tiempo estimado, si el
                paquete llega dañado o si hay cualquier otro problema con tu
                envío, por favor contáctanos inmediatamente.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Pasos a seguir:</h3>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Contacta a nuestro servicio de atención al cliente dentro de
                    las 48 horas siguientes a la recepción.
                  </li>
                  <li>
                    Proporciona tu número de pedido y detalles del problema.
                  </li>
                  <li>
                    Si es posible, adjunta fotos en caso de daños en el paquete
                    o producto.
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <RotateCcw className="h-6 w-6" />
            <div>
              <CardTitle>Devoluciones por Envío Incorrecto</CardTitle>
              <CardDescription>
                Proceso para gestionar errores en el envío
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <p className="text-sm text-muted-foreground">
                Si has recibido un producto incorrecto o hay algún error en tu
                pedido, ofrecemos devoluciones gratuitas y nos encargamos de
                enviarte el producto correcto lo antes posible.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Proceso de devolución:</h3>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Informa del error a través de nuestro formulario de contacto
                    o por teléfono.
                  </li>
                  <li>
                    Recibirás una etiqueta de devolución gratuita por correo
                    electrónico.
                  </li>
                  <li>
                    Empaqueta el artículo incorrecto y adhiere la etiqueta.
                  </li>
                  <li>
                    Lleva el paquete a la oficina de correos más cercana o
                    solicita una recogida.
                  </li>
                  <li>
                    Una vez recibido, procesaremos el envío correcto en un plazo
                    de 1-2 días hábiles.
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
