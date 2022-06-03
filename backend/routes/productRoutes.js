import express from "express";
const router = express.Router()


app.get('/', (req, res) => {
  res.json(products)
})



app.get('/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})



export default router