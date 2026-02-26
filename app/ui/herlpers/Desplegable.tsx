const categorias = [
    {
        nombre: 'HOMBRE',
        subcategorias: ["ropa", "calzado", "accesorios"],
        articulos: [
            ["Camisas", "Pantalones", "Chaquetas"],
            ["Zapatillas", "Botas", "Sandalias"],
            ["Relojes", "Gafas", "Cinturones"]
        ]
    },
    {
        nombre: 'MUJER',
        subcategorias: ["ropa", "calzado", "accesorios"],
        articulos: [
            ["Camisas", "Pantalones", "Chaquetas"],
            ["Zapatillas", "Botas", "Sandalias"],
            ["Relojes", "Gafas", "Cinturones"]
        ]
    },
    {
        nombre: 'NIÑOS',
        subcategorias: ["ropa", "calzado", "accesorios"],
        articulos: [
            ["Camisas", "Pantalones", "Chaquetas"],
            ["Zapatillas", "Botas", "Sandalias"],
            ["Relojes", "Gafas", "Cinturones"]
        ]
    },
    {
        nombre: 'CALZADOS',
        subcategorias: ["zapatillas", "ojotas"],
        articulos: [
            ["Deportivas", "Casuales", "Formales"],
            ["Botas", "Sandalias", "Mocasines"]
        ]
    },
    {
        nombre: 'ACCESORIOS',
        subcategorias: ["mochilas", "billeteras", "accesorios"],
        articulos: [
            ["Escolares", "Deportivas", "Urbanas"],
            ["Hombre", "Mujer"],
            ["Relojes", "Gafas", "Cinturones"]
        ]
    }
];
export const Desplegable = ({active}: {active: string}) => {
  return (
    <div className="absolute top-full left-0 w-full bg-black text-white p-8 z-40 shadow-xl border-t border-gray-800">
        {categorias.filter(cat => cat.nombre === active).map((cat) => 
          <div key={cat.nombre}>
            <div className="flex justify-start gap-16">
              {cat.subcategorias.map((subcat,index) => (
                <div key={index+subcat} className="flex flex-col gap-3">
                  <h3 className="font-bold text-lg">{subcat.toUpperCase()}</h3>
                  <ul className="flex flex-col gap-2">
                    {cat.articulos[index].map((articulo) => (
                      <li key={articulo} className="text-sm hover:underline cursor-pointer">{articulo}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
  )
}
