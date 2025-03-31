import "./Header.css";

function Header({ total = 0 }) {
  const totalFormateado = total.toLocaleString("es-CL");

  return (
    <header className="header">
      <div>
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
}

export default Header;
