import { Dispatch, SetStateAction, useState } from 'react';
import { Data, Mode } from '../interfaces/interfaces';
import UpdateForm from './AdminDashboard/UpdateForm';
import DeletePopUp from './AdminDashboard/DeletePopUp';
import { useAuth0 } from '@auth0/auth0-react';

interface MealItemProps {
	meal: Data;
	mode: Mode;
	data: Data[];
	handleUpdateData: Dispatch<SetStateAction<Data[]>>;
}

function MealItem({ meal, mode, data, handleUpdateData }: MealItemProps) {
	const { getAccessTokenSilently, user } = useAuth0();
	const [showUpdate, setShowUpdate] = useState<number | null>(null);
	const [showDelete, setShowDelete] = useState<number | null>(null);
	const [selectedData, setSelectedData] = useState<Data>({} as Data);

	const handleDelete = (id: number) => {
		deactivateScroll();
		setShowDelete(id);
	};

	const deactivateScroll = () => {
		document.querySelector('html')?.classList.add('no-scroll');
		document.querySelector('body')?.classList.add('no-scroll');
	};

	const activateScroll = () => {
		document.querySelector('html')?.classList.remove('no-scroll');
		document.querySelector('body')?.classList.remove('no-scroll');
	};

	const handleDeleteSubmit = async (id: number): Promise<void> => {
		try {
			const token = await getAccessTokenSilently();

			const response = await fetch(`http://localhost:8080/meals/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: 'DELETE',
			});

			console.log(response);
			handleUpdateData(data.filter(item => item.id !== id));
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdate = (item: Data) => {
		deactivateScroll();
		setSelectedData(item);
		setShowUpdate(item.id);
	};

	const handleBooking = async () => {
		try {
			// const token = await getAccessTokenSilently();
			// await fetch('http://localhost:8080/bookings', {
			// 	headers: {
			// 		Authorization: `Bearer ${token}`,
			// 		'Content-Type': 'application/json',
			// 	},
			// 	method: 'POST',
			// 	body: JSON.stringify({ user_id: user?.sub, meal_id: meal.id }),
			// });
			console.log('Booking for', user);
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdateSubmit = async (updateData: Data) => {
		try {
			const token = await getAccessTokenSilently();
			console.log(updateData);
			await fetch('http://localhost:8080/meals', {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				method: 'PUT',
				body: JSON.stringify(updateData),
			});

			const response = await fetch('http://localhost:8080/meals', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: 'GET',
			});

			handleUpdateData(await response.json());
			setShowUpdate(null);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div key={meal.id} className="meal">
				<div className="info">
					<h2>{meal.title}</h2>
					<p>{meal.description}</p>
					<p>{meal.price}</p>
				</div>
				{mode === 'edit' && (
					<div className="options">
						<button
							className="update-button"
							onClick={() => handleUpdate(meal)}>
							Update
						</button>
						<button
							className="delete-button"
							onClick={() => handleDelete(meal.id)}>
							Delete
						</button>
					</div>
				)}
				{mode === 'view' && (
					<div className="options">
						<button className="booking-button" onClick={() => handleBooking()}>
							Book
						</button>
					</div>
				)}
			</div>
			{showUpdate === meal.id && (
				<UpdateForm
					data={selectedData}
					onSubmit={handleUpdateSubmit}
					onClose={() => {
						setShowUpdate(null);
						activateScroll();
					}}
				/>
			)}
			{showDelete === meal.id && (
				<DeletePopUp
					data={meal}
					onSubmit={handleDeleteSubmit}
					onClose={() => {
						setShowDelete(null);
						activateScroll();
					}}
				/>
			)}
		</>
	);
}

export default MealItem;
