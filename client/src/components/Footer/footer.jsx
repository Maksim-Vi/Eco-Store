import React from 'react'
import s from '../../css/footer.module.css'
import insta from '../../img/sotial/instagram.png';
import facebook from '../../img/sotial/facebook.png';
import google from '../../img/sotial/mail.png';
import logoFooter from '../../img/logoFooter.png'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Footer = () =>{
return (
<footer>
        <div className={`${s.footerDescription} ${s.devises3}`}>
            <div className={s.container}>
                <div className={s.description}>
                    <div className={s.logoFooter}>
                        <NavLink to="/Eco-Store/"><img src={logoFooter} alt=""/></NavLink>    
                    </div>
                    <h3 className={s.contactsHeader}>Информация:</h3>
                    <div className={s.contacts}>
                        <span className={s.spanIcon}><Icon circular name='phone' /><p>+38(067)455-08-01</p></span>
                        <span className={s.spanIcon}><Icon circular name='location arrow' /><p>ул. Шумского г.Киев</p></span>
                        <span className={s.spanIcon}><Icon circular name='mail' /><p>info.ecoChoice@gmail.com</p></span>
                    </div>
                    <div className={s.sotial}>
                        <img className={s.socialImg} src={insta} alt=""  />
                        <img className={s.socialImg}  src={facebook} alt=""/>
                        <img className={s.socialImg}  src={google} alt="" />
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