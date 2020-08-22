import React from "react";
import { Modal } from "react-bootstrap";
import s from "../../css/form.module.css";
import { reduxForm, Field } from "redux-form";
import { InputFirstName, InputLastName, InputEmail, Textarea } from "../../validation/validationForm";
import { compose } from "redux";
import { connect } from "react-redux";
import {postFormStore} from '../../redux/reducers/form-reducer';
import { AuchContext } from "../../content/content.hook";
import { useContext } from "react";
import {  useToasts } from 'react-toast-notifications'


let required = (v) => {
  if (!v || v === "") {
    return "this field is required"
  }
  return undefined;
}

const maxLength = (max) => (value) =>
value && value.length > max ? `Must be ${max} characters or less` : undefined

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

let ContactsFormNav = ({handleSubmit,valid,...props}) => {
    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.NameFormNav}>
              <Field  name="FirstName" component={InputFirstName} validate={[required,maxLength(20)]}/>
              <Field  name="LastName" component={InputLastName} validate={[required,maxLength(20)]} />
        </div>
        <div className={s.emailFormNav}>
              <Field name="Email" component={InputEmail} validate={required,email}/>
        </div>
        <div className={s.messageFormNav}>
              <Field  name="subject" component={Textarea} validate={required}/>
        </div>
        <button className={s.btnSend} type="submit">Send</button>
      </form>
    );
};
  
ContactsFormNav = reduxForm({
    form: "ContactsFormNav"
})(ContactsFormNav);
  
  


const FormWithMenu = (props) => {
  let auch = useContext(AuchContext)
  let token = auch.token

  const { addToast, removeAllToasts } = useToasts()

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
    props.setModalShow(false)
  }

  return (
    <Modal {...props} className={s.ModalFormNav}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className={s.ModalFormHeader} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Связаться с нами
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={s.ModalFormNavBody}>

        <ContactsFormNav onSubmit={onSubmit} />

      </Modal.Body>
    </Modal>
  );
};

export default compose (connect(null,{postFormStore}))(FormWithMenu)