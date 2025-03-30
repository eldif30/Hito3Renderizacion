const CardPizza = ({ pizza, onAgregar }) => {
  return (
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <div className="card h-100 text-center p-2 d-flex flex-column">
        <img
          src={pizza.imagen}
          alt={pizza.nombre}
          className="card-img-top mx-auto"
          style={{ height: "100px", objectFit: "cover" }}
        />
        <div className="card-body p-2 d-flex flex-column">
          <h6 className="card-title mb-1">{pizza.nombre}</h6>
          <p className="card-text text-muted mb-2" style={{ fontSize: "0.85rem" }}>
            ${pizza.precio}
          </p>
          <div
            className="mb-2 text-start"
            style={{
              fontSize: "0.75rem",
              flexGrow: 1,
              minHeight: "60px",
              overflow: "hidden",
            }}
          >
            <strong>Ingredientes:</strong>
            <ul className="mb-0 ps-3">
              {pizza.ingredientes.map((ing, index) => (
                <li key={index} style={{ lineHeight: "1.2" }}>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => onAgregar(pizza)}
            className="btn btn-sm btn-light btn-outline-dark
 w-100 mt-auto"
          >
            Agregar 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
  