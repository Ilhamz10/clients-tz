export interface Offer {
	id: number;
	clientId: number;
	title: string;
	sources: string[];
	spend: number;
	profit: number;
	status: 'active' | 'archived';
}
