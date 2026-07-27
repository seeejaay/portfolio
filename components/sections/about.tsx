import Image from "next/image"
import personInASuit from "@/public/resources/person_suit.svg"
export default function About() {
    return (
        <>
            {/* Framed Inner Box */}
            <div id="about" className="box-border flex  flex-col  h-full xl:h-screen xl:flex-row w-full justify-between overflow-y-auto border-s-2  border-black  lg:px-12 scroll-mt-24 xl:scroll-mt-32 p-4 gap-4 lg:gap-0" >
                <div className="flex flex-col w-full ">
                    <h1 className=" text-left text-5xl leading-[0.9] font-bold tracking-normal text-[#2C2525] uppercase sm:text-7xl lg:text-[8rem] lg:leading-[0.85]">
                        Who Am I?
                    </h1>
                    <p className="w-full max-w-4xl pt-3 text-xs text-[#545050] sm:text-lg lg:text-3xl flex gap-6 flex-col text-justify">
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
                <div className="shrink-0 flex justify-center items-center  ">
                    <Image
                        src={personInASuit}
                        alt="A person in a suit"
                        className="w-4xl h-auto object-contain"
                        width={500}
                        height={500}
                        loading="eager"
                    />
                </div>
            </div>
        </>
    )
}
