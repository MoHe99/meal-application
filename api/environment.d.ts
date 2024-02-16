import { Dialect } from 'sequelize';

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DB_NAME: string;
			DB_USER: string;
			DB_PASSWORD: string;
			DB_URI: string;
			DB_DIALECT: Dialect;
			DB_TARGET_PORT: number;
			VITE_AUTH0_DOMAIN: string;
			VITE_AUTH0_CLIENT_ID: string;
			VITE_AUTH0_CLIENT_SECRET: string;
		}
	}
}

export {};
