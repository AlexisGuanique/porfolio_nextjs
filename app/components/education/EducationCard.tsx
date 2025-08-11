"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../work-section/Tag";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function EducationCard({
  title,
  img,
  liveLink,
  about,
}: {
  img: string;
  title: string;
  liveLink: string;
  about: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`w-full rounded-[20px] std-backdrop-blur bg-linear-to-r from-[#0000001f] to-[#ffffff1f] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-6 duration-700 transition-all hover:-translate-y-4 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <Image
        src={img}
        width={420}
        height={700}
        alt="work"
        className="rounded-[10px] w-full lg:col-span-5 max-w-[400px] max-h-[500px] object-cover"
      />
      <div className="flex flex-col gap-4 lg:col-span-7">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
            {title}
          </h2>
          <div className="flex gap-3 md:gap-4 text-xl sm:text-2xl xl:text-3xl">
            <Link
              href={liveLink}
              className="rounded-full bg-icon-radial p-3 hover:bg-red relative group"
              target="_blank"
              aria-label="Ver Certificado"
              data-blobity-radius="34"
              data-blobity-magnetic="true"
              {...(!liveLink && {
                "data-blobity-tooltip": `Certificado no disponible`,
              })}
            >
              <Icon
                icon="mdi:certificate"
                className={`${!liveLink && "opacity-30"}`}
              />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                Ver Certificado
              </div>
            </Link>

          </div>
        </div>
        <p className="text-lg text-white/70">{about}</p>
        {/* <div className="flex gap-3 md:gap-4 flex-wrap">
          {stack.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div> */}
      </div>
    </div>
  );
}
