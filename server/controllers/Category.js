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
            .upload(`${Date.now()}.docx`, filePath.data, {
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