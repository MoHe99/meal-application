import Joi, {ObjectSchema} from "joi";

export const createMealsScheme: ObjectSchema = Joi.object().keys({
    title: Joi.string().min(1).max(30).required(),
    description: Joi.string().min(1).max(150).required(),
    price: Joi.number().required(),
});

export const updateMealsScheme: ObjectSchema = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string().min(1).max(30).required(),
    description: Joi.string().min(1).max(150).required(),
    price: Joi.number().required(),
});
