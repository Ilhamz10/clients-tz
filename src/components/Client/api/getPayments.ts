export async function getPayments(clientId: number) {
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}payment_terms?clientId=${clientId}`
	);

	if (!response.ok) {
		throw new Error('There is some error while fetching clients!');
	}

	const result = await response.json();
	return result;
}
