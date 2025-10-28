import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./ProductoDetalle.css"

export default function ProductoDetalle() { //componente para el detalle del producto
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`) //fetch al producto por id
            .then((res) => res.json())
            .then((data) => setProducto(data))
            .catch((err) => console.error("Error:", err))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p className="loading">Cargando producto...</p>
    if (!producto) return <p className="error">No se encontró el producto.</p>

    return ( // Detalle del producto
        <div className="detalle-container">
            <img src={producto.image} alt={producto.title} className="detalle-img" />
            <div className="detalle-info">
                <h2>{producto.title}</h2>
                <p className="detalle-descripcion">{producto.description}</p>
                <p><strong>Categoría:</strong> {producto.category}</p>
                <p><strong>Precio:</strong> ${producto.price}</p>
                <p><strong>Calificación:</strong> ⭐ {producto.rating.rate}</p>

                <Link to="/" className="volver-boton">Volver</Link>
            </div>
        </div>
    )
}
