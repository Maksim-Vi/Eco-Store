import React, { useState } from "react";
import s from "../../../../css/Basket.module.css";
import { Button, Collapse } from "react-bootstrap";
import FormItem from "./FormItem";

const FormBasketItems = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.FBIContainer}>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        показать список товара
      </Button>
      <Collapse in={open} className={s.Collapse}>
        <div id="example-collapse-text">
            {props.itemsSort.map(item =>{
                return <FormItem key={item.id} 
                                 itemsSort={props.itemsSort}
                                 item={item} 
                                 itemsAll={props.itemsAll} 
                                 addItemToProduct={props.addItemToProduct}/>
            })}            
            
        </div>
      </Collapse>
    </div>
  );
};

export default FormBasketItems;
