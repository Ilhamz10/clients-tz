export async function getClients() {
	const response = await fetch(`${import.meta.env.VITE_API_URL}clients`);

	if (!response.ok) {
		throw new Error('There is some error while fetching clients!');
	}

	const result = await response.json();
	return result;
}

export async function getClientById(id: number) {
	const response = await fetch(`${import.meta.env.VITE_API_URL}clients/${id}`);

	if (!response.ok) {
		throw new Error('There is some error while fetching clients!');
	}

	const result = await response.json();
	return result;
}
