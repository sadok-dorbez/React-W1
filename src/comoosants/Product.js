import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function Product(props) {
  const { title, description, image, price, quantity } = props;
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Quantity:{quantity}</Card.Text>
        <Button variant="primary" onClick={handleLikeClick}>
          {likes} Likes
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{price} Dt</small>
      </Card.Footer>
    </Card>
  );
}

export default Product;
