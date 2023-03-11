import { Router } from "express";
import { getAll, getOne, createBooking, updateBooking, deleteBooking } from "./controller";

const bookingsRouter: Router = Router();

bookingsRouter.get('/' , getAll);
bookingsRouter.get('/:user_id', getOne);
bookingsRouter.post('/', createBooking);
bookingsRouter.put('/', updateBooking);
bookingsRouter.delete('/:user_id', deleteBooking);

export default bookingsRouter;
