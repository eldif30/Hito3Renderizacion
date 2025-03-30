import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Listapizza from "./components/Listapizza";
import { pizzas } from "./data/pizzas.jsx";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";

function App() {
  const [cart, setCart] = useState([]);

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.precio * pizza.cantidad,
    0
  );

  return (
    <div>
      <Header total={total} />
      <Navbar total={total} />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Listapizza cart={cart} setCart={setCart} />

      <Cart cart={cart} setCart={setCart} />


      <Footer />
    </div>
  );
}

export default App;
