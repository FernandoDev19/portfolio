export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-8xl font-bold text-gray-600 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Página no encontrada</p>
      <a
        href="/"
        className="text-orange-400 border border-orange-400 px-6 py-2 rounded-md hover:bg-orange-400 hover:text-white transition-colors duration-300 ease"
      >
        Volver al inicio
      </a>
    </div>
  )
}