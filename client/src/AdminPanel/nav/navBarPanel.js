import React, { useContext } from 'react';
import s from '../AdminPanel.module.css';
import { AuchContext } from '../../content/content.hook';
import { NavLink } from 'react-router-dom';

const NavBarPanel = () => {
    const auch = useContext(AuchContext)
    return (
        <nav className={s.container}>
            <div className={s.navbar}>
                <a href="/">На Главную</a>
                <NavLink to="/Eco-Store/AdminPanel/Top">ТОП</NavLink>
                <NavLink to="/Eco-Store/AdminPanel/Tables">Список</NavLink>
                <NavLink to="/Eco-Store/AdminPanel/CreateProduct">Добавить</NavLink>
                <NavLink to="/Eco-Store/AdminPanel/Registration">зарегестрировать</NavLink>
                <a href="/Eco-Store/AdminPanel" className={s.logout} onClick={auch.logout}>Выйти</a>
            </div>
        </nav>
    )
}

export default NavBarPanel