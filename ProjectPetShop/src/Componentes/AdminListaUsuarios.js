import axios from "axios";
import React, { useEffect, useState } from "react";



export const ListaUsuarios = () => {
  const [users, setProducts] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/usuarios").then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!users) return null;

  return (

    
    <div id="tablaUser">
        
          <br></br>
            <div id="title">
              <center>
                 <h3>Lista De Usuarios</h3>

              </center>
             
            </div>
            
      <table>
         <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
            <th>Rol</th>
            <th>Acciones</th>

          </tr>
        </thead>
         {users.map((user) => {
        return (
        
         
          <tbody>
             <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.pass}</td>
                  <td>{user.rol}</td>
                  <td><button onClick={del}>Quitar</button><button >Editar</button></td>
              </tr>

          </tbody>
          
               
            )
           
            
          function del(){
            const urlbase='http://localhost:3001/usuarios'
            const id= user.id
            const borrar=document.querySelector('#delete-request .status');
            axios.delete(urlbase+'/'+id)
                .then(() => borrar.innerHTML = 'Delete successful');
          }
      
      })}

      </table>
     
    </div>
  );
};