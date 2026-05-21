import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext.jsx';
import './SignIn.css';

function SignIn() {
    const navigate = useNavigate();
    const { loginUser } = useCart();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch("http://localhost:7000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();

            if (data === "unauthorized" || data === "Something went wrong!.please try again") {
                setError("Invalid email or password.");
            } else if (data._id) {
                // Success: data is the user object
                loginUser(data);
                alert(`Welcome back, ${data.name || data.email}!`);
                navigate('/');
            } else {
                setError("An unexpected error occurred.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Could not connect to the server.");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-image-panel signin-bg">
                    <div className="auth-image-overlay">
                        <h2>Welcome Back</h2>
                        <p>Rediscover the pure and authentic tastes of Kodagu.</p>
                    </div>
                </div>
                <div className="auth-form-panel">
                    <div className="auth-form-header">
                        <h2>Sign In</h2>
                        <p>Access your Kodagu Pantry account</p>
                        {error && <p style={{ color: '#e74c3c', marginTop: '10px', fontWeight: 'bold' }}>{error}</p>}
                    </div>
                    
                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={credentials.email}
                                onChange={handleChange}
                                placeholder="Enter your email" 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={credentials.password}
                                onChange={handleChange}
                                placeholder="Enter your password" 
                                required 
                            />
                        </div>

                        <div className="form-actions-row">
                            <label className="remember-me">
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>

                        <button type="submit" className="auth-submit-btn">Sign In</button>
                    </form>

                    <div className="auth-footer">
                        <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
