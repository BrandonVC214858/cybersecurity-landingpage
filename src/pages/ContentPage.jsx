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
            Lo que debemos saber
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            En el mundo digital actual, proteger nuestra información se ha vuelto tan importante como proteger nuestras pertenencias físicas. 
            La seguridad de la información no es solo un tema para expertos en tecnología; 
            es algo que afecta a todos los que usamos dispositivos conectados.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://blog.desdelinux.net/wp-content/uploads/2019/07/seguridad-informacion-imagen-destacada-blog-desdelinux-830x596.jpg"
                alt="Protección de dispositivos"
                className="rounded-lg shadow-md max-w-xs"
              />
              <p className="mt-3 text-gray-700 text-center">
                Mantén tus dispositivos actualizados para evitar
                vulnerabilidades.
              </p>
            </div>
            {/* Image 2 */}

          </div>
          {/* Guide Sections */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                ¿Qué es la Seguridad de la Información?
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                Imagina que tu información personal, como contraseñas, fotos o documentos, es como un tesoro. 
                La seguridad de la información se trata de proteger ese tesoro de personas no autorizadas, asegurando que:
                <li>Solo tú o las personas autorizadas pueden acceder a ella.</li>
                <li>Se mantenga intacta y sin cambios.</li>
                <li>Esté disponible siempre que la necesites.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                El Papel Fundamental del Usuario
              </h2>
              <ul className="text-gray-600 leading-relaxed text-center">
                ¿Sabías que la mayoría de los problemas de seguridad ocurren por errores humanos? 
                Desde hacer clic en enlaces sospechosos hasta usar contraseñas débiles, nuestras acciones son clave para mantener la seguridad.
                <li>Sé consciente: Antes de abrir un enlace o descargar algo, piensa si es confiable.</li>
                <li>Edúcate: Aprende las mejores prácticas para proteger tus datos.</li>
                <li>Actúa con cuidado: Usa contraseñas fuertes y evita compartir información confidencial.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                ¿Por Qué es Importante?
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                La seguridad de la información no solo protege datos, sino también tu tranquilidad. 
                Es la base para confiar en el mundo digital y evitar problemas que podrían afectar tanto tu vida personal como profesional.
                Proteger nuestra información es un trabajo conjunto entre la tecnología y las decisiones que tomamos cada día. 
                Con pequeños cambios en nuestros hábitos, podemos hacer una gran diferencia en nuestra seguridad.
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
