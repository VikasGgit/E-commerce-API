import { connectDb } from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config();
import app from "./index.js";

const port = process.env.PORT || 4000;
app.listen(port, 
    async ()=>{
       await connectDb();
        console.log("app listening on 4000 ") 
    })