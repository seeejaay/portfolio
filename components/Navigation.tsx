"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavigationConstants } from "@/constants/navigation"
import MobileNavigation from "@/components/MobileNavigation"

export default function Navigation() {
  const pathName = usePathname()

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <nav className="flex h-20 w-full items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
        <span className="font-heading text-xl font-black tracking-wider uppercase">
          Carl Malabanan.
        </span>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {NavigationConstants.map((navItem) => (
              <li key={navItem.index}>
                <Link
                  href={navItem.href}
                  className={`${
                    pathName === navItem.href ? "font-bold underline" : ""
                  } font-heading text-sm font-medium lowercase hover:underline`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <MobileNavigation pathname={pathName} />
        </div>
      </nav>
    </header>
  )
}
