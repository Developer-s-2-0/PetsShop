import React from "react";
import facebook from "../Recursos/facebook_icon.png";
import instagram from "../Recursos/instagram_icon.png";
import twitter from "../Recursos/twitter_icon.png";
import whatsapp from "../Recursos/whatsapp_icon.png";
import '../Estilos/StyleFooter.css';


export const Footer = () => {
  return (
    <footer>
      <a href=""
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer__img" src={facebook} alt="facebook_icon" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer__img" src={instagram} alt="instagram_icon" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer__img" src={twitter} alt="twitter_icon" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <img className="footer__img" src={whatsapp} alt="whatsapp_icon" />
      </a>
    </footer>
  );
};