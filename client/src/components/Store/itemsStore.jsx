import React from 'react';
import ItemStore from './itemStore';
import s from '../../css/store.module.css'
import Preloader from '../Common/preloader';

const ItemsStore = ({items, ...props}) =>{
    return(
        <div className={s.containerCard}>
            {items.length === 0 
            ? <span>к сожалению, данного товара нету</span>
            
            
            : <ul className={s.products}>
                {!items 
                ? <Preloader />
                : items.map( i => {
                    return <ItemStore   
                                key={i.id} 
                                item={i}
                                items={items} 
                                addedCountItem={props.addedCountItem}
                                addItemToBasket={props.addItemToBasket}
                                itemBasket={props.itemBasket}
                            />
                })}
            </ul>
            }
        </div>
    )
}

export default ItemsStore;