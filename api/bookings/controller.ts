import bookingsModel, { Booking } from './model';
import { createBookingsScheme, updateBookingsScheme } from './bookingsScheme';
import { Request, Response } from 'express';
import { Meal } from '../meals/model';

export async function getAll(
	request: Request,
	response: Response,
): Promise<void> {
	const bookings: Promise<Booking> = await bookingsModel.getAll();
	response.json(bookings);
}

export async function getAllWhere(
	request: Request,
	response: Response,
): Promise<void> {
	const user_id = request.params.user_id;
	const booking: Promise<Booking | null> = await bookingsModel.getAllWhere?.({
		where: { user_id: user_id },
		include: { model: Meal },
	});

	if (booking) {
		response.json(booking);
	} else {
		response.statusCode = 404;
		response.send('Not found');
	}
}

export async function createBooking(
	request: Request,
	response: Response,
): Promise<void> {
	// Validate request body with prepared scheme
	const { value: booking, error } = createBookingsScheme.validate(
		request.body,
		{
			abortEarly: false,
		},
	);

	if (error) {
		console.log(error);
		response.statusCode = 400;
	} else {
		try {
			console.log(booking);
			const newBooking: Promise<Booking> =
				await bookingsModel.createEntity(booking);
			response.statusCode = 201;
			response.json(newBooking);
		} catch (error) {
			console.log(error);
			response
				.status(500)
				.send('An error occurred while inserting data into the database.');
		}
	}
}

export async function updateBooking(
	request: Request,
	response: Response,
): Promise<void> {
	// Validate request body with prepared scheme
	const { value: booking, error } = updateBookingsScheme.validate(
		request.body,
		{
			abortEarly: false,
		},
	);

	if (error) {
		console.log(error);
		response.statusCode = 400;
	} else {
		console.log(booking);
		const newBooking: Promise<Booking> =
			await bookingsModel.updateEntity(booking);
		response.statusCode = 201;
		response.json(newBooking);
	}
}

export async function deleteBooking(
	request: Request,
	response: Response,
): Promise<void> {
	const user_id: string = request.params.user_id;

	await bookingsModel.deleteEntity(user_id);

	response.statusCode = 204;
	response.send();
}
