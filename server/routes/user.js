import express from "express";

import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/User.js"

const router = express.Router()


// GET ALL USERS
router.get("/", getAllUser)

// GET USER
router.get("/user", getUser)

// DELETE USER
router.delete("/user", deleteUser)

// UPDATE USER
router.put("/user", updateUser);


export default router