import express from "express";
import { route } from "express/lib/router";
const router = express.Router()


route.get('/', (req, res) => {
  res.json(products)
})



route.get('/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})



export default router