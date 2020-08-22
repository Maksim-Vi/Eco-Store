import React, { useContext, useEffect } from "react";
import { compose } from "redux";
import Store from "./store";
import { connect } from "react-redux";
import { requastStore, setStore } from "../../redux/reducers/store-reducer";
import { setFilterMenu, setFilterMessage} from "../../redux/reducers/filter-reducer";
import { addItemToBasket } from "../../redux/reducers/basket-reducer";
import Footer from "../Footer/footer";
import { AuchContext } from "../../content/content.hook";
import { useLocation } from "react-router-dom";


const StoreContainer = (props) =>{
  
  let location = useLocation();

  let sortItemByType = (items) =>{
    let data;
    if (location.state === null){
      return items
    } else{
      data  = location.state.data
      if(data === '1') {
          return items
      } else{
        return items.filter(item => item.type.toLowerCase() === data)
      } 
    }
  }

  let auch = useContext(AuchContext)
  let token = auch.token 

  useEffect(()=>{
    //console.log('in effect store');
    props.requastStore(token);
  },[])

    return (
      <>
        <Store
          items={sortItemByType(props.items)}
          setFilterMenu={props.setFilterMenu}
          Filter={props.Filter}
          setFilterMessage={props.setFilterMessage}
          findItem={props.findItem}
          addItemToBasket={props.addItemToBasket}
          itemBasket={props.itemBasket}
        />
        <Footer />
      </>
    );
}

let mapStateToProps = (state) => {
  return {
    items: state.store.items,
    isFetching: state.store.isFetching,
    Filter: state.filter.Filter,
    findItem: state.filter.findItem,
    itemBasket: state.basket.items,
  };
};

export default compose(
  connect(mapStateToProps, {
    requastStore,
    setStore,
    setFilterMenu,
    setFilterMessage,
    addItemToBasket,
  })
)(StoreContainer);
