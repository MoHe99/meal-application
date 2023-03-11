import React, {useState} from "react";
import {AddFormProps} from "../../interfaces/interfaces";

const AddForm: React.FC<AddFormProps> = ({ onSubmit, onClose }) => {
    const [newData, setNewData] = useState({ title: "", description: "", price: 0 });

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewData({ ...newData, title: event.target.value });
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewData({ ...newData, description: event.target.value });
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewData({ ...newData, price: parseInt(event.target.value, 10) });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(newData);
        setNewData({ title: "", description: "", price: 0 });
    };

    return (
        <div className="add-meal">
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label>Title</label>
                    <input type="text" value={newData.title} onChange={handleTitleChange} />
                </div>
                <div className="form-input">
                    <label>Description</label>
                    <input type="text" value={newData.description} onChange={handleDescriptionChange} />
                </div>
                <div className="form-input">
                    <label>Price</label>
                    <input step="0.01" min="0" max="100" type="number" value={newData.price} onChange={handlePriceChange} />
                </div>
                <div className="add-form-buttons">
                    <button className="add-button" type="submit">Add</button>
                    <button className="close-button" type="button" onClick={onClose}>Close</button>
                </div>
            </form>
        </div>
    );
};

export default AddForm;