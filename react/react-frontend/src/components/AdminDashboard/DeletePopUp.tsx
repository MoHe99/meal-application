import {DeletePopUpProps} from "../../interfaces/interfaces";
import React from "react";

const DeletePopUp: React.FC<DeletePopUpProps> = ({ data, onSubmit, onClose }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(data.id);
    };

    return(
        <div className="delete-meal">
            <form  onSubmit={handleSubmit}>
                <h3>You are about to delete following entry:</h3>
                <div className='info'>
                    <h3>{data['title']}</h3>
                    <p>{data['description']}</p>
                    <p>{data['price']}€</p>
                </div>
                <p>Are you sure, you want to delete it?</p>
                <div className="delete-popup-buttons">
                    <button className="delete-button" type="submit">Delete</button>
                    <button className="close-button" type="button" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default DeletePopUp;