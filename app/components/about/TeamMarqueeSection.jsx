"use client";

import Image from "next/image";
import { UserStar } from "lucide-react";

import { Marquee } from "@/app/components/ui/Marquee";

const teamMembers = [
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a1.jpg",
    name: "Patrick Stewart",
    role: "CEO - Founder",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a2.jpg",
    name: "Alena Rosser",
    role: "Director of Content",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a3.jpg",
    name: "Fletch Skinner",
    role: "Tech Manager",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a4.jpg",
    name: "Marc Spector",
    role: "Director of Content",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a5.jpg",
    name: "Natalia Skinner",
    role: "Hashboard Researcher",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a6.jpg",
    name: "David Kim",
    role: "Engineering Lead",
  },
];

export default function TeamMarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24">
      <div>
        <svg
          className="absolute right-0 bottom-0 text-neutral-200"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_494_1104)">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </g>
          <defs>
            <clipPath id="clip0_494_1104">
              <rect fill="white" height="154" width="460" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#7612fa] text-white">
            <UserStar strokeWidth={2} size={24} />
          </div>

          <h2 className="relative mb-4 font-display font-medium text-4xl text-neutral-900 tracking-tight sm:text-5xl">
            The people behind Hashboard
            <svg
              className="absolute -top-2 -right-8 -z-10 w-24 text-neutral-200"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>
          <p className="max-w-2xl text-neutral-600">
            Hashboarders are highly passionate, energetic, and unique people
            who align with the mission of saving people time and making the
            world more productive.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-white to-transparent" />

          <Marquee className="[--gap:1.5rem]" pauseOnHover>
            {teamMembers.map((member) => (
              <div
                className="group flex w-64 shrink-0 flex-col"
                key={member.name}
              >
                <div className="relative h-92 w-full overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    fill
                    sizes="256px"
                    src={member.image}
                  />
                  <div className="absolute bottom-0 w-full rounded-lg bg-neutral-100/85 p-2">
                    <h3 className="font-semibold text-neutral-900">
                      {member.name}
                    </h3>
                    <p className="text-neutral-600 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-8 font-medium text-lg text-neutral-900 leading-relaxed md:text-xl">
            The exceptional support from Hashboard truly impressed us. We
            suggested an improvement, and their team implemented it with
            remarkable speed!
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image
                alt="Natalia Kara"
                className="h-full w-full object-cover"
                fill
                sizes="56px"
                src="https://res.cloudinary.com/dvwtcsh5v/image/upload/v1770279333/a1.jpg"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-neutral-900">Natalia Kara</p>
              <p className="text-neutral-600 text-sm">
                CTO · Partner Collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
