import { useCallback } from 'react';
import { useGetPayments } from '../../hooks/usePayments';
import ClientTableCol from '../ClientTableCol/ClientTableCol';
import ClientTableRow from '../ClientTableRow/ClientTableRow';
import cls from './style.module.css';
import EyeIcon from '@/assets/icons/eye-icon.svg';
import PenIcon from '@/assets/icons/pen-icon.svg';
import TrashIcon from '@/assets/icons/trash-icon.svg';

const PaymentTable = ({ clientId }: { clientId?: number }) => {
	const { data, isLoading, isSuccess, isError } = useGetPayments(clientId);

	const renderPaymentsTable = useCallback(() => {
		if (isLoading) return <p>Loadin....</p>;

		if (isSuccess)
			return data.map((payment) => (
				<ClientTableRow key={payment.id}>
					<ClientTableCol className={cls.titleCol}>
						<div className={cls.indicatorCont}>
							<div className={cls.indicator} />
						</div>
						<div className={cls.titleCont}>
							<p className={cls.title}>{payment.payment_method}</p>
							<p className={cls.id}>ID {payment.id}</p>
						</div>
					</ClientTableCol>
					<ClientTableCol center>{payment.exchange_extras}%</ClientTableCol>
					<ClientTableCol className={cls.spend}>{payment.vat}%</ClientTableCol>
					<ClientTableCol className={cls.profit}>
						{payment.start_date}
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
					Payment method
				</ClientTableCol>
				<ClientTableCol isHead center>
					Exchange extras
				</ClientTableCol>
				<ClientTableCol isHead center>
					VAT
				</ClientTableCol>
				<ClientTableCol isHead center>
					Start date
				</ClientTableCol>
				<ClientTableCol isHead center>
					Actions
				</ClientTableCol>
			</ClientTableRow>
			{renderPaymentsTable()}
		</div>
	);
};

export default PaymentTable;
