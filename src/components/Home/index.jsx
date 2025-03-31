import { pizzas } from "../data/pizzas";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
