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
            return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          })  
        }
      </Row> 
    </>
  )
}

export default HomeScreen
