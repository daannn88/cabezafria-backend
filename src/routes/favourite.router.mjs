import express from "express";
import { createfavourite } from "../controllers/favourite.controller.mjs";

const router = express.Router();

router.post( '/api/favourite', createfavourite );








export default router;