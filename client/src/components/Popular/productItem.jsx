import React from 'react';
import pictureGreen from '../../img/conent/NaborBG.png'
import s from '../../css/popular.module.css'
import { Link } from 'react-router-dom'
import notFound from '../../img/undef/notFound.png' 
import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';



const ProdictItem = (props) =>{
   
    const Bounce = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

    const Filter = (items,popularProduct) =>{
        return items.filter(function(v) {
            return popularProduct.some(function(v2) {
                return v.id === v2.id
            }
        )})
    }  

    return ( 
    <div className={s.picture}>
        {props.popularProduct.map((p)=>{
            return (<div key={p.id}>         
                <div  className={s.pictureItem}>
                    <div className={s.pictureImg}>
                        {!p.image
                            ?  <img className={s.PI1} src={notFound} alt="" />
                            :  <img className={s.PI1} src={`http://localhost/${p.image}`} alt="" />
                         }                    
                        <img className={s.pictureGreen} src={pictureGreen} alt="" />
                        <div>
                            <Link to={
                                {pathname:'/Description/' + p.id,
                                state:{
                                    data: Filter(props.items,props.popularProduct).find(function(v){return v.id === p.id})
                                }}}>
                                <Bounce className={s.pictureBtn}><a>к товару</a></Bounce>
                            </Link>
                            
                        </div>
                    </div>
                    <div className={s.pictureText}>
                        <span>{p.text1}</span> {p.text2} <br/> {p.text3}
                    </div>
                </div>
            </div>)
        })}
    </div>)
}

export default ProdictItem

