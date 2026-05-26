import express from "express";
import { deleteNotes, getAllNotes, getNoteById, postNewNotes, updateNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id",getNoteById);

router.post("/",postNewNotes);

router.put("/:id",updateNotes);

router.delete("/:id",deleteNotes);


export default router;