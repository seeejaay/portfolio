import { NavigationConstants } from "@/constants/navigation"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-50 hidden w-full flex-row items-center justify-between bg-grain gap-3  px-4 py-4 text-lg font-medium lg:flex lg:px-10">
      <h4 className="text-3xl font-extrabold">Carl Malabanan.</h4>
      <div className="flex flex-row items-center gap-8 bg-[#2C2525] px-4 py-2 text-xl font-extrabold">
        {NavigationConstants.map((navItem) => (
          <a
            key={navItem.index}
            href={navItem.hash}
            className="text-neutral-50 transition-colors hover:text-neutral-400"
          >
            {navItem.name}
          </a>
        ))}
      </div>
    </nav>
  )
}
