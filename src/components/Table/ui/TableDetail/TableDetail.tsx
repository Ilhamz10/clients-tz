import { ClientCard, ClientTable, PaymentTable, WrapperForTable } from '@/components/Client/ui';
import classNames from 'classnames';
import { useGetClientById } from '../../hooks';
import { useCallback, useState, type FC } from 'react';

import cls from './style.module.css';
import BankIcon from '@/assets/icons/bank-icon.svg';
import LabelIcon from '@/assets/icons/label-icon.svg';

interface Props {
	clientId?: number;
}

export const TableDetail: FC<Props> = ({ clientId }) => {
	const [mode, setMode] = useState<'offers' | 'payment'>('offers');
	const { data, isLoading, isSuccess, isError } = useGetClientById(clientId);

	const renderClientCard = useCallback(() => {
		if (isLoading)
			return (
				<div className='loader-cont'>
					<div className='loader' />
				</div>
			);

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
