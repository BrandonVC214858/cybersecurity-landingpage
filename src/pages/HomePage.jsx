import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";
import { HorizontalCard } from "../components/Card";

function HomePage() {
  return (
    <div>
      <header>
        <NavbarSimple />
        <div className="my-5">
          <h1 className="text-4xl font-bold text-center mt-10">
            ALERTA DIGITAL
          </h1>
        </div>
      </header>
      <main className="container mx-auto">
        <section className="grid grid-cols-2">
          <HorizontalCard
            date={"11/18/2024"}
            title={"Fundamentos de seguridad"}
            description={
              "La ciberseguridad busca proteger tus dispositivos, redes e información personal de amenazas y ataques."
            }
            image={
              "https://th.bing.com/th/id/OIP.LH0hh0FOPUWHL3wSuu1nwAHaEo?rs=1&pid=ImgDetMain"
            }
            reference={"/fundamentos_seguridad"}
          />
          <HorizontalCard
            date={"11/18/2024"}
            title={"Vulnerabilidades"}
            description={
              "Son puntos débiles en sistemas, redes, hardware o software que los atacantes pueden explotar."
            }
            image={
              "https://th.bing.com/th/id/R.38ea62f3e2f0f1de6410bfc9076fb996?rik=zILqz2VTOnxL9w&pid=ImgRaw&r=0"
            }
            reference={"vulnerabilidades"}
          />
          <HorizontalCard
            date={"11/18/2024"}
            title={"Vulnerabilidades de red"}
            description={
              "Son fallos o malas configuraciones en redes que permiten a los atacantes interceptar datos o acceder a sistemas."
            }
            image={
              "https://th.bing.com/th/id/OIP.8hY7iEuwxH4jp2RDWTQMEQHaEK?rs=1&pid=ImgDetMain"
            }
            reference={"vulnerabilidades_red"}
          />
          <HorizontalCard
            date={"11/18/2024"}
            title={"Vulnerabilidades de hardware"}
            description={
              "Se refieren a defectos físicos o de diseño en dispositivos como computadoras, cámaras o routers, que pueden ser aprovechados por atacantes."
            }
            image={
              "https://s2grupo.es/wp-content/uploads/2022/03/35f36139b6c263d3bcdf1436a021ad954457796e.jpeg"
            }
            reference={"vulnerabilidades_hardware"}
          />
        </section>
        <section className="grid grid-cols-3 ">
          <HorizontalCard
            date={"11/18/2024"}
            title={"Vulnerabilidades de software"}
            description={
              "Son errores o fallos en programas y aplicaciones que los ciberdelincuentes pueden usar para instalar malware o robar datos."
            }
            image={
              "https://th.bing.com/th/id/OIP.CCdifzc1S8FNrnUhdjmjDwHaEo?rs=1&pid=ImgDetMain"
            }
            reference={"vulnerabilidades_software"}
          />
          <HorizontalCard
            date={"11/18/2024"}
            title={"Ataques Informáticos"}
            description={
              "Estos son intentos de ciberdelincuentes por explotar vulnerabilidades para acceder a información personal o causar daño."
            }
            image={
              "https://th.bing.com/th/id/OIP.CiDzaoj8yUycomGX4xYb_gHaD4?rs=1&pid=ImgDetMain"
            }
            reference={"ciberataques"}
          />
          <HorizontalCard
            date={"11/18/2024"}
            title={"Phishing"}
            description={
              "Es una técnica en la que los atacantes intentan engañarte para que reveles datos confidenciales, como contraseñas o números de tarjetas."
            }
            image={
              "https://th.bing.com/th/id/R.ac29fe9024615039b6bf4906d1bea142?rik=34jGhUMBXB0SUQ&riu=http%3a%2f%2ftechaide.global%2fwp-content%2fuploads%2f2024%2f01%2fspear-phishing.jpeg&ehk=%2f%2bLXSTrOZ%2febBpfGqAXTaqrIl2YAPGnfKWuwBeN5fsQ%3d&risl=&pid=ImgRaw&r=0"
            }
            reference={"phishing"}
          />
        </section>
      </main>
      <FooterWithLogo />
    </div>
  );
}

export default HomePage;
