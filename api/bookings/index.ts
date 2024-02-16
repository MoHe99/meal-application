import { Router } from 'express';
import {
	getAll,
	createBooking,
	updateBooking,
	deleteBooking,
} from './controller';

const bookingsRouter: Router = Router();

bookingsRouter.get('/', getAll);
bookingsRouter.post('/', createBooking);
bookingsRouter.put('/', updateBooking);
bookingsRouter.delete('/:user_id', deleteBooking);

export default bookingsRouter;
