export interface Data {
	id: number;
	title: string;
	description: string;
	price: number;
}

export interface UpdateFormProps {
	data: Data;
	onSubmit: (updatedData: Data) => void;
	onClose: () => void;
}

export interface DeletePopUpProps {
	data: Data;
	onSubmit: (id: number) => void;
	onClose: () => void;
}

export interface AddFormProps {
	onSubmit: (data: {
		title: string;
		description: string;
		price: number;
	}) => void;
	onClose: () => void;
}

export type Mode = 'edit' | 'view';
