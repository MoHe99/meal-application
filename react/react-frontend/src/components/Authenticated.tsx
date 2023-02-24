import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CheckAdmin = (props: { children: any; }) => {
    const { isAuthenticated } = useAuth0();
    const { children } = props;

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};

export default CheckAdmin;