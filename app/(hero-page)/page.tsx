// Sections
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
export default function Page() {
  return (
    <>
      <main className="flex flex-col bg-grain box-border w-full overflow-hidden bg-[#E5E5E3]  text-zinc-800 sm:p-6 lg:p-8 p-3  mt-0 xl:mt-22 ">
        <Hero />
        <About />
      </main>
    </>
  )
}
