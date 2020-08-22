import React from 'react';
import s from '../AdminPanel.module.css';

export const AlertMessage = ({error, clearError}) => {
    return (
        <div className={s.alert}>
            <span className={s.closebtn} onClick={clearError}>x</span>
            <strong>{error}</strong>
        </div>
    )
}