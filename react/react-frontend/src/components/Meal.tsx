import React, { useEffect, useState } from 'react';
import {GetTokenSilentlyOptions, useAuth0} from '@auth0/auth0-react';

const Meal = () => {
    const { getAccessTokenSilently, user } = useAuth0();
    const [posts, setPosts] = useState<{ id: number, title: string, description: string, price: string }[]>([]);
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

                let data = await response.json()

                setPosts(data);
            } catch (error) {
                console.error(error);
            }

        })();
    }, [getAccessTokenSilently]);

    return (
        <div>
            {isAuthenticated ? posts.map((post) => {
                return (
                    <div key={post["id"]}>
                        <h3>{post["description"]}</h3>
                        <p>{post["title"]}</p>
                        <p>{post["price"]}</p>
                    </div>
                );
            }) : ""}
        </div>
    );
};

export default Meal;