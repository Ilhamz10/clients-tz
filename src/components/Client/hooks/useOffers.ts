import { useQuery } from '@tanstack/react-query';
import { getOffers } from '../api/getOffers';
import type { Offer } from '@/app/types';

export function useGetOffers(id?: number) {
	return useQuery<Offer[]>({
		queryKey: [`offer-${id}`],
		queryFn: () => getOffers(id as number),
		enabled: !!id,
		refetchOnMount: true,
	});
}
