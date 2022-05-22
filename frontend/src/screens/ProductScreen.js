import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'

const ProductScreen = ({ match }) => {
  console.log(`match => ${match}`)
  const product = products.filter(product => product._id = match);
  console.log(`product => ${product}`)


  return (
    <h1>{product.name}</h1>
  )
}

export default ProductScreen