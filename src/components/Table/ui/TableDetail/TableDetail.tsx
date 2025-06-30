import ClientCard from '@/components/Client/ui/ClientCard/ClientCard';
import cls from './style.module.css';
import ClientTable from '@/components/Client/ui/ClientTable/ClientTable';
import WrapperForTable from '@/components/Client/ui/WrapperForTable/WrapperForTable';
import LabelIcon from '@/assets/icons/label-icon.svg';
import BankIcon from '@/assets/icons/bank-icon.svg';
import { useCallback, useState, type FC } from 'react';
import classNames from 'classnames';
import PaymentTable from '@/components/Client/ui/PaymentTable/PaymentTable';
import { useGetClientById } from '../../hooks/useClients';

interface Props {
	clientId?: number;
}

export const TableDetail: FC<Props> = ({ clientId }) => {
	const [mode, setMode] = useState<'offers' | 'payment'>('offers');
	const { data, isLoading, isSuccess, isError } = useGetClientById(clientId);

	const renderClientCard = useCallback(() => {
		if (isLoading) return <p>Loadin....</p>;

		if (isSuccess) return <ClientCard client={data} />;

		if (isError) return <p>There is some error while fetching client</p>;
	}, [data, isLoading, isSuccess, isError]);

	return (
		<div className={cls.tableDetailCont}>
			<div className={cls.tableDetail}>
				{renderClientCard()}
				<div className={cls.clientDetail}>
					<div className={cls.navigator}>
						<button
							onClick={() => setMode('offers')}
							className={classNames({ [cls.active]: mode === 'offers' })}>
							<LabelIcon />
						</button>
						<button
							onClick={() => setMode('payment')}
							className={classNames({ [cls.active]: mode === 'payment' })}>
							<BankIcon />
						</button>
					</div>
					<WrapperForTable mode={mode}>
						{mode === 'offers' ? (
							<ClientTable clientId={clientId} />
						) : (
							<PaymentTable clientId={clientId} />
						)}
					</WrapperForTable>
				</div>
			</div>
		</div>
	);
};
