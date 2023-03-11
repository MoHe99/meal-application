import Joi, {ObjectSchema} from "joi";
import {Booking} from "./model";

export const createBookingsScheme: ObjectSchema = Joi.object().keys({
    user_id: Joi.string().required(),
    meal_id: Joi.number().required()
});

export const updateBookingsScheme: ObjectSchema = Joi.object().keys({
    user_id: Joi.string().required(),
    meal_id: Joi.number().required()
});