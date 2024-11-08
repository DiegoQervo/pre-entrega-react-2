import React from "react";
import { Link } from "react-router-dom";  // Link para la navegación
import { FaShoppingCart } from "react-icons/fa";  // Ícono de carrito

function Navbar() {return (
    <nav className="navbar">
    <ul className="navbar-links">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
    </ul>

    <div className="cart-icon">
        <FaShoppingCart size={30} />
        <span className="cart-count">0</span> {/* Aquí mostrarías la cantidad de artículos en el carrito */}
    </div>
    </nav>
);
}

export default Navbar;
