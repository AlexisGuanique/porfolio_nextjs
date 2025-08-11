import React, { useEffect } from "react";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

import "intersection-observer";
import { useInView } from "react-intersection-observer";
import EducationCard from "./EducationCard";

export default function Educations() {
  const { setSectionInView } = useView();

  const educations = [
    {
      title: "Principios SOLID y clean code",
      liveLink:
        "https://www.udemy.com/certificate/UC-e11fcc14-1e52-428d-b9b6-c69fb72fb511/",
      gitLink: "",
      about:
        "Aprendí los principios SOLID y clean code para escribir código más limpio y mantenible.",
      img: "/solid.png",
    },
    {
      title: "TypeScript: tu completa guia y manual de mano",
      liveLink:
        "https://www.udemy.com/certificate/UC-273172d1-dd9f-4fb3-8853-948699a6916a/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      gitLink: "",
      about:
        "Aprendí TypeScript desde cero y me convertí en un experto en este lenguaje de programación. Aprendí a usar TypeScript en mis proyectos, a crear mis propias interfaces y a usar mis propias clases.",
      img: "/typescript.png",
    },
    {
      title: "Docker desde Cero a Experto",
      liveLink:
        "https://www.udemy.com/certificate/UC-f48db462-8c4d-49c8-9593-3399a436c3cc/",
      gitLink: "",
      about:
        "Aprendí Docker desde cero y me convertí en un experto en la construcción y administración de contenedores virtuales.",

      img: "/docker.png",
    },
    {
      title: "React de Cero a Experto",
      liveLink:
        "https://www.udemy.com/certificate/UC-48fcc3cf-c651-43b0-a4ad-26bbe816890e/",
      gitLink: "",
      about:
        "Aprendí React desde cero y me convertí en un experto en este framework de JavaScript. Aprendí a usar Material UI, Redux para manejar el estado de la aplicación, a crear mis custom hooks. Ademas aprendí NodeJs con Express, creando APIs y utilizando bases de datos como MongoDB.",

      img: "/react.png",
    },
    {
      title: "Python sin Fronteras",
      liveLink:
        "https://www.udemy.com/certificate/UC-1d777dfe-7169-43a6-97a7-40bc96c36ddb/",
      gitLink: "",
      about:
        "Aprendí Python desde cero y me convertí en un experto en este lenguaje de programación. Aprendí ademas a maquetar con HTML y CSS. Tambien aprendí a usar Flask para crear APIs y MySQL para crear bases de datos.",

      img: "/python.png",
    },
    {
      title: "Introducción a la Programación",
      liveLink:
        "https://www.udemy.com/certificate/UC-009f5c3b-312b-426a-aff6-0b022058317f/",
      gitLink: "",
      about:
        "Aprendí la programación desde cero y me convertí en un experto en las bases de la programación, como los diagramas de flujo, pseudocódigo, etc.",

      img: "/introprogramacion.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("education");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="education"
    >
      <Title>Educations</Title>
      {educations.map((education, index) => (
        <EducationCard
          key={index}
          img={education.img}
          title={education.title}
          liveLink={education.liveLink}
          about={education.about}
        />
      ))}
    </section>
  );
}
