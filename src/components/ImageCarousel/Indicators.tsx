import { Box } from '@mui/material'

type TIndicatorsProps = {
	count: number
	activeIndex: number
	onIndicatorClick: (index: number) => void
	variant?: 'default' | 'zoom'
}

export const Indicators = ({
	count,
	activeIndex,
	onIndicatorClick,
	variant = 'default'
}: TIndicatorsProps) => (
	<Box
		data-testid="carousel-indicators"
		sx={{
			position: 'absolute',
			bottom: variant === 'zoom' ? 24 : 12,
			left: '50%',
			transform: 'translateX(-50%)',
			display: 'flex',
			gap: 2
		}}
	>
		{Array.from({ length: count }, (_, index) => (
			<Box
				key={index}
				onClick={() => onIndicatorClick(index)}
				sx={{
					width: 12,
					height: 12,
					borderRadius: '50%',
					bgcolor: index === activeIndex ? 'white' : 'rgba(255, 255, 255, 0.4)',
					cursor: 'pointer',
					transition: 'background-color 0.2s'
				}}
			/>
		))}
	</Box>
)
