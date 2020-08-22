import React, { useContext }  from 'react';
import {AuchContext} from '../../../../content/content.hook';
import { Field, reduxForm } from 'redux-form';
import { InputFirstName, InputPhone, InputEmailBasket } from '../../../../validation/validationForm';
import s from '../../../../css/Basket.module.css';
import {  useToasts } from 'react-toast-notifications'

let required = (v) => {
    if (!v || v === "") {
      return "this field is required";
    }
    return undefined;
  };
   
let minValue = max => value => value && value < max ? `Must be at least ${max}` : undefined
let minValue12 = minValue(12)
let email = (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
let number = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const FBForm = ({handleSubmit}) =>{
    return (
        <form onSubmit={handleSubmit} className={s.FBMainform}>
            <div className={s.FBFormName}>
                <Field  name="FirstName" component={InputFirstName} validate={[required]}/>
            </div>
            <div className={s.FBFormPhone}>
                <Field  name="phone" component={InputPhone}  validate={[required,number,minValue12]}/>
            </div>
            <div className={s.FBFormEmail}>
                <Field name="email" component={InputEmailBasket} validate={[required,email]}/>
            </div>
            <div className={s.FBFormBtn}>
                <button className={s.FBFormB} type="submit">Send</button>
            </div>
        </form>)
}

//disabled={!valid}

let BasketReduxForm = reduxForm({
    form: "Form_Basket"
})(FBForm);
 


const FormBasketForm = (props) =>{

    let item = props.itemsSort.map(item=>{
            return{
                id:item.id,
                name:item.name,
                cost: (item.price-item.salePrice), 
                count: props.itemsAll.reduce((count, i) => {
                    return count + (i.id === item.id ? 1 : 0)
                }, 0)
            }
        })
    

    let auch = useContext(AuchContext)
    let token = auch.token

   
    const { addToast,removeAllToasts } = useToasts()

    let message = (mes) =>{
        removeAllToasts()
        addToast(mes, {appearance: 'success',autoDismiss: true})
    }
    let error = (mes) =>{
      removeAllToasts()
      addToast(mes, {appearance: 'error',autoDismiss: true})
    }

    let onSubmit = (values) =>{
        if(item.length === 0){
            error('Выберите товар!')
        } else {   
            props.postFormBasket(token,values.FirstName,values.email,values.phone,item)
            props.addItemToProduct(item)
            message('Данные были переданы. Ожидайте, с вами свяжется менеджер') 
        }  
        props.setModalShow(false)     
    }

    return <BasketReduxForm onSubmit={onSubmit} />
}

export default FormBasketForm
