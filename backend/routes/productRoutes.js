import express from "express";
import { route } from "express/lib/router";
import Product from  './models/productModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()


route.get('/', (req, res) => {
  const product = await Product.find({})

  res.json(products)
})



route.get('/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})



export default router