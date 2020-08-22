import React from "react";
import s from '../../css/Basket.module.css';

const BasketItem = (props) => {

  let count = (item, itemId) =>{
    return item.reduce((count, item) => {
      return count + (item.id === itemId ? 1 : 0)
    }, 0)
  }

  return (
    <div>
      <li className={`${s.items} ${s.odd}`}>
        <div className={s.infoWrap}>
          <div className={s.cartSection}>
            <img src={`http://localhost:5000/${props.item.image}`} alt="" className={s.itemImg} />
            <h4>{props.item.name}</h4>
          </div>

          <p className={s.InputText}>
            <a className={s.addSubtract} onClick={props.removeOneItemToBasket.bind(this, props.item.id)}>-</a>
            {count(props.itemsAll, props.item.id) > 0 && count(props.itemsAll, props.item.id)}
            <a className={s.addSubtract} onClick={props.addItemToBasket.bind(this,props.item)} >+</a>
            x {props.item.price - props.item.salePrice} грн/шт
          </p>

          <div className={`${s.prodTotal} ${s.cartSection}`}>
            <p>{(props.item.price - props.item.salePrice) * count(props.itemsAll, props.item.id)} грн</p>
          </div>
          <div className={`${s.cartSection}`}>
            <a href="#delete" className={s.remove} onClick={props.removeItemToBasket.bind(this,props.item.id)}>&times;</a>
          </div>
        </div>
      </li>
    </div>
  );
};

export default BasketItem;



// добавить + и - для добавления и удаления итемов в корзине 