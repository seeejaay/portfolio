export default function Hero() {
  return (
    <main className="bg-grain box-border h-screen w-full overflow-hidden bg-[#E5E5E3] p-3 text-zinc-800 sm:p-6 lg:p-8">
      {/* Framed Inner Box */}
      <div id="home" className="mt-0 lg:mt-12 box-border flex h-[calc(100vh-1.5rem)] w-full flex-row justify-between overflow-y-auto rounded-tl-lg border-s-2 border-t-2 border-black p-5 sm:h-[calc(100vh-3rem)] sm:p-8 lg:h-[calc(100vh-7.5rem)] lg:overflow-hidden lg:p-12 scroll-mt-24 lg:scroll-mt-32">

        <section>
          {/* Top: Name */}
          <div className="w-full">
            <h1 className="flex flex-col text-left text-5xl leading-[0.9] font-bold tracking-normal text-[#2C2525] uppercase sm:text-7xl lg:text-[10.5rem] lg:leading-[0.85]">
              <span>Carl</span>
              <span>Justine</span>
              <span>Malabanan</span>
            </h1>
          </div>

          {/* Middle: Role & Description */}
          <div className="my-auto w-full py-4">
            <div className="flex flex-col justify-start gap-1 sm:flex-row sm:items-end sm:gap-4">
              <h4 className="text-xl font-semibold text-[#2C2525] sm:text-4xl lg:text-7xl">
                Full Stack Developer
              </h4>
              <p className="text-sm text-[#545050] sm:text-xl lg:text-4xl">
                /ˌfʊl stæk dɪˈvɛləpər/
              </p>
            </div>

            <p className="w-full max-w-4xl pt-3 text-xs text-[#545050] sm:text-lg lg:text-5xl">
              Engineering end-to-end solutions using React, Next.js for the
              interface and robust C#, Laravel, and Node.js for backend logic.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
