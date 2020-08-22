import React from 'react'
import imgPreloder from '../../img/preloader.gif'
import s from './preloader.module.css'

let Preloader = (props) => {
    return (
    <div className={s.preloader}>
        <img src={imgPreloder} alt="" />
    </div>
    );
}

export default Preloader;
