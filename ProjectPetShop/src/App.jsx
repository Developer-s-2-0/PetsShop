import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navegacion } from "./Componentes/navegacion.js";
import { MenuNavegacion } from "./Componentes/NavMenu";
import { Footer } from "./Componentes/Footer";

function App() {

  const [rol, setRol] = useState('user')

  return (
    <>
      <BrowserRouter>

        <MenuNavegacion rol={rol} />
        <Navegacion rol={rol} />
        <Footer rol={rol}/>

      </BrowserRouter>

    </>


  );
}

export default App;
