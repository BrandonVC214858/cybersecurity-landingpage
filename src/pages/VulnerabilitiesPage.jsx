import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";

function VulnerabilitiesPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header>
        <NavbarSimple />
        <h1 className="text-4xl font-bold text-gray-800 text-center m-6">
          Vulnerabilidades en la Seguridad de la Información
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Entendiendo las Vulnerabilidades
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            Una vulnerabilidad es una debilidad en sistemas, software o procesos
            que los atacantes pueden explotar para comprometer la seguridad. Es
            importante conocerlas para reducir riesgos.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Evaluación de vulnerabilidades"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Realizar auditorías periódicas es clave para identificar
                riesgos.
              </p>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Actualizaciones de seguridad"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Mantén tu software actualizado para mitigar vulnerabilidades
                conocidas.
              </p>
            </div>
          </div>
          {/* Guide Sections */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                1. Tipos comunes de vulnerabilidades
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Las vulnerabilidades pueden ser de hardware, software, redes o
                procesos humanos. Algunos ejemplos son errores de configuración,
                sistemas no actualizados y contraseñas débiles.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Cómo identificar vulnerabilidades
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Usa herramientas como escáneres de vulnerabilidades y realiza
                auditorías regulares para detectar debilidades en tus sistemas.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Mitigación de vulnerabilidades
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Implementa parches de seguridad, usa contraseñas seguras y
                establece políticas de acceso restringido a datos sensibles.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                4. Educación y concienciación
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Capacita a tu equipo para reconocer y evitar prácticas
                riesgosas, como compartir información sensible en correos o
                redes no seguras.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                5. Monitoreo continuo
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Implementa soluciones de monitoreo para identificar y responder
                a amenazas en tiempo real.
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

export default VulnerabilitiesPage;
