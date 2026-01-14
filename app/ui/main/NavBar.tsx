'use client'
import Link from "next/link"
import {  MapPinned, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
const categorias = [
    {nombre: 'HOMBRE', subcategorias: [{ropa: ["Camisas", "Pantalones", "Chaquetas"], calzado: ["Zapatillas", "Botas", "Sandalias"], accesorios: ["Relojes", "Gafas", "Cinturones"]}]},
    {nombre: 'MUJER', subcategorias: [{ropa: ["Camisas", "Pantalones", "Chaquetas"], calzado: ["Zapatillas", "Botas", "Sandalias"], accesorios: ["Relojes", "Gafas", "Cinturones"]}]},
    {nombre: 'NIÑOS', subcategorias: [{ropa: ["Camisas", "Pantalones", "Chaquetas"], calzado: ["Zapatillas", "Botas", "Sandalias"], accesorios: ["Relojes", "Gafas", "Cinturones"]}]},
    {nombre: 'CALZADOS', subcategorias: [{zapatillas: ["Deportivas", "Casuales", "Formales"], ojotas: ["Botas", "Sandalias", "Mocasines"]}]},
    {nombre: 'ACCESORIOS', subcategorias: [{mochilas: ["Escolares", "Deportivas", "Urbanas"], billeteras: ["Hombre", "Mujer"], accesorios:["Relojes", "Gafas", "Cinturones"]}]},
]


export const NavBar = () => {
    const [active, setActive] = useState<null|string>(null);

    const handleActive = (categoria: string) => {
        
    }
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
              <h1 className="font-bold">Mi Ecommerse</h1>
            <nav>
              <ul className="flex gap-10 font-bold">
                <li onMouseOver={()=> setActive("HOMBRE")}><Link href="#">HOMBRE</Link></li>
                <li><Link href="#">MUJER</Link></li>
                <li><Link href="#">NIÑOS</Link></li>
                <li><Link href="#">CALZADOS</Link></li>
                <li><Link href="#">ACCESORIOS</Link></li>
              </ul>
            </nav>
            <div>
              <ul className="flex gap-10">
                <li><Link href="#"><Search /></Link></li>
                <li><Link href="#"><MapPinned /></Link></li>
                <li><Link href="#"><User /></Link></li>
                <li><Link href="#"><ShoppingCart /></Link></li>
              </ul>
            </div>
        </header>
  )
}
