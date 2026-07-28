export default function Hero() {
  return (
    <>
      <section
        className="box-border flex scroll-mt-24 flex-col items-start justify-start gap-2 rounded-tl-md border-s-2 border-t-2 border-black p-4 md:gap-4 lg:p-6 xl:h-[calc(100vh-9rem)] xl:scroll-mt-32 xl:gap-14 xl:p-8 xl:pb-10"
        id="home"
      >
        <h1 className="item-start flex flex-col text-left text-5xl leading-[0.9] font-extrabold text-[#2C2525] uppercase transition-all duration-300 ease-in-out *:tracking-normal sm:leading-[0.85] md:text-8xl xl:text-[9rem]">
          <span>Carl</span>
          <span>Justine</span>
          <span>Malabanan</span>
        </h1>

        <div>
          <dl className="flex flex-col gap-0 sm:flex-row sm:items-baseline sm:gap-2">
            <dt className="text-2xl font-semibold text-[#2C2525] sm:text-3xl lg:text-5xl xl:text-6xl">
              Full Stack Developer
            </dt>
            <dd className="text-sm text-[#545050] sm:text-base lg:text-2xl xl:text-3xl">
              /ˌfʊl stæk dɪˈvɛləpər/
            </dd>
          </dl>

          <div className="mt-2 w-full max-w-4xl sm:mt-3 lg:mt-4 xl:mt-5">
            <p className="text-justify text-sm text-[#363636] sm:text-base lg:text-2xl xl:text-3xl">
              Engineering end-to-end digital solutions that combine responsive
              React and Next.js interfaces with reliable backend systems built
              in C#, Laravel, and Node.js. I focus on creating clean, scalable,
              and maintainable applications that balance performance, usability,
              and long-term flexibility.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
