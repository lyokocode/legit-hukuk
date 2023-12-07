import { User } from "../models/User.js";
import { createError } from "../utils/error.js";


// GET ALL USERS
export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);

    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    const { slug } = req.query;

    try {
        const user = await User.findOne({
            where: { slug }
        })
        if (!user) {
            return next(createError(404, " User is not defined"))

        }
        res.json(user);
    } catch (err) {
        next(err)
    }
}
