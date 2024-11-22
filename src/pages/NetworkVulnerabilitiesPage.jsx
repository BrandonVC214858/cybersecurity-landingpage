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
            Entendiendo los Riesgos y Cómo Protegernos
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            En un mundo hiperconectado, las redes que usamos para trabajar, aprender o simplemente navegar por internet están expuestas a múltiples 
            amenazas. Estas vulnerabilidades de red son como puntos débiles en una fortaleza, que pueden ser explotados si no tomamos precauciones. 
            A continuación, te explicamos algunos riesgos comunes y cómo protegerte.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMg_xgd39vPNTP1RXLy52TBB08qLfWj9JqA&s"
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
                src="https://mlfk3cv5yvnx.i.optimole.com/cb:bn-b.2fe21/w:1200/h:627/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2023/10/N1-0581-Firewalls-blog-image.jpg"
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
                1. Access Point Spoofing
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                Imagina que te conectas a una red Wi-Fi en un café, pero resulta que no es la red del lugar, 
                sino una red falsa creada por un atacante. 
                Esto se llama Access Point Spoofing, y permite interceptar tus datos.
                <li>¿Cómo prevenirlo?</li>
                <li>Usa WPA3: Este protocolo de seguridad para redes Wi-Fi ofrece mejor protección y cifrado</li>
                <li>Filtrado de MAC: Configura tu red para permitir solo dispositivos autorizados.</li>
                <li>Monitoreo de red: Mantén sistemas que detecten conexiones sospechosas y alerten sobre posibles puntos de acceso falsos.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. ARP Poisoning
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                Este ataque manipula la forma en que los dispositivos resuelven direcciones para interceptar el tráfico de tu red. 
                Es como si alguien te diera la dirección equivocada para que tus datos vayan a un lugar no deseado.
                <li>¿Cómo protegerse?</li>
                <li>ARP Static: Configura direcciones estáticas para dispositivos importantes y evita que sean modificadas.</li>
                <li>Protocolos de seguridad: Usa herramientas como Dynamic ARP Inspection (DAI) para validar la autenticidad del tráfico.</li>
                <li>Segmentación de red: Divide tu red en partes más pequeñas para limitar el alcance de posibles ataques.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Denegación de Servicio (DoS)
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                Un ataque DoS ocurre cuando un sistema es inundado con solicitudes falsas, lo que lo hace inaccesible para los usuarios legítimos. 
                Es como si miles de personas bloquearan la entrada de un edificio para evitar que tú entres.
                <li>¿Cómo evitarlo?</li>
                <li>Sistemas IDS/IPS: Estos detectan y bloquean ataques analizando el tráfico en tiempo real.</li>
                <li>Limitación de tasa: Configura tus servidores para limitar el número de solicitudes permitidas por segundo.</li>
                <li>Redundancia y escalabilidad: Diseña una red capaz de soportar picos de tráfico, con recursos de respaldo para mantener la funcionalidad.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                ¿Por Qué Importa?
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                <li>Cada vez que te conectas a una red, especialmente Wi-Fi pública, puedes estar exponiéndote a estas vulnerabilidades. Sin medidas de protección, tus datos personales, contraseñas e incluso tu identidad pueden quedar comprometidos.</li>
                <li>Pequeñas acciones, como mantener tus dispositivos actualizados, configurar redes de forma segura y evitar redes desconocidas, pueden marcar una gran diferencia. Proteger nuestras conexiones es clave para mantenernos seguros en el mundo digital.</li>
              </ul>
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
