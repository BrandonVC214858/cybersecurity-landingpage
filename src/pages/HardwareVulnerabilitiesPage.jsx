import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";

function HardwareVulnerabilitiesPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header>
        <NavbarSimple />
        <h1 className="text-4xl font-bold text-gray-800 text-center m-6">
          Vulnerabilidades de Hardware
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Protegiendo la Base de Nuestros Sistemas
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            Aunque a menudo pasamos por alto el hardware, este es el corazón de nuestros dispositivos y puede ser un punto vulnerable 
            si no se protege adecuadamente. Las vulnerabilidades de hardware son fallos que pueden permitir ataques con consecuencias graves, 
            como el acceso no autorizado o el control completo de un sistema. A continuación, te explicamos dos riesgos comunes y cómo protegerte.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://retemex.mx/wp-content/uploads/2022/05/08_PROTEGER-TU-DISPOSITIVO-MOVIL.png"
                alt="Protección de hardware"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Protege tus dispositivos físicos con medidas de seguridad
                adecuadas.
              </p>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcbCirYCu0rUoE6ad9HsM0dqP7NEGHZf_Jg&s"
                alt="Firmware actualizado"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Mantén el firmware de tus dispositivos actualizado para evitar
                vulnerabilidades conocidas.
              </p>
            </div>
          </div>
          {/* Guide Sections */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                1. Rowhammer
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                Este ataque afecta la memoria RAM y utiliza interferencias para acceder a información sin autorización. 
                Imagina que alguien golpea la pared de tu casa lo suficiente como para mover cosas del otro lado. Eso es, en esencia, 
                lo que hace Rowhammer en la memoria de tu dispositivo.
                <li>¿Cómo prevenirlo?</li>
                <li>Control de acceso: Asegúrate de que solo usuarios autorizados puedan acceder a los dispositivos críticos y establece políticas de acceso claras.</li>
                <li>Actualizaciones de firmware: Mantén el firmware actualizado para solucionar vulnerabilidades conocidas.</li>
                <li>Tecnologías de memoria protegida: Usa hardware que implemente medidas específicas contra Rowhammer, como ECC (Error-Correcting Code).</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. BIOS
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                El BIOS es el software que inicia tu computadora. Si es vulnerado, un atacante puede obtener control total de tu sistema. 
                Es como si alguien manipulase la llave de tu casa para entrar sin que te des cuenta.
                <li>¿Cómo protegerse?</li>
                <li>Protección del BIOS: Configura contraseñas para acceder a su configuración y deshabilita el arranque desde dispositivos externos para evitar accesos no deseados.</li>
                <li>Actualización regular: Asegúrate de actualizar el BIOS periódicamente para corregir fallos de seguridad.</li>
                <li>Secure Boot: Activa esta función para garantizar que solo se ejecute software confiable al encender tu computadora.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                La Importancia de Proteger el Hardware
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Evita conectar dispositivos externos como USBs o discos duros de
                procedencia desconocida. Estos pueden contener malware que
                comprometa tu hardware.
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

export default HardwareVulnerabilitiesPage;
