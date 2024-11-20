import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { FooterWithLogo } from "../components/Footer";

function AboutUs() {
  return (
    <div className="py-10">
      <header>
        <NavbarSimple />
        <div className="my-5">
          <h1 className="text-4xl font-bold text-center mt-10">
            ALERTA DIGITAL
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Acerca de nosotros
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Equipo de estudiantes que se dedican a crear este sitio con el fin de
          conientizar a la comunidad a que conozcan un poco mas de las medidas
          de seguridad digital que pueden tomar y abrir su panorama general.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900">Nuestro equipo</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=WN0exu5mE%2bK%2f5Q&pid=ImgRaw&r=0"
                alt="Team member"
              />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">
                  Brandon Venegas Cervantes
                </p>
                <p className="text-sm text-gray-600">214858</p>
              </div>
            </li>
            <li className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=WN0exu5mE%2bK%2f5Q&pid=ImgRaw&r=0"
                alt="Team member"
              />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">
                  Leonardo Pantoja Canchola
                </p>
                <p className="text-sm text-gray-600">214960</p>
              </div>
            </li>
            <li className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=WN0exu5mE%2bK%2f5Q&pid=ImgRaw&r=0"
                alt="Team member"
              />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">
                  Manuel de Jesus Villareal Santillano
                </p>
                <p className="text-sm text-gray-600">201024</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <FooterWithLogo />
    </div>
  );
}

export default AboutUs;
