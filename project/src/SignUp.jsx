import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ 
        fullName: '', 
        email: '', 
        password: '', 
        confirmPassword: '' 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Password matching validation
        if(formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
        try {
            const response = await fetch("http://localhost:7000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    password: formData.password
                })
            });
            const resultMsg = await response.text();

            if (resultMsg === "Email Address Already in use! please try different one.") {
                alert("Account already created with this email! Please sign in or use a different email.");
            } else if (resultMsg === "Account created successfully") {
                alert("Account created successfully!");
                navigate('/signin');
            } else {
                alert("Error: " + resultMsg);
            }
        } catch (err) {
            console.log("Signup Error:", err);
            alert("Failed to connect to the server. Please try again later.");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-form-panel">
                    <div className="auth-form-header">
                        <h2>Create Account</h2>
                        <p>Join The Kodagu Pantry family today</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                type="text" 
                                id="fullName" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
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
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password" 
                                required 
                            />
                        </div>

                        <button type="submit" className="auth-submit-btn">Sign Up</button>
                    </form>

                    <div className="auth-footer">
                        <p>Already have an account? <NavLink to="/signin">Sign In</NavLink></p>
                    </div>
                </div>
                <div className="auth-image-panel signup-bg">
                    <div className="auth-image-overlay">
                        <h2>Join Our Community</h2>
                        <p>Be the first to know about fresh harvests and exclusive offers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
