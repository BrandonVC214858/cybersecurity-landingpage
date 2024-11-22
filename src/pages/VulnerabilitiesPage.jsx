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
            ¿Qué Son las Vulnerabilidades y Por Qué Deberían Importarte?
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            Vivimos rodeados de tecnología: usamos computadoras, celulares, redes sociales y hasta electrodomésticos inteligentes. 
            Todo esto hace nuestra vida más fácil, pero también nos expone a ciertos riesgos. 
            Uno de los más importantes es la vulnerabilidad en los sistemas tecnológicos.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://mlfk3cv5yvnx.i.optimole.com/cb:bn-b.2fe21/w:1200/h:627/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2024/03/N1-0921-Vulnerability-Prioritization-Guide-blog-image.png"
                alt="Evaluación de vulnerabilidades"
                className="rounded-lg shadow-md max-w-xs"
              />
              <p className="mt-3 text-gray-700 text-center">
                No hagas click en enlaces desconocidos.
              </p>
            </div>
          </div>

          {/* Guide Sections */}
          <div className="space-y-6">

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              ¿Qué es una Vulnerabilidad?
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Imagina que tu casa tiene una puerta que no cierra bien. 
                Esa puerta representa una debilidad que alguien podría aprovechar para entrar sin tu permiso. 
                En el mundo digital, una vulnerabilidad es algo similar: 
                una falla o debilidad en los sistemas, aplicaciones o dispositivos que usamos, que los "ciberdelincuentes" 
                podrían explotar para robar información, hacer daño o espiar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Las vulnerabilidades no aparecen de la nada. Generalmente, surgen por:
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                <li>Errores en su creación: Como si una puerta estuviera mal diseñada desde el principio.</li>
                <li>Problemas al usarlos: Por ejemplo, cuando no configuramos correctamente un dispositivo o no lo actualizamos.</li>
                <li>Falta de conocimiento: No saber cómo proteger nuestras cuentas o dispositivos también abre la puerta a problemas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Ejemplos Comunes
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                <li>Internet y Redes: Si alguien intercepta tu Wi-Fi porque no tiene contraseña segura, puede ver lo que haces en línea.</li>
                <li>Celulares y Computadoras: Un virus podría entrar si descargas algo de un sitio no confiable.</li>
                <li>Acceso Físico: Si dejas tu celular desbloqueado y alguien lo toma, puede ver tus mensajes o robar información.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                ¿Por Qué Es Importante?
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                Una vulnerabilidad no parece un problema grande... hasta que alguien la aprovecha. 
                Puede significar perder fotos importantes, que te hackeen tus cuentas o que te roben dinero. 
                Por eso, entender y prevenir vulnerabilidades es clave para proteger tu vida digital.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                ¿Qué Puedes Hacer?
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                <li>Mantén todo actualizado: Las actualizaciones arreglan problemas y cierran "puertas abiertas".</li>
                <li>Usa contraseñas seguras: Nada de "123456" o "password".</li>
                <li>Desconfía: No hagas clic en enlaces o descargues archivos de lugares sospechosos.</li>
                <li>Protégete físicamente: No dejes tu celular o computadora desbloqueados en lugares públicos.</li>
              </ul>
            </section>

            <div className="flex flex-col items-center">
              <img
                src="https://blog.udlap.mx/wp-content/uploads/2020/08/contrasena-.jpg"
                alt="Actualizaciones de seguridad"
                className="rounded-lg shadow- md max-w-xs"
              />
              <p className="mt-3 text-gray-700 text-center">
                Mantén tus contraseñas seguras y actualizadas.
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

export default VulnerabilitiesPage;
