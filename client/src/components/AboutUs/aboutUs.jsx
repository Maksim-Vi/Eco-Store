import React from 'react';
import s from '../../css/AboutUs.module.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';


const AboutUs = () =>{
    return (
        <div>
            <Header />
            <div className={s.introStore}></div>
            <section>
                <div className={s.containerAboutUs}>
                    <div className={s.About}><h2>О нас</h2></div>
                    <p>
                        <strong>Эко Выбор</strong> – интернет-магазин для всех, 
                        кто ведет здоровый образ жизни или только начинает свой 
                        путь в этом направлении!
                    </p>
                    <p><br/></p>
                    <p><strong>Что мы предлагаем?</strong></p>
                    <p><br/></p>
                    <p>В нашем магазине вы можете приобрести:</p>
                    <p><br/></p>  
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                    <p></p>
                    <p><strong><br/></strong></p>
                    <p><strong>Чего мы хотим?</strong></p>
                    <p><br/></p>
                    <p>Наша цель – изменить мир к лучшему, начав с себя. Мы хотим улучшить качество жизни и здоровья людей, призывая осознанно относиться к своему телу, здоровью и красоте, отказаться от необдуманного потребления и уменьшить тяжесть человеческого урона природе, сохранив нашу планету для будущих поколений.</p>
                    <p><strong><br/></strong></p>
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default AboutUs;