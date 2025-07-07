import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Building } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Desarrollador .NET",
      company: "Global Soft T&S S.A.",
      period: "Abril 2025 - Actual",
      location: "Colombia",
      description: "Desarrollo full stack junior en .NET Core 2.2, creando aplicaciones web robustas y escalables.",
      responsibilities: [
        "Desarrollo de aplicaciones web con .NET Core 2.2",
        "Implementación de APIs RESTful",
        "Trabajo en equipo siguiendo metodologías ágiles",
        "Mantenimiento y optimización de código existente",
      ],
    },
    {
      title: "Pasante TI",
      company: "Universidad Simón Bolívar",
      period: "2024 (6 meses)",
      location: "Barranquilla, Colombia",
      description: "Construcción de proyectos full stack, incluyendo página web institucional para la universidad.",
      responsibilities: [
        "Desarrollo de página web institucional",
        "Implementación de funcionalidades full stack",
        "Colaboración con equipos multidisciplinarios",
        "Documentación técnica de proyectos",
      ],
    },
  ]

  const education = [
    {
      title: "Ingeniería de Sistemas",
      institution: "Universidad Simón Bolívar",
      period: "Graduación: Febrero 27, 2025",
      description: "Formación integral en desarrollo de software, bases de datos y tecnologías web.",
    },
    {
      title: "Curso de Caja",
      institution: "Institución Educativa",
      period: "2021",
      description: "Certificación en manejo de sistemas de caja y atención al cliente.",
    },
    {
      title: "Bachiller Técnico Industrial en Electrónica",
      institution: "Escuela Secundaria María Auxiliadora",
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
                {experiences.map((exp, index) => (
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
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Inglés</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">A2</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Herramientas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Postman", "Git", "Bootstrap", "Visual Studio", "VS Code"].map((tool, index) => (
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
