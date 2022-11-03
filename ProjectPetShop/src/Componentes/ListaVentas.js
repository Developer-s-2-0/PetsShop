import JsonData from "../data/dataVentas.json";
import { React } from "react";
import "../Estilos/StyleListVentas.css"


export function Ventas(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr id="tabl">
                    <td>{info.id}</td>
                     <td>{info.fecha}</td>
                    <td>{info.Producto}</td>
                    <td>{info.Descripción}</td>
                    <td>{info.Cantidad}</td>
                    <td>{info.ValorUn}</td>
                    <td>{info.Cantidad*info.ValorUn}</td>
                    
                    
    
                </tr>
            )
        }
    )
 
    return(
        
        <div>
          <br></br>
            <div id="title">
              <center>
                 <h3>Lista De Ventas Realizadas</h3>

              </center>
             
            </div>
            
          
            
            <table id="encabezado">
                <thead>
                    <tr >
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Producto</th>
                    <th>Descripcion</th>
                    <th>Cantidad   </th>
                    <th>ValorUnitario</th>
                    <th>Total</th>
                    

                    </tr>
                </thead>
                <tbody> 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 