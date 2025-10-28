import { useEffect, useState } from "react"; //importaciones
import "./Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]); //estado para guardar los productos

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/") //nos enganchamos a la API
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener los productos:", error));

  }, []);


  return (
    <div className="productos-container"> 
      <h2 className="productos-title">Lista de productos</h2>
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="productos-grid">

          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">

              <img className="producto-img" src={producto.image} alt={producto.title} />
              <h3 className="producto-titulo">{producto.title}</h3>
              <p className="producto-categoria">Categoría: {producto.category}</p>
              <p className="producto-precio">${producto.price}</p>
              <p className="producto-rating">⭐ {producto.rating.rate} ({producto.rating.count} reseñas)</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
