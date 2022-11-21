import "../Estilos/StyleContenedor.css";
import shopping from "../Recursos/shopping-icon.png" ;
import del from "../Recursos/delete.png"
import axios from "axios";
import { ListaUsuarios } from "./AdminListaUsuarios";
import React from "react";





function alerta(){
  axios.get('http://localhost:3001/productos')
  .then(res => {
    const persons = res.data;
    console.log(persons)
   
    
})
}


export const Containerr = (props) => {
  const { name, description, img, price } = props;
 

function suprimir() {
  const urlbase='http://localhost:3001/productos'
  const id= 9
  const borrar=document.querySelector('#delete-request .status');
  axios.delete(urlbase+'/'+id)
    .then(() => borrar.innerHTML = 'Delete successful');

}


 
  
  return (
    <div className="card" >
      <div className="card__container">
        <div className="card__front">
          <img src={img} alt="food_img" className="card__img" />
        </div>
        <div className="card__back">{description}</div>
      </div>
      <span className="card__title">{name}</span>

      <div className="card__characteristics">
        <span className="card__price">$ {price}</span>
        <img src={shopping} alt="shopping_icon" className="card__imgShopping" onClick={alerta}/>
        <img src={del} alt="del_icon" className="card__imgDel" onClick={suprimir}/>
      </div>
    </div>
  );
};

