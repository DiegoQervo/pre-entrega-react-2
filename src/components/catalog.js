import React from 'react';
import { Link } from 'react-router-dom';

// Array de productos de ejemplo
const products = [
    { id: 1, name: "Producto 1", description: "Descripción del producto 1", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Producto 2", description: "Descripción del producto 2", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Producto 3", description: "Descripción del producto 3", imageUrl: "https://via.placeholder.com/150" },
];

const Catalog = () => {
return (
    <div>
        <h1>Catálogo de Productos</h1>
        <div className="product-list">
            {products.map(product => (
            <div key={product.id} className="product-item">
                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            
                <Link   Link to={`/product/${product.id}`}>Ver detalles</Link>
            </div>
        ))}
    </div>
    </div>
);
};

export default Catalog;
