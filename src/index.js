import express from "express"
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js"

 const app= express();


app.use(express.json());
app.use(cors());
app.use('/auth', authRouter)
app.use('/api/users', userRouter);

import productRouter from "./routes/product.route.js"
app.use("/api/products", productRouter);

import adminProductRouter from "./routes/adminProduct.route.js"
app.use("/api/admin/products", adminProductRouter);

import adminOrderRouter from "./routes/adminorder.route.js"
app.use("/api/admin/orders", adminOrderRouter);

import cartRouter from "./routes/cart.route.js"
app.use("/api/cart", cartRouter);

import cartItemRouter from "./routes/cartItem.route.js"
app.use("/api/cart_items", cartItemRouter);

import orderRouter from "./routes/order.route.js"
app.use("/api/orders", orderRouter);

import reviewRouter from "./routes/review.route.js"
app.use("/api/reviews", reviewRouter);

import ratingRouter from "./routes/rating.route.js"
app.use("/api/ratings", ratingRouter);

import paymentRouter from "./routes/payment.route.js"
app.use("/api/payments", paymentRouter);



app.get('/', (req, res) => {
    res.json({
        "status":400,
        "msg":"Its working!"
    });
})


export default app;