import { useCallback, useRef, type ChangeEvent } from 'react'
import './RangeSlider.css'

export interface RangeSliderProps {
	min?: number
	max?: number
	step?: number
	valueLow?: number
	valueHigh?: number
	onChange?: (low: number, high: number) => void
	formatLabel?: (value: number) => string
	labelLow?: string
	labelHigh?: string
	className?: string
}

const defaultFormat = (value: number) =>
	`$${value.toLocaleString('en-US')}`

const RangeSlider = ({
	min = 0,
	max = 10000,
	step = 100,
	valueLow = 0,
	valueHigh = 10000,
	onChange,
	formatLabel = defaultFormat,
	labelLow = 'From:',
	labelHigh = 'To:',
	className,
}: RangeSliderProps) => {
	const trackRef = useRef<HTMLDivElement>(null)

	const clampedLow = Math.min(valueLow, valueHigh)
	const clampedHigh = Math.max(valueLow, valueHigh)

	const percentLow = ((clampedLow - min) / (max - min)) * 100
	const percentHigh = ((clampedHigh - min) / (max - min)) * 100

	const handleLowChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newLow = Math.min(Number(e.target.value), clampedHigh)
			onChange?.(newLow, clampedHigh)
		},
		[clampedHigh, onChange],
	)

	const handleHighChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newHigh = Math.max(Number(e.target.value), clampedLow)
			onChange?.(clampedLow, newHigh)
		},
		[clampedLow, onChange],
	)

	const rootClassName = ['range-slider', className ?? '']
		.filter(Boolean)
		.join(' ')

	return (
		<div className={rootClassName}>
			<div className="range-slider__track" ref={trackRef}>
				<div
					className="range-slider__fill"
					style={{
						left: `${percentLow}%`,
						width: `${percentHigh - percentLow}%`,
					}}
				/>
				<input
					type="range"
					className="range-slider__input"
					min={min}
					max={max}
					step={step}
					value={clampedLow}
					onChange={handleLowChange}
					aria-label={labelLow}
				/>
				<input
					type="range"
					className="range-slider__input"
					min={min}
					max={max}
					step={step}
					value={clampedHigh}
					onChange={handleHighChange}
					aria-label={labelHigh}
				/>
			</div>

			<div className="range-slider__labels">
				<span className="range-slider__label">
					{labelLow}{' '}
					<span className="range-slider__label-value">
						{formatLabel(clampedLow)}
					</span>
				</span>
				<span className="range-slider__label">
					{labelHigh}{' '}
					<span className="range-slider__label-value">
						{formatLabel(clampedHigh)}
					</span>
				</span>
			</div>
		</div>
	)
}

export default RangeSlider
