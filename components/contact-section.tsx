"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = "Mensaje de contacto desde tu portfolio"
    const body = `Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMensaje: ${formData.message}`
    window.location.href = `mailto:jesusgalvis42@gmail.com?subject=${subject}&body=${body}`
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Contacto</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">¡Hablemos!</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. Si tienes una idea o quieres
                colaborar, no dudes en contactarme.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">jesusgalvis42@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">+57 320 507 8960</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Barranquilla - Atlántico</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/jesus-gj-3315362b3" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/JesusGJ2002" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://wa.me/573205078960" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Tu correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tu mensaje"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}