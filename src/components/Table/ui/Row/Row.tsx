import type { FC, PropsWithChildren } from 'react';
import cls from './style.module.css';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
	isHead?: boolean;
	onClick?: () => void;
}

const Row: FC<Props> = ({ children, isHead, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={classNames(cls.row, { [cls.head]: isHead })}>
			{children}
		</div>
	);
};

export default Row;
