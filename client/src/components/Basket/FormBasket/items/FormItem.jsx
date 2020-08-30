import React from 'react';
import { Card, Image } from "react-bootstrap";
import s from "../../../../css/Basket.module.css";
import { addedCountItem } from '../../../Common/common';

const FormItem = (props) =>{
    //props.addItemToProduct(props.id,props.name,addedCountItem(props.itemsAll,props.item.id))
    return (
    <Card className={s.FBItemsCard}>
        <Card.Body className={s.FBItemsCardBody}>
            <Image className={s.FBItemsIMG} src={`http://localhost/${props.item.image}`} rounded />
            <h5 className={s.FBItemsName}>{props.item.name}</h5>
            <p>{addedCountItem(props.itemsAll,props.item.id)} шт</p>
        </Card.Body>
    </Card>)
}

export default FormItem