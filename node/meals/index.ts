import { Router } from "express";
import { getAll, getOne, createMeal, updateMeal, deleteMeal } from "./controller";

const router: Router = Router();

router.get('/' , getAll);
router.get('/:id', getOne);
router.post('/', createMeal);
router.put('/', updateMeal);
router.delete('/:id', deleteMeal);

export default router;
