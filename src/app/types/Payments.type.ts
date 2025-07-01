export interface Payment {
	id: number;
	clientId: number;
	payment_method: string;
	exchange_extras: number;
	vat: number;
	start_date: string;
	status: 'active' | 'archived';
}
