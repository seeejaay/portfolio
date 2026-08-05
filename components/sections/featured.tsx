import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { featuredProjects } from "@/constants/featured"

export default function Featured() {
  return (
    <section className="w-full px-6 py-12 sm:px-14 lg:px-20 xl:px-28">
      <div>
        <h2 className="lg:4xl text-center font-heading text-3xl font-black text-secondary xl:text-5xl">
          Featured Projects
        </h2>
        <div className="mt-8 grid w-full grid-cols-1 gap-8 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              className="flex flex-col gap-4 border border-gray-200 bg-background p-6 shadow-[10px_10px_0px_0px_#122331] transition-transform hover:translate-x-1 hover:-translate-y-1 lg:shadow-[20px_20px_0px_0px_#122331]"
              key={project.index}
            >
              <h3 className="font-heading text-lg font-semibold text-secondary">
                {project.title}
              </h3>
              <p className="font-sans text-secondary">{project.description}</p>
              <div className="shrink-0 object-cover object-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                />
              </div>

              <div className="w-56">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-center font-sans text-base font-medium text-secondary hover:underline"
                >
                  View Project
                  <ArrowUpRight className="inline-block h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
