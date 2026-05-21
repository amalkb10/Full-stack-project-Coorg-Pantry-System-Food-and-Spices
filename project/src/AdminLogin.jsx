import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from './CartContext.jsx';
import './AdminLogin.css';

function AdminLogin() {
    const navigate = useNavigate();
    const { loginAdmin } = useCart();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        fetch("http://localhost:7000/admin-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: credentials.username, password: credentials.password })
        })
            .then(res => {
                if (!res.ok) throw new Error("Unauthorized");
                return res.json();
            })
            .then(data => {
                if (data.authorized) {
                    loginAdmin({ username: credentials.username });
                    navigate('/admin/dashboard');
                }
            })
            .catch(err => {
                setError('Invalid Admin Credentials. Unauthorized access.');
            });
    };

    return (
        <div className="admin-login-page">
            <div className="admin-login-box">
                <h2>Admin Portal</h2>
                <p>Restricted Access</p>
                {error && <div className="admin-error">{error}</div>}

                <form onSubmit={handleLogin} className="admin-login-form">
                    <input
                        type="text"
                        name="username"
                        placeholder="Admin Username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Admin Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="admin-submit-btn">Login to Dashboard</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
