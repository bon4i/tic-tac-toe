import styles from './Field.module.css';
export const FieldLayout = ({field, handleClickCellButtons}) => {
	return(
		<div className={styles['game-filed']}>
			{field.map((item, index) => {
				return (
					<button
						key={index}
						id={index}
						onClick={() => handleClickCellButtons(index)}
						className={styles['cell-button']}
					>
						{item}
					</button>
				);
			})}
		</div>
	)
}
