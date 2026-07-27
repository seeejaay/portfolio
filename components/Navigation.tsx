export default function Navigation() {
  return (
    <nav className="fixed top-16 right-8 z-50 hidden flex-col items-end gap-3 text-lg font-medium lg:flex">
      <a
        href="#hero"
        className="text-zinc-500 transition-colors hover:text-black"
      >
        Hero
      </a>
      <a
        href="#about"
        className="text-zinc-500 transition-colors hover:text-black"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-zinc-500 transition-colors hover:text-black"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-zinc-500 transition-colors hover:text-black"
      >
        Contact
      </a>
    </nav>
  )
}
