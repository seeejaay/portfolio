"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { NavigationConstants } from "@/constants/navigation"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileNavigationProps {
  pathname: string
}

export default function MobileNavigation({ pathname }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-background p-2 text-foreground"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-64 px-6 py-20">
        <nav className="flex h-full flex-col items-start justify-start gap-4">
          <ul className="flex flex-col gap-4">
            {NavigationConstants.map((navItem) => (
              <li key={navItem.index}>
                <Link
                  href={navItem.href}
                  className={`${pathname === navItem.href ? "underline" : ""} font-heading text-4xl font-medium lowercase hover:underline`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
