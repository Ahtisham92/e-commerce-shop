import express from "express";
import { route } from "express/lib/router";
import Product from  './models/productModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

// @desc Fetch all products
route.get('/',  asyncHandler(async (req, res) => {
  const product = await Product.find({})

  res.json(products)
}))


// @desc Fetch only one product based on id.
route.get('/:id', asyncHandler( async (req, res) => {
  const product = await Product.find(p => p._id === req.params.id)
  
  if(product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }

}))



export default router