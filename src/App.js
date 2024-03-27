import React, { useState } from 'react';
import styles from './App.module.css';
import { AppLayout } from './Components/AppLayout/AppLayout';

export const App = () => {
    let [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const fieldArray = ['', '', '', '', '', '', '', '', ''];
    const [field, setField] = useState(fieldArray);

    const handleClickCellButtons = (id) => {
        const updateField = field.slice();
        if (field[id] === '' && !isGameEnded) {
            updateField[id] = currentPlayer;
            setField(updateField);
            setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
        }
    };

    const handleResetGame = () => {
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);
        setField(fieldArray);
    };

    return (
        <div className={styles['app-container']}>
            <AppLayout
                field={field}
                isDraw={isDraw}
                isGameEnded={isGameEnded}
                currentPlayer={currentPlayer}
                handleClickCellButtons={handleClickCellButtons}
                handleResetGame={handleResetGame}
            />
        </div>
    );
};
