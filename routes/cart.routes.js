import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";

import {
  getAllCartProductsCtr,
  createCartProductsCtr,
  deleteCartProductsCtr,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", getAllCartProductsCtr);
router.post("/", createCartProductsCtr);
router.delete("/:id", deleteCartProductsCtr);

export default router;
