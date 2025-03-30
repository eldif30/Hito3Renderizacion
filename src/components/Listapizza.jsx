import { pizzas } from "../data/pizzas.jsx";
import CardPizza from "./CardPizza";

const Listapizza = ({ cart, setCart }) => {
  const agregarAlCarrito = (pizza) => {
    const yaExiste = cart.find((item) => item.id === pizza.id);
    if (yaExiste) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...pizza, cantidad: 1 }]);
    }
  };

  return (
    <div className="bg-secondary text-white py-4">
      <div className="container">
        <h2 className="text-center mb-4">Lista de Pizzas</h2>
        <div className="row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              pizza={pizza}
              onAgregar={agregarAlCarrito}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listapizza;
