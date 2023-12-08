import { Blog } from "../models/Blog.js";
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js"
import { User } from "../models/User.js";
import { Category } from "../models/Category.js";

// GET ALL BLOGS
export const getAllBlogs = async (req, res, next) => {
    const { categoryId } = req.query

    try {
        let blogs;
        if (categoryId) {
            blogs = await Blog.findAll({
                where: { CategoryId: categoryId },
                include: [
                    {
                        model: User,
                        attributes: ['fullName', 'avatar'],
                    },
                    {
                        model: Category,
                        attributes: ['title'],
                    },
                ],
                order: [['date', 'DESC']]


            });
        } else {
            blogs = await Blog.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['fullName', 'avatar'],
                    },
                    {
                        model: Category,
                        attributes: ['title'],
                    },
                ],
                order: [['date', 'DESC']]

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
        console.log(slug)

        const blog = await Blog.findOne({
            where: { slug },
            include: [
                {
                    model: User,
                    attributes: ['userName', 'avatar'],
                },
                {
                    model: Category,
                    attributes: ['name'],
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
