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
        "Desarrollé una interfaz de usuario moderna y responsiva para un chatbot inteligente utilizando React y Next.js, con un dashboard interactivo que incluye gráficos dinámicos (línea, barra, dona y pastel) implementados con Chart.js para visualizar datos en tiempo real. La interfaz se comunica con el backend mediante WebSockets para actualizaciones en tiempo real, y utilicé la API de OpenAI para mejorar el formato de las respuestas antes de mostrarlas al usuario. El backend está desarrollado en Python y Django, incorporando el framework LangChain para dotarlo de inteligencia artificial y permitir la interacción con la base de datos. El diseño prioriza la usabilidad y la experiencia del usuario con una navegación intuitiva y componentes reutilizables.",
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
        "Creé una extensión de Chrome con una interfaz de usuario elegante y funcional que se integra perfectamente con LinkedIn, desarrollando componentes personalizados en JavaScript vanilla con HTML y CSS para mostrar formularios de captura de datos, modales de confirmación y notificaciones en tiempo real. La extensión incluye una interfaz de administración web construida con React que permite gestionar los candidatos capturados, con tablas interactivas y filtros avanzados. El backend está desarrollado en Python y Django, donde se verifica si un perfil ya existe en la base de datos consultando un endpoint con la URL del perfil, y si no está registrado, permite agregarlo utilizando datos públicos obtenidos mediante el JSESSIONID de la cookie del usuario autenticado, consultando la API de LinkedIn. Estos datos se envían en formato JSON al backend, donde se registra el applicant y se genera su CV automáticamente, además de integrar la API de OpenAI para determinar el nivel de seniority del candidato.",
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
        "Lideré la migración del frontend de una arquitectura monolítica a microservicios utilizando React y Single-SPA, diseñando e implementando componentes reutilizables con Material UI que mantienen consistencia visual en toda la aplicación. Creé un sistema de navegación dinámico que se adapta a los diferentes microservicios, implementando lazy loading para mejorar el rendimiento, y utilicé CSS modular y variables CSS para mantener un sistema de diseño coherente. En el backend, participé en la migración de una aplicación monolítica desarrollada con Python, Flask y MongoDB hacia una arquitectura de microservicios utilizando la misma pila tecnológica, implementando Docker para contenerizar todas las APIs y documentando cada servicio con Swagger. La experiencia del usuario se optimizó con transiciones suaves y estados de carga elegantes.",
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
        "Desarrollé una interfaz gráfica de usuario intuitiva y funcional utilizando Tkinter para la gestión de bots de automatización, creando un dashboard principal con pestañas organizadas para diferentes tipos de bots, implementando formularios de configuración con validación en tiempo real. La interfaz incluye un sistema de logs en tiempo real con colores diferenciados por tipo de mensaje, botones de control para iniciar/detener bots, y un panel de configuración avanzada. También diseñé una API web con interfaz de administración construida en Flask que incluye un panel de control web responsivo para monitorear y gestionar los bots desde cualquier dispositivo. El sistema de automatización utiliza Python con bots que interactúan con aplicaciones de escritorio mediante PyAutoGUI y reconocimiento de imágenes, así como con aplicaciones web a través de Selenium y manipulación del DOM, utilizando SQLite como base de datos. Los bots fueron desplegados en máquinas virtuales en AWS (EC2) y Google Cloud (VMs).",
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
        "Construí una API de autenticación robusta con una interfaz de administración web moderna desarrollada en Flask, creando un dashboard de administración con formularios de login elegantes, páginas de registro con validación en tiempo real, y un panel de control para gestionar usuarios. Implementé un sistema de notificaciones toast para feedback inmediato al usuario, formularios responsivos que se adaptan a diferentes dispositivos, y un diseño limpio y profesional utilizando CSS personalizado. La interfaz incluye funcionalidades como gestión de sesiones activas, historial de login, y configuración de políticas de seguridad, todo presentado de manera intuitiva y accesible. El backend está desarrollado en Python y Flask, utilizando SQLite como base de datos y Docker para su despliegue. La API recibe credenciales de usuario, valida si el token actual sigue siendo válido y retorna un par de tokens: un access token para autenticar cada petición y un refresh token para generar uno nuevo cuando el primero expira. Si ambos tokens han caducado, el sistema requiere un nuevo inicio de sesión. Esta API se implementa como servicio central de autenticación en todas mis aplicaciones y está alojada en una máquina virtual de Google Cloud.",
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

      <Title>Algunos Proyectos</Title>
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
