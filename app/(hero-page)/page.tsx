// Sections
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
export default function Page() {
  return (
    <>
      <main className="bg-grain bg-[#E5E5E3]text-zinc-800 mt-0 flex w-full flex-col overflow-hidden p-3 sm:p-6 lg:mt-16 lg:p-8 xl:mt-14">
        <Hero />
        <About />
      </main>
    </>
  )
}
