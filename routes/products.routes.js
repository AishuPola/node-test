import express from "express";
import {
  getAllProductsCtrl,
  getProductsByIdCtrl,
  deleteProductsByIdCtrl,
  AddProductsCtrl,
  editProductsByIdctrl,
} from "../controllers/products.controller.js";
const router = express.Router();
router.get("/", getAllProductsCtrl);
router.post("/", AddProductsCtrl);
router.delete("/:id", deleteProductsByIdCtrl);
router.put("/:id", editProductsByIdctrl);
export default router;
