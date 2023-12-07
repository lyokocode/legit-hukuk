import express from "express";

import { getAllUser, getUser } from "../controllers/User.js"

const router = express.Router()


// GET ALL USERS
router.get("/", getAllUser)

// GET USER
router.get("/user", getUser)

export default router