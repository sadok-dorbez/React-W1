import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";

function Product(props) {
  const { title, description, image, price, quantity } = props;
  const [likes, setLikes] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [isBestProduct, setIsBestProduct] = useState(false);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    if (likes >= 5){
      setIsBestProduct (true);
    }
  }

  const handleBuyClick = () => {
    if (currentQuantity > 0) {
      setCurrentQuantity(currentQuantity - 1);
      setShowAlert(true); // add this line to show the Alert
      setTimeout(() => {
        setShowAlert(false); // add this line to hide the Alert after 2 seconds
      }, 2000);
    }
  };

  const [showAlert, setShowAlert] = useState(false); // add this line to initialize the state of the Alert component


  return (
    <Card  className={isBestProduct ? 'bestproduct' : ''}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Quantity:{quantity}</Card.Text>
        <Button variant="primary" onClick={handleLikeClick}>
          {likes} Likes
        </Button>
        <Button variant="primary" onClick={handleBuyClick} disabled={currentQuantity === 0}>
          Buy ({currentQuantity})
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{price} Dt</small>
      </Card.Footer>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          You bought an item!
        </Alert>
      )}

    </Card>

  );

}

export default Product;
