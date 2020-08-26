import React from "react";
import s from '../../css/Basket.module.css';
import Header from '../Header/header';
import BasketItem from "./BasketItem";
import { NavLink, Link } from "react-router-dom";
import {totalPriceCount} from '../Common/common'
import {Modal} from 'react-bootstrap';
import FormBasketContainer from "./FormBasket/FormBasketContainer";


const Popup = (props) => {
  return (
  <>  
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" />
        <h4>Form</h4>
      </Modal.Header>
      <Modal.Body>
         <FormBasketContainer item={props.item} setModalShow={props.setModalShow}/> 
      </Modal.Body>
    </Modal>
  </>)
}


const Basket = (props) => {  
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
    <Header />
    <div className={s.introStore}></div>
      <div className={`${s.wrap} ${s.cf}`}>
        <h1 className={s.projTitle}>
          Спасибо за выбор <span>Eco-Choice</span> мы всегда вам рады
        </h1>
        <div className={`${s.heading} ${s.cf}`}>
          <h1>Корзина</h1>
          <NavLink to='/Eco-Store/Product' className={s.continue}>
            обратно в мазагин 
          </NavLink>
        </div>

        <div className={s.cart}>
          <ul className={s.cartWrap}>
            {props.itemsSort.map(item =>{
              return <BasketItem  key={item.id} 
                                  item={item} 
                                  itemsAll={props.itemsAll} 
                                  removeOneItemToBasket={props.removeOneItemToBasket} 
                                  addItemToBasket={props.addItemToBasket} 
                                  removeItemToBasket={props.removeItemToBasket}/>
            })}
          </ul>
        </div>

        <div className={`${s.subtotal} ${s.cf}`}>
          <ul className={s.totalRowUl}>
            <li className={`${s.totalRow}  ${s.final}`}>
              <span className={s.label}>Total:</span>
              <span className={s.value}>{totalPriceCount(props.itemsAll)} грн</span>
            </li>
            <li className={s.totalRow}>
              <Link to='/Eco-Store/Basket' onClick={()=>{setModalShow(true)}} className={`${s.bBasket}`}>
                Заказать
              </Link>
            </li>
              <Popup show={modalShow} onHide={() => setModalShow(false)} setModalShow={setModalShow}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Basket;

// ${s.btnBasket} onClick={()=>{setModalShow(true)}}