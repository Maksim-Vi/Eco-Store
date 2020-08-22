import React from 'react';
import s from '../css/form.module.css';

export const InputFirstName = ({input,meta}) =>{
    const showError = meta.touched && meta.error;
    return (<div className={s.formControl +" "+ (showError ? s.error : "")}>
            <input {...input} type="text" id={s.fname}  placeholder="Имя.." />
        </div>)
} 
export const InputLastName = ({input,meta}) =>{
    const showError = meta.touched && meta.error;
    return (<div className={s.formControl +" "+ (showError ? s.error : "")}>
        <input {...input} type="text" id={s.lname}  placeholder="Фамилия.." />
    </div> 
    )
} 
export const  InputEmail = ({input,meta}) =>{
    const showError = meta.touched && meta.error;
    return (
        <div className={s.formControl +" "+ (showError ? s.error : "")}>
            <input {...input} type="text" id={s.email} name="email" placeholder="user@domain.com"  />
        </div>
    )
} 
export const  InputEmailBasket = ({input,meta}) =>{
    const showError = meta.touched && meta.error;
    return (
        <div className={s.formControl +" "+ (showError ? s.error : "")}>
            <input {...input} type="text" id={s.emailBasket} name="email" placeholder="user@domain.com"  />
        </div>
    )
}
export const  InputPhone = ({input,meta}) =>{
    const showError = meta.touched && meta.error;
    return (
        <div className={s.formControl +" "+ (showError ? s.error : "")}>
            <input {...input} type="text" id={s.phone} name="phone" placeholder="+38(0xx)xxx-xx-xx"  />
        </div>
    )
}
export const  Textarea = ({input,meta}) =>{
    const showError = meta.touched && meta.error;
    return (
        <div className={s.formControl +" "+ (showError ? s.error : "")}>
            <textarea {...input} type="text" id={s.subject} name="subject" placeholder="Добавьте свой номер для связи, и задайте нам вопрос.."  />
        </div>
    )
} 
