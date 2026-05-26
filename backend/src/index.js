import express from "express";
import dotenv from "dotenv";
dotenv.config();

import rateLimiter from "./middlewares/rateLimiter.js";

import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "./config/db.js";


const app = express();

const port = 3000 || process.env.PORT;

connectDB();

//middleware
app.use(rateLimiter);
app.use(express.json());

app.use("/api/notes",notesRoutes);

app.listen(port, ()=>{
    console.log("Server is running on port :",port);
})