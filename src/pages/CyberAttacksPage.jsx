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
            Entiende el Riesgo y Cómo Protegerte
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            El mundo digital no está exento de amenazas. Los ataques informáticos ocurren cuando alguien explota una debilidad en sistemas 
            o redes para obtener acceso, robar información o causar daños. Aquí te explicamos algunos de los ataques más comunes y cómo puedes 
            protegerte de ellos.
          </p>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://i0.wp.com/hardsoftsecurity.es/wp-content/uploads/2021/01/Portada-Phishing-1920x1441-1.jpg?resize=800%2C601&ssl=1"
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
                src="https://www.revista.imef.org.mx/wp-content/uploads/2022/11/Que-hacer-en-caso-de-ataque-DDoS.jpg"
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
                1. Malware: Un Enemigo Silencioso
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                El malware incluye virus, troyanos y ransomware, y puede infiltrarse en tus dispositivos para robar datos, 
                dañar sistemas o incluso pedir un rescate por tu información.
                <li>¿Cómo protegerte?</li>
                <li>Antivirus y antimalware: Instala y actualiza regularmente software que detecte y elimine estas amenazas.</li>
                <li>Copia de seguridad: Haz copias periódicas de tus datos importantes. Si un ataque ocurre, puedes recuperar tu información sin problemas.</li>
                <li>Educación: Aprende a identificar archivos sospechosos y evita descargar documentos de fuentes desconocidas.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                2. Phishing: No Caigas en la Trampa
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                El phishing busca engañarte para que compartas información confidencial, como contraseñas o datos bancarios, 
                a través de correos electrónicos o mensajes falsos.
                <li>¿Cómo protegerte?</li>
                <li>Filtros de correo: Usa herramientas que bloqueen mensajes sospechosos antes de que lleguen a tu bandeja de entrada.</li>
                <li>Verificación de identidad: Si recibes un mensaje que parece importante, verifica directamente con la fuente antes de compartir datos sensibles.</li>
                <li>Simulacros: Participa en ejercicios de phishing para aprender a identificar estos intentos de engaño.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                3. Ataques de Día Cero: Un Reto Constante
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                Estos ataques se aprovechan de fallos en sistemas o software antes de que los desarrolladores publiquen un parche de seguridad.
                <li>¿Cómo protegerte?</li>
                <li>Actualizaciones rápidas: Mantén tus sistemas al día con los últimos parches de seguridad.</li>
                <li>Monitoreo de amenazas: Usa herramientas que te alerten sobre vulnerabilidades recién descubiertas.</li>
                <li>Seguridad en capas: Combina firewalls, sistemas de detección de intrusos y otras medidas para hacer más difícil el acceso no autorizado.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Motivos de los Ataques
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Los atacantes buscan robar información, sabotear sistemas, acceder a recursos críticos o extorsionar a las víctimas. 
                Protegerte requiere más que tecnología: necesitas conocimiento. Estar alerta, 
                actualizar tus dispositivos y seguir buenas prácticas es clave para mantener tus datos y sistemas seguros.
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
