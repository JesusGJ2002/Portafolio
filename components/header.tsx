"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Jesús Galvis</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("experiencia")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
