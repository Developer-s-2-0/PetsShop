import axios from "axios";
import React, { useEffect, useState } from "react";

import { Containerr } from "./Containerr.js";

export const ListaProductosAdmin = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/productos").then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) return null;

  return (
   
    <div className="container">
      {products.map((product) => {
        
        return (
          <Containerr
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            amount={product.amount}
            img={product.img}
            
          />
        );
      })}
    </div>
  );
};
