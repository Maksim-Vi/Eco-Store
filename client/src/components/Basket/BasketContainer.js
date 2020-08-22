import React from 'react';
import Basket from './basket';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {removeItemToBasket,addItemToBasket,removeOneItemToBasket} from '../../redux/reducers/basket-reducer';
import uniqBy from 'lodash/uniqBy';
import Footer from '../Footer/footer';

const BasketContainer = (props) => {   
    return (<><Basket  itemsSort={props.itemsSort}
                    itemsAll={props.itemsAll}
                    removeItemToBasket={props.removeItemToBasket}
                    addItemToBasket={props.addItemToBasket}
                    removeOneItemToBasket={props.removeOneItemToBasket}/>
            <Footer />
    </>)
}

let mapStateToProps = (state) =>{
    return {
        itemsSort: uniqBy(state.basket.items, i=>i.id),
        itemsAll: state.basket.items
    }
}

export default compose(
    connect(mapStateToProps,{removeItemToBasket,addItemToBasket,removeOneItemToBasket})
)(BasketContainer)  