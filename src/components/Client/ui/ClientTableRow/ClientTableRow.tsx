import type { FC, PropsWithChildren } from 'react';
import cls from './style.module.css';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
	isHead?: boolean;
}

const ClientTableRow: FC<Props> = ({ children, isHead }) => {
	return (
		<div className={classNames(cls.row, { [cls.head]: isHead })}>
			{children}
		</div>
	);
};

export default ClientTableRow;
