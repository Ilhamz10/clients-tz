import type { FC, PropsWithChildren } from 'react';
import cls from './style.module.css';
import Button from '@/shared/ui/Button/Button';
import PlusIcon from '@/assets/icons/plus-icon.svg';
import ArrowIcon from '@/assets/icons/arrow-icon.svg';
import SearchIcon from '@/assets/icons/search-icon.svg';

interface Props extends PropsWithChildren {
	mode: 'offers' | 'payment';
}

export const WrapperForTable: FC<Props> = ({ mode, children }) => {
	return (
		<div className={cls.wrapperForTable}>
			<h2 className={cls.title}>
				{mode === 'offers' ? 'Offers' : 'Payment Terms'}
			</h2>
			<div className={cls.actions}>
				<Button withIcon Icon={<PlusIcon />}>
					{mode === 'offers' ? 'New Offer' : 'New Terms'}
				</Button>
				<div className={cls.actionsInput}>
					<div className={cls.searchInput}>
						<SearchIcon />
						<input type='text' placeholder='Search offers' />
					</div>
					<Button className={cls.statusBtn} withIcon Icon={<ArrowIcon />}>
						Status
					</Button>
				</div>
			</div>
			{children}
		</div>
	);
};