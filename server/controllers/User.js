import { Blog } from "../models/Blog.js";
import { User } from "../models/User.js";
import { Category } from "../models/Category.js";
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js"

export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.findAll({
            include: [
                Blog,
                Category
            ],
        });

        res.status(200).json(users);

    } catch (err) {
        next(err)
    }
}
// GET USER
export const getUser = async (req, res, next) => {
    const { slug } = req.query;

    try {
        const user = await User.findOne({
            where: { slug },
            include: [
                Blog,
                Category
            ]
        })
        if (!user) {
            return next(createError(404, " User is not defined"))

        }
        res.json(user);
    } catch (err) {
        next(err)
    }
}

// DELETE USER
export const deleteUser = async (req, res, next) => {
    const { id } = req.query;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return next(createError(404, " User is not defined"))
        }
        if (user) {
            await storageClient
                .from('legitstore')
                .remove([`user/avatar/${user.avatar}`]);
        }
        if (user) {
            await storageClient
                .from('legitstore')
                .remove([`user/about/${user.about}`]);
        }

        await User.destroy({
            where: {
                id: user.id
            }
        });

        return res.json({ message: 'User has been deleted' });
    } catch (err) {
        next(err)
    }
}

// UPDATE USER
export const updateUser = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;

    const { newImage, newFile } = req.files || {};

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return next(createError(404, "User is not defined"));
        }

        // delete old avatar in storage
        if (user.avatar) {
            await storageClient
                .from('legitstore')
                .remove([`user/avatar/${user.avatar}`]);
        }

        // update image
        if (newImage) {
            const { data: newImageData, error: newImageError } = await storageClient
                .from('legitstore/user/avatar')
                .upload(`${newImage?.name}-${Date.now()}.png`, newImage.data, {
                    contentType: newImage.mimetype,
                    cacheControl: '3600',
                });

            if (newImageError) {
                return res.status(500).json({ message: 'Resim yüklenirken bir hata oluştu.' });
            }



            // User file upload
            user.avatar = newImageData.path;
        }

        // delete old file in storage
        if (user.about) {
            await storageClient
                .from('legitstore')
                .remove([`user/about/${user.about}`]);
        }

        // update file
        if (newFile) {
            const { data: newFileData, error: newFileError } = await storageClient
                .from('legitstore/user/about')
                .upload(`${Date.now()}.md`, newFile.data, {
                    contentType: newFile.mimetype,
                    cacheControl: '3600',
                });

            if (newFileError) {
                return res.status(500).json({ newFileError });
            }

            // User file upload
            user.about = newFileData.path;
        }

        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                user[field] = updatedFields[field];
            }
        });

        await user.save();

        return res.json({ user });
    } catch (err) {
        next(err);
    }
}