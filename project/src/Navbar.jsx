import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext.jsx'

function Navbar() {
    const { cartItems, user, logoutUser, admin, logoutAdmin } = useCart();
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        if(window.confirm("Are you sure you want to log out?")) {
            if (admin) {
                logoutAdmin();
            } else {
                logoutUser();
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <div className="nav-left">
                    {/* Physical Logo Image */}
                    <img src="/leaf_watermark.png" alt="Kodagu Pantry Logo" className="logo-img" />
                </div>

                <div className='nav-center'>
                    {/* Centered Brand Typography */}
                    <div className='navtext'>
                        <h1 className='text'>THE</h1>
                        <p className='text1'><span className='text1K'>K</span>ODAGU PANTRY</p>
                    </div>
                </div>

                <div className="nav-right">
                {/* E-commerce & Menus */}
                <NavLink to={"/cart"} className="NavLinks cart-link">
                    Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </NavLink>
                
                <div className="hamburger-wrapper" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="hamburger-icon">☰</span>
                    {isMenuOpen && (
                        <div className="dropdown-menu">
                            <NavLink to={"/services"} className="NavLinks drop-link" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
                            <NavLink to={"/blog"} className="NavLinks drop-link" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
                            <NavLink to={"/portfolio"} className="NavLinks drop-link" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
                            <NavLink to={"/faq"} className="NavLinks drop-link" onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
                            <NavLink to={"/contact"} className="NavLinks drop-link" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                            <hr style={{border: '0.5px solid #d4ddd5', margin: '0'}}/>
                            <NavLink to={"/admin"} className="NavLinks drop-link" onClick={() => setIsMenuOpen(false)}>Admin Portal</NavLink>
                        </div>
                    )}
                </div>

                {/* Authentication block - Conditional Rendering */}
                {admin ? (
                    <div className="user-profile-section admin-profile">
                        <span className="user-welcome">Hi, Admin</span>
                        <button onClick={handleLogout} className="nav-auth-btn logout-btn">Logout</button>
                    </div>
                ) : user ? (
                    <div className="user-profile-section">
                        <span className="user-welcome">Hi, {user.name || user.email.split('@')[0]}</span>
                        <button onClick={handleLogout} className="nav-auth-btn logout-btn">Logout</button>
                    </div>
                ) : (
                    <>
                        <NavLink to={"/signin"} className="NavLinks nav-auth-btn sign-in-btn">Sign In</NavLink>
                        <NavLink to={"/signup"} className="NavLinks nav-auth-btn sign-up-btn">Sign Up</NavLink>
                    </>
                )}
            </div>
            </div>

            {/* SECONDARY ROW FOR LINKS */}
            <div className="navbar-bottom">
                <NavLink to={"/"} className="NavLinks">Home</NavLink>
                <NavLink to={"/about"} className="NavLinks">About</NavLink>
                <NavLink to={"/products"} className="NavLinks">Products</NavLink>
                <NavLink to={"/cart"} className="NavLinks cart-link">
                    Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;