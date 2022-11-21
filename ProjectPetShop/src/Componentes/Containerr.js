import React from "react";
import "../Estilos/StyleContenedor.css";
import shopping from "../Recursos/shopping-icon.png" ;

export const Containerr = (props) => {
  const { name, description, img, price } = props;

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__front">
          <img src={img} alt="food_img" className="card__img" />
        </div>
        <div className="card__back">{description}</div>
      </div>
      <span className="card__title">{name}</span>

      <div className="card__characteristics">
        <span className="card__price">$ {price}</span>
        <img src={shopping} alt="shopping_icon" className="card__imgShopping" />
      </div>
    </div>
  );
};