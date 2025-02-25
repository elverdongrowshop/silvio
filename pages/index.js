import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-800 text-white py-4 shadow">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Logo El Verdon Growshop"
              className="h-12 w-auto mr-3"
            />
            <h1 className="text-3xl font-bold">El Verdon Growshop</h1>
          </div>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li>
                <a href="#productos" className="hover:text-green-300">
                  Productos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-green-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-green-300">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        {/* Overlay para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Todo lo necesario para tu cultivo
          </h2>
          <p className="text-lg md:text-xl text-white mb-6">
            Productos de calidad y asesoramiento experto
          </p>
          <a
            href="#productos"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Ver Catálogo
          </a>
        </div>
      </section>

      {/* Productos Destacados */}
      <main id="productos" className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta Producto 1 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/product1.jpg"
              alt="Producto 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Producto 1</h3>
              <p className="mt-2 text-gray-600">
                Descripción breve del producto 1.
              </p>
            </div>
          </div>
          {/* Tarjeta Producto 2 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/product2.jpg"
              alt="Producto 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Producto 2</h3>
              <p className="mt-2 text-gray-600">
                Descripción breve del producto 2.
              </p>
            </div>
          </div>
          {/* Tarjeta Producto 3 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/product3.jpg"
              alt="Producto 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Producto 3</h3>
              <p className="mt-2 text-gray-600">
                Descripción breve del producto 3.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contacto" className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} El Verdon Growshop. Todos los derechos reservados.
          </p>
          <p>Contacto: info@elverdongrowshop.com</p>
        </div>
      </footer>
    </div>
  );
}