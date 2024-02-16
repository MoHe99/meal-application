/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meal } from '../meals/model';

export interface APIMethods {
	getAll(): Promise<any>;
	getOne?(id: number | string): Promise<any | null>;
	createEntity(entity: any): Promise<any>;
	updateEntity(entity: any): Promise<any>;
	deleteEntity(id: number | string): Promise<number>;
	getAllWhere?(options: {
		include: { model: typeof Meal };
		where: { user_id: string };
	}): Promise<any>;
}
