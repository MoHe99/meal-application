import mealsModel, {Meal} from "./model";
import { createMealsScheme, updateMealsScheme } from "./mealsScheme";
import { Request, Response } from "express";

export async function getAll(request: Request, response: Response): Promise<void> {
    const meals: Promise<Meal> = await mealsModel.getAll();
    response.json(meals);
}

export async function getOne(request: Request, response: Response): Promise<void> {
    const parsedId = parseInt(request.params.id, 10);
    const meal: Promise<Meal | null> = await mealsModel.getOne?.(parsedId);

    if(meal) {
        response.json(meal);
    } else {
        response.statusCode = 404;
        response.send('Not found');
    }
}

export async function createMeal(request: Request, response: Response): Promise<void> {

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
        const newMeal: Promise<Meal> = await mealsModel.createEntity(meal);
        response.statusCode = 201;
        response.json(newMeal);
    }
}


export async function updateMeal(request: Request, response: Response): Promise<void> {

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
        const newMeal: Promise<Meal> = await mealsModel.updateEntity(meal);
        response.statusCode = 201;
        response.json(newMeal);
    }
}

export async function deleteMeal(request: Request, response: Response): Promise<void> {
    const id: number = parseInt(request.params.id, 10);

    await mealsModel.deleteEntity(id);
  
    response.statusCode = 204;
    response.send();
}
