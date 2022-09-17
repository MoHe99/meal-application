import Joi from "joi";

export const createMealsScheme = Joi.object().keys({
    title: Joi.string().alphanum().min(1).max(30).required(),
    description: Joi.string().alphanum().min(1).max(150).required(),
    price: Joi.number().required(),
});

export const updateMealsScheme = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string().alphanum().min(1).max(30).required(),
    description: Joi.string().alphanum().min(1).max(150).required(),
    price: Joi.number().required(),
});