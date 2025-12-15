import express from "express";
import dotenv from "dotenv";
dotenv.config();

import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "./config/db.js";


const app = express();

const port = 3000;

connectDB();

app.use("/api/notes",notesRoutes);

app.listen(port, ()=>{
    console.log("Server is running on port :",port);
})