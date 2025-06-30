import { useQuery } from '@tanstack/react-query';
import { getClientById, getClients } from '../api/getClients';
import type { Client } from '@/app/types';

export function useGetClients() {
	return useQuery<Client[]>({
		queryKey: ['clients'],
		queryFn: () => getClients(),
	});
}

export function useGetClientById(id?: number) {
	return useQuery<Client>({
		queryKey: [`client-${id}`],
		queryFn: () => getClientById(id as number),
		enabled: !!id,
	});
}
