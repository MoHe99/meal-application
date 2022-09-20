import { Router } from "express";
import { getAll, getOne, createMeal, updateMeal, deleteMeal } from "./controller.js";

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createMeal);
router.put('/', updateMeal);
router.delete('/:id', deleteMeal);

export default router;
