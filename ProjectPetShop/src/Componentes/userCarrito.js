import axios from "axios";
import React, { useEffect, useState } from "react";
import {Ctable} from './tablaCarritoUser.js';

const baseURL = "http://localhost:3001/carrito";



 export const CarritoCompras = () => {
 
    return(
        <div>
           <br></br>
           <br></br>
           <center>
                <h1>Carrito de Compras</h1>
           </center>
            
            <Ctable          
           
            />

            

            
        </div>
    );
    
  
} ;