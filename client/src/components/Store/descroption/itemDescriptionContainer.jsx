import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ItemDescription from './itemDescription';
import { useLocation } from 'react-router-dom';
import {addItemToBasket} from '../../../redux/reducers/basket-reducer';
import ErrorNotFound from '../../Common/NotFound';


const ItemDescriptionContainer = (props) =>{
  let location = useLocation();
  let data  = location.state.data
 // let [item,setItem] = React.useState(data)


  return ( <>
    {!data 
      ? <ErrorNotFound />
      :<ItemDescription data={data}
      itemBasket={props.itemBasket}
      addItemToBasket={props.addItemToBasket}/>
    }  
  </> )
}

let mapStateToProps = (state) =>{
  return {
    itemBasket: state.basket.items,
  }
}

export default compose(
  connect(mapStateToProps, {addItemToBasket})
)(ItemDescriptionContainer) 
