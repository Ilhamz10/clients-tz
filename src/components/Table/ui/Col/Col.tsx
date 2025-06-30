import type { FC, PropsWithChildren } from 'react';
import cls from './style.module.css';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
	center?: boolean;
	isHead?: boolean;
	className?: string
}

const Col: FC<Props> = ({ children, center, isHead, className }) => {
	return (
		<div
			className={classNames(cls.col, className, {
				[cls.center]: center,
				[cls.head]: isHead,
			})}>
			{children}
		</div>
	);
};

export default Col;
