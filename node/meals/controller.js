
import model from "./model.js";
import { createMealsScheme, updateMealsScheme } from "./mealsScheme.js";

export async function getAll(request, response) {
    const meals = await model.getAll();

    response.json(meals);
}

export async function getOne(request, response) {
    const parsedId = parseInt(request.params.id, 10);

    const meal = await model.getOne(parsedId);

    if(meal) {
        response.json(meal);
    } else {
        response.statusCode = 404;
        response.send('Not found');
    }
}

export async function createMeal(request, response) {

    // Validate request body with prepared scheme
    const { value: meal, error } = createMealsScheme.validate(request.body, {
        abortEarly: false,
    });

    if (error) {
        console.log(error);
        response.statusCode = 400;        
    } 
    else {
        console.log(meal)
        const newMeal = await model.createMeal(meal);
        response.statusCode = 201;
        response.json(newMeal);
    }
}


export async function updateMeal(request, response) {

    // Validate request body with prepared scheme
    const { value: meal, error } = updateMealsScheme.validate(request.body, {
        abortEarly: false,
    });

    if (error) {
        console.log(error);
        response.statusCode = 400;        
    } 
    else {
        console.log(meal)
        const newMeal = await model.updateMeal(meal);
        response.statusCode = 201;
        response.json(newMeal);
    }
}

export async function remove(request, response) {
    const meals = await model.getAll();

    response.json(meals);
}