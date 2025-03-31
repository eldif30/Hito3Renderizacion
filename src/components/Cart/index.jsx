const Cart = ({ cart = [], setCart }) => {
  const aumentarCantidad = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
        )
        .filter((pizza) => pizza.cantidad > 0)
    );
  };

  const total = Array.isArray(cart)
    ? cart.reduce((acc, pizza) => acc + pizza.precio * pizza.cantidad, 0)
    : 0;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Carrito de Compras</h2>
          {cart.length === 0 ? (
            <p className="text-center text-muted">El carrito está vacío.</p>
          ) : (
            <>
              {cart.map((pizza) => (
                <div key={pizza.id} className="card mb-3">
                  <div className="card-body d-flex align-items-center">
                    <img
                      src={pizza.imagen}
                      alt={pizza.nombre}
                      className="img-thumbnail me-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex-grow-1">
                      <h5 className="card-title">{pizza.nombre}</h5>
                      <p className="card-text">
                        ${pizza.precio} x {pizza.cantidad}
                      </p>
                    </div>
                    <div>
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() => disminuirCantidad(pizza.id)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => aumentarCantidad(pizza.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <h4 className="text-end">Total: ${total}</h4>
              <button className="btn btn-primary w-100 mt-3 mb-5">
                Pagar 💳
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
