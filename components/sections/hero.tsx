"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { socialLinks } from "@/constants/social"
import PersonInSuite from "@/public/resources/personInSuit.png"

export default function Hero() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] w-full items-start px-6 py-16 sm:px-14 lg:px-20 xl:px-28">
      <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <section className="flex min-w-0 flex-col gap-6 lg:col-span-7">
          {/* Static Header Container with the 4 Corner Selection Boxes */}
          <div className="relative z-10 w-full border border-gray-200 bg-transparent p-5">
            {/* 4 Corner Accent Dots */}
            <div className="absolute -top-0.75 -left-0.75 z-30 h-3 w-3 bg-accent" />
            <div className="absolute -top-0.75 -right-0.75 z-30 h-3 w-3 bg-accent" />
            <div className="absolute -bottom-0.75 -left-0.75 z-30 h-3 w-3 bg-accent" />
            <div className="absolute -right-0.75 -bottom-0.75 z-30 h-3 w-3 bg-accent" />

            <div className="flex flex-col gap-2">
              <h6 className="font-heading text-base tracking-wide text-neutral-500">
                Hi I&apos;m Carl! - Full Stack Developer
              </h6>
              <h1 className="font-heading text-3xl leading-[1.08] font-black tracking-tight text-secondary sm:text-4xl md:text-4xl lg:text-4xl xl:text-[46px] 2xl:text-[4rem]">
                Bridging <span className="text-accent">beautiful</span>{" "}
                interfaces with{" "}
                <span className="text-accent">robust architecture</span>
              </h1>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-heading text-lg font-medium text-secondary lowercase hover:underline"
              >
                {link.name} <ArrowUpRight className="inline-block h-4 w-4" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:gap-5 xl:gap-20">
            <p className="text-justify text-base text-secondary">
              As a Full Stack Developer I design and engineer intuitive and
              robust web platforms from the ground up. Whether I am crafting
              user-centric interfaces with React or structuring robust database
              schemes with PostgreSQL, my goal is to build digital experiences
              that perform beautifully.
            </p>
            <button className="w-fit bg-accent px-6 py-2 text-lg font-medium text-background transition-colors hover:bg-accent/80">
              Get to know me!
            </button>
          </div>
        </section>

        <section className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative aspect-600/695 w-full max-w-150 shrink-0">
            <Image
              src={PersonInSuite}
              alt="Carl Malabanan"
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover object-top"
              priority
            />
          </div>
        </section>
      </div>
    </main>
  )
}
