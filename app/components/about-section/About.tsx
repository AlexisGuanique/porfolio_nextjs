import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold`}
      >
        Creo soluciones inteligentes que potencian marcas y simplifican procesos
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/90 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Soy Alexis Guanique, desarrollador full stack apasionado por
            resolver problemas y crear soluciones reales. Me especializo en
            desarrollo web, automatización e IA para generar impacto en
            negocios. Desarrollé desde extensiones de Chrome y chatbots
            hasta sistemas escalables en microservicios, siempre buscando
            código limpio y mantenible.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Manejo Python, Django, Flask, Node.js, React, Next.js y
            TypeScript, con bases de datos PostgreSQL, MongoDB y SQLite.
            Experiencia en AWS, Google Cloud y Heroku, integrando APIs
            y documentando procesos.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Desde 2019, cada proyecto es una oportunidad para aprender y
            crecer. Me motiva enfrentar nuevos retos, entender el problema
            de fondo y entregar soluciones de las que tanto el cliente como
            yo podamos sentirnos orgullosos. Conoce más sobre mi trabajo
            en mi currículum. 
            <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://docs.google.com/document/d/e/2PACX-1vScp0s5CtJjRZmem6V-0diwXDPwO8AiZKWl5qooH4ZfFS-c2bmUjmePc7YNCTqc2SJlF23qyxaLGfFy/pub"
              }
            >
              Descargar CV
            </Link>
            .
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Herramientas de Backend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Python, Django, Flask, Node.js, Express, PostgreSQL, MongoDB,
              SQLite, Docker, Git/GitHub, AWS, Google Cloud, Heroku.
            </AnimatedBody>
          </div>

          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Herramientas de Frontend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Redux, Zustand, Next.js, ViteJs, TypeScript, HTML5,
              Git/GitHub.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Herramientas de UI
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI, Framer
              Motion, Material UI, ReCharts.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
