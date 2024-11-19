import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";
import { Typography } from "@material-tailwind/react";

export function Contact() {
  return (
    <section className="px-8 py-8 lg:py-16">
      <header>
        <NavbarSimple />
        <div className="my-5">
          <h1 className="text-4xl font-bold text-center mt-10">
            ALERTA DIGITAL
          </h1>
        </div>
      </header>
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Aqui estamos
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Buscanos
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Si necesitas ayuda puedes buscarnos en nuestro establecimiento para
          darte un apoyo personalizado si lo crees necesario.
        </Typography>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217505.20007087252!2d-106.52590988414242!3d31.592242478076738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e76599cc1bc6df%3A0x221e2b7b0cb7d301!2sUACJ%20-%20Ciudad%20Universitaria!5e0!3m2!1ses!2smx!4v1731980713550!5m2!1ses!2smx"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-96 lg:h-96"></iframe>
          </div>
      </div>
      <FooterWithLogo />
    </section>
  );
}

export default Contact;
