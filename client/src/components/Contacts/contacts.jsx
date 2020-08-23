import React, { useContext } from "react";
import {AuchContext} from '../../content/content.hook';
import s from "../../css/form.module.css";
import { reduxForm, Field } from "redux-form";
import { InputFirstName, InputLastName, InputEmail, Textarea } from "../../validation/validationForm";
import { compose } from "redux";
import { connect } from "react-redux";
import {postFormStore} from '../../redux/reducers/form-reducer';
import {  useToasts } from 'react-toast-notifications'

let required = (v) => {
  if (!v || v === "") {
    return "this field is required";
  }
  return undefined;
};

const maxLength = (max) => (value) =>
value && value.length > max ? `Must be ${max} characters or less` : undefined

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined


let ContactsForm = ({ handleSubmit}) => {
  
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.Name}>
            <Field  name="FirstName" component={InputFirstName} validate={[required,maxLength(20)]}/>
            <Field  name="LastName" component={InputLastName} validate={[required,maxLength(20)]} />
      </div>
      <div className={s.email}>
            <Field name="Email" component={InputEmail} validate={[required,email]}/>
      </div>
      <div className={s.message}>
            <Field  name="subject" component={Textarea} validate={required}/>
      </div>
      <button className={s.btnSend} type="submit">Отправить</button>
    </form>
  );
};

ContactsForm = reduxForm({
  form: "FormContacts"
})(ContactsForm);


const Contacts = (props) => {
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

  let chatchAllUnhandleErrors = (reason,promise) =>{
    error('Что то пошло не так, попробуйте снова!')
  }

  let onSubmit = (values) =>{
    props.postFormStore(token,values.FirstName,values.LastName,values.Email,values.subject)
    message('Данные были переданы. Ожидайте, с вами свяжется менеджер')
    window.addEventListener("unhandledrejection",  chatchAllUnhandleErrors)
  }


  return (
    <div id="Contacts">
      <section className={`${s.section2} ${s.devices2}`}>
        <div className={s.container}>
          <div className={s.header_S2}>
            <h2 className={s.section2_title}>Напиши нам</h2>
            <div>
              {" "}
              <p className={s.section2_text}>
                Если у тебя есть вопросы, ты можешь их задать нам. Расскажем и поможем в выборе товара!
              </p>
            </div>
            <ContactsForm onSubmit={onSubmit} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default compose (connect(null,{postFormStore}))(Contacts)