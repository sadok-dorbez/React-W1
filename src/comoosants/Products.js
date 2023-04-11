import Product from "./Product";
import React, { useState, useEffect } from "react";
//import placeholder from "../../public/placeholder.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
function Products() {
    const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);
   
    const products = [
      {
        title: "Produit 1",
        description: "Description du produit 1",
        image: "https://via.placeholder.com/150",
        price: 10,
        quantity: 5,
      },
      {
        title: "Produit 2",
        description: "Description du produit 2",
        image: "https://via.placeholder.com/150",
        price: 15,
        quantity: 10,
      },
      {
        title: "Produit 3",
        description: "Description du produit 3",
        image: "https://via.placeholder.com/150",
        price: 20,
        quantity: 15,
      },
    ];
  
    return (
        <Container>
           {showWelcome && (
        <Alert variant="info" onClose={() => setShowWelcome(false)} dismissible>
          Hello, welcome to our shop!
        </Alert>
      )}
        <Row>
          {products.map((product, index) => (
            <Col key={index} xs={12} md={4}>
              <Product {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default Products;