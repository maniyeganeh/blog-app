import React from 'react';
import { Card } from 'react-bootstrap';
const CardComponent = ({ title, description, style, image, classStyle }) => {
  return (
    <Card className={classStyle}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: '100%', height: '350px', objectFit: 'cover' }}
        loading="lazy"
      />
      <Card.Title style={{ marginTop: '10px' }}>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card>
  );
};

export default CardComponent;
