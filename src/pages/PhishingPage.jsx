import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";

function PhishingPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header>
        <NavbarSimple />
        <h1 className="text-4xl font-bold text-gray-800 text-center m-6">
          Phishing: Cómo Protegerte
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Todo lo que Necesitas Saber sobre el Phishing
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            El phishing es una técnica de engaño utilizada para robar tu
            información personal y financiera. Aprende a reconocerlo y a
            protegerte con esta guía.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Correo falso de phishing"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Correos falsos que parecen reales son una herramienta común de
                phishing.
              </p>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Enlaces engañosos"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Cuidado con los enlaces sospechosos que redirigen a sitios
                falsos.
              </p>
            </div>
          </div>
          {/* Guide Sections */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                1. ¿Qué es el phishing?
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Es una técnica donde los atacantes se hacen pasar por entidades
                confiables para obtener información confidencial como
                contraseñas o datos bancarios.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Cómo reconocer un intento de phishing
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Fíjate en correos o mensajes con errores gramaticales,
                solicitudes urgentes o enlaces sospechosos. Verifica siempre las
                direcciones de correo electrónico.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Protección contra el phishing
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                No hagas clic en enlaces de correos no solicitados. Escribe
                directamente la dirección web en tu navegador y confirma la
                autenticidad del remitente.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                4. Activa filtros de seguridad
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Configura tu correo electrónico para filtrar mensajes
                sospechosos. Usa navegadores y herramientas que bloqueen sitios
                de phishing conocidos.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                5. Qué hacer si eres víctima
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Si has compartido información en un sitio falso, cambia tus
                contraseñas de inmediato y contacta a tu banco o proveedor de
                servicios para reportar la situación.
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

export default PhishingPage;
