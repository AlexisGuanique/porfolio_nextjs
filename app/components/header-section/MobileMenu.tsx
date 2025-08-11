import { useView } from "@/contexts/ViewContext";
import React, { SetStateAction } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export default function MobileMenu({
  onMenuOpen,
}: {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { sectionInView } = useView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid items-center grid-cols-2 sm:hidden px-6 py-5 fixed top-12 rounded-2xl bg-linear-to-r from-[#d9d9d91f]  max-w-[90%] w-full to-[#7373731f] mt-12 sm:mt-16 backdrop-blur-2xl"
      style={{ zIndex: "var(--z-header)" }}
    >
      <ul
        className="flex flex-col gap-4 lg:gap-12 text-white/80"
        onClick={() => onMenuOpen(false)}
      >
        <Link
          href="#home"
          className={`${
            sectionInView === "home"
              ? "text-white font-semibold"
              : "text-white/80 hover:text-white"
          } w-fit transition-colors duration-200`}
        >
          Inicio
        </Link>
        <Link
          href="#about"
          className={`${
            sectionInView === "about"
              ? "text-white font-semibold"
              : "text-white/80 hover:text-white"
          } w-fit transition-colors duration-200`}
        >
          Sobre mí
        </Link>
        <Link
          href="#work"
          className={`${
            sectionInView === "work"
              ? "text-white font-semibold"
              : "text-white/80 hover:text-white"
          } w-fit transition-colors duration-200`}
        >
          Experiencia
        </Link>
        <Link
          href="#contact"
          className={`${
            sectionInView === "contact"
              ? "text-white font-semibold"
              : "text-white/80 hover:text-white"
          } w-fit transition-colors duration-200`}
        >
          Contacto
        </Link>
      </ul>

      <div className="flex flex-col gap-3 z-20 items-center justify-center">
        <Link
          className="p-4 flex-1 flex justify-center w-full rounded-xl h-fit text-4xl visited:bg-[#E3D3BE] bg-linear-to-r from-[#d9d9d915] to-[#7373731f] backdrop-blur-2xl hover:from-[#d9d9d925] hover:to-[#7373732f] transition-all duration-200"
          target="_blank"
          href="https://www.linkedin.com/in/alexis-guanique-854443147/"
          data-blobity-radius="10"
        >
          <Icon icon="hugeicons:linkedin-01" />
        </Link>

        <div className="flex gap-3 w-full">
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-linear-to-r from-[#d9d9d915] to-[#7373731f] backdrop-blur-2xl hover:from-[#d9d9d925] hover:to-[#7373732f] transition-all duration-200"
            target="_blank"
            href="https://github.com/AlexisGuanique"
            data-blobity-radius="10"
          >
            <Icon icon="hugeicons:github" />
          </Link>
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-linear-to-r from-[#d9d9d915] to-[#7373731f] backdrop-blur-2xl hover:from-[#d9d9d925] hover:to-[#7373732f] transition-all duration-200"
            target="_blank"
            href="https://www.instagram.com/soyalexisguanique/"
            data-blobity-radius="10"
          >
            <Icon icon="akar-icons:instagram-fill" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
