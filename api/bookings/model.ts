import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
} from 'sequelize';
import sequelize from '../db';
import { APIMethods } from '../general/modelAPI';

export class Booking extends Model<
	InferAttributes<Booking>,
	InferCreationAttributes<Booking>
> {
	declare user_id: string;
	declare meal_id: number;
}

// Data model for db interaction
Booking.init(
	{
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		meal_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
	},
	{
		sequelize,
		timestamps: false,
		tableName: 'bookings',
	},
);

// Model methods
const bookingsModel: APIMethods = {
	async getAll() {
		return Booking.findAll();
	},
	async getAllWhere(where: object) {
		return Booking.findAll(where);
	},
	async getOne(id: string) {
		return Booking.findByPk(id);
	},
	async createEntity(booking: Booking) {
		return await Booking.create(booking);
	},
	async updateEntity(booking: Booking) {
		return (await Booking.upsert(booking))[0];
	},
	deleteEntity(user_id: string) {
		return Booking.destroy({ where: { user_id } });
	},
};

export default bookingsModel;
