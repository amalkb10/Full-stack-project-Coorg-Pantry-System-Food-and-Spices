import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Services from './Services.jsx';
import Products from './Products.jsx';
import Blog from './Blog.jsx';
import Portfolio from './Portfolio.jsx';
import FAQ from './FAQ.jsx';
import CartItems from './CartItems.jsx';
import { CartProvider } from './CartContext.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import AdminLogin from './AdminLogin.jsx';
import AdminDashboard from './AdminDashboard.jsx';

function App() {
  return (
    <CartProvider>
      <div>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
