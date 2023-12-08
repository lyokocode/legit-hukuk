import { User } from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js";


// REGISTER
export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const imagePath = req.files && req.files.avatar;
    const aboutPath = req.files && req.files.about;

    try {

        if (!imagePath) {
            return res.status(400).json({ message: 'The image is missing or incorrect.' });
        }
        if (!aboutPath) {
            return res.status(400).json({ message: 'The "about file" is missing or incorrect.' });
        }

        const { data: imageData, error: imageError } = await storageClient
            .from('legitstore/user/avatar')
            .upload(`${Date.now()}.png`, imagePath.data, {
                contentType: imagePath.mimetype,
                cacheControl: '3600',
            });

        const { data: aboutData, error: aboutError } = await storageClient
            .from('legitstore/user/about')
            .upload(`${Date.now()}.md`, aboutPath.data, {
                contentType: aboutPath.mimetype,
                cacheControl: '3600',
            });

        if (imageError) {
            console.error('image upload error:', imageError);
            return res.status(500).json({ message: 'An error occurred while loading the image.' });
        }
        if (aboutError) {
            console.error('file upload error:', imageError);
            return res.status(500).json({ message: 'An error occurred while loading the "about file".' });
        }

        const imageUrl = imageData.path;
        const aboutUrl = aboutData.path;


        const newUser = await User.create({
            fullName: req.body.fullName,
            userName: req.body.userName,
            email: req.body.email,
            position: req.body.position,
            detail: req.body.detail,
            avatar: imageUrl,
            about: aboutUrl,
            password: hash,
            isAdmin: req.body.isAdmin,
            linkedin: req.body.linkedin,
            twitter: req.body.twitter,
            activeAreas: req.body.activeAreas,
            languages: req.body.languages,
        });
        return res.status(201).json(newUser);

    } catch (err) {
        next(err);
    }
}