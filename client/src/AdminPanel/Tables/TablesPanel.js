import React, { useContext, useState, useEffect } from 'react';
import s from '../AdminPanel.module.css';
import { useHttp } from '../../API/feach/http.hook';
import { AuchContext } from '../../content/content.hook';
import NavBarPanel from '../nav/navBarPanel';
import TableProduct from './TableProduct/tableProduct';
import Pereloader from '../../components/Common/preloader';

const Tables = () => {

    const auch = useContext(AuchContext)
    const { reqest } = useHttp();
    const [products, setProducts] = useState(null)

    const productsHendler = async () => {
        try {
          const data = await reqest("/products", "get", null,{
                'Authorization': auch.token
              });
          setProducts(data)
        } catch (err) {}
      };

      useEffect(()=>{ 
        productsHendler()
      },[])
      
    return (<>
        <NavBarPanel />
        <div className={s.containerTables}>
        <ul className={s.bullet}>
            {!products 
            ? <Pereloader />
            : products.map((product) =>{
                return <TableProduct key={product.id} product={product} productsHendler={productsHendler} />
            })}
        </ul>
        </div>
    </>)
}

export default Tables