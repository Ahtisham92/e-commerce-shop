import React from 'react'
import products from '../products'
import {Col, Row} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <h3>Products list</h3>
      <Row>
        {
          products.map(product => {
            return <Col>
              <h2>{product.name}</h2>
              <h5>{product.brand}</h5>
              <h6>{product.category}</h6>
            </Col>
          })  
        }
      </Row> 
    </>
  )
}

export default HomeScreen
