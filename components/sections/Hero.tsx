export default function Hero() {
  return (
    <main className="bg-grain min-h-screen bg-[#E5E5E3] p-10 text-zinc-800">
      <div className="rounded-ts-lg flex min-h-full flex-row items-center justify-between gap-10 rounded-ss-lg border-s-2 border-t-2 border-black p-10">
        {/* Left Side */}
        <section className="flex flex-col items-start justify-start gap-20 pb-16">
          <div>
            <h1 className="flex flex-col text-left text-[10.5rem] leading-[0.85] font-bold tracking-normal text-[#2C2525] uppercase">
              <span>Carl</span>
              <span>Justine</span>
              <span>Malabanan</span>
            </h1>
          </div>
          <div className="">
            <div className="flex flex-row items-end justify-start gap-4">
              <h4 className="text-7xl font-semibold text-[#2C2525]">
                Full Stack Developer
              </h4>
              <p className="text-4xl text-[#545050]"> /ˌfʊl stæk dɪˈvɛləpər/</p>
            </div>
            <p className="w-237.5 py-4 text-justify text-5xl text-[#545050]">
              Engineering end-to-end solutions using React, Next.js for the
              interface and robust C#, Laravel, and Node.js for backend logic.
            </p>
          </div>
        </section>
        {/* Right Side */}
        <section className="flex flex-col items-center justify-center gap-4">
          <div></div>
        </section>
      </div>
    </main>
  )
}
