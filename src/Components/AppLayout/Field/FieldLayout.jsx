import styles from './Field.module.css';
export const FieldLayout = ({filed}) => {
	return(
		<div className={styles['game-filed']}>
			<div>
				<button>X</button>
				<button>0</button>
				<button>X</button>
			</div>
			<div>
				<button>X</button>
				<button>0</button>
				<button>X</button>
			</div>
			<div>
				<button>X</button>
				<button>0</button>
				<button>X</button>
			</div>
		</div>
	)
}
