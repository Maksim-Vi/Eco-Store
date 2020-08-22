import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Nav from './nav';


const NavContainer = (props) =>{

    return <Nav 
                totalPrice={props.totalPrice}/>
}

let mapStateToProps = (state) =>{
    return {
        totalPrice: state.basket.items,
    }
}

export default compose(
    connect(mapStateToProps)
)(NavContainer) 
