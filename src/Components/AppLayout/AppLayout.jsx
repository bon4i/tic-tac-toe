import { useState } from 'react';
import styles from './AppLayout.module.css';
import { FieldContainer } from "./Field/FieldContainer";
import { InformationContainer } from "./Information/InformationContainer";

export const AppLayout = () => {
	const [currentPlayer, setCurrentPlayer] = useState('x');
	const [isGameEnded] = useState(false);
	const [isDraw] = useState(false);
	const field = [
		'', '', '',
		'', '', '',
		'', '', '',
	]
	return(
		<div>
			<InformationContainer />
			<FieldContainer />
			<div className={styles['restart-container']}>
				<button className={styles['restart-button']}>Начать заново</button>
			</div>
		</div>
	);
}
