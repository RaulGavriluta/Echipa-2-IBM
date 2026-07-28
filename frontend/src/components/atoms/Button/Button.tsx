import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import './Button.css'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
	fullWidth?: boolean
}

const Button = ({
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	className,
	type = 'button',
	...props
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={clsx(
				'button',
				`button--${variant}`,
				`button--${size}`,
				fullWidth && 'button--full-width',
				className,
			)}
			{...props}
		/>
	)
}

export default Button

