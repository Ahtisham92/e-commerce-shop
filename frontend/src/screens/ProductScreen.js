import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'

const ProductScreen = () => {
  const params = useParams();
  const product = products.find(product => product._id == params.id);
  console.log(product)


  return (
    <div>{product.name}</div>
  )
}

export default ProductScreen