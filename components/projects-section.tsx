import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Predicción de Vuelos",
      description:
        "Sistema inteligente de predicción de vuelos implementado usando Python y técnicas de machine learning para análisis predictivo.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Página Web Especies en Extinción",
      description:
        "Página web informativa sobre especies en peligro de extinción con diseño responsivo y contenido educativo interactivo.",
      image: "/Captura2.PNG?height=200&width=300",
      technologies: ["HTML", "CSS", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Programa de Calificaciones",
      description:
        "Sistema de gestión de calificaciones dirigido a profesores, desarrollado con Java utilizando programación orientada a objetos.",
      image: "/neatbeans.png?height=200&width=300",
      technologies: ["Java", "POO", "netbeans", "formularios"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Proyecto Web Universidad Simón Bolívar",
      description:
        "Desarrollo full stack de página web institucional durante mi pasantía de TI, implementando funcionalidades modernas.",
      image: "/virtucurso.jpeg?height=200&width=300",
      technologies: ["Spring Boot", "Angular", "SQL Server", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Mis Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {/* <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver en vivo
                      </a>
                    </Button> */}
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
