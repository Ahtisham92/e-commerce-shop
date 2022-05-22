import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'

const ProductScreen = () => {
  const params = useParams();
  const product = products.find(product => product._id == params.id);
  console.log(product)


  return (
    <>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>

        <Col md={3}>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen