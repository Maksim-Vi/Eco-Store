import React from 'react'
import s from '../../css/footer.module.css'
import viber from '../../img/sotial/viber.png'
import telegram from '../../img/sotial/telegram.png'
import email from '../../img/sotial/email.png'
import logoFooter from '../../img/logoFooter.png'
import { NavLink } from 'react-router-dom'

const Footer = () =>{
return (
    <footer>
        <div className={`${s.footerDescription} ${s.devises3}`}>
            <div className={s.container}>
                <div className={s.description}>
                    <div className={s.logoFooter}>
                    <NavLink to="/Eco-Store/"><img src={logoFooter} alt=""/></NavLink>    
                    </div>
                    <div className={s.sotial}>
                        <img src={viber} alt="" width="32px" height="32px"/>
                        <img src={telegram} alt="" width="32px" height="32px"/>
                        <img src={email} alt="" width="32px" height="32px"/>
                    </div>
                    <div className={s.contacts}>
                        <p>(096)543-87-99</p>
                        <p>user@domian.com</p>
                        <p>web-site.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.footerBottom}>
            <p><span>ECO</span> shop. All Rights Reserved <span>|</span> Design by Company</p>
        </div>
    </footer>

)
}

export default Footer;