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
            Guía para Identificar y Prevenir Vulnerabilidades de Hardware
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            El hardware, desde computadoras hasta dispositivos IoT, es
            fundamental en la tecnología actual. Es importante entender las
            vulnerabilidades comunes y cómo proteger estos equipos de posibles
            amenazas.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
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
                src="https://via.placeholder.com/300"
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
                1. Actualiza el firmware y los drivers
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Mantén siempre actualizado el firmware y los drivers de tus
                dispositivos. Las actualizaciones corrigen vulnerabilidades que
                los atacantes podrían explotar.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Asegura el acceso físico
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Protege el acceso físico a tus dispositivos. Usa candados de
                seguridad en laptops y asegúrate de que solo personal autorizado
                pueda acceder a los servidores y equipos sensibles.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Cuidado con dispositivos externos
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Evita conectar dispositivos externos como USBs o discos duros de
                procedencia desconocida. Estos pueden contener malware que
                comprometa tu hardware.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                4. Monitorea el estado del hardware
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Usa herramientas de monitoreo para identificar fallas o
                comportamientos anómalos en el hardware. Detectar problemas
                temprano puede prevenir daños mayores.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                5. Evita sobrecalentamientos
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Mantén tus dispositivos bien ventilados y evita sobrecargarlos.
                El sobrecalentamiento puede provocar fallos críticos y reducir
                la vida útil del hardware.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                6. Considera cifrado físico
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Usa dispositivos con opciones de cifrado físico para proteger
                los datos almacenados en caso de robo o pérdida.
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
