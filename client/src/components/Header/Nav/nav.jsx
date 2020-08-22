import React from 'react';
import logo from '../../../img/logo.png'
import korzina from '../../../img/korzina.png'
import s from '../../../css/header.module.css'
import { NavLink, Link } from 'react-router-dom';
import {totalPriceCount} from '../../Common/common';
import FormWithMenu from '../../Contacts/contactsForm';
import AnswerNav from '../../Contacts/answerNav';
import Dropdown from '../../Common/Dropdown';

const Nav = (props) =>{
    const [modalShow, setModalShow] = React.useState(false);
    
    const [AnswNav, setAnswNav] = React.useState(false);

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
      ];
    
    return (<>
    <nav className={s.nav}>
        <div className={s.containerLogo}>
            <NavLink to="/Eco-Store/" className={s.logo}><img src={logo} alt=""/></NavLink>
        </div>
        <menu className={s.nav_menu}>
            <NavLink to='/Eco-Store/'></NavLink>
            <Dropdown items={itemsTab}/>
            {/* <li><NavLink to='/Eco-Store/Product' activeClassName={s.navActive}>Продукция</NavLink></li> */}
            <li><span className={s.Contacts}  onClick={() => setModalShow(true)} >Связатся с нами</span></li>
            <FormWithMenu show={modalShow} onHide={() => setModalShow(false)} setModalShow={setModalShow} />
            <li><NavLink to='/Eco-Store/AboutUs' activeClassName={s.navActive}>О нас</NavLink></li>
            <li><NavLink to='/Eco-Store/Shopping&Payment' activeClassName={s.navActive}>Доставка и Оплата</NavLink></li>
            <li><NavLink to='/Eco-Store/ContactUs' activeClassName={s.navActive}>Контакты</NavLink></li>
            <li>
                <NavLink to={'/Eco-Store/Basket'} className={s.btn} activeClassName={s.navActive}>
                    <div className={s.korzina}>
                        <span>{totalPriceCount(props.totalPrice)} грн </span>
                        <img src={korzina} alt=""/>
                        <span className={s.count}>{props.totalPrice.length}</span>
                    </div>
                </NavLink>
            </li>
            <li className={s.headerNumber}>
                <p>+380(96) 543-87-99</p>
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