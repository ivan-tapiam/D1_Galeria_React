import React from 'react'
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
  return (
    <>
    <p>{props.end}</p>
    <Button variant="primary">Mas Informacion</Button>{' '}
    </>
  )
}

export default Footer