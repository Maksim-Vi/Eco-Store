import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHttp } from '../../../API/feach/http.hook';
import { AuchContext } from '../../../content/content.hook';
import axios from 'axios';
import notFound from '../../../img/undef/notFound.png'
import s from '../../AdminPanel.module.css';
import { useToasts } from 'react-toast-notifications';

const TableProduct = ({product,productsHendler}) =>{
    const auch = useContext(AuchContext)
    const {loading} = useHttp()

    const { addToast,removeAllToasts } = useToasts()

    let message = (mes) =>{
      removeAllToasts()
      addToast(mes, {appearance: 'success',autoDismiss: true})
      
    }
    let err = (mes) =>{
      removeAllToasts() 
      addToast(mes, {appearance: 'error',autoDismiss: true})
    }

    const deleteProductHendler = async () => {        
        axios({
            url:`/products/`+ product.id,
            method:'DELETE',
            headers:{
                'Authorization' : auch.token, 
            },
            data: product
        })
        .then(res=>{
            if(res){
                productsHendler()
                if (res) {
                    message('Товар успешно удален')
                } else{
                    err('что то пошло не так')
                }
            }
        })               
      };
    
    
    return (
        <div className={s.containetTableItem}>
            <li>
            {!product.image
                ? <img src={notFound} alt="" width='50px' height='50px'/> 
                :  <img alt="" src={`http://localhost/${product.image}`} width='50px' height='50px'/>
            } 
                <span>name: {product.name} </span>
                <span>id: {product.id} </span>
                {!product.inStock 
                ? <span>нет в наличии</span>
                : <span>в наличии</span>
                }
                
                <span>цена: {product.price} </span>
                

                <Link to={{pathname:'/Eco-Store/AdminPanel/Product/' + product.id,
                  state:{
                    product: product
                  }}} disabled={loading}><button className={s.btnPanel}>edit</button></Link>
                  <button className={s.btnPanel} onClick={deleteProductHendler} disabled={loading}> delete</button>
            </li>
        </div>
    )
}

export default TableProduct