import { Category } from "../models/Category.js";
import { createError } from "../utils/error.js";
import { storageClient } from "../database/supabase.js"

// GET ALL CATEGORIES
export const getAllCategories = async (req, res, next) => {

    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);

    } catch (err) {
        next(err)
    }
}

// GET CATEGORY
export const getCategory = async (req, res, next) => {
    const { slug } = req.query;

    try {
        const category = await Category.findOne({
            where: { slug }
        })
        if (!category) {
            return next(createError(404, " category is not defined"))

        }
        res.json(category);
    } catch (err) {
        next(err)
    }
}

// CREATE NEW CATEGORY
export const createCategory = async (req, res, next) => {
    const imagePath = req.files && req.files.image;
    const iconPath = req.files && req.files.icon;
    const filePath = req.files && req.files.file;

    const { ...categoryInfo } = req.body;

    try {
        if (!imagePath) {
            return res.status(400).json({ message: 'Resim eksik veya hatalı.' });
        }
        if (!iconPath) {
            return res.status(400).json({ message: 'icon eksik veya hatalı.' });
        }
        if (!filePath) {
            return res.status(400).json({ message: 'dosya eksik veya hatalı.' });
        }

        const { data: imageData, error: imageError } = await storageClient
            .from('legitstore/category/image')
            .upload(`${Date.now()}.png`, imagePath.data, {
                contentType: imagePath.mimetype,
                cacheControl: '3600',
            });
        const { data: iconData, error: iconError } = await storageClient
            .from('legitstore/category/icon')
            .upload(`${Date.now()}.png`, iconPath.data, {
                contentType: iconPath.mimetype,
                cacheControl: '3600',
            });
        const { data: fileData, error: fileError } = await storageClient
            .from('legitstore/category/file')
            .upload(`${Date.now()}.md`, filePath.data, {
                contentType: filePath.mimetype,
                cacheControl: '3600',
            });

        if (imageError) {
            console.error('kategori resmi yükleme hatası:', imageError);
            return res.status(500).json({ message: 'kategori resmi yüklenirken bir hata oluştu.' });
        }
        if (iconError) {
            console.error('kategori iconu yükleme hatası:', imageError);
            return res.status(500).json({ message: 'kategori iconu yüklenirken bir hata oluştu.' });
        }
        if (fileError) {
            console.error('kategori dosyası yükleme hatası:', imageError);
            return res.status(500).json({ message: 'kategori dosyası yüklenirken bir hata oluştu.' });
        }

        const imageUrl = imageData.path;
        const iconUrl = iconData.path;
        const fileUrl = fileData.path;
        const newCategory = await Category.create({
            ...categoryInfo,
            image: imageUrl,
            icon: iconUrl,
            file: fileUrl
        });

        return res.status(201).json(newCategory);

    } catch (err) {
        next(err);
    }

}


// DELETE CATEGORY
export const deleteCategory = async (req, res, next) => {
    const { id } = req.query;

    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return next(createError(404, " category is not defined"))
        }

        if (category) {
            await storageClient
                .from('legitstore')
                .remove([`category/icon/${category.icon}`]);
        }
        if (category) {
            await storageClient
                .from('legitstore')
                .remove([`category/file/${category.file}`]);
        }
        if (category) {
            await storageClient
                .from('legitstore')
                .remove([`category/image/${category.image}`]);
        }

        await Category.destroy({
            where: {
                id: category.id
            }
        });

        return res.json({ message: 'Category has been deleted' });
    } catch (err) {
        next(err)
    }
}

// UPDATE CATEGORY
export const updateCategory = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;

    const { newImage, newFile, newIcon } = req.files || {};

    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return next(createError(404, "Category is not defined"));
        }

        // update image
        if (newImage) {
            const { data: newImageData, error: newImageError } = await storageClient
                .from('legitstore/category/image')
                .upload(`${newImage?.name}-${Date.now()}.png`, newImage.data, {
                    contentType: newImage.mimetype,
                    cacheControl: '3600',
                });

            if (newImageError) {
                return res.status(500).json({ message: 'Resim yüklenirken bir hata oluştu.' });
            }

            // delete old image in storage
            if (category.image) {
                await storageClient
                    .from('legitstore')
                    .remove([`category/image/${category.image}`]);
            }

            // category file upload
            category.image = newImageData.path;
        }

        // update file
        if (newFile) {
            const { data: newFileData, error: newFileError } = await storageClient
                .from('legitstore/category/file')
                .upload(`${newFile?.name}-${Date.now()}.md`, newFile.data, {
                    contentType: newFile.mimetype,
                    cacheControl: '3600',
                });

            if (newFileError) {
                return res.status(500).json({ message: 'dosya yüklenirken bir hata oluştu.' });
            }

            // delete old file in storage
            if (category.file) {
                await storageClient
                    .from('legitstore')
                    .remove([`category/file/${category.file}`]);
            }

            // Category file upload
            category.file = newFileData.path;
        }

        // update icon
        if (newIcon) {
            const { data: newIconData, error: newIconError } = await storageClient
                .from('legitstore/category/icon')
                .upload(`${newIcon?.name}-${Date.now()}.md`, newIcon.data, {
                    contentType: newIcon.mimetype,
                    cacheControl: '3600',
                });

            if (newIconError) {
                return res.status(500).json({ message: 'icon yüklenirken bir hata oluştu.' });
            }

            // delete old icon in storage
            if (category.icon) {
                await storageClient
                    .from('legitstore')
                    .remove([`category/icon/${category.icon}`]);
            }

            // Category file upload
            category.icon = newIconData.path;
        }

        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                category[field] = updatedFields[field];
            }
        });

        await category.save();

        return res.json({ category });
    } catch (err) {
        next(err);
    }
}