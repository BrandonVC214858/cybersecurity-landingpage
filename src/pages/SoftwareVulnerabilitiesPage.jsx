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
            Mantén Tu Tecnología Libre de Fallos
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            El software que usamos a diario, desde aplicaciones hasta sistemas operativos, puede tener puntos débiles que los atacantes explotan para acceder a 
            información sensible o dañar sistemas. Estas vulnerabilidades, si no se abordan, representan un riesgo considerable. Aquí te explicamos dos problemas 
            comunes y cómo mantener tu software protegido.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSct5K7PZwhk1VRnaGTUdrNZQEcuggqZJo1zA&s"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRxdE01XxfIVd2AHvC6953kzR3d6hn-hkgg&s"
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
                1. Errores de Programación
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                Los errores en el código, conocidos como bugs, son como puertas traseras accidentales que los atacantes pueden usar para acceder a datos o sistemas. 
                Incluso los programas más populares pueden tener fallos ocultos que representan un riesgo.
                <li>¿Cómo prevenirlos?</li>
                <li>Revisiones de código: Asegúrate de que el software pase por revisiones exhaustivas durante su desarrollo para detectar errores antes de que se conviertan en problemas.</li>
                <li>Pruebas de seguridad: Realiza pruebas regulares en busca de posibles fallos. Estas pruebas deben ser parte integral del ciclo de desarrollo.</li>
                <li>Pruebas de penetración: Simula ataques en el sistema para identificar y solucionar vulnerabilidades antes de que los hackers lo hagan.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Falta de Actualizaciones
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
              No actualizar el software es como no reparar una cerradura rota en tu casa: los atacantes saben exactamente por dónde entrar. 
              Las actualizaciones suelen incluir parches que corrigen problemas de seguridad ya identificados.
              <li>¿Cómo mantenerte seguro?</li>
              <li>Política de actualización: Establece una rutina para instalar actualizaciones tan pronto como estén disponibles, priorizando aquellas que corrigen problemas de seguridad.</li>
              <li>Gestión de vulnerabilidades: Usa herramientas que identifiquen automáticamente software desactualizado y apliquen los parches necesarios.</li>
              <li>Conciencia del usuario: Asegúrate de estar al tanto de las alertas de seguridad para actualizar programas esenciales.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                La Importancia de Cuidar el Software
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                <li>Tu software es el motor de todo lo que haces en tu dispositivo. Ignorar las vulnerabilidades es abrirle la puerta a problemas que pueden afectar tu privacidad y la funcionalidad de tus herramientas digitales.</li>
                <li>Con acciones simples como mantener tus programas actualizados y realizar pruebas regulares, puedes protegerte de muchos riesgos. Recuerda: un software seguro es sinónimo de tranquilidad en un entorno digital cada vez más complejo.</li>
              </ul>
            </section>
            <div className="flex flex-col items-center">
              <img
                src="https://hapy.co/wp-content/smush-webp/2024/02/types-of-software-bugs-768x403.jpg.webp"
                alt="Software actualizado"
                className="rounded-lg shadow-md max-w-xs"
              />
              <p className="mt-3 text-gray-700 text-center">
                Reporta los problemas que encuentres en aplicaciones.
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

export default SoftwareVulnerabilitiesPage;
