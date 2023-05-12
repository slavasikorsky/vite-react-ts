export default interface IPost {
	id: number;
	userId?: number;
	title: string;
	body?: string;
}

export interface IMenuItem {
	url: string;
	text: string;
}

export interface ValidationProps {
	isEmpty?: boolean;
	minLength?: number;
	isEmail?: boolean;
	isPhone?: boolean;
}
