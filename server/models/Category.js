import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { User } from "./User.js";
import slugify from 'slugify';

export const Category = sequelize.define('Category', {
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('title', value);
            this.setDataValue('slug', slugify(value, { lower: true }));
        },
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    file: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Category.belongsTo(User, { foreignKey: 'UserId' });
User.hasMany(Category)