import React, { useState, useEffect } from 'react';
import './Products.css';
import { useCart } from './CartContext.jsx';
import { useNavigate } from 'react-router-dom';

function Products() {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [toastMessage, setToastMessage] = useState('');

    // 🔥 FETCH PRODUCTS FROM BACKEND
    useEffect(() => {
        fetch("http://localhost:7000/getProducts")
            .then(res => res.json())
            .then(data => {
                console.log("Fetched products:", data);
                setProducts(data);
            })
            .catch(err => console.log("Error fetching:", err));
    }, []);

    // 🛒 ADD TO CART
    const handleAddToCart = (product) => {
        addToCart(product);
        setToastMessage(`"${product.name}" added to the cart!`);

        setTimeout(() => {
            setToastMessage('');
        }, 3000);
    };

    // ⚡ BUY NOW
    const handleBuyNow = (product) => {
        addToCart(product);
        navigate('/cart');
    };


    return (
        <div className="products-page">

            <div className="products-hero">
                <h1>Our Exquisite Range</h1>
                <p>Curated selections directly from the bountiful estates of Kodagu.</p>
            </div>

            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product._id}>

                        <div className="product-image-container">
                            <span className="product-category">{product.category}</span>
                            <img src={product.image} alt={product.name} />
                        </div>

                        <div className="product-info">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-description">{product.description}</p>

                            <div className="product-meta">
                                <span className="product-rating">★ {product.rating}</span>
                                <span className="product-price">₹{product.price}</span>
                            </div>

                            <div className="product-actions">
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </button>

                                <button
                                    className="buy-now-btn"
                                    onClick={() => handleBuyNow(product)}
                                >
                                    Buy Now
                                </button>


                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {toastMessage && (
                <div className="toast-notification">
                    {toastMessage}
                </div>
            )}
        </div>
    );
}

export default Products;