"use client";

import Image from "next/image";
import Link from "next/link";

const PHOTOS = [
  {
    src: "https://clickup.com/images/careers/life-at-clickup-9.png",
    alt: "Hashboard team collaboration and meetings",
    caption: "NY MeetUp",
    date: "01/03/2018",
    rotate: -7,
  },
  {
    src: "https://clickup.com/images/careers/life-at-clickup-6.png",
    alt: "Hashboard team activities and events",
    caption: "Hashboard New Year",
    date: "01/03/2018",
    rotate: 4,
  },
  {
    src: "https://clickup.com/images/careers/life-at-clickup-3.png",
    alt: "Hashboard team members working together",
    caption: "Prague events",
    date: "12/20/2019",
    rotate: -4,
  },
  {
    src: "https://clickup.com/images/careers/life-at-clickup-1.png",
    alt: "Hashboard office culture and workspace",
    caption: "3.0 SF Event",
    date: "11/24/2020",
    rotate: 8,
  },
];

export default function LifeAtClickUpSection() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#7612fa] uppercase">
              Gallery
            </span>
            <h2 className="about-clickup-gradient mt-2 text-4xl font-extrabold font-display leading-none sm:text-5xl">
              Life at Hashboard.
            </h2>
          </div>
          <div className="max-w-sm text-left md:text-right">
            <p className="text-[#646464]">
              San Diego HQ, United States, Canada, Ireland, United Kingdom,
              Australia, and across the globe.
            </p>
            <Link
              href="/careers"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#111827] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-black"
            >
              Join Our Team
            </Link>
          </div>
        </div>

        <div className="mt-10 flex gap-6 overflow-x-auto px-2 pb-6 sm:mt-12 sm:justify-center sm:gap-0 sm:overflow-visible sm:pb-0 sm:pl-10">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.caption}
              className="animate-rise shrink-0 sm:-ml-10 sm:first:ml-0"
              style={{ zIndex: i + 1, animationDelay: `${i * 0.15}s` }}
            >
              <div
                className="w-56 rounded-[2px] bg-white p-3 pb-9 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.3)] sm:w-72 md:w-80"
                style={{ transform: `rotate(${photo.rotate}deg)` }}
              >
                <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 384px, (min-width: 640px) 320px, 256px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-xs uppercase tracking-wide text-neutral-500">
                  <span className="truncate">{photo.caption}</span>
                  <span className="shrink-0 pl-2">{photo.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
