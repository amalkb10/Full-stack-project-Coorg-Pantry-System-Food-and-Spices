import React, { useState } from 'react';
import './CartItems.css';
import { useCart } from './CartContext.jsx';
import { NavLink } from 'react-router-dom';

function CartItems() {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const [showCheckout, setShowCheckout] = useState(false);
    const [shippingDetails, setShippingDetails] = useState({
        address: '',
        pinCode: '',
        contact: ''
    });

    const handleCheckoutChange = (e) => {
        setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
    };

    const confirmOrder = (e) => {
        e.preventDefault();
        
        // Structure the order
        const orderData = {
            userEmail: "guest@kodagupantry.com", // You can pull genuine emails from auth state later
            items: cartItems,
            totalAmount: getCartTotal(),
            shippingAddress: shippingDetails.address,
            pinCode: shippingDetails.pinCode,
            contact: shippingDetails.contact
        };

        fetch("http://localhost:7000/createOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
        .then(res => res.text())
        .then(data => {
            console.log("=========================================");
            console.log("USER ACTION: Checkout Completed & Sent to DB!");
            console.log("Response from server:", data);
            console.log("Order Data Payload: ", orderData);
            console.log("=========================================");
            alert(`Order confirmed!\nShipping to: ${shippingDetails.address}\nWe have received your order details in the backend.`);
            setShippingDetails({ address: '', pinCode: '', contact: ''});
            setShowCheckout(false);
            // Wait: since we don't have clearCart() in CartContext yet, we just prompt the user visually!
        })
        .catch(err => console.log("Checkout Error:", err));
    }

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart-page">
                <div className="empty-cart-container">
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added any products to your cart yet.</p>
                    <NavLink to="/products" className="continue-shopping-btn">
                        Continue Shopping
                    </NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h1>Your Shopping Cart</h1>
            </div>

            <div className="cart-container">
                <div className="cart-items-list">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="cart-item-category">{item.category}</p>
                                <p className="cart-item-price">₹{item.price}</p>
                            </div>
                            <div className="cart-item-quantity">
                                <button
                                    className="qty-btn"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >-</button>
                                <span>{item.quantity}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >+</button>
                            </div>
                            <div className="cart-item-total">
                                <span>₹{parseFloat(item.price) * item.quantity}</span>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{getCartTotal()}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>₹{getCartTotal()}</span>
                    </div>
                    
                    {!showCheckout ? (
                        <button className="checkout-btn" onClick={() => setShowCheckout(true)}>Proceed to Checkout</button>
                    ) : (
                        <form className="checkout-form" onSubmit={confirmOrder}>
                            <h4 className="checkout-form-title">Delivery Details</h4>
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Full Delivery Address" 
                                required 
                                value={shippingDetails.address}
                                onChange={handleCheckoutChange}
                                className="checkout-input"
                            />
                            <input 
                                type="text" 
                                name="pinCode" 
                                placeholder="PIN Code" 
                                required 
                                pattern="[0-9]{6}"
                                title="6 digit PIN code"
                                value={shippingDetails.pinCode}
                                onChange={handleCheckoutChange}
                                className="checkout-input"
                            />
                            <input 
                                type="tel" 
                                name="contact" 
                                placeholder="Contact Number" 
                                required 
                                value={shippingDetails.contact}
                                onChange={handleCheckoutChange}
                                className="checkout-input"
                            />
                            <button type="submit" className="confirm-order-btn">Confirm Purchase</button>
                            <button type="button" className="cancel-checkout-btn" onClick={() => setShowCheckout(false)}>Cancel</button>
                        </form>
                    )}

                    <NavLink to="/products" className="continue-link">Continue Shopping</NavLink>
                </div>
            </div>
        </div>
    );
}

export default CartItems;