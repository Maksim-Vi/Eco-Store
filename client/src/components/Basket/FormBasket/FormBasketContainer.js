import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FormBasket from './FormBasket';
import uniqBy from 'lodash/uniqBy';
import {postFormBasket,addItemToProduct} from '../../../redux/reducers/form-reducer';

const FormBasketContainer = (props) =>{

 
    return (
        <FormBasket  itemsSort={props.itemsSort}
                            itemsAll={props.itemsAll}
                            postFormBasket={props.postFormBasket}
                            addItemToProduct={props.addItemToProduct}
                            message={props.message}
                            setModalShow={props.setModalShow}/>
    )
        
}

let mapStateToProps = (state) =>{
    return {
        itemsSort: uniqBy(state.basket.items, i=>i.id),
        itemsAll:state.basket.items,
    }
}

export default compose(
    connect(mapStateToProps,{postFormBasket,addItemToProduct})
)(FormBasketContainer)