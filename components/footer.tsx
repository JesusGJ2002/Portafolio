export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Jesús Galvis</p>
            <p className="text-gray-400">Desarrollador de Software</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">© {currentYear} Jesús Galvis. Todos los derechos reservados.</p>
            <p className="text-sm text-gray-500 mt-1">Hecho con ❤️ y mucho café</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Gracias por visitar mi portafolio. ¡Espero que podamos trabajar juntos pronto!
          </p>
        </div>
      </div>
    </footer>
  )
}
