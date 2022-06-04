import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import Product from  './models/productModel.js'
import asyncHandler from 'express-async-handler'


dotenv.config();

connectDB();

const app = express()

app.get('/', async (req, res) => {
  const product = await Product.find({})
})


app.use('/api/products/', productRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))