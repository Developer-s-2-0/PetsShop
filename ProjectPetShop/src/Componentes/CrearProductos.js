import axios from "axios";
import React, { useState } from "react";
import { Button } from "./Button.js";
import { Input } from "./Input.js";
import { Message } from "./message.js";

import "../Estilos/StyleProductos.css";

export const FormAdd = () => {
  const [name, setName] = useState({ field: "", valid: null });
  const [price, setPrice] = useState({ field: "", valid: null });
  const [description, setDescription] = useState({ field: "", valid: null });
  const [image, setImage] = useState({ field: "", valid: null });
  const [validForm, setValidForm] = useState(null);
  const [amount, setAmount] = useState({ field: "", valid: null });
   const [product, setProduct] = useState(null);

  const expressions = {
    text: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    url: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
    price: /^\d{3,6}$/,
  };

   function createProduct() {
    axios
      .post("http://localhost:3001/productos", {
        name: name.field,
        description: description.field,
        price: price.field,
        img: image.field,
      })
      .then((response) => {
        setProduct(response.data);
      });
  }

  const choose = () => {
   if(name.valid === "true" &&
      description.valid === "true" &&
      image.valid === "true" &&
      amount.valid === "true" &&
      price.valid === "true"){
        createProduct();
      }
      
  };

   const submitForm = (e) => {
    e.preventDefault();
    if (
      
      name.valid === "true" &&
      description.valid === "true" &&
      image.valid === "true" &&
      amount.valid === "true" &&
      price.valid === "true"
    ) {
      setValidForm(true);
      
      setName({ field: "", valid: null });
      setPrice({ field: "", valid: null });
      setAmount({ field: "", valid: null });
      setDescription({ field: "", valid: null });
      setImage({ field: "", valid: null });
    } else {
      setValidForm(false);
    }
  };

  return (
    <form className="form__add" onSubmit={submitForm}>
      <Input
        tag="Nombre"
        type="text"
        name="name"
        placeholder="Ingresa el nombre"
        textError="Ingresa el nombre del producto"
        regex={expressions.text}
        status={name}
        changeStatus={setName}
      />
      <Input
        tag="Precio"
        type="number"
        name="price"
        placeholder="Ingrese el precio"
        textError="Por favor ingresa el precio del producto"
        regex={expressions.price}
        status={price}
        changeStatus={setPrice}
      />
      <Input
        tag="Descripción"
        type="text"
        name="description"
        placeholder="Ingrese la desccripción"
        textError="Por favor ingresa la descripción del producto"
        regex={expressions.text}
        status={description}
        changeStatus={setDescription}
      />
      <Input
        tag="Cantidad"
        type="number"
        name="amount"
        placeholder="Ingrese la cantidad del producto"
        textError="Por favor ingresa la cantidad del producto"
        regex={expressions.url}
        status={amount}
        changeStatus={setAmount}
      />
      
      <Input
        tag="URL Imagen"
        type="text"
        name="image"
        placeholder="Ingrese la URL de la imagen"
        textError="Por favor ingresa la URL de la imagen"
        regex={expressions.url}
        status={image}
        changeStatus={setImage}
      />
      <div className="form__button">
        <Button name="Agregar" action={choose}/>
      </div>
      {validForm === false && <Message text="alert" />}
      {validForm === true && <Message text="check" />}
    </form>
  );
};
