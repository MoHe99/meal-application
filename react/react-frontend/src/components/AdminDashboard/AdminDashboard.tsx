import React, {useEffect, useState} from "react";
import {useAuth0} from '@auth0/auth0-react';
import {Data} from "../../interfaces/interfaces";
import UpdateForm from "./UpdateForm";
import DeletePopUp from "./DeletePopUp";
import AddForm from "./AddForm";


function AdminDashboard() {
    const [data, setData] = useState<Data[]>([]);
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [showPost, setShowPost] = useState<boolean>(false);
    const [showUpdate, setShowUpdate] = useState<number | null>(null);
    const [showDelete, setShowDelete] = useState<number | null>(null);
    const [selectedData, setSelectedData] = useState<Data>({} as Data);

    useEffect(() => {
        getMeals();
    }, []);

    const getMeals = async() => {
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch('http://localhost:8080/meals', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const res = await response.json()
            setData(res);

        } catch (error) {
            console.error(error);
        }
    }


    const handleDelete = (id: number) => {
        deactivateScroll();
        setShowDelete(id);
    };

    const handleDeleteSubmit = async(id: number): Promise<void> => {
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch(`http://localhost:8080/meals/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method: 'DELETE'
            });

            console.log(response);
            setData(data.filter(item => item.id !== id));

        } catch (error) {
            console.error(error);
        }
    }

    const deactivateScroll = () => {
       document.querySelector('html')?.classList.add('no-scroll');
       document.querySelector('body')?.classList.add('no-scroll');
    }

    const activateScroll = () => {
        document.querySelector('html')?.classList.remove('no-scroll');
        document.querySelector('body')?.classList.remove('no-scroll');
    }

    const handleUpdate = (item: Data) => {
        deactivateScroll();
        setSelectedData(item);
        setShowUpdate(item.id);
    };

    const handleUpdateSubmit = async (updateData: Data) => {
        try {
            const token = await getAccessTokenSilently();
            console.log(updateData)
            await fetch('http://localhost:8080/meals', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
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

            setData(await response.json());
            setShowUpdate(null);
        } catch(error) {
            console.log(error);
        }
    };

    const handlePost = () => {
        deactivateScroll();
        setShowPost(true);
    };

    const handlePostSubmit = async (data: { title: string; description: string; price: number; }) => {
        try {
            const token = await getAccessTokenSilently();
            await fetch('http://localhost:8080/meals', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data),
            });

            const response = await fetch('http://localhost:8080/meals', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            });

            setData(await response.json());
            setShowPost(false);
        } catch(error) {
            console.log(error);
        }
    };

    return(
        <div className='admin-dashboard'>
            <h2>Admin Dashboard</h2>
            <button onClick={() => handlePost()} className="add-meal-button">Add Meal</button>

            <div className='meals'>
                {isAuthenticated ? data.map((item) => {
                    return (
                        <div key={item['id']} className='meal'>
                            <div className='info'>
                                <h3>{item['title']}</h3>
                                <p>{item['description']}</p>
                                <p>{item['price']}€</p>
                            </div>
                            <div className="options">
                                <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
                                <button className="update-button" onClick={() => handleUpdate(item)}>Update</button>
                            </div>

                            {showPost && (
                                <AddForm
                                    onSubmit={handlePostSubmit}
                                    onClose={() => {setShowPost(false); activateScroll();}}
                                />
                            )}

                            {showUpdate === item.id && (
                                <UpdateForm
                                    data={selectedData}
                                    onSubmit={handleUpdateSubmit}
                                    onClose={() => {setShowUpdate(null); activateScroll();}}
                                />
                            )}
                            {showDelete === item.id && (
                                <DeletePopUp
                                    data={item}
                                    onSubmit={handleDeleteSubmit}
                                    onClose={() => {setShowDelete(null); activateScroll();}}
                                />
                            )}
                        </div>
                    );
                }) : ""}
            </div>
        </div>
    )
}

export default AdminDashboard;
