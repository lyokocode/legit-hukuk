import Sequelize from "sequelize"

export const sequelize = new Sequelize('legithukuk', 'postgres', 'aelita', {
    host: 'localhost',
    dialect: 'postgres'
})