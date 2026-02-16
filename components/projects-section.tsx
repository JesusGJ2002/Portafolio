"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Gestión de Monitorías - Universidad Simón Bolívar",
      description:
        "Plataforma web para el registro y seguimiento de monitorías voluntarias, asignadas y remitidas. Sistema completo de gestión académica desarrollado con Spring Boot y Angular.",
      image: "/virtucurso.jpeg?height=200&width=300",
      technologies: ["Spring Boot", "Angular", "SQL Server", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      isPrivate: true,
      privateReason: "Proyecto empresarial de la Universidad Simón Bolívar",
    },
    {
      title: "Sistema de Registro de Actividades Docentes",
      description:
        "Sistema seguro para el registro de actividades docentes con generación automatizada de reportes e informes mensuales de avance. Implementa cronogramas de capacitación docente.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Spring Boot", "SQL Server", "Angular", "PDF Generation"],
      liveUrl: "#",
      githubUrl: "#",
      isPrivate: true,
      privateReason: "Proyecto empresarial de la Universidad Simón Bolívar",
    },
    {
      title: "Integración E-commerce Shopify",
      description:
        "Desarrollo de integraciones personalizadas con plataformas de e-commerce como Shopify utilizando .NET Core. Incluye sincronización de productos, pedidos y clientes.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: [".NET Core", "Shopify API", "SQL Server", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      isPrivate: true,
      privateReason: "Proyecto empresarial de Global Soft T&S",
    },
    {
      title: "Migración Visual FoxPro a .NET",
      description:
        "Migración de lógica heredada desde Visual FoxPro hacia arquitecturas modernas basadas en .NET Core con interfaces responsivas usando JavaScript, jQuery y Bootstrap.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: [".NET Core", "Visual FoxPro", "jQuery", "Bootstrap", "SQL Server"],
      liveUrl: "#",
      githubUrl: "#",
      isPrivate: true,
      privateReason: "Proyecto empresarial de Global Soft T&S",
    },
    {
      title: "Sistema de Predicción de Vuelos",
      description:
        "Sistema inteligente de predicción de vuelos implementado usando Python y técnicas de machine learning para análisis predictivo de datos históricos.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
      liveUrl: "#",
      githubUrl: "#",
      isPrivate: false,
    },
    {
      title: "Página Web Especies en Extinción",
      description:
        "Página web informativa sobre especies en peligro de extinción con diseño responsivo y contenido educativo interactivo. Proyecto académico enfocado en concienciación ambiental.",
      image: "/Captura2.PNG?height=200&width=300",
      technologies: ["HTML", "CSS", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/JesusGJ2002/Ecoguardian",
      isPrivate: false,
    },
    {
      title: "Sistema de Gestión de Calificaciones",
      description:
        "Sistema de gestión de calificaciones dirigido a profesores, desarrollado con Java utilizando programación orientada a objetos. Interfaz de escritorio con formularios.",
      image: "/neatbeans.png?height=200&width=300",
      technologies: ["Java", "POO", "NetBeans", "Swing"],
      liveUrl: "#",
      githubUrl: "#",
      isPrivate: false,
    },
    {
      title: "Investigación sobre Impacto del Vapeo",
      description:
        "Análisis de efectos del vapeo en jóvenes de Barranquilla. Estudio académico que incluye recopilación de datos, análisis estadístico y presentación de resultados.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Data Analysis", "Statistics", "Research"],
      liveUrl: "#",
      githubUrl: "#",
      isPrivate: false,
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 4
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Mis Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
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

                  {project.isPrivate && (
                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-amber-800 text-sm">
                        <span className="font-semibold">🔒 Repositorio privado:</span> {project.privateReason}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    {!project.isPrivate && project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.isPrivate && (
                      <Button variant="outline" size="sm" disabled>
                        <Github className="mr-2 h-4 w-4" />
                        Privado
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Paginador */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  size="icon"
                  onClick={() => handlePageClick(pageNumber)}
                  className={currentPage === pageNumber ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {pageNumber}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Información de página */}
          <div className="text-center mt-4 text-gray-600">
            Página {currentPage} de {totalPages} • Mostrando {currentProjects.length} de {projects.length} proyectos
          </div>
        </div>
      </div>
    </section>
  )
}
