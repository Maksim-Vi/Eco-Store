import React from 'react';
import ProdictItem from './productItem';
import s from '../../css/popular.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

const Popular = (props) =>{
    
    let result = props.items.filter(item1 => {
        return props.popularProduct.some(item2 => {
            return item1.id === item2.id
        }
    )})

    return( 
        <div className={`${s.section} ${s.devices}`}>
		    <div className={s.container}>
			    <div className={s.headerS1}>
                    <h2 className={s.sectionTitle}>Популярные товары</h2>
                    <div className={s.sectionText}>
                        {/* <p className={s.sectionText}>
                            В настоящее время эко-продукт стал более популярным и востребованным. 
                        </p> */}
                    </div>
                    { 
                    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                        <ProdictItem   
                            items={result} 
                            popularProduct={props.popularProduct} 
                                />
                    </ScrollAnimation>
                    }         
                </div>
            </div>
        </div>
    )
}

export default Popular