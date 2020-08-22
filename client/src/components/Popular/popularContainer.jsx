import React, { useContext } from 'react';
import Popular from './popular';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {requastStore, setStore } from '../../redux/reducers/store-reducer';
import Preloader from '../Common/preloader';
import { AuchContext } from '../../content/content.hook';
import { useEffect } from 'react';
import {PopularApi} from '../../redux/reducers/popular-reducer';

const PopularContainer = (props) =>{
    
    let auch = useContext(AuchContext)
    let token = auch.token 

    useEffect(()=>{
        //console.log('in effect popular');
        props.requastStore(token);
        props.PopularApi(token)
    },[])
        
    return( 
            <div>
               {props.items 
               ?    <Popular 
                        items={props.items} 
                        popularProduct={props.popularProduct} 
                    /> 
               : <Preloader />
               }   
            </div>            
        )
            
    }


let mapStateToProps = (state) =>{
    return {
        items: state.store.items,
        popularProduct: state.popular.popularProduct,
        isFetching: state.store.isFetching,
    }
}

export default compose(
    connect(mapStateToProps,{requastStore,setStore, PopularApi})
)(PopularContainer)