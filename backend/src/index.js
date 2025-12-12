import express from "express";

const app = express();

const port = 3000;

app.get("/api/notes",(req,res)=>{
    res.status(200).send("You got all the notes");
})

app.post("/api/notes",(req,res)=>{
    res.status(201).json({message : "Note created successfully"});
})

app.put("/api/notes/",(req,res)=>{
    res.status(200).json({message : "Note updated successfully"});
})

app.delete("/api/notes/:id",(req,res)=>{
    res.status(200).json({message:"Note deleted successfully"});
})

app.listen(port, ()=>{
    console.log("Server is running on port :",port);
})