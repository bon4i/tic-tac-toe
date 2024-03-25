import React from 'react';
import styles from './App.module.css';
import { AppLayout } from './Components/AppLayout/AppLayout';

export const App = () => {
    return (
        <div className={styles['app-container']}>
            <AppLayout />
        </div>
    );
};
