// src/pages/Products.js
import React, { useContext, useState } from "react";
import { Card, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { TotalPriceContext } from "../context/TotalPriceContext";

const Products = () => {
  const { totalPrice, setTotalPrice, setIsVisible } = useContext(TotalPriceContext);

  // Sample products array
  const [products, setProducts] = useState([
    {
      title: "Wireless Headphones",
      description: "High quality sound with noise cancelling features.",
      price: 120,
      image: "Headphones01.jpeg",
      colors: ["Black", "White", "Blue"],
      selectedColor: "Select Color",
    },
    {
      title: "Smart Watch",
      description: "Stay connected with this stylish smartwatch.",
      price: 200,
      image: "Watch01.jpeg",
      colors: ["Black", "Silver", "Gold"],
      selectedColor: "Select Color",
    },
    {
      title: "Gaming Mouse",
      description: "Precision and comfort for ultimate gaming.",
      price: 50,
      image: "gamingMouse01.jpeg",
      colors: ["Black", "Red", "Green"],
      selectedColor: "Select Color",
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and clear sound.",
      price: 80,
      image: "Speaker01.jpeg",
      colors: ["Blue", "Grey", "Black"],
      selectedColor: "Select Color",
    },
    {
      title: "Drone",
      description: "Capture stunning aerial photos and videos.",
      price: 400,
      image: "Drone01.jpeg",
      colors: ["Black", "White", "Orange"],
      selectedColor: "Select Color",
    },
    {
      title: "Laptop",
      description: "Powerful performance in a sleek design.",
      price: 1500,
      image: "Laptop01.jpeg",
      colors: ["Silver", "Grey", "Black"],
      selectedColor: "Select Color",
    },
    {
      title: "Smartphone",
      description: "Latest smartphone with amazing camera quality.",
      price: 900,
      image: "Phone01.jpeg",
      colors: ["Blue", "Black", "Purple"],
      selectedColor: "Select Color",
    },
    {
      title: "Tablet",
      description: "Lightweight and powerful tablet for work and play.",
      price: 600,
      image: "Tablet01.jpeg",
      colors: ["White", "Black", "Gold"],
      selectedColor: "Select Color",
    },
    {
      title: "Camera",
      description: "Capture your moments with a high-res camera.",
      price: 1100,
      image: "Camera01.jpeg",
      colors: ["Black", "Silver", "Red"],
      selectedColor: "Select Color",
    },
    {
      title: "Fitness Tracker",
      description: "Track your health and fitness with style.",
      price: 150,
      image: "fitnessTracker01.jpeg",
      colors: ["Pink", "Black", "Grey"],
      selectedColor: "Select Color",
    },
  ]);

  // Handle color selection
  const handleColorSelect = (index, selectedColor) => {
    const updatedProducts = [...products];
    updatedProducts[index].selectedColor = selectedColor;
    setProducts(updatedProducts);
  };

  // Handle buying a product
  const handleBuy = (price) => {
    setTotalPrice((prev) => prev + price);
    setIsVisible(true); // Show the total price component when a product is bought
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Products</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>

                {/* Dropdown for color selection */}
                <DropdownButton
                  title={product.selectedColor}
                  onSelect={(eventKey) => handleColorSelect(index, eventKey)}
                  className="mb-3"
                >
                  {product.colors.map((color, colorIndex) => (
                    <Dropdown.Item key={colorIndex} eventKey={color}>
                      {color}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>

                {/* Product price and Buy button */}
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-bold">${product.price}</span>
                  <button className="btn btn-primary" onClick={() => handleBuy(product.price)}>
                    Buy
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;