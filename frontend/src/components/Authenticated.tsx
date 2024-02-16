import { useAuth0 } from '@auth0/auth0-react';
import { ReactNode } from 'react';

const Authenticated = (props: { children: ReactNode }) => {
	const { isAuthenticated } = useAuth0();
	const { children } = props;

	if (!isAuthenticated) {
		return null;
	}

	return <>{children}</>;
};

export default Authenticated;
