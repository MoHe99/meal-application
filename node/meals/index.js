import { Router } from "express";
import { getAll, getOne, create } from "./controller.js";

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create)

export default router;