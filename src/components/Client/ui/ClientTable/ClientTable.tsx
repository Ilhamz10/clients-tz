import { useCallback } from 'react';
import { useGetOffers } from '../../hooks/useOffers';
import ClientTableCol from '../ClientTableCol/ClientTableCol';
import ClientTableRow from '../ClientTableRow/ClientTableRow';
import cls from './style.module.css';
import EyeIcon from '@/assets/icons/eye-icon.svg';
import PenIcon from '@/assets/icons/pen-icon.svg';
import TrashIcon from '@/assets/icons/trash-icon.svg';

const ClientTable = ({ clientId }: { clientId?: number }) => {
	const { data, isLoading, isError, isSuccess } = useGetOffers(clientId);

	const renderOffersTable = useCallback(() => {
		if (isLoading) return <p>Loadin....</p>;

		if (isSuccess)
			return data.map((offer) => (
				<ClientTableRow key={offer.id}>
					<ClientTableCol className={cls.titleCol}>
						<div className={cls.indicatorCont}>
							<div className={cls.indicator} />
						</div>
						<div className={cls.titleCont}>
							<p className={cls.title}>{offer.title}</p>
							<p className={cls.id}>ID {offer.id}</p>
						</div>
					</ClientTableCol>
					<ClientTableCol center>Sources</ClientTableCol>
					<ClientTableCol className={cls.spend}>${offer.spend}</ClientTableCol>
					<ClientTableCol className={cls.profit}>
						${offer.profit}
					</ClientTableCol>
					<ClientTableCol className={cls.actions}>
						<button>
							<PenIcon />
						</button>
						<button>
							<EyeIcon />
						</button>
						<button>
							<TrashIcon />
						</button>
					</ClientTableCol>
				</ClientTableRow>
			));

		if (isError) return <p>There is some error while fetching client</p>;
	}, [data, isLoading, isSuccess, isError]);

	return (
		<div className={cls.clientTable}>
			<ClientTableRow isHead>
				<ClientTableCol isHead center>
					Title
				</ClientTableCol>
				<ClientTableCol isHead center>
					Sources
				</ClientTableCol>
				<ClientTableCol isHead center>
					Spend
				</ClientTableCol>
				<ClientTableCol isHead center>
					Profit
				</ClientTableCol>
				<ClientTableCol isHead center>
					Actions
				</ClientTableCol>
			</ClientTableRow>
			{renderOffersTable()}
		</div>
	);
};

export default ClientTable;
