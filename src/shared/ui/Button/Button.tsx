import type {
	ComponentPropsWithRef,
	FC,
	PropsWithChildren,
	ReactNode,
} from 'react';
import cls from './style.module.css';
import classNames from 'classnames';

interface ButtonProps
	extends PropsWithChildren<ComponentPropsWithRef<'button'>> {
	mode?: 'secondary' | 'primary';
	withIcon?: boolean;
	Icon?: ReactNode;
	className?: string;
}

const Button: FC<ButtonProps> = ({
	mode = 'primary',
	children,
	Icon,
	withIcon,
	className,
	...props
}) => {
	return (
		<button
			className={classNames(cls.btn, cls[mode], className, {
				[cls.withIcon]: withIcon,
			})}
			{...props}>
			{children}
			{withIcon && Icon}
		</button>
	);
};

export default Button;
