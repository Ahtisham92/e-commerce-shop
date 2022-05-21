import React from 'react'
import products from '../products'
import {Col, Row} from 'react-bootstrap'
import Product from '../components/Product'


const HomeScreen = () => {
  return (
    <>
      <h3>Products list</h3>
      <Row>
        {
          products.map(product => {
            return <Col sm={12} md={6} lg={3} xl={2}>
              <Product product={product} />
            </Col>
          })  
        }
      </Row> 
    </>
  )
}

export default HomeScreen
