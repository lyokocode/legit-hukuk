import { Blog } from "../models/Blog.js";
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js"
import { User } from "../models/User.js";
import { Category } from "../models/Category.js";

// GET ALL BLOGS
export const getAllBlogs = async (req, res, next) => {
    const { categoryId, page, pageSize } = req.query
    const offset = (page - 1) * pageSize;
    const selectedFields = req.query.fields ? req.query.fields.split(',') : null;
    console.log(selectedFields)

    try {
        let blogs;
        if (categoryId) {
            blogs = await Blog.findAll({
                attributes: selectedFields,
                where: { CategoryId: categoryId },
                include: [
                    {
                        model: User,
                        attributes: ['fullName', 'avatar'],
                    },
                    {
                        model: Category,
                        attributes: ['title', 'slug'],
                    },
                ],
                order: [['date', 'DESC']],
                offset,
                limit: pageSize,
            });
        } else {
            blogs = await Blog.findAll({
                attributes: selectedFields,
                include: [
                    {
                        model: User,
                        attributes: ['fullName', 'avatar'],
                    },
                    {
                        model: Category,
                        attributes: ['title', 'slug'],
                    },
                ],
                order: [['date', 'DESC']],
                offset,
                limit: pageSize,
            });
        }
        res.status(200).json(blogs);
    } catch (err) {
        next(err)
    }
}

// GET Blog
export const getBlog = async (req, res, next) => {
    try {
        const { slug } = req.query;

        const blog = await Blog.findOne({
            where: { slug },
            include: [
                {
                    model: User,
                    attributes: ['userName', 'avatar'],
                },
                {
                    model: Category,
                    attributes: ['title', 'slug'],
                },
            ],

        });

        if (!blog) {
            return next(createError(404, " Blog is not defined"))
        }

        res.json(blog);
    } catch (err) {
        next(err)
    }
}

// CREATE NEW BLOG
export const createBlog = async (req, res, next) => {

    const imagePath = req.files && req.files.image;
    const blogPath = req.files && req.files.blog;
    const { ...blogInfo } = req.body;

    try {
        if (!imagePath) {
            return res.status(400).json({ message: 'Resim eksik veya hatalı.' });
        }

        if (!blogPath) {
            return res.status(400).json({ message: 'Blog eksik veya hatalı.' });
        }

        const { data: imageData, error: imageError } = await storageClient
            .from('legitstore/blog/image')
            .upload(`${Date.now()}.png`, imagePath.data, {
                contentType: imagePath.mimetype,
                cacheControl: '3600',
            });
        const { data: blogData, error: blogError } = await storageClient
            .from('legitstore/blog/file')
            .upload(`${Date.now()}.md`, blogPath.data, {
                contentType: blogPath.mimetype,
                cacheControl: '3600',
            });

        if (imageError) {
            console.error('Dosya yükleme hatası:', imageError);
            return res.status(500).json({ message: 'Dosya yüklenirken bir hata oluştu.' });
        }
        if (blogError) {
            console.error('md Dosya yükleme hatası:', imageError);
            return res.status(500).json({ message: 'md Dosya yüklenirken bir hata oluştu.' });
        }

        const imageUrl = imageData.path;
        const blogUrl = blogData.path;

        const newBlog = await Blog.create({
            ...blogInfo,
            image: imageUrl,
            blog: blogUrl
        });

        return res.status(201).json(newBlog);
    } catch (err) {
        next(err);
    }
};


// DELETE BLOG
export const deleteBlog = async (req, res, next) => {
    const { id } = req.query;

    try {
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return next(createError(404, " blog is not defined"))
        }

        if (blog) {
            await storageClient
                .from('legitstore')
                .remove([`blog/image/${blog.image}`]);
        }
        if (blog) {
            await storageClient
                .from('legitstore')
                .remove([`blog/file/${blog.file}`]);
        }


        await Blog.destroy({
            where: {
                id: blog.id
            }
        });

        return res.json({ message: 'Blog has been deleted' });
    } catch (err) {
        next(err)
    }
}


// UPDATE BLOG
export const updateBlog = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;

    const { newImage, newFile } = req.files || {};

    try {
        const blog = await Blog.findByPk(id);
        if (!blog) {
            return next(createError(404, "Blog is not defined"));
        }

        // update image
        if (newImage) {
            const { data: newImageData, error: newImageError } = await storageClient
                .from('legitstore/blog/image')
                .upload(`${Date.now()}.png`, newImage.data, {
                    contentType: newImage.mimetype,
                    cacheControl: '3600',
                });

            if (newImageError) {
                return res.status(500).json({ message: 'Resim yüklenirken bir hata oluştu.' });
            }

            // delete old image in storage
            if (blog.image) {
                await storageClient
                    .from('legitstore')
                    .remove([`blog/image/${blog.image}`]);
            }

            // blog image upload
            blog.image = newImageData.path;
        }

        // update file
        if (newFile) {
            const { data: newFileData, error: newFileError } = await storageClient
                .from('legitstore/blog/file')
                .upload(`${Date.now()}.md`, newFile.data, {
                    contentType: newFile.mimetype,
                    cacheControl: '3600',
                });

            if (newFileError) {
                return res.status(500).json({ message: 'dosya yüklenirken bir hata oluştu.' });
            }

            // delete old file in storage
            if (blog.file) {
                await storageClient
                    .from('legitstore')
                    .remove([`blog/file/${blog.file}`]);
            }

            // Category file upload
            blog.file = newFileData.path;
        }


        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                blog[field] = updatedFields[field];
            }
        });

        await blog.save();

        return res.json({ blog });
    } catch (err) {
        next(err);
    }
}
