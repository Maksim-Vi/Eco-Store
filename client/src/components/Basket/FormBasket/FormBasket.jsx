import React from 'react';
import FormBasketItems from './items/FormBasketItems';
import FormBasketForm from './form/FormBasketForm';
import s from '../../../css/Basket.module.css';

const FormBasket = (props) =>{

    return (<>
        <div className={s.FBContainer}>
            <div className={s.FBItems}>
                <FormBasketItems itemsSort={props.itemsSort}
                                 itemsAll={props.itemsAll}
                                 addItemToProduct={props.addItemToProduct}/>
            </div>
            <div className={s.FBForm}>
                <FormBasketForm message={props.message} setModalShow={props.setModalShow}  itemsSort={props.itemsSort} itemsAll={props.itemsAll} addItemToProduct={props.addItemToProduct} postFormBasket={props.postFormBasket}/>
            </div>
        </div>
    </>)
}

export default FormBasket