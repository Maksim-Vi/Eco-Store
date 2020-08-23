import React from 'react';
import s from '../../css/ContactUs.module.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import map from '../../img/map.png';

const ContactUs = () =>{
    return (
        <div>
            <Header />
            <div className={s.introStore}></div>
            <section>
                <div className={s.containerContactUs}>
                    <strong>НАШИ КОНТАКТЫ</strong>
                    <div className={s.phoneMenager}>
                        <strong>Менеджер</strong>
                        <ul>
                            <li>+380(96) 543-87-99</li>
                            <li>+380(93) 543-87-99</li>
                        </ul>
                    </div>
                    <div className={s.emailContactUs}>
                        <strong>Email</strong>
                        <ul>
                            <li>eco-choice@gmail.com</li>
                            <li>info.eco-choice@gmail.com</li>
                        </ul>
                    </div>
                    <div className={s.HomeAdres}>
                        <strong>Адрес для самовывоза</strong>
                        <p>ул. Юрия Шумского , г. Киев</p>
                    </div>
                    <img className={s.mapContactUs} src={map} alt=""/>
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default ContactUs;