import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";

function ContentPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header>
        <NavbarSimple />
        <h1 className="text-4xl font-bold text-gray-800 text-center m-6">
          Fundamentos de Seguridad de la Información
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {/* Main Content Container */}

        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Guía Básica para Proteger tu Información
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            Si no tienes conocimientos previos sobre seguridad de la
            información, esta guía te ayudará a proteger tus datos, dispositivos
            y cuentas. Sigue estos pasos para mejorar tu seguridad.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Protección de dispositivos"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Mantén tus dispositivos actualizados para evitar
                vulnerabilidades.
              </p>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Contraseñas seguras"
                className="rounded-lg shadow-md"
              />
              <p className="mt-3 text-gray-700 text-center">
                Usa contraseñas seguras y únicas para cada cuenta.
              </p>
            </div>
          </div>
          {/* Guide Sections */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                1. Protege tus cuentas y contraseñas
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Usa contraseñas de al menos 12 caracteres que incluyan letras,
                números y símbolos. No uses información personal como tu nombre
                o fecha de nacimiento. Activa la verificación en dos pasos en
                tus cuentas más importantes.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Actualiza tus dispositivos
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Configura tus dispositivos para que se actualicen
                automáticamente. Las actualizaciones corrigen problemas de
                seguridad que los atacantes podrían aprovechar.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Navega de forma segura en internet
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Conéctate solo a redes Wi-Fi seguras. Si necesitas usar una red
                pública, no accedas a cuentas sensibles y considera usar una
                VPN. Evita hacer clic en enlaces sospechosos y verifica siempre
                las direcciones web.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                4. Realiza copias de seguridad
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Realiza respaldos periódicos de tus datos importantes en discos
                externos o servicios en la nube. Así podrás recuperarlos en caso
                de pérdida o ataque.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                5. Aprende a detectar problemas
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Presta atención a señales de alerta como rendimiento lento,
                ventanas emergentes constantes o aplicaciones desconocidas. Usa
                un antivirus para detectar y eliminar posibles amenazas.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                6. Qué hacer en caso de problemas
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Si crees que tu cuenta ha sido hackeada, cambia tu contraseña
                inmediatamente y activa la verificación en dos pasos. Si
                descargaste un archivo sospechoso, analiza tu dispositivo con un
                antivirus y elimina el archivo si es necesario.
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

export default ContentPage;
