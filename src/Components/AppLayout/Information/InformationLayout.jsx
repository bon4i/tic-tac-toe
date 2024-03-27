import styles from './Information.module.css';

export const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => {
	return(
		<div className={styles['information-container']}>
			<div className={styles['current-move']}></div>
			<div className={styles['current-winner']}>
				{isDraw
					? 'Ничья'
					: isGameEnded
						? `Победа: ${currentPlayer}`
						: `Ходит: ${currentPlayer}`
				}
			</div>
		</div>
	)
}
