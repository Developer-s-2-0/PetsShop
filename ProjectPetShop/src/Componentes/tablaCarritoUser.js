import React from "react";

export const Ctable =({props}) => {
 
  return(
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Acciones</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>concentrado</td>
            <td>10000</td>
            <td>Concentrado para perros y gatos</td>
            <td><button>Quitar</button><button type="submit">Confirmar</button></td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};