import React from 'react';
import s from '../../css/header.module.css'
import { NavLink } from 'react-router-dom';
import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const HeaderIntro = () =>{
    const Bounce = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;
    return(
        <div className={s.intro}>
            <div className={s.container}>
                <div className={s.mainText}>
                    <h2><span>Eco</span> Товары в каждый дом</h2>
                    <Bounce><NavLink to='/Product' className={s.Store} >В магазин</NavLink></Bounce>
                </div>
            </div>
        </div>
    )
}

export default HeaderIntro;