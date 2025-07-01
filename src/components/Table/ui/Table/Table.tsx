import { useGetClients } from '@/components/Table/hooks';
import Col from '../Col/Col';
import Row from '../Row/Row';
import RowWithDetail from '../RowWithDetail/RowWithDetail';
import cls from './style.module.css';
import { useCallback } from 'react';

export const Table = () => {
	const { data, isLoading, isSuccess, isError } = useGetClients();

	const renderClients = useCallback(() => {
		if (isLoading) {
			return (
				<div className='loader-cont'>
					<div className='loader' />
				</div>
			);
		}

		if (isSuccess) {
			return data.map((client) => (
				<RowWithDetail key={client.id} client={client} />
			));
		}

		if (isError) {
			return <p>There is some error while loading clients</p>;
		}
	}, [data, isError, isLoading, isSuccess]);

	return (
		<div className={cls.table}>
			<Row isHead>
				<Col isHead>
					<div className={cls.clientNameCol}>
						<div />
						Client name
					</div>
				</Col>
				<Col isHead center>
					Start date
				</Col>
				<Col isHead center>
					Balance
				</Col>
				<Col isHead center>
					Offers
				</Col>
				<Col isHead center>
					Manager
				</Col>
				<Col isHead center>
					Actions
				</Col>
			</Row>
			{renderClients()}
		</div>
	);
};
