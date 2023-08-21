import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Mycard = ({image, text, description}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Sobre mi</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Mycard