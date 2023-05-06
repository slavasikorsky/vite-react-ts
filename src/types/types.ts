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
