import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";

function NetworkVulnerabilitiesPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header>
        <NavbarSimple />
        <h1 className="text-4xl font-bold text-gray-800 text-center m-6">
          Vulnerabilidades de Red
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Guía Básica para Identificar y Prevenir Vulnerabilidades de Red
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            Las redes son una parte crucial de nuestra vida digital. Es vital
            comprender las principales vulnerabilidades y cómo proteger tus
            dispositivos y datos de posibles ataques.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Protección de redes"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Mantén tus redes seguras configurando contraseñas robustas y
                evitando conexiones públicas.
              </p>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Firewalls y protección"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Usa firewalls y herramientas de detección de intrusos para
                proteger tus dispositivos.
              </p>
            </div>
          </div>
          {/* Guide Sections */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                1. Configuración de Wi-Fi
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Cambia el nombre y la contraseña predeterminados de tu red
                Wi-Fi. Usa cifrado WPA3 (o WPA2 si no está disponible) y
                desactiva el acceso remoto si no es necesario.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Protege tus dispositivos
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Asegúrate de que todos los dispositivos conectados a tu red
                estén actualizados y tengan un antivirus instalado. Esto incluye
                cámaras de seguridad, routers y dispositivos IoT.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Evita redes públicas no seguras
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Las redes Wi-Fi públicas suelen ser inseguras. Si necesitas
                usarlas, evita acceder a cuentas sensibles y considera usar una
                VPN para cifrar tu tráfico.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                4. Implementa firewalls y protección
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Configura un firewall para monitorear el tráfico de red y
                bloquear accesos no autorizados. Usa herramientas como IDS/IPS
                para detectar y prevenir intrusiones.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                5. Conoce los ataques comunes
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Aprende sobre ataques como el phishing, ataques MITM (hombre en
                el medio) y denegación de servicio (DoS). Presta atención a
                señales de actividad sospechosa en tu red.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                6. Monitoreo y alertas
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Usa herramientas para monitorear el tráfico en tu red y recibir
                alertas ante posibles intrusiones. Configura notificaciones en
                tu router para actividades inusuales.
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer>
        <FooterWithLogo />
      </footer>
    </div>
  );
}

export default NetworkVulnerabilitiesPage;
