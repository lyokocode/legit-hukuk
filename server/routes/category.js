import express from "express";

import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/Category.js"

const router = express.Router()

// GET ALL CATEGORIES
router.get("/", getAllCategories)

// GET CATEGORY
router.get("/category", getCategory)

// CREATE NEW CATEGORY
router.post("/", createCategory)

// DELETE CATEGORY
router.delete("/category", deleteCategory)

// UPDATE CATEGORY
router.put("/category", updateCategory);

export default router