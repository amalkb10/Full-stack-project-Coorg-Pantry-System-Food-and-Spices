import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
    const navigate = useNavigate();
    const ourHighlights = [
        {
            image:
                "./western ghats.png",
            name: "WESTERN GHATS Honey",
            description: "Sustainably foraged from the biodiverse forests of the Western Ghats, The Kodagu Pantry's pure honey captures the untamed essence of Coorg. This 100% raw and unfiltered nectar retains all its natural enzymes, delivering a rich, woody sweetness born from diverse mountain flora. Perfect for a natural immunity boost or as a luxurious addition to your daily cup of tea.",
            rating: "5.0",
            price: "1000",
        },
        {
            image:
                "./forest honey.png",
            name: "FOREST HONEY",
            description: "Sourced directly from wild hives deep within Coorg's lush woodlands, our Pure Forest Honey is raw, unfiltered, and rich in natural nutrients. Every jar delivers a bold, earthy sweetness that reflects the diverse, untamed flora of the Kodagu region. Enjoy this wholesome, unpasteurized nectar as a natural sweetener or a daily wellness boost.",
            rating: "5",
            price: "1500",
        },
        {
            image:
                "./coffee wine.png",
            name: "COFFEE WINE",
            description: "Discover the spirit of Coorg's legendary plantations with The Kodagu Pantry's artisanal Coffee Wine. Handcrafted from premium roasted estate beans, this unique blend offers a smooth, velvety sip with deep espresso notes and a warming finish. A bold and decadent treat that is perfect for cozy evenings or pairing with rich desserts.",
            rating: "5",
            price: "1200",
        },
        {
            image:
                "./beetal.png",
            name: "BEETAL WINE",
            description: "Experience a truly unique taste of tradition with The Kodagu Pantry's Betel Leaf & Fruit Wine. This exotic artisanal blend balances the refreshing, peppery warmth of fresh betel leaves with the subtle sweetness of tropical Coorg fruits. A captivating and aromatic sip that serves as an unforgettable after-dinner digestif.",
            rating: "4.5",
            price: "1100",
        },
    ];

    const why = [
        {
            image:
                "./directly.png",
            whytext: "DIRECTLY SOURCED",
        },
        {
            image:
                "./precent.png",
            whytext: "100% PURE & NATURAL",
        },
        {
            image:
                "./cultral.png",
            whytext: "CULTURAL HERITAGE",
        },
    ];

    return (
        <div className='home'>
            <div className='section1'>
                <h1 className="sectxt">THE</h1>
                <p className='sectxtKK'> <span className='sectxtK'>K</span>ODAGU</p>
                <p className='sectxtP'>PANTERY</p>
                <p className="sectxt1">FRESH FROM THE HEART OF COORG</p>
            </div>
            <div className='categories-section'>
                <div className='category-card category-coffee'>
                    <h1 className='category-title'>Our Finest</h1>
                    <p className="category-subtitle">Coffee</p>
                    <button className='btn' onClick={() => navigate('/products')}>Shop Now</button>
                </div>
                <div className='category-card category-spices'>
                    <h1 className='category-title'>Local </h1>
                    <p className="category-subtitle">Spices</p>
                    <button className='btn' onClick={() => navigate('/products')}>Shop Now</button>
                </div>
                <div className='category-card category-honey'>
                    <h1 className='category-title'>Artisanal</h1>
                    <p className="category-subtitle">Honey</p>
                    <button className='btn' onClick={() => navigate('/products')}>Shop Now</button>
                </div>
                <div className='category-card category-wines'>
                    <h1 className='category-title'>Coorg</h1>
                    <p className="category-subtitle">Wines</p>
                    <button className='btn' onClick={() => navigate('/products')}>Shop Now</button>
                </div>
            </div>
            <h1 className="seller">BestSeller</h1>
            <div className='section4'>
                {ourHighlights.map((j, index) => {
                    return (
                        <div className="highlightcard" key={index}>
                            <img src={j.image} alt="highlightimg" width={150} height={150} className='bstimg' />
                            <p className="name">{j.name}</p>
                            <p className="description">{j.description}</p>
                            <p className="rating">{j.rating}</p>
                            <p className="price">{j.price}</p>
                            <button className='bstbtn' onClick={() => navigate('/products')}>Buy Now</button>
                        </div>
                    );
                })}
            </div>

            <div className="section5">
                <h1 className="why">Why Choose The Kodagu Pantry</h1>
                <div className="subsec5">
                    {why.map((i) => {
                        return (
                            <div className="cards3">
                                <img src={i.image} alt="whyimg" width={80} height={80} style={{ borderRadius: "50%" }} />
                                <p className="whytext">{i.whytext}</p>

                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="section6">
                <div className="footer-column footer-nav">
                    <h3>THE KODAGU PANTRY</h3>
                    <p onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</p>
                    <p onClick={() => navigate('/about')} style={{cursor: 'pointer'}}>About Us</p>
                    <p onClick={() => navigate('/contact')} style={{cursor: 'pointer'}}>Contact Us</p>
                    <p onClick={() => navigate('/services')} style={{cursor: 'pointer'}}>Services</p>
                    <p onClick={() => navigate('/products')} style={{cursor: 'pointer'}}>Products</p>
                    <p onClick={() => navigate('/blog')} style={{cursor: 'pointer'}}>Blog</p>
                    <p onClick={() => navigate('/portfolio')} style={{cursor: 'pointer'}}>Portfolio</p>
                    <p onClick={() => navigate('/faq')} style={{cursor: 'pointer'}}>FAQ</p>
                </div>
                <div className="footer-column footer-nav">
                    <h3>CUSTOMER CARE</h3>
                    <p onClick={() => navigate('/shipping')} style={{cursor: 'pointer'}}>Shipping Policy</p>
                    <p onClick={() => navigate('/returns')} style={{cursor: 'pointer'}}>Return Policy</p>
                    <p onClick={() => navigate('/privacy')} style={{cursor: 'pointer'}}>Privacy Policy</p>
                    <p onClick={() => navigate('/terms')} style={{cursor: 'pointer'}}>Terms of Service</p>
                    <p onClick={() => navigate('/faq')} style={{cursor: 'pointer'}}>FAQ</p>
                </div>
                <div className="footer-column footer-nav">
                    <h3>CONTACT US</h3>
                    <p onClick={() => window.location.href = 'mailto:thekodagupantry@gmail.com'} style={{cursor: 'pointer'}}>Email: thekodagupantry@gmail.com</p>
                    <p onClick={() => window.location.href = 'tel:+917204791362'} style={{cursor: 'pointer'}}>Phone: +91 7204791362</p>
                    <p onClick={() => navigate('/contact')} style={{cursor: 'pointer'}}>Address: 123, Coorg, Karnataka, India</p>
                </div>
                <div className="footer-column footer-nav">
                    <h3>FOLLOW US</h3>
                    <p onClick={() => window.open('https://facebook.com', '_blank')} style={{cursor: 'pointer'}}>Facebook</p>
                    <p onClick={() => window.open('https://instagram.com', '_blank')} style={{cursor: 'pointer'}}>Instagram</p>
                    <p onClick={() => window.open('https://twitter.com', '_blank')} style={{cursor: 'pointer'}}>Twitter</p>
                    <p onClick={() => window.open('https://linkedin.com', '_blank')} style={{cursor: 'pointer'}}>LinkedIn</p>
                </div>
            </div>
        </div >

    );
}

export default Home;