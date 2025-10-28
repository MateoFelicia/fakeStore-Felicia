import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from "./Productos"
import ProductoDetalle from "./ProductoDetalle"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>
    </BrowserRouter>
  )
}