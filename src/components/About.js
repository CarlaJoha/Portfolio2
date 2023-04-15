import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Carla Johanna Aular.
                <br className="hidden lg:inline-block" />Full Stack Developer
              </h1>
              <p className="mb-8 leading-relaxed">
              FullStack Development @SoyHenry. Magister en Psicología de la Educación (Universitat de Barcelona). Asesoría Estructura Organizacional. Construcción de Ambientes Formativos, instrumentos y productos para el aprendizaje. Aficionada a la creación, edición de imágenes y videos.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contáctame
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Experiencia
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="rounded-s-full	border-start-start-radius: 9999px"
                alt="hero"
                src="../../public/Carla.svg"
              />
            </div>
          </div>
        </section>
      );
}