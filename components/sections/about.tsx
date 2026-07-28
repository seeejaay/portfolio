import Image from "next/image"
import personInSuite from "@/public/resources/person_suit.webp"
export default function About() {
  return (
    <>
      {/* Framed Inner Box */}
      <div
        id="about"
        className="border-box mt-14 flex scroll-mt-24 flex-col items-start justify-between border-s-2 border-black p-4 lg:gap-0 lg:px-12 xl:h-[calc(100vh-9rem)] xl:scroll-mt-16 xl:flex-row xl:gap-8 xl:px-8"
      >
        <div className="mb-4 flex w-full flex-col">
          <h1 className="text-left text-5xl leading-[0.9] font-bold tracking-normal text-[#2C2525] uppercase sm:text-7xl lg:text-[8rem] lg:leading-[0.85]">
            Who Am I?
          </h1>
          <p className="flex w-full flex-col gap-8 pt-3 text-justify text-xs text-[#363636] sm:text-lg lg:text-3xl xl:max-w-4xl">
            <span>
              I am a full-stack engineer based in Quezon City. I build scalable
              and enterprise-level web applications with a focus on clean
              interfaces and robust back-end architecture. I aim to deliver
              products that stay maintainable as teams and requirements grow.
            </span>

            <span>
              My work is driven by practical development experience
              transitioning from completing full-stack internships to
              engineering automated data extraction pipelines and custom
              application workflows. That hands-on path helped me develop a
              strong balance between shipping quickly and building reliable
              systems.
            </span>

            <span>
              Beyond the screen, I train in long-distance running. When I&apos;m
              unwinding, you&apos;ll usually find me playing tactical computer
              games or catching up on favorite series and anime. These interests
              keep me disciplined, curious, and energized for problem-solving in
              day-to-day engineering work.
            </span>
          </p>
        </div>
        <div className="hidden shrink-0 items-center justify-center xl:flex">
          <Image
            src={personInSuite}
            alt="A person in a suit"
            className="h-auto w-full"
            width={600}
            height={600}
            loading="eager"
          />
        </div>
      </div>
    </>
  )
}
