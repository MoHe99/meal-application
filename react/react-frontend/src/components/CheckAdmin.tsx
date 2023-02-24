import React, {useEffect, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CheckAdmin = (props: { children: any; }) => {
    const { user, isAuthenticated } = useAuth0();
    const [hasRole, setHasRole] = useState(false);
    const { children } = props;

    useEffect(() => {
        setHasRole(user?.user_roles.includes("Admin"));
    },[isAuthenticated])


    if (!isAuthenticated) {
        return null;
    }

    if (!hasRole) {
        return null;
    }

    return <>{children}</>;
};

export default CheckAdmin;