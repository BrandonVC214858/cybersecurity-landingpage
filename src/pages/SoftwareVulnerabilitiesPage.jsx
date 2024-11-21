import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";

function SoftwareVulnerabilitiesPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header>
        <NavbarSimple />
        <h1 className="text-4xl font-bold text-gray-800 text-center m-6">
          Vulnerabilidades de Software
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Guía para Identificar y Prevenir Vulnerabilidades de Software
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            El software es una de las principales puertas de entrada para los
            atacantes. Identificar y mitigar vulnerabilidades en el software es
            crucial para mantener la seguridad de tus sistemas.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Software actualizado"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Mantén tu software actualizado para cerrar brechas de seguridad.
              </p>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Uso de software legítimo"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Utiliza solo software legítimo y de fuentes confiables.
              </p>
            </div>
          </div>
          {/* Guide Sections */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                1. Actualiza tu software regularmente
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Las actualizaciones de software suelen incluir parches de
                seguridad para corregir vulnerabilidades conocidas. Configura
                las actualizaciones automáticas cuando sea posible.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Descarga solo de fuentes confiables
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Evita descargar software desde sitios web sospechosos o
                plataformas no oficiales. Utiliza tiendas oficiales y revisa las
                reseñas de otros usuarios.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Cuidado con el software desactualizado
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                El software que ya no recibe soporte del desarrollador puede ser
                una gran vulnerabilidad. Considera alternativas actualizadas y
                seguras.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                4. Usa un antivirus confiable
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Instala y mantén actualizado un software antivirus confiable.
                Este puede detectar y bloquear intentos de explotación de
                vulnerabilidades en tiempo real.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                5. Implementa permisos mínimos
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Configura los permisos de acceso de tu software para que solo
                tenga acceso a los recursos necesarios. Esto limita el daño en
                caso de una vulnerabilidad.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                6. Capacítate en el uso seguro de software
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Aprende a identificar posibles riesgos asociados con el software
                que usas, como permisos excesivos, configuraciones
                predeterminadas inseguras o alertas sospechosas.
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

export default SoftwareVulnerabilitiesPage;
