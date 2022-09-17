import { DataTypes } from "sequelize";
import sequelize from "../db.js";

// Define meals model
const Meals = sequelize.define(
    'meals',
    {
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT,
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
    async create(user) {
        return (await Meals.upsert(user))[0];
    },
    async update(id, user) {
        return (await Meals.upsert(user))[0];
    },
    remove(id) {
        return Meals.destroy({ where: { id } });
    },
}

export default model;