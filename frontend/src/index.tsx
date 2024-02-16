import React from 'react';
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
		domain={'mh-wbdv.eu.auth0.com'}
		clientId={'j6tbhOqjNoIbQUECCkZYfzWK8kF9YQTX'}
		authorizationParams={{
			redirect_uri: window.location.origin,
			scope: 'read:current_user openid profile email',
			audience: 'https://node-application/api', // Value in Identifier field for the API being called.
		}}>
		<App />
	</Auth0Provider>,
);

reportWebVitals();
