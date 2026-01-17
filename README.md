# 🛒 Web Store Application

A full-featured *Web Store application* built with *React* and *Redux*, designed to simulate a real-world e-commerce platform. The application allows users to browse products, manage a shopping cart, authenticate securely, and complete purchases through a clean and responsive user interface.

---

## 🚀 Features

- *Product Catalog* – Browse products displayed using reusable components  
- *Shopping Cart* – Add, remove, and update product quantities  
- *Cart Total Calculation* – Automatically calculates the total price  
- *User Authentication* – User registration, login, and logout  
- *Protected Routes* – Restricts access to authenticated users  
- *Shipment Options* – Select delivery methods during checkout  
- *Global State Management* – Centralized state using Redux  
- *Responsive Design* – Optimized for desktop and mobile devices  

---

## 🧰 Technologies Used

- *React* – Component-based frontend development  
- *Redux / Redux Toolkit* – Application-wide state management  
- *React Router* – Multi-page navigation  
- *JavaScript (ES6+)* – Application logic  
- *Bootstrap / CSS* – Styling and layout
- *HTML* – Application structure

---

## 📂 Project Structure

src/
│
├── components/
│   ├── Navbar.js
│   └── TotalPrice.js
│
├── context/
│   └── TotalPriceContext.js
│
├── pages/
│   ├── Home.js
│   ├── Products.js
│   ├── About.js
│   ├── Login.js
│   └── Register.js
│
├── App.js
├── index.js
└── index.css

*(Structure may vary slightly depending on implementation)*

---

## 🛠️ Installation & Setup

```bash
1. Clone the repository
- git clone https://github.com/your-username/your-repo-name.git

2. Navigate into the project directory
- cd your-repo-name

3. Install dependencies
- npm install

4. Start the application
- npm start

# The app will run at -- http://localhost:3000
