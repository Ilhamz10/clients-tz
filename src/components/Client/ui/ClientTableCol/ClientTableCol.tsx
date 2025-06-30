import type { FC, PropsWithChildren } from 'react';
import cls from './style.module.css';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
	isHead?: boolean;
	center?: boolean;
	className?: string;
}

const ClientTableCol: FC<Props> = ({ children, isHead, center, className }) => {
	return (
		<div
			className={classNames(cls.col, className, {
				[cls.head]: isHead,
				[cls.center]: center,
			})}>
			{children}
		</div>
	);
};

export default ClientTableCol;
