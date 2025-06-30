export async function getOffers(clientId: number) {
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}offers?clientId=${clientId}`
	);

	if (!response.ok) {
		throw new Error('There is some error while fetching clients!');
	}

	const result = await response.json();
	return result;
}
