import React from 'react';
import logo from '../../../img/logo.png'
import korzina from '../../../img/korzina.png'
import s from '../../../css/header.module.css'
import { NavLink } from 'react-router-dom';
import {totalPriceCount} from '../../Common/common';
import FormWithMenu from '../../Contacts/contactsForm';
import AnswerNav from '../../Contacts/answerNav';
import Dropdown from '../../Common/Dropdown';
import { useState } from 'react';

const Nav = (props) =>{
    const [modalShow, setModalShow] = useState(false);
    
    const [AnswNav, setAnswNav] = useState(false);

    const itemsTab = [
        {
          id: 1,
          value: 'Product',
          name:'Все',
          type:'1'
        },
        {
          id: 2,
          value: 'Product',
          name:'Столовые приборы',
          type:'приборы'
        },
        {
          id: 3,
          value: 'Product',
          name:'Зубные щетки',
          type:'щетки'
        },
        {
            id: 4,
            value: 'Product',
            name:'Трубочки',
            type:'трубочки'
        },
        {
            id: 5,
            value: 'Product',
            name:'Мешочки',
            type:'мешочки'
        }
    ];

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    return (<>
    <nav className={s.nav}>
        <div className={s.containerLogo}>
            <NavLink to="/" className={s.logo}><img src={logo} alt=""/></NavLink>
        </div>
        <menu className={s.nav_menu}>
            <NavLink to='/'></NavLink>
            <Dropdown items={itemsTab}/>
            {/* <li><NavLink to='/Eco-Store/Product' activeClassName={s.navActive}>Продукция</NavLink></li> */}
            <li><span className={s.Contacts}  onClick={handleShow}>Связатся с нами</span></li>
            <FormWithMenu modalShow={modalShow} handleClose={handleClose} />
            <li><NavLink to='/AboutUs' activeClassName={s.navActive}>О нас</NavLink></li>
            <li><NavLink to='/Shopping&Payment' activeClassName={s.navActive}>Доставка и Оплата</NavLink></li>
            <li><NavLink to='/ContactUs' activeClassName={s.navActive}>Контакты</NavLink></li>
            <li>
                <NavLink to={'/Basket'} className={s.btn} activeClassName={s.navActive}>
                    <div className={s.korzina}>
                        <span>{totalPriceCount(props.totalPrice)} грн </span>
                        <img src={korzina} alt=""/>
                        <span className={s.count}>{props.totalPrice.length}</span>
                    </div>
                </NavLink>
            </li>
            <li className={s.headerNumber}>
                <p>+380(67) 455-08-01</p>
            </li>
        </menu>
        <span className={s.btnOpenAnswerNav} onClick={() => setAnswNav(true)}>☰</span>
        {AnswNav 
        ? <AnswerNav setAnswNav={setAnswNav} setModalShow={setModalShow} modalShow={modalShow} props={props}/>
        : null  
        }  
    </nav>

    </>)
}

export default Nav


// setAnswNav={setAnswNav} setModalShow={setModalShow} modalShow={modalShow}