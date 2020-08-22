import React from 'react'
import s from '../../css/store.module.css'
import { Link } from 'react-router-dom';

const ItemStore = (props) =>{
  //console.log(props.item);
  return(<>
            <li className={s.card}>
                  <Link to={
                    {pathname:'/Eco-Store/Description/' + props.item.id,
                    state:{
                      data: {...props.item}
                    }}}>
                    <div className={s.cardContainer}>
                      <div className={s.cardItem}><img src={`http://localhost:5000/${props.item.image}`} alt="" /></div>
                    </div>
                  </Link>
                <div className={s.Price}>
                  <div className={s.PriceTxt}>
                    <p>{props.item.name}</p>
                    <p>{props.item.price - props.item.salePrice} грн.</p>
                  </div>
                  <div>
                    <button className={s.PriceBtn} 
                            disabled={props.item.inStock === false}
                            onClick={props.addItemToBasket.bind(this,props.item)}
                    >
                            В корзину <i>{props.addedCountItem(props.itemBasket,props.item.id) > 0 && `(${props.addedCountItem(props.itemBasket,props.item.id)})`}</i>
                    </button>
                    {props.item.inStock 
                      ? (<span className={s.inStockTrue}>в наличии </span>)
                      :(<span className={s.inStockFalse}>нет в наличии</span> )}
                  </div>
                </div>
            </li>
  </>)
}

export default ItemStore;


/*
onClick={props.addItemToBasket.bind(this,props.item)

  при нажатии на кнопку мы отрабатываем функцию добавить item c базы, в корзину,
  bind - для того что бы не потерять контекст, того item что нажали 

  && `(${props.addedCountItem(props.item,props.item.id)})`
  props.addedCountItem(props.item,props.itemBasket.id)
*/