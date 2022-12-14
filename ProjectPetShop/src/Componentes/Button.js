import "../Estilos/StyleButton.css";

export const Button = (props) => {
  const { name, action } = props;

  return (
    <button className="button__general" onClick={action}>
      {name}
    </button>
  );
};
