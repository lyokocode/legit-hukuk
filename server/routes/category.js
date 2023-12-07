import express from "express";

import { createCategory, getAllCategories, getCategory } from "../controllers/Category.js"

const router = express.Router()

// GET ALL CATEGORIES
router.get("/", getAllCategories)

// GET CATEGORY
router.get("/category", getCategory)

// CREATE NEW CATEGORY
router.post("/", createCategory)

export default router