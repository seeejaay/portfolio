import { Abhaya_Libre } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
// Import your new navigation component
import Navigation from "@/components/Navigation"
import { Analytics } from "@vercel/analytics/next"

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-abhaya",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", abhayaLibre.variable, "font-sans")}
    >
      <body className="bg-grain relative bg-[#E5E5E3] text-zinc-800">
        <ThemeProvider>
          {/* Render the imported navigation here */}

          <Navigation />

          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
