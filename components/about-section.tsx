import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, Zap } from "lucide-react"

export function AboutSection() {
  const technologies = [
    { name: "HTML/CSS", icon: Globe, color: "text-orange-500" },
    { name: "JavaScript", icon: Code, color: "text-yellow-500" },
    { name: ".NET Core", icon: Server, color: "text-purple-500" },
    { name: "C#", icon: Code, color: "text-purple-600" },
    { name: "Spring Boot", icon: Server, color: "text-green-500" },
    { name: "Java", icon: Code, color: "text-red-600" },
    { name: "Angular", icon: Zap, color: "text-red-500" },
    { name: "SQL Server", icon: Database, color: "text-blue-600" },
    { name: "Git", icon: Code, color: "text-gray-600" },
    { name: "Bootstrap", icon: Globe, color: "text-purple-400" },
    { name: "IIS", icon: Server, color: "text-blue-500" },
    { name: "Postman", icon: Zap, color: "text-orange-600" },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Sobre mí</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Soy un desarrollador Full Stack con experiencia en desarrollo de aplicaciones empresariales usando .NET Core, 
                Spring Boot, SQL Server y tecnologías front-end modernas. Graduado como bachiller técnico industrial en electrónica 
                e Ingeniero de Sistemas egresado de la Universidad Simón Bolívar (febrero 2025).
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Destaco por mi habilidad para trabajar en equipo, resolución de problemas y aprendizaje continuo. Mi destreza en la 
                comunicación y mi vocación de servicio garantizan un ambiente laboral armonioso y una atención de calidad.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Actualmente trabajo como Desarrollador Full Stack en la Universidad Simón Bolívar, donde diseño e implemento 
                aplicaciones web orientadas a la gestión académica utilizando tecnologías como Spring Boot, Angular y SQL Server.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tecnologías que domino</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <tech.icon className={`h-8 w-8 ${tech.color}`} />
                      <span className="font-medium text-gray-700">{tech.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
