import { useState, type FC } from 'react';
import Col from '../Col/Col';
import Row from '../Row/Row';
import { TableDetail } from '../TableDetail/TableDetail';
import cls from './style.module.css';
import EyeIcon from '@/assets/icons/eye-icon.svg';
import PenIcon from '@/assets/icons/pen-icon.svg';
import TrashIcon from '@/assets/icons/trash-icon.svg';
import { motion } from 'motion/react';
import type { Client } from '@/app/types';
import classNames from 'classnames';

const detailVariants = {
	open: {
		height: 'auto',
	},
	close: {
		height: 0,
	},
};

interface Props {
	client: Client;
}

const RowWithDetail: FC<Props> = ({ client }) => {
	const [isActive, setIsActive] = useState(false);
	const [clientId, setClientId] = useState<undefined | number>();

	function openDetail() {
		setIsActive((prev) => !prev);
		setClientId(client.id);
	}

	return (
		<div>
			<Row onClick={openDetail}>
				<Col className={cls.clientName}>
					<div className={cls.indicatorCont}>
						<div
							className={classNames(cls.indicator, {
								[cls.active]: client.status === 'active',
							})}
						/>
					</div>
					{client.name}
				</Col>
				<Col center>{client.start_date}</Col>
				<Col center>${client.balance.balance_usd}</Col>
				<Col center>{client.offers}</Col>
				<Col center>{client.sales_manager}</Col>
				<Col className={cls.actions}>
					<button>
						<PenIcon />
					</button>
					<button>
						<EyeIcon />
					</button>
					<button>
						<TrashIcon />
					</button>
				</Col>
			</Row>
			<motion.div
				initial={{ height: 0, padding: 0 }}
				variants={detailVariants}
				animate={isActive ? 'open' : 'close'}
				className={cls.tableDetail}>
				<TableDetail clientId={clientId} />
			</motion.div>
		</div>
	);
};

export default RowWithDetail;
