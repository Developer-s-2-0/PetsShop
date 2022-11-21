import React from "react";
import { NavLink } from "react-router-dom";
import '../Estilos/Stylenav.css';


export const MenuNavegacion = ({rol}) => {
  return (
    <nav >
      <div>
        {rol ==="admin"?(
          <ul>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "desactive")}>Login            </NavLink>
           
            
            <NavLink to="/newproducts" className={({ isActive }) => (isActive ? "active" : "desactive")}>Crear productos           
            </NavLink>
            <NavLink to="/CrearUsuarios" className={({ isActive }) => (isActive ? "active" : "desactive")}>Crear Usuarios           
            </NavLink>
             <NavLink to="/ListaProductosAdmin" className={({ isActive }) => (isActive ? "active" : "desactive")}>Lista Productos
            </NavLink>
            <NavLink to="/ListaVentas" className={({ isActive }) => (isActive ? "active" : "desactive")}>Lista 
            de Ventas
            </NavLink>
            <NavLink to="/ListaUsuarios" className={({ isActive }) => (isActive ? "active" : "desactive")}>Lista 
            de Usuarios
            </NavLink>
          
           
            
          </ul>

        ):(
          <ul>
             <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "desactive")}>Login            
             </NavLink>
            <NavLink to="/ListaProductosUsuario" className={({ isActive }) => (isActive ? "active" : "desactive")}>Productos
            </NavLink>
            <NavLink to="/CarritoCompras" className={({ isActive }) => (isActive ? "active" : "desactive")}>Carrito de Compras
            </NavLink>

          </ul>
         

        )}
       
      </div>
     
    </nav>
  );
};
