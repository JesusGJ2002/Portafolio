"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    // Ruta a tu archivo CV en la carpeta public
    const cvUrl = '/CV - JGJ - 1610 -.docx';
    
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = cvUrl;
    
    // Esto hará que el archivo se descargue en lugar de abrirse en el navegador
    link.setAttribute('download', 'CV - JGJ - 1610 -.docx'); 
    
    // Añadir al DOM y hacer clic
    document.body.appendChild(link);
    link.click();
    
    // Limpiar
    document.body.removeChild(link);
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hola, soy <span className="text-blue-600">Jesús Galvis Jiménez</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Desarrollador Full Stack (.NET / SQL / Java / JavaScript)
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Motivado y detallista con experiencia práctica en desarrollo de aplicaciones empresariales usando .NET Core, Spring Boot, SQL Server y tecnologías front-end modernas. Comprometido con entregar soluciones de software escalables y de alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-5 w-5" />
                Contactar
              </Button>
              <Button 
                onClick={handleDownloadCV} 
                variant="outline" 
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar CV
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2">
                <Image
                  src="/perfil.jpeg?height=300&width=300"
                  alt="Jesús Galvis"
                  width={300}
                  height={300}
                  className="w-full h-full rounded-full object-cover bg-gray-200"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-2xl">⚽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}