export interface Client {
	id: number;
	name: string;
	start_date: string;
	offers: number;
	account_manager: string;
	sales_manager: string;
	status: 'active' | 'archived';
	type_of_client: string;
	experience: 'Expert' | 'Noob';
	monthly_budgets: string;
	balance: {
		balance_usd: number;
		balance_rub: number;
	};
	loans: number;
}
