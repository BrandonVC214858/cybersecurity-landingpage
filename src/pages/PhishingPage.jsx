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
            Reconoce el Fraude y Protege tu Información
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            El phishing es un método de engaño diseñado para robar información personal, como contraseñas o datos bancarios, 
            utilizando comunicaciones fraudulentas. Conocer los tipos de phishing y cómo prevenirlos 
            puede marcar la diferencia en tu seguridad digital.
          </p>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2CEXZOgjmRbSV7oGA0ZTbxpPkb0V1kk7Fw&s"
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
                src="https://hdf.net/wp-content/uploads/2020/01/Click-Here.jpg"
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
                ¿Qué es el phishing?
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                El phishing emplea correos electrónicos, mensajes de texto o llamadas falsas para engañarte y obtener tu información personal. 
                Estos mensajes suelen parecer legítimos, pero su objetivo es robar tus datos o infectar tu dispositivo.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                1. Phishing por Correo Electrónico
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Mensajes que simulan ser de una institución confiable e incluyen enlaces maliciosos que te llevan a páginas fraudulentas.
                <li>Ejemplo: Un correo que aparenta ser de tu banco y te pide actualizar tu información.</li>
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Phishing por Sitio Web
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Creación de páginas falsas que imitan portales legítimos para que ingreses tus credenciales.
                <li>Ejemplo: Un sitio que copia el diseño de una tienda en línea conocida para robar tus datos de tarjeta de crédito.</li>
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Vishing y Smishing
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                <li>Vishing: Ataques realizados a través de llamadas telefónicas.</li>
                <li>Smishing: Ataques que utilizan mensajes de texto con enlaces sospechosos o peticiones de información.</li>
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                ¿Cómo protegerte del phishing?
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                <li>No abras correos sospechosos: Si no conoces al remitente o el mensaje parece extraño, elimínalo.</li>
                <li>Verifica enlaces: Antes de hacer clic, pasa el cursor sobre el enlace para confirmar que lleva al sitio oficial.</li>
                <li>Cuidado con la información personal: Nunca compartas datos sensibles en llamadas o mensajes no solicitados.</li>
                <li>Educa a tu equipo o familia: Muchas veces, el phishing busca engañar a los usuarios menos familiarizados con la tecnología.</li>
              </p>
            </section>

              <div className="flex flex-col items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomsG5HkY-6WIBk0ynreiVOAd1khQqnUY9EQ&s"
                  alt="Correo falso de phishing"
                  className="rounded-lg shadow-md"
                />
                <p className="mt-3 text-gray-700 text-center">
                  El phishing es una de las amenazas más comunes en el entorno digital. Estar alerta, desconfiar de comunicaciones sospechosas y 
                  seguir estas prácticas preventivas es clave para mantener tu información personal segura.
                </p>
              </div>

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
