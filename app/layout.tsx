import { Montserrat } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Navigation from "@/components/Navigation"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const agrandir = localFont({
  src: [
    {
      path: "../public/fonts/Agrandir-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Agrandir-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Agrandir-TextBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Agrandir-GrandHeavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-agrandir",
  display: "swap",
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
      className={cn(
        "antialiased",
        montserrat.variable,
        agrandir.variable,
        "font-sans"
      )}
    >
      {/* Both custom utilities and theme classes combine seamlessly */}
      <body className="bg-background bg-texture bg-repeat">
        <ThemeProvider>
          <Navigation />
          <main className="flex items-center justify-center pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
