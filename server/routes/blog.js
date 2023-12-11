import express from "express";

import { createBlog, deleteBlog, getAllBlogs, getBlog } from "../controllers/Blog.js"

const router = express.Router()

// GET ALL BLOGS
router.get("/", getAllBlogs)

// GET Blog
router.get("/blog", getBlog)

// CREATE NEW BLOG
router.post("/", createBlog)

// DELETE BLOG
router.delete("/blog", deleteBlog)

export default router