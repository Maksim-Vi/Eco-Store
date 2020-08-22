import React from 'react'
import s from '../../css/header.module.css'
import NavContainer from './Nav/navContainer'

const Header = () =>{
    return ( 
    <div className={s.Main}>
        <div className={s.ContainerHeader}>
            <div className={s.container}>
            <header className={s.header}>
                <NavContainer/> 
            </header>
            </div>
        </div>
    </div>)
}

export default Header