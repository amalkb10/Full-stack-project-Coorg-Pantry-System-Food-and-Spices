````md
# Coorg Pantry System

## Overview

The Coorg Pantry System is a full-stack web application developed to simplify pantry and inventory management operations. The system allows users to manage products, monitor stock availability, and perform inventory-related operations through a responsive and user-friendly dashboard.

## Features

- Product inventory management
- Add, update, and delete pantry items
- Real-time stock monitoring
- User-friendly dashboard interface
- RESTful API integration
- Responsive frontend design
- Database connectivity for storing product details

## Tech Stack

- Backend: Node.js with Express.js
- Frontend: React.js
- Database: MongoDB

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (v4 or later)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/coorg-pantry-system.git
cd coorg-pantry-system
```

2. Install backend dependencies:

```bash
cd product-backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../project
npm install
```

4. Create a `.env` file in the `product-backend` directory with the following content:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

5. Create another `.env` file in the `project` directory with the following content:

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

# Running the Application

## 1. Start the Backend Server

```bash
cd product-backend
npm start
```

Backend server runs on:

```bash
http://localhost:5000
```

---

## 2. Start the Frontend Application

Open a new terminal and run:

```bash
cd project
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

- GET `/api/products` - Get all pantry products
- GET `/api/products/:id` - Get product by ID
- POST `/api/products` - Add new product
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product

---

# Design Choices

1. **Full-Stack Architecture**  
   The application is divided into frontend and backend modules for better scalability and maintenance.

2. **RESTful API**  
   Express.js is used to create RESTful APIs for smooth communication between frontend and backend.

3. **MongoDB Database**  
   MongoDB provides flexible document-based storage for managing pantry and inventory data efficiently.

4. **Responsive Frontend**  
   React.js is used to build an interactive and responsive user interface for better user experience.

5. **Component-Based Structure**  
   The frontend follows a reusable component-based architecture for cleaner and maintainable code.

6. **Error Handling**  
   Proper error handling is implemented in both frontend and backend for stable application performance.

---

# UI

![dashboard](dashboard.png)

---

# Dependencies

## Backend Dependencies

- express: Web application framework
- mongoose: MongoDB object modeling tool
- cors: Enable CORS support
- dotenv: Loads environment variables
- nodemon: Development server utility

## Frontend Dependencies

- react: JavaScript library for building user interfaces
- react-dom: React package for DOM rendering
- axios: Promise-based HTTP client
- react-router-dom: Routing library for React
- vite: Frontend build tool

---

# Author

Amal K B

---

# License

This project is developed for educational and learning purposes.
````
