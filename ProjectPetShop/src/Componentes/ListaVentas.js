import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Estilos/StyleListVentas.css"



export const Ventas = () => {
  const [sales, setSales] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/ventas").then((response) => {
      setSales(response.data);
    });
  }, []);

  if (!sales) return null;

  return (

    
    <div id="tablaSales">
        
          <br></br>
            <div id="title">
              <center>
                 <h3>Lista De Ventas</h3>

              </center>
             
            </div>
            
      <table>
         <thead>
          <tr>
            <th>Id</th>
            <th>Fecha</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Total</th>
            <th>Acciones</th>

          </tr>
        </thead>
         {sales.map((sale) => {
        return (
        
         
          <tbody>
             <tr>
                  <td>{sale.id}</td>
                  <td>{sale.fecha}</td>
                  <td>{sale.producto}</td>
                  <td>{sale.cantidad}</td>
                  <td>{'$'+sale.valorUnitario}</td>
                  <td>{'$'+sale.valorUnitario*sale.cantidad}</td>
                  <td><button>Quitar</button><button >Editar</button></td>
              </tr>

          </tbody>
          
               
            )
           
            
          
      
      })}

      </table>
     
    </div>
  );
};