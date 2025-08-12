"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/coorvaicon.png",
    jobTitle: "Full Stack Developer",
    company: "Coorva Technologies",
    jobType: "Remote",
    duration: "Abril 2024 - Present",
    stuffIDid: [
      "Colaboro con el equipo de producto para comprender los requisitos y traducirlos en especificaciones técnicas.",
      "Desarrollo funcionalidades de front-end y back-end.",
      "Desarrollo componentes robustos y escalables tanto para front-end como para back-end.",
      "Implemento interfaces de usuario adaptables e intuitivas para garantizar una experiencia de usuario óptima.",
      "Diseño, implemento y mantengo esquemas de bases de datos.",
      "Optimizo el rendimiento de las bases de datos y aseguro la integridad de los datos.",
      "Realizo pruebas exhaustivas de componentes de front-end y back-end para identificar y resolver errores y problemas de rendimiento.",
      "Colaboro con equipos de aseguramiento de calidad para garantizar la entrega de software de alta calidad.",
      "Implemento buenas prácticas de seguridad para proteger datos sensibles.",
      "Aseguro el cumplimiento de regulaciones relevantes y estándares de la industria.",
      "Creo y mantengo documentación relevante para código, APIs y arquitectura del sistema.",
      "Integro prácticas para mejorar la automatización, despliegue continuo y monitoreo de aplicaciones, contribuyendo a la eficiencia y calidad del desarrollo y operación del software.",
    ],
  },
  {
    companyImg: "/sportclub.png",
    jobTitle: "Full Stack Developer",
    company: "Sport Club S.A.",
    jobType: "Hibrido",
    duration: "Diciembre 2023 - Abril 2024",
    stuffIDid: [
      "Participo en el diseño, desarrollo y mantenimiento de aplicaciones web utilizando Python, TypeScript, Node, Express, entre otras tecnologías.",
      "Trabajo en estrecha colaboración con el equipo de diseño para crear interfaces de usuario atractivas y responsivas.",
      "Diseño y desarrollo API RESTful y manejo la lógica del servidor utilizando Frameworks como Django o Flask con Python; Express con Node y TypeScript.",
      "Creo y mantengo bases de datos eficientes.",
      "Colaboro con otros miembros del equipo para mejorar la arquitectura y la escalabilidad de las aplicaciones.",
      "Investigo y adopto nuevas tecnologías y mejores prácticas para mejorar continuamente el desarrollo de software.",
    ],
  },
  {
    companyImg: "/italiano.png",
    jobTitle: "Full Stack Developer",
    company: "Hospital Italiano de Buenos Aires",
    jobType: "Presencial",
    duration: "Noviembre 2021 - Febrero 2024",
    stuffIDid: [
      "Me desempeño como full stack developer en el equipo de Bioseñales del departamento de informática en salud del Hospital Italiano de Buenos Aires.",
      "Las principales actividades que desempeño son el análisis de requerimientos y factibilidad, planificación, diseño, desarrollo e implementación de soluciones informáticas.",
    ],
  },
  {
    companyImg: "/desarrolloweb.png",
    jobTitle: "Full Stack Developer Freelancer",
    company: "Autonomo",
    jobType: "Remote",
    duration: "Enero 2021 - Presente",
    stuffIDid: [
      "Presto mis servicios de desarrollador full stack con Python, TypeScript, del lado del backend y frontend por igual, de manera autónoma.",
      "Desarrollo aplicaciones web completas utilizando tecnologías como React, Next.js, Node.js, Express, Django, Flask, PostgreSQL, MongoDB, Docker, Git, y AWS.",
      "Implemento soluciones personalizadas para el sector de la salud, incluyendo sistemas de gestión de pacientes, análisis de datos médicos y aplicaciones de telemedicina.",
      "Colaboro directamente con equipos médicos para entender sus necesidades específicas y traducirlas en soluciones tecnológicas efectivas.",
      "Mantengo y optimizo sistemas existentes, asegurando la seguridad y confidencialidad de la información médica según estándares HIPAA y regulaciones locales.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>Experiencia</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
