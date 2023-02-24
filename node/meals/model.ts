import {Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, NonAttribute} from 'sequelize';
import sequelize from "../db";
import {APIMethods} from "../general/modelAPI";

// Defines a model for meals with typescript
export class Meal extends Model< InferAttributes<Meal>, InferCreationAttributes<Meal> > {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare price: number;
}

// Initializes a model for meals with typescript
Meal.init(
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
        sequelize,
        timestamps: false,
        tableName: 'meals'
    }
);

// Define meals model methods
const model: APIMethods = {
    async getAll() {
        return Meal.findAll();
    },
    async getOne(id: number) {
        return Meal.findByPk(id);
    },
    async createMeal(meal: Meal) {
        return (await Meal.create(meal));
    },
    async updateMeal(meal: Meal) {
        return (await Meal.upsert(meal))[0];
    },
    deleteMeal(id: number) {
        return Meal.destroy({ where: { id } });
    },
}

export default model;
