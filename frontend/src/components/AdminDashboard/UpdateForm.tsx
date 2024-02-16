import React, { useState } from 'react';
import { Data, UpdateFormProps } from '../../interfaces/interfaces';

const UpdateForm: React.FC<UpdateFormProps> = ({ data, onSubmit, onClose }) => {
	const [updatedData, setUpdatedData] = useState<Data>(data);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUpdatedData({
			...updatedData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(updatedData);
	};

	return (
		<div className="update-meal">
			<form onSubmit={handleSubmit}>
				<div className="form-input">
					<label>Title</label>
					<input
						type="text"
						name="title"
						value={updatedData.title}
						onChange={e => handleChange(e)}
					/>
				</div>
				<div className="form-input">
					<label>Description</label>
					<input
						type="text"
						name="description"
						value={updatedData.description}
						onChange={e => handleChange(e)}
					/>
				</div>
				<div className="form-input">
					<label>Price</label>
					<input
						type="number"
						name="price"
						value={updatedData.price}
						onChange={e => handleChange(e)}
						step=".01"
					/>
				</div>
				<div className="update-form-buttons">
					<button className="update-button" type="submit">
						Submit
					</button>
					<button className="close-button" type="button" onClick={onClose}>
						Close
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateForm;
