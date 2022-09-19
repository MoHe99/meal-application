import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db.js";

// Define meals model
const Meals = sequelize.define(
    'meals',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

// Define meals model methods
const model = {
    async getAll() {
        return Meals.findAll();
    },
    async getOne(id) {
        return Meals.findByPk(id);
    },
    async createMeal(meal) {
        return (await Meals.create(meal))[0];
    },
    async updateMeal(meal) {
        return (await Meals.upsert(meal))[0];
    },
    remove(id) {
        return Meals.destroy({ where: { id } });
    },
}

export default model;