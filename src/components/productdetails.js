import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Array de productos de ejemplo (esto podría venir de una API en una aplicación más compleja)
const products = [
    { id: 1, name: "Producto 1", description: "Descripción del producto 1", imageUrl: "https://via.placeholder.com/500", price: "$100" },
    { id: 2, name: "Producto 2", description: "Descripción del producto 2", imageUrl: "https://via.placeholder.com/500", price: "$150" },
    { id: 3, name: "Producto 3", description: "Descripción del producto 3", imageUrl: "https://via.placeholder.com/500", price: "$200" },
  // Más productos...
];

const ProductDetail = () => {
  const { id } = useParams();  // Obtener el ID del producto desde la URL
  const product = products.find(p => p.id === parseInt(id));  // Buscar el producto por ID

if (!product) {
    return <p>Producto no encontrado.</p>;
}

return (
    <div className="product-detail">
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.description}</p>
        <p><strong>Precio:</strong> {product.price}</p>
        <Link to="/">Volver al Catálogo</Link>
    </div>
);
};

export default ProductDetail;
