import React from 'react';
import s from '../../css/header.module.css';
import { NavLink, Link } from 'react-router-dom';
import FormWithMenu from './contactsForm';
import {totalPriceCount} from '../Common/common';

const AnswerNav = ({setAnswNav,modalShow,setModalShow,props}) => {
    return (
        <div className={s.overlay}>
            <p className={s.closebtn} onClick={() => setAnswNav(false)}>×</p>
            <div className={s.overlayContent}>
                <li className={s.headerNumber}>
                    <span>+380(96) 543-87-99</span>
                </li>
                <li><NavLink to='/Eco-Store/Product'>Продукция</NavLink></li>
                <li><span className={s.Contacts}  onClick={() => setModalShow(true)} >Связатся с нами</span></li>
                <FormWithMenu show={modalShow} onHide={() => setModalShow(false)} />
                <li><NavLink to='/Eco-Store/AboutUs' activeClassName={s.navActive}>О нас</NavLink></li>
                <li><NavLink to='/Eco-Store/Shopping&Payment' activeClassName={s.navActive}>Доставка и Оплата</NavLink></li>
                <li><NavLink to='/Eco-Store/ContactUs' activeClassName={s.navActive}>Контакты</NavLink></li>
                <li>
                    <Link to={'/Eco-Store/Basket'} className={s.btnAnsNav}>
                    <li> Корзина </li>
                    <div className={s.disableBasket}>
                        <div className={s.korzina}>
                            <span>{totalPriceCount(props.totalPrice)} грн</span>
                            <span className={s.count}>{props.totalPrice.length} шт.</span>
                        </div>
                    </div>
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default AnswerNav
