import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
	fullWidth?: boolean
}

const buildClassName = ({
	variant,
	size,
	fullWidth,
	className,
}: {
	variant: ButtonVariant
	size: ButtonSize
	fullWidth: boolean
	className?: string
}) => {
	const classNames = [
		'button',
		`button--${variant}`,
		`button--${size}`,
		fullWidth ? 'button--full-width' : '',
		className ?? '',
	]

	return classNames.filter(Boolean).join(' ')
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
			className={buildClassName({
				variant,
				size,
				fullWidth,
				className,
			})}
			{...props}
		/>
	)
}

export default Button
