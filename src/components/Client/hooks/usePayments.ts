import { useQuery } from '@tanstack/react-query';
import { getPayments } from '../api/getPayments';
import type { Payment } from '@/app/types';

export function useGetPayments(id?: number) {
	return useQuery<Payment[]>({
		queryKey: [`payment-${id}`],
		queryFn: () => getPayments(id as number),
		enabled: !!id,
		refetchOnMount: true,
	});
}
