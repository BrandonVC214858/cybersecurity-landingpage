import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";

function CyberAttacksPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header>
        <NavbarSimple />
        <h1 className="text-4xl font-bold text-gray-800 text-center m-6">
          Ataques Informáticos
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Guía para Identificar y Prevenir Ataques Informáticos
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            Los ataques informáticos son una amenaza creciente para la seguridad
            digital. Esta guía te ayudará a identificar los tipos más comunes de
            ataques y a protegerte contra ellos.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Ataques Phishing"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Presta atención a correos sospechosos que busquen robar tus
                datos.
              </p>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Ataques DDoS"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Los ataques DDoS buscan saturar tus sistemas y hacerlos
                inoperantes.
              </p>
            </div>
          </div>
          {/* Guide Sections */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                1. Reconoce el Phishing
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                El phishing utiliza correos o mensajes falsos para robar tus
                datos personales o financieros. Verifica siempre la dirección
                del remitente y evita hacer clic en enlaces sospechosos.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Protección contra ransomware
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Realiza copias de seguridad periódicas y evita descargar
                archivos de fuentes no confiables. Utiliza software de
                protección actualizado.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Cuidado con ataques de fuerza bruta
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Usa contraseñas complejas y únicas para cada cuenta. Activa la
                verificación en dos pasos siempre que sea posible.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                4. Protege tus redes contra DDoS
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Implementa soluciones como firewalls y sistemas de prevención de
                intrusiones. Limita el acceso a tus sistemas críticos.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                5. Mantente alerta contra spyware
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                El spyware recopila datos sin tu consentimiento. Instala
                herramientas anti-spyware y verifica regularmente tu sistema.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                6. Cómo actuar ante un ataque
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Si crees que has sido víctima de un ataque, desconecta tus
                dispositivos de la red, cambia tus contraseñas y busca ayuda
                especializada. Reporta el incidente a las autoridades
                correspondientes.
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

export default CyberAttacksPage;
