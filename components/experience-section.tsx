"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Building, ChevronDown, ChevronUp } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Universidad Simón Bolívar",
      period: "Septiembre 2025 - Presente",
      location: "Barranquilla, Colombia",
      description: "Diseño e implementación de aplicaciones web orientadas a la gestión académica, utilizando tecnologías como Spring Boot, Angular y SQL Server.",
      responsibilities: [
        "Desarrollo de plataforma para registro y seguimiento de monitorías voluntarias, asignadas y remitidas",
        "Implementación de sistema seguro para registro de actividades docentes con generación automatizada de reportes",
        "Apoyo en el uso y mejora de la aplicación VirtuApp para registro de proyectos virtuales",
        "Elaboración de informes mensuales de avance y documentación técnica de los sistemas desarrollados",
        "Soporte en desarrollo y despliegue de aplicaciones web",
      ],
    },
    {
      title: "Desarrollador .NET",
      company: "Global Soft T&S S.A.S",
      period: "Abril 2025 - Octubre 2025",
      location: "Colombia",
      description: "Desarrollo y mantenimiento de módulos web empresariales utilizando .NET Framework/Core y SQL Server.",
      responsibilities: [
        "Migración de lógica heredada desde Visual FoxPro hacia arquitecturas modernas basadas en tecnologías web",
        "Implementación de interfaces responsivas con JavaScript, jQuery y Bootstrap",
        "Desarrollo de integraciones personalizadas con plataformas de e-commerce como Shopify",
        "Participación en proyectos multiplataforma utilizando .NET MAUI para aplicaciones móviles y de escritorio",
      ],
    },
    {
      title: "Pasantía TI (Desarrollador Full Stack)",
      company: "Universidad Simón Bolívar",
      period: "Segundo semestre 2024",
      location: "Barranquilla, Colombia",
      description: "Construcción de proyectos académicos full stack para plataformas internas empleando el uso de tecnologías como Spring Boot.",
      responsibilities: [
        "Desarrollo de aplicaciones web institucionales",
        "Implementación de funcionalidades full stack",
        "Colaboración con equipos multidisciplinarios",
        "Soporte en desarrollo y despliegue de aplicaciones web",
      ],
    },
  ]

  const [showAllExperiences, setShowAllExperiences] = useState(false)
  const displayedExperiences = showAllExperiences ? experiences : experiences.slice(0, 1)

  const education = [
    {
      title: "Ingeniería de Sistemas",
      institution: "Universidad Simón Bolívar",
      period: "Graduación: Febrero 27, 2025",
      description: "Formación integral en desarrollo de software, bases de datos y tecnologías web.",
    },
    {
      title: "Bachiller Técnico en Electrónica",
      institution: "Institución Educativa María Auxiliadora",
      period: "2018",
      description: "Formación técnica en electrónica con énfasis en sistemas digitales.",
    },
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Experiencia y Educación</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experiencia Laboral */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Building className="mr-2 h-6 w-6 text-blue-600" />
                Experiencia Laboral
              </h3>
              <div className="space-y-6">
                {displayedExperiences.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{exp.title}</CardTitle>
                      <div className="text-blue-600 font-medium">{exp.company}</div>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-3">{exp.description}</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Botón Ver más */}
              {experiences.length > 1 && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    className="w-full md:w-auto"
                  >
                    {showAllExperiences ? (
                      <>
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Ver menos
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        Ver más experiencias ({experiences.length - 1})
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>

            {/* Educación */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="mr-2 h-6 w-6 text-blue-600" />
                Educación
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-green-600">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{edu.title}</CardTitle>
                      <div className="text-green-600 font-medium">{edu.institution}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        {edu.period}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Idiomas y Habilidades Adicionales */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Idiomas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🇪🇸 Español</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Nativo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🇺🇸 Inglés</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">B1 (en proceso)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🇩🇪 Alemán</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">En aprendizaje</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Herramientas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Postman", "Git", "Bootstrap", "Visual Studio", "VS Code", "IIS", ".NET MAUI"].map((tool, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
