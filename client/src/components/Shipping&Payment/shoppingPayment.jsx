import React from 'react';
import s from '../../css/ShoppingPayment.module.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import delivery from '../../img/ShopPay/delivery.png';
import deliveryTransportation from '../../img/ShopPay/delivery_transportation.png';
import pay from '../../img/ShopPay/pay.png';
import bankCards from '../../img/ShopPay/bankСards.png';
import naloshka from '../../img/ShopPay/naloshka new.png';

const ShoppingPayment = () =>{
    return (
        <div>
            <Header />
            <div className={s.introStore}></div>
            <section>
                <div className={s.containerShopPay}>
                    <div className={s.Shopping}>
                        <strong>Доставка Товара</strong>
                        <p>При оформлении заказа в  Eco Choice вы можете выбрать один из предложенных вариантов доставки своей покупки.</p>
                        <p>Информацию по наличию товара вы можете уточнить у Менеджера.</p>
                        <h3><img src={delivery} alt=""/> Самовывоз<br/></h3>
                        <ul>
                            <li>Вы можете самостоятельно забрать товар с магазина;</li>
                            <li>Свяжитесь с нами для уточнения цены, а так же наличия товара.</li>
                        </ul>
                        <h3><img src={deliveryTransportation} alt=""/> Доставка по Украине - Новая почта<br/></h3>
                        <ul>
                            <li>Стоимость доставки определяется согласно тарифам компании Новая Почта и оплачивается получателем;</li>
                            <li>Сумма товара не должна превышать 15 000 (пятнадцать тысяч) грн;</li>
                            <li>Свяжитесь с нами для уточнения цены, а так же наличия товара.</li>
                        </ul>
                        <h3><img src={deliveryTransportation} alt=""/> Доставка по Украине - Укр почта<br/></h3>
                        <ul>
                            <li>Стоимость доставки определяется согласно тарифам компании Укр Почта и оплачивается получателем;</li>
                            <li>Сумма товара не должна превышать 15 000 (пятнадцать тысяч) грн;</li>
                            <li>Свяжитесь с нами для уточнения цены, а так же наличия товара.</li>
                        </ul>
                    </div>
                    <div className={s.Pay}>
                        <strong>Оплата Товара</strong>
                        <p>При оформлении заказа в  Eco Choice, вы можете выбрать один из предложенных вариантов оплаты своей покупки.</p> 
                        <p>Расчёт производится в национальной валюте Украины - гривне.</p>
                        <h3><img src={pay} alt=""/> Оплата наличными<br/></h3>
                        <ul>
                            <li>Вы можете оплатить товар наличными;</li>
                            <li>Свяжитесь с нами для уточнения цены, а так же наличия товара.</li>
                        </ul>
                        <h3><img src={bankCards} alt=""/> Оплата на карту<br/></h3>
                        <ul>
                            <li>Оплата переводом денежных средств на банковскую карту;</li>
                            <li>При оплате денежных средств переводом на банковскую карту вы оплачиваете комиссию установленную банком;</li>
                            <li>Свяжитесь с нами для уточнения цены и реквизитов для оплаты, а так же наличия товара.</li>
                        </ul>
                        <h3><img src={naloshka} alt=""/> Наложенный платеж<br/></h3>
                        <ul>
                            <li>Сумма товара не должна превышать 15 000 (пятнадцать тысяч) грн;</li>
                            <li>Услуги перевозчика оплачивает покупатель;</li>
                            <li>Свяжитесь с нами для уточнения цены и реквизитов для оплаты, а так же наличия товара.</li>
                        </ul>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default ShoppingPayment;