'use client'
import Link from "next/link"
import {  MapPinned, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Desplegable } from "../herlpers/Desplegable";

export const NavBar = () => {
    const [active, setActive] = useState<null|string>(null);

    const handleActive = (categoria: string) => {
        setActive(categoria);
    }

    const handleInactive = () =>{
        setActive(null);
    }
  return (
    <div>
      <header className="flex justify-between items-center px-6 bg-white shadow-md relative z-50 h-1/5">
              <h1 className="font-bold">Mi Ecommerse</h1>
            <nav onMouseLeave={handleInactive}>
              <ul className="flex gap-10 font-bold">
                <li onMouseEnter={()=> handleActive("HOMBRE")} className="py-6">
                  <Link href="#">HOMBRE</Link>
                  
                </li>
                <li onMouseEnter={()=> handleActive("MUJER")} className="py-6">
                  <Link href="#">MUJER</Link>
                </li>
                <li onMouseEnter={()=> handleActive("NIÑOS")} className="py-6">
                  <Link href="#">NIÑOS</Link>                  
                </li>
                <li onMouseEnter={()=> handleActive("CALZADOS")} className="py-6">
                  <Link href="#">CALZADOS</Link>                  
                </li>
                <li onMouseEnter={()=> handleActive("ACCESORIOS")} className="py-6">
                  <Link href="#">ACCESORIOS</Link>                  
                </li>
              </ul>
              {active && <Desplegable active={active}/>}
            </nav>
            <div>
              <ul className="flex gap-6 items-center">
                <li>
                  <div className="flex items-center border rounded-md px-3 py-1 bg-white focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                  <input 
                    type="text" 
                    placeholder="Buscar productos..." 
                    className="bg-transparent outline-none border-none text-sm w-full"
                  />
                  <button className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-transform duration-200">
                    <Search size={18} />
                  </button>
                </div>
                </li>
                <li><Link href="#"><MapPinned /></Link></li>
                <li><Link href="#"><User /></Link></li>
                <li><Link href="#"><ShoppingCart /></Link></li>
              </ul>
            </div>
      </header>
    </div> 
  )
}
