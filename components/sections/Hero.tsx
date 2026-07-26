export default function Hero() {
  return (
    <main className="bg-grain min-h-screen bg-[#E5E5E3] p-4 text-zinc-800 sm:p-6 lg:p-10">
      <div className="flex min-h-full flex-col items-center justify-between gap-10 rounded-tl-lg border-s-2 border-t-2 border-black p-6 sm:p-10 lg:flex-row">
        {/* Left Side */}
        <section className="flex w-full flex-col items-start justify-start gap-12 pb-8 lg:gap-20 lg:pb-16">
          <div>
            <h1 className="flex flex-col text-left text-6xl leading-[0.85] font-bold tracking-normal text-[#2C2525] uppercase sm:text-8xl lg:text-[10.5rem]">
              <span>Carl</span>
              <span>Justine</span>
              <span>Malabanan</span>
            </h1>
          </div>
          <div className="w-full">
            <div className="flex flex-col justify-start gap-2 sm:flex-row sm:items-end sm:gap-4">
              <h4 className="text-3xl font-semibold text-[#2C2525] sm:text-5xl lg:text-7xl">
                Full Stack Developer
              </h4>
              <p className="text-xl text-[#545050] sm:text-2xl lg:text-4xl">
                /ˌfʊl stæk dɪˈvɛləpər/
              </p>
            </div>
            <p className="w-full max-w-4xl py-4 text-justify text-xl text-[#545050] sm:text-2xl lg:text-5xl">
              Engineering end-to-end solutions using React, Next.js for the
              interface and robust C#, Laravel, and Node.js for backend logic.
            </p>
          </div>
        </section>
        {/* Right Side */}
        <section className="flex w-full flex-col items-center justify-center gap-4 lg:w-auto">
          <div></div>
        </section>
      </div>
    </main>
  )
}
