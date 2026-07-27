import Image from "next/image"
import personInASuit from "@/public/resources/person_suit.svg"
export default function About() {
    return (
        <main className="bg-grain box-border h-screen w-full overflow-hidden px-3 text-zinc-800 sm:px-6 lg:px-8 lg:pt-20 pt-6">
            {/* Framed Inner Box */}
            <section id="about" className="box-border flex h-[calc(100vh-1.5rem)] w-full flex-row justify-between border-s-2  border-black p-5 sm:h-[calc(100vh-3rem)] sm:p-8 lg:h-[calc(100vh-9rem)] lg:overflow-hidden lg:p-12 scroll-mt-12 lg:scroll-mt-20">
                <section className="">
                    {/* Top: Name */}
                    <div className="w-full">
                        <h1 className="flex flex-col text-left text-5xl leading-[0.9] font-bold tracking-normal text-[#2C2525] uppercase sm:text-7xl lg:text-[8rem] lg:leading-[0.85]">
                            Who Am I?
                        </h1>
                    </div>


                    <div className="py-4">
                        <p className="w-full max-w-4xl pt-3 text-xs text-[#545050] sm:text-lg lg:text-3xl flex gap-9 flex-col text-justify">
                            <span>
                                I am a full-stack engineer based in Quezon City. I build scalable and enterprise-level web applications with a focus on clean interfaces and robust back-end architecture. I aim to deliver products that stay maintainable as teams and requirements grow.
                            </span>

                            <span>
                                My work is driven by practical development experience transitioning from completing full-stack internships to engineering automated data extraction pipelines and custom application workflows. That hands-on path helped me develop a strong balance between shipping quickly and building reliable systems.
                            </span>

                            <span>
                                Beyond the screen, I train in long-distance running. When I&apos;m unwinding, you&apos;ll usually find me playing tactical computer games or catching up on favorite series and anime. These interests keep me disciplined, curious, and energized for problem-solving in day-to-day engineering work.
                            </span>
                        </p>
                    </div>
                </section>
                <section className="shrink-0 ">
                    <div className="">
                        <Image
                            src={personInASuit}
                            alt="A person in a suit"
                            className="w-2xl h-auto object-contain"
                            width={400}
                            height={400}
                        />
                    </div>
                </section>
            </section>


        </main>
    )
}
