import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from "./routes/userRoute.js";
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//app config (create instance of express server )
const app = express()
const port = process.env.PORT || 4000

console.log("MongoDB URI:", process.env.MONGODB_URL);

connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())  // (we can access the backend from any api)

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>console.log('Server started on PORT:'+ port))
