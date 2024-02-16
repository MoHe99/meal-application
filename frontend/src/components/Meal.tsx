import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MealItem from './MealItem';
import { Data } from '../interfaces/interfaces';

const Meal = () => {
	const { getAccessTokenSilently } = useAuth0();
	const [data, setData] = useState<Data[]>([]);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			try {
				const token = await getAccessTokenSilently();
				if (token) {
					setIsAuthenticated(true);
				} else {
					setIsAuthenticated(false);
				}
				const response = await fetch('http://localhost:8080/meals', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setData(await response.json());
			} catch (error) {
				console.error(error);
			}
		})();
	}, [getAccessTokenSilently]);

	return (
		<div className="meals-page">
			<h2>Menü</h2>
			<div className="meals">
				{isAuthenticated
					? data.map(meal => (
							<MealItem
								key={meal.id}
								meal={meal}
								mode="view"
								data={data}
								handleUpdateData={setData}
							/>
						))
					: ''}
			</div>
		</div>
	);
};

export default Meal;
