export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-6 grow">
      {/* colocar productos de ejemplo */}
      <section className="w-11/12 flex flex-col">
        <h2 className="text-4xl font-bold mb-4">PRODUCTOS DESTACADOS</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-96">
          {/* Tarjeta Grande */}
          <div className="row-span-2  rounded-lg p-4 border-2 border-black">
            <div className="flex items-center justify-start gap-5 w-full h-full">
              <div className="rounded-lg p-4 border-2 border-black h-11/12 w-1/2">Imagen</div>
              <div className="h-11/12 w-1/2">
                <h3 className="text-2xl font-bold mb-2">Producto Grande</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in recusandae eligendi quas eius earum impedit vel labore possimus, repellendus, quo ut asperiores dignissimos iste similique. Officiis facilis modi ea!</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Ver Detalles</button>
              </div>
            </div>
          </div>

          {/* Tarjeta Pequeña 1 */}
          <div className=" rounded-lg p-4 border-2 border-black">
            <div className="flex items-center justify-start gap-5 w-full h-full">
              <div className="rounded-lg p-4 border-2 border-black h-11/12 w-1/2">Imagen</div>
              <div className="h-11/12 w-1/2">
                <h3 className="text-2xl font-bold mb-2">Producto Pequeño 1</h3>
                <p className="text-gray-600 mb-4 "> Nemo in recusandae eligendi quas eius earum impedit vel labore possimus.</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Ver Detalles</button>
                </div>
            </div>
          </div>

          {/* Tarjeta Pequeña 2 */}
          <div className=" rounded-lg p-4 border-2 border-black">
            <div className="flex items-center justify-start gap-5 w-full h-full">
              <div className="rounded-lg p-4 border-2 border-black h-11/12 w-1/2">Imagen</div>
              <div className="h-11/12 w-1/2">
                <h3 className="text-2xl font-bold mb-2">Producto Pequeño 2</h3>
                <p className="text-gray-600 mb-4 "> Nemo in recusandae eligendi quas eius earum impedit vel labore possimus.</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Ver Detalles</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
