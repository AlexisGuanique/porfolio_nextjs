import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "ChatBot",
      liveLink: "",
      about:
        "Desarrollé un chatbot con backend en Python y Django, incorporando el framework LangChain para dotarlo de inteligencia artificial y permitir la interacción con la base de datos. Antes de enviar las respuestas al frontend, las procesé mediante la API de OpenAI para mejorar su formato. La comunicación entre backend y frontend se realizó a través de WebSockets. El frontend, desarrollado con React y Next.js, incluye funcionalidades para generar gráficos de línea, barra, dona y pastel, así como la creación de tablas e informes interactivos.",
      stack: [
        "python",
        "django",
        "langchain",
        "openai api",
        "react",
        "next.js",
        "tailwindcss",
        "Material UI",
        "Chart.js",
        "Socket.io",
      ],
      img: "/chatbot.png",
      owner: "Coorva The Right Talent Driving Your Peace Of Mind",
    },
    {
      title: "LinkedIn Extension",
      liveLink: "",
      about:
        "Desarrollé una extensión de Chrome para automatizar la gestión de perfiles de LinkedIn. La herramienta verifica si un perfil ya existe en la base de datos consultando un endpoint con la URL del perfil. Si no está registrado, permite agregarlo utilizando datos públicos obtenidos mediante el JSESSIONID de la cookie del usuario autenticado, consultando la API de LinkedIn. Estos datos se envían en formato JSON a un backend en Python y Django, donde se registra el applicant y se genera su CV automáticamente. Además, integra la API de OpenAI para determinar el nivel de seniority del candidato.",
      stack: [
        "chrome extension",
        "javascript",
        "python",
        "django",
        "linkedin api",
        "openai api",
        "HTML",
        "CSS",
      ],
      img: "/linkedinextension.png",
      owner: "Coorva The Right Talent Driving Your Peace Of Mind",
    },
    {
      title: "BuenClub",
      gitLink: "",
      liveLink: "",
      about:
        "Participé en la migración de una aplicación monolítica desarrollada con Python, Flask y MongoDB hacia una arquitectura de microservicios utilizando la misma pila tecnológica. Implementamos Docker para contenerizar todas las APIs y documentamos cada servicio con Swagger. También contribuí a la migración del frontend de arquitectura monolítica a microservicios con React y Single-SPA, utilizando Material UI y CSS para los estilos.",
      stack: [
        "python",
        "flask",
        "mongodb",
        "docker",
        "swagger",
        "react",
        "single-spa",
        "material ui",
        "css",
      ],
      img: "/internalreport.png",
      owner: "Sport Club S.A",
    },
    {
      title: "UltraBot",
      gitLink: "https://github.com/AlexisGuanique/ultrabot",
      liveLink: "",
      about:
        "Desarrollé un sistema de automatización de procesos utilizando Python. Implementé bots que interactúan con aplicaciones de escritorio mediante PyAutoGUI y reconocimiento de imágenes, así como con aplicaciones web a través de Selenium y manipulación del DOM. Utilicé SQLite como base de datos y creé la interfaz gráfica con Tkinter. Los bots fueron desplegados en máquinas virtuales en AWS (EC2) y Google Cloud (VMs). Además, desarrollé un módulo de autenticación en una API independiente construida con Python y Flask, dockerizada y alojada en Google Cloud, utilizando la misma base de datos SQLite.",
      stack: [
        "python",
        "pyautogui",
        "selenium",
        "sqlite",
        "tkinter",
        "flask",
        "docker",
        "aws ec2",
        "google cloud",
      ],
      img: "/ultrabot.png",
      owner: "Personal",
    },
    {
      title: "Auth API",
      gitLink: "https://github.com/AlexisGuanique/api_login",
      liveLink: "",
      about:
        "Desarrollé una API de autenticación con Python y Flask, utilizando SQLite como base de datos y Docker para su despliegue. La API recibe credenciales de usuario, valida si el token actual sigue siendo válido y retorna un par de tokens: un access token para autenticar cada petición y un refresh token para generar uno nuevo cuando el primero expira. Si ambos tokens han caducado, el sistema requiere un nuevo inicio de sesión. Esta API se implementa como servicio central de autenticación en todas mis aplicaciones y está alojada en una máquina virtual de Google Cloud.",
      stack: ["python", "flask", "sqlite", "docker", "google cloud"],
      img: "/authapi.png",
      owner: "Personal",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Timeline />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          owner={work.owner}
        />
      ))}
    </section>
  );
}
