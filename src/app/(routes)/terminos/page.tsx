import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function TermsAndConditions() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-2 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Términos y Condiciones</h1>
        <p className="text-muted-foreground">Lee atentamente nuestras políticas y reglas de uso</p>
      </div>

      <div className="space-y-10">
        <section id="introduccion" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Introducción</h2>
          <p>
            Bienvenido a nuestra tienda. Estos términos y condiciones describen las reglas y regulaciones para el uso de
            nuestro sitio web. Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su
            totalidad. No continúes usando el sitio si no estás de acuerdo con todos los términos y condiciones
            establecidos en esta página.
          </p>
        </section>

        <Separator />

        <section id="condiciones-de-uso" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Condiciones de uso</h2>
          <p>
            El contenido de las páginas de este sitio web es para tu información general y uso personal únicamente. Está
            sujeto a cambios sin previo aviso.
          </p>
          <p>
            Este sitio web utiliza cookies para monitorear las preferencias de navegación. Si permites el uso de
            cookies, aceptas el uso de cookies de acuerdo con nuestra política de privacidad.
          </p>
          <p>
            Ni nosotros ni terceros proporcionamos ninguna garantía o seguridad en cuanto a la precisión, puntualidad,
            rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio
            web para cualquier propósito particular.
          </p>
        </section>

        <Separator />

        <section id="politica-de-privacidad" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Política de Privacidad</h2>
          <p>
            Tu privacidad es importante para nosotros. Es nuestra política respetar tu privacidad con respecto a
            cualquier información que podamos recopilar de ti a través de nuestro sitio web.
          </p>
          <p>
            Solicitamos información personal solo cuando realmente la necesitamos para proporcionarte un servicio. La
            recopilamos por medios justos y legales, con tu conocimiento y consentimiento.
          </p>
          <p>
            No compartimos información de identificación personal públicamente o con terceros, excepto cuando sea
            requerido por ley.
          </p>
        </section>

        <Separator />

        <section id="politica-de-envios-y-devoluciones" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Política de Envíos y Devoluciones</h2>
          <p>
            Realizamos envíos a todo el país. El tiempo de entrega varía según la ubicación, generalmente entre 3-7 días
            hábiles.
          </p>
          <p>
            Si no estás satisfecho con tu compra, puedes devolver el producto dentro de los 30 días posteriores a la
            recepción. El producto debe estar en su estado original, sin usar y con todas las etiquetas y embalajes.
          </p>
          <p>
            Los gastos de envío para devoluciones corren por cuenta del cliente, excepto en casos de productos
            defectuosos o errores en el envío.
          </p>
        </section>

        <Separator />

        <section id="condiciones-de-pago" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Condiciones de Pago</h2>
          <p>
            Aceptamos pagos mediante tarjetas de crédito/débito, transferencia bancaria y servicios de pago en línea.
          </p>
          <p>
            Todos los precios mostrados en nuestro sitio web incluyen impuestos aplicables. Los gastos de envío se
            calculan y muestran durante el proceso de compra.
          </p>
          <p>
            Nos reservamos el derecho de rechazar cualquier pedido que realices con nosotros. Podemos, a nuestra
            discreción, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido.
          </p>
        </section>

        <Separator />

        <section id="derechos-y-responsabilidades" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Derechos y Responsabilidades</h2>
          <p>
            Como usuario, tienes derecho a recibir productos en buen estado y que correspondan a la descripción
            proporcionada en nuestro sitio web.
          </p>
          <p>
            Es tu responsabilidad proporcionar información precisa y completa al realizar una compra, incluyendo
            detalles de envío y facturación.
          </p>
          <p>
            También es tu responsabilidad asegurarte de que los productos que compras son adecuados para el uso
            previsto.
          </p>
        </section>

        <Separator />

        <section id="limitacion-de-responsabilidad" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Limitación de Responsabilidad</h2>
          <p>
            En ningún caso seremos responsables por cualquier pérdida o daño incluyendo, sin limitación, pérdida o daño
            indirecto o consecuente, o cualquier pérdida o daño que surja de la pérdida de datos o beneficios que surjan
            de, o en conexión con, el uso de este sitio web.
          </p>
          <p>
            No somos responsables por el contenido de sitios web vinculados desde nuestro sitio. La inclusión de
            cualquier enlace no implica necesariamente una recomendación o respaldo de las opiniones expresadas en
            ellos.
          </p>
        </section>
      </div>

      <div className="mt-12 space-y-6">
        <p className="text-sm text-muted-foreground text-center">
          Para más información, consulta nuestra{" "}
          <Link href="/politica-de-privacidad" className="underline underline-offset-4 hover:text-primary">
            Política de Privacidad
          </Link>
          .
        </p>

        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center">
              Volver a la tienda
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

