import Button from '@/shared/ui/Button/Button';
import cls from './style.module.css';
import classNames from 'classnames';
import type { Client } from '@/app/types';
import type { FC } from 'react';

interface Props {
	client: Client;
}

export const ClientCard: FC<Props> = ({ client }) => {
	return (
		<div className={cls.card}>
			<h2 className={classNames(cls.cardTitle, 'blue')}>
				{client.name.toUpperCase()}
			</h2>
			<div className='line' />
			<div>
				<div className={cls.cardInfo}>
					<p className={cls.key}>Account manager</p>
					<div className={cls.value}>
						<img src='' alt='' />
						<p>{client.account_manager}</p>
					</div>
				</div>
				<div className={cls.cardInfo}>
					<p className={cls.key}>Sales manager</p>
					<div className={cls.value}>
						<img src='' alt='' />
						<p>{client.sales_manager}</p>
					</div>
				</div>
				<div className={cls.cardInfo}>
					<p className={cls.key}>Start date</p>
					<p className={cls.value}>{client.start_date}</p>
				</div>
				<div className={cls.cardInfo}>
					<p className={cls.key}>Status</p>
					<p
						className={classNames(cls.value, {
							success: client.status === 'active',
							archived: client.status === 'archived',
						})}>
						{client.status.toUpperCase()}
					</p>
				</div>
			</div>
			<div className='line' />
			<div>
				<div className={cls.cardInfo}>
					<p className={cls.key}>Type of client</p>
					<p className={cls.value}>{client.type_of_client}</p>
				</div>
				<div className={cls.cardInfo}>
					<p className={cls.key}>Experience</p>
					<p className={cls.value}>{client.experience}</p>
				</div>
				<div className={cls.cardInfo}>
					<p className={cls.key}>Monthly budgets</p>
					<p className={cls.value}>{client.monthly_budgets}</p>
				</div>
			</div>
			<div className='line' />
			<div className={cls.balanceInfo}>
				<h2 className={cls.cardTitle}>BALANCE</h2>
				<h3 className={cls.cardSubTitle}>
					<span>{client.balance.balance_usd}</span>
					<span>USD</span>
				</h3>
				<h3 className={cls.cardSubTitle}>
					<span>{client.balance.balance_rub}</span>
					<span>RUB</span>
				</h3>
				<h2 className={cls.cardTitle}>LOANS</h2>
				<h3 className={classNames(cls.cardSubTitle, 'error')}>
					<span>{client.loans}</span>
					<span>RUB</span>
				</h3>
			</div>
			<div className='line' />
			<div className={cls.cardBtns}>
				<Button disabled>Archive</Button>
				<Button mode='secondary'>Edit</Button>
			</div>
		</div>
	);
};
