import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('kp_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [admin, setAdmin] = useState(() => {
        const savedAdmin = localStorage.getItem('kp_admin');
        return savedAdmin ? JSON.parse(savedAdmin) : null;
    });

    const loginUser = (userData) => {
        setUser(userData);
        localStorage.setItem('kp_user', JSON.stringify(userData));
    };

    const loginAdmin = (adminData) => {
        setAdmin(adminData);
        localStorage.setItem('kp_admin', JSON.stringify(adminData));
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('kp_user');
    };

    const logoutAdmin = () => {
        setAdmin(null);
        localStorage.removeItem('kp_admin');
    };

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((item) => item.id === product.id);
            if (itemExists) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            getCartTotal,
            user,
            loginUser,
            logoutUser,
            admin,
            loginAdmin,
            logoutAdmin
        }}>
            {children}
        </CartContext.Provider>
    );
};
