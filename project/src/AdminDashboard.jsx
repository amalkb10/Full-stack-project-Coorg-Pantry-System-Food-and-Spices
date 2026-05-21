import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('orders');
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    
    // Product Upload & Edit State
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', rating: '5.0', image: '' });
    const [imageFile, setImageFile] = useState(null);
    const [editProductId, setEditProductId] = useState(null);

    // Initial Fetch
    useEffect(() => {
        fetchOrders();
        fetchProducts();
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch("http://localhost:7000/get-users")
            .then(res => res.json())
            .then(data => setTotalUsers(data.length))
            .catch(err => console.log(err));
    };

    const fetchOrders = () => {
        fetch("http://localhost:7000/get-my-orders")
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err));
    };

    const fetchProducts = () => {
        fetch("http://localhost:7000/getProducts")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    };

    const deleteProduct = (id) => {
        if(window.confirm("Are you sure you want to delete this product?")) {
            fetch(`http://localhost:7000/deleteProduct/${id}`, { method: "DELETE" })
                .then(() => fetchProducts())
                .catch(err => console.log(err));
        }
    };

    const handleProductChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleImageSelection = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleEditClick = (product) => {
        setEditProductId(product._id);
        setNewProduct({
            name: product.name,
            description: product.description,
            price: product.price,
            rating: product.rating,
            image: product.image
        });
        setImageFile(null); // Clear any pending new image uploads just in case
        setActiveTab('add-product'); // Move them over to the form tab
    };

    const addProduct = async (e) => {
        e.preventDefault();
        let uploadedImageUrl = newProduct.image; // default to whatever is in state
        
        // 1. Upload Image via Multer if a totally fresh file was provided explicitly
        if(imageFile) {
            const formData = new FormData();
            formData.append("image", imageFile);
            
            try {
                const uploadRes = await fetch("http://localhost:7000/upload", {
                    method: "POST",
                    body: formData
                });
                const uploadData = await uploadRes.json();
                uploadedImageUrl = uploadData.imageUrl;
            } catch (err) {
                alert("Error uploading image");
                return;
            }
        }

        // 2. Add or Update product details to DB
        const productPayload = {
            ...newProduct,
            image: uploadedImageUrl || './western ghats.png', // fallback
            price: Number(newProduct.price),
            rating: Number(newProduct.rating)
        };

        if (editProductId) {
             // FIRE PUT UPDATE
             fetch(`http://localhost:7000/editProduct/${editProductId}`, {
                 method: "PUT",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify(productPayload)
             })
             .then(() => {
                 alert("Product updated successfully!");
                 resetForm();
             })
             .catch(err => console.log("Edit Error:", err));
        } else {
             // FIRE POST NEW
             fetch("http://localhost:7000/addProduct", {
                 method: "POST",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify(productPayload)
             })
             .then(() => {
                 alert("Product created successfully!");
                 resetForm();
             })
             .catch(err => console.log("Add Product Error:", err));
        }
    };

    const resetForm = () => {
        setNewProduct({ name: '', description: '', price: '', rating: '5.0', image: '' });
        setImageFile(null);
        setEditProductId(null);
        fetchProducts();
        setActiveTab('products');
    };


    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-logo">
                    <h2>Admin Panel</h2>
                    <p style={{marginTop: '10px', fontSize: '0.9rem', color: '#a4b3a6'}}>
                        Total Registered Users: <strong style={{color: '#fff'}}>{totalUsers}</strong>
                    </p>
                </div>
                <nav className="admin-nav">
                    <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
                        Manage Orders
                    </button>
                    <button className={activeTab === 'products' ? 'active' : ''} onClick={() => setActiveTab('products')}>
                        Manage Products
                    </button>
                    <button className={activeTab === 'add-product' ? 'active' : ''} onClick={() => { resetForm(); setActiveTab('add-product'); }}>
                        {editProductId ? '✏️ Edit Mode Active' : '+ Add Product'}
                    </button>
                </nav>
            </aside>

            <main className="admin-main">
                {/* ORDERS VIEW */}
                {activeTab === 'orders' && (
                    <div className="admin-panel orders-panel">
                        <header>
                            <h1>Incoming Orders ({orders.length})</h1>
                        </header>
                        <div className="table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Email / Contact</th>
                                        <th>Shipping Details</th>
                                        <th>Items</th>
                                        <th>Total (₹)</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, i) => (
                                        <tr key={i}>
                                            <td>{new Date(order.date).toLocaleDateString()}</td>
                                            <td>
                                                {order.userEmail}<br/>
                                                <small style={{color:'grey'}}>{order.contact}</small>
                                            </td>
                                            <td>
                                                <strong>Address:</strong> {order.shippingAddress || "N/A"}<br/>
                                                <strong>PIN:</strong> {order.pinCode || "N/A"}
                                            </td>
                                            <td>{order.items?.length || 0} items</td>
                                            <td className="amount">₹{order.totalAmount}</td>
                                            <td><span className="status-badge">{order.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {orders.length === 0 && <p className="empty-state">No orders have been placed yet.</p>}
                        </div>
                    </div>
                )}

                {/* PRODUCTS VIEW */}
                {activeTab === 'products' && (
                    <div className="admin-panel products-panel">
                        <header>
                            <h1>Inventory Management ({products.length})</h1>
                        </header>
                        <div className="table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price (₹)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product._id}>
                                            <td><img src={product.image} alt={product.name} className="admin-product-thumb" /></td>
                                            <td><strong>{product.name}</strong></td>
                                            <td className="desc-cell">{product.description}</td>
                                            <td className="amount">₹{product.price}</td>
                                            <td>
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button className="admin-edit-btn" onClick={() => handleEditClick(product)}>Edit</button>
                                                    <button className="admin-del-btn" onClick={() => deleteProduct(product._id)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {products.length === 0 && <p className="empty-state">Your storefront is empty.</p>}
                        </div>
                    </div>
                )}

                {/* ADD / EDIT PRODUCT FORM */}
                {activeTab === 'add-product' && (
                    <div className="admin-panel add-product-panel">
                        <header>
                            <h1>{editProductId ? "Edit Existing Product" : "Add New Product"}</h1>
                        </header>
                        <form onSubmit={addProduct} className="admin-form">
                            <div className="form-row">
                                <label>Product Name</label>
                                <input type="text" name="name" required value={newProduct.name} onChange={handleProductChange} />
                            </div>
                            <div className="form-row">
                                <label>Description</label>
                                <textarea name="description" rows="3" required value={newProduct.description} onChange={handleProductChange}></textarea>
                            </div>
                            <div className="form-row split">
                                <div>
                                    <label>Price (₹)</label>
                                    <input type="number" name="price" required value={newProduct.price} onChange={handleProductChange} />
                                </div>
                                <div>
                                    <label>Initial Rating</label>
                                    <input type="number" step="0.1" name="rating" required value={newProduct.rating} onChange={handleProductChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <label>Product Image Upload</label>
                                {editProductId && newProduct.image && (
                                    <div style={{marginBottom: '10px', fontSize: '0.9rem', color: '#556b58'}}>
                                        Current Image Hooked: <strong>{newProduct.image.substring(0, 40)}...</strong> <br/>
                                        <em>(Uploading a new file will permanently overwrite the current image)</em>
                                    </div>
                                )}
                                <input type="file" accept="image/*" onChange={handleImageSelection} required={!editProductId} />
                            </div>
                            
                            <button type="submit" className="admin-submit-action">
                                {editProductId ? "Confirm & Update Details" : "Publish Product"}
                            </button>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
}

export default AdminDashboard;
