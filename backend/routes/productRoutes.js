import express from "express";
// import { route } from "express/lib/router";
import Product from  '../models/productModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
router.get('/',  asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
}))


// @desc    Fetch only one product based on id.
// @route   GET /api/products/:id
// @access  public
router.get('/:id', asyncHandler( async (req, res) => {
  // console.log(req.params.id)
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    const product = await Product.findById(req.params.id)

    if(product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
  
 

}))



export default router