import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'
import Product from '../components/Product'

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
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating 
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              {product.description}
            </ListGroup.Item>

          </ListGroup>
        </Col>

      

      </Row>
    </>
  )
}

export default ProductScreen