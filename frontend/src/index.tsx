import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<Auth0Provider
		domain={import.meta.env.VITE_AUTH0_DOMAIN}
		clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
		authorizationParams={{
			redirect_uri: window.location.origin,
			scope: import.meta.env.VITE_AUTH0_SCOPE,
			audience: import.meta.env.VITE_AUTH0_AUDIENCE,
		}}>
    <App />
</Auth0Provider>,
);

reportWebVitals();
