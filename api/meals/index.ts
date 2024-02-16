import { Router } from 'express';
import {
	getAll,
	getOne,
	createMeal,
	updateMeal,
	deleteMeal,
} from './controller';

const mealsRouter: Router = Router();

mealsRouter.get('/', getAll);
mealsRouter.get('/:id', getOne);
mealsRouter.post('/', createMeal);
mealsRouter.put('/', updateMeal);
mealsRouter.delete('/:id', deleteMeal);

export default mealsRouter;
