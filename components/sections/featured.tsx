export default function Featured() {
  return (
    <section className="w-full py-12 sm:px-14 lg:px-20 xl:px-28 xl:py-16">
      <div>
        <h2 className="lg:4xl text-center font-heading text-3xl font-black text-secondary xl:text-5xl">
          Featured Projects
        </h2>
        <div className="mt-8 grid w-full grid-cols-1 gap-8 xl:grid-cols-2">
          <div className="flex flex-col gap-4 border border-gray-200 bg-background p-6 shadow-[20px_20px_0px_0px_#122331] transition-transform hover:translate-x-1 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-secondary">Project 1</h3>
            <p className="text-secondary">A brief description of Project 1.</p>
            <a href="#" className="text-accent hover:underline">
              View Project
            </a>
          </div>
          <div className="flex flex-col gap-4 border border-gray-200 bg-background p-6 shadow-[20px_20px_0px_0px_#122331] transition-transform hover:translate-x-1 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-secondary">Project 2</h3>
            <p className="text-secondary">A brief description of Project 2.</p>
            <a href="#" className="text-accent hover:underline">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
