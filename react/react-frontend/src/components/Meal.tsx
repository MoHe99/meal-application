import React, { useEffect, useState } from 'react';
import { useAuth0} from '@auth0/auth0-react';

const Meal = () => {
    const { getAccessTokenSilently } = useAuth0();
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
        <div className="meals-page">
            <h2>Menü</h2>
            <div className="meals">
                {isAuthenticated ? posts.map((post) => {
                    return (
                        <div key={post["id"]} className="meal">
                            <div className="info">
                                <h3>{post["title"]}</h3>
                                <p>{post["description"]}</p>
                                <p>{post["price"]}€</p>
                            </div>
                        </div>
                    );
                }) : ""}
            </div>
        </div>

    );
};

export default Meal;