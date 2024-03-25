import styles from './Information.module.css';

export const InformationLayout = () => {
	return(
		<div className={styles['information-container']}>
			<div className={styles['current-move']}>
				Текущий ход:
			</div>
			<div className={styles['current-winner']}>
				Победил:
			</div>
		</div>
	)
}
