export default function PrivacyPolicy() {
  return (
    <div className="container py-12 mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Política de Privacidad</h1>
        <p className="text-xl text-muted-foreground">
          Tu privacidad es importante para nosotros
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" id="informacion">
            Información que recopilamos
          </h2>
          <p>Recopilamos la siguiente información personal:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Nombre completo y datos de contacto (correo electrónico, número de
              teléfono)
            </li>
            <li>Dirección de facturación y envío</li>
            <li>
              Información de pago (procesada de forma segura a través de
              nuestros proveedores de pago)
            </li>
            <li>Historial de compras y preferencias de productos</li>
            <li>Información sobre cómo utilizas nuestro sitio web</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" id="uso">
            Cómo usamos tus datos
          </h2>
          <p>Utilizamos tu información personal para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Procesar y entregar tus pedidos</li>
            <li>Gestionar tu cuenta y proporcionarte servicio al cliente</li>
            <li>Personalizar tu experiencia de compra</li>
            <li>
              Enviarte actualizaciones sobre productos, ofertas y promociones
              (si has dado tu consentimiento)
            </li>
            <li>Mejorar nuestro sitio web y servicios</li>
            <li>Cumplir con nuestras obligaciones legales</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" id="comparticion">
            Compartición de datos
          </h2>
          <p>Podemos compartir tu información con:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Empresas de transporte para entregar tus pedidos</li>
            <li>Proveedores de servicios de pago para procesar tus compras</li>
            <li>
              Proveedores de servicios de marketing (solo con tu consentimiento)
            </li>
            <li>Autoridades cuando sea requerido por ley</li>
          </ul>
          <p>No vendemos ni alquilamos tu información personal a terceros.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" id="proteccion">
            Protección de datos
          </h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para
            proteger tu información personal, incluyendo:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encriptación de datos sensibles</li>
            <li>Acceso restringido a la información personal</li>
            <li>Sistemas de seguridad actualizados regularmente</li>
            <li>Formación en privacidad para nuestro personal</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" id="cookies">
            Cookies
          </h2>
          <p>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
            Estas nos permiten:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Recordar los artículos en tu carrito de compras</li>
            <li>Reconocerte cuando regresas a nuestro sitio</li>
            <li>Analizar cómo utilizas nuestro sitio para mejorarlo</li>
            <li>Personalizar el contenido según tus preferencias</li>
          </ul>
          <p>
            Puedes gestionar las cookies a través de la configuración de tu
            navegador.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" id="derechos">
            Tus derechos
          </h2>
          <p>Tienes derecho a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acceder a tu información personal</li>
            <li>Corregir datos inexactos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerte al procesamiento de tus datos</li>
            <li>Retirar tu consentimiento en cualquier momento</li>
            <li>
              Presentar una reclamación ante la autoridad de protección de datos
            </li>
          </ul>
          <p>
            Para ejercer estos derechos, contacta con nosotros a través de{" "}
            <a
              href="mailto:privacidad@tienda.com"
              className="text-primary underline"
            >
              privacidad@tienda.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" id="actualizaciones">
            Actualizaciones de la política
          </h2>
          <p>
            Podemos actualizar esta política de privacidad ocasionalmente para
            reflejar cambios en nuestras prácticas o por otros motivos
            operativos, legales o regulatorios.
          </p>
          <p>
            Te notificaremos sobre cambios significativos a través de un aviso
            destacado en nuestro sitio web o por correo electrónico antes de que
            los cambios entren en vigor.
          </p>
        </section>
      </div>
    </div>
  );
}
