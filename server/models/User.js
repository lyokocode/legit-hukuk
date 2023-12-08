import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import slugify from 'slugify';

export const User = sequelize.define('User', {
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('fullName', value);
            this.setDataValue('slug', slugify(value, { lower: true }));
        },
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    about: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    activeAreas: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    languages: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    linkedin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    twitter: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});