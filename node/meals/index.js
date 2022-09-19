import { Router } from "express";
import { getAll, getOne, createMeal, updateMeal } from "./controller.js";

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createMeal);
router.put('/', updateMeal);

export default router;
