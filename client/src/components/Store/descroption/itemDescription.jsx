import React from 'react';
import Header from '../../Header/header';
import s from '../../../css/storeItem.module.css'
import ItemDescriptionTable from './itemDescriptionTable';
import { addedCountItem } from '../../Common/common';
import Footer from '../../Footer/footer';
import ImgCarusel from './imgCarusel';


const ItemDescription = ({data, addItemToBasket, itemBasket}) =>{
  return ( <>
        <Header />
        <div className={s.introStore}></div>
        <section className={s.section4}>
      <div className={s.container}>
        <div className={s.containerItem}>
          <div className={s.ItemImg}>
            <ImgCarusel data={data}/>
          </div>
          <div className={s.ItemDescription}>
            <h2 className={s.title}>{data.description.nameDescription}</h2>
            <p>{data.inStock 
              ? (<span className={s.inStockTrue}>в наличии </span>)
              : (<span className={s.inStockFalse}>нет в наличии</span> )} <br/> Код товара: {data.id} </p> 
            
            <div  className={s.MainImgMedia}>
              <ImgCarusel data={data}/>
            </div>

            <div className={s.ItemPrice}>
              {data.sale 
              ?<div><span className={s.strikethrough}>{data.price} грн</span><span className={s.salePrice}> {data.price - data.salePrice} грн</span></div>
              : <div className={s.ItemPriceTxt}>
                  <p>{data.price} грн</p>
                </div>
              }
              
              <button onClick={addItemToBasket.bind(this,data)}
                      disabled={data.inStock === false} 
                      className={s.ItemPriceBtn}>
                         в корзину 
                        <i>{addedCountItem(itemBasket,data.id) > 0 && `(${addedCountItem(itemBasket,data.id)})`}</i>
              </button>
            </div>
            <p>{data.description.descriptionD}</p>
          </div>
        </div>
       <ItemDescriptionTable data={data}/>
      </div>
    </section>
    <Footer />
    </>)
}

export default ItemDescription



/*
что в редакс уйдет

1) Столовые приборы «ECO»
2) в наличии
3) Код товара: 1 
4) 00-00$
5) Набор приборов «ECO» — это
6) картинка
*/