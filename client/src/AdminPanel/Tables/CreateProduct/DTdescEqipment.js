import React, { useState } from 'react';

const DTdescEqipment = ({count2,product,setProduct}) =>{

    
    let [text,setText] = useState('')
    
    const chengeDescriptionTableEuipmentHendler = (event) => {
        let name = event.target.value
       setText(name)
    };

    let handleSubmit = (event) =>{
        event.preventDefault()
        let item = product.descriptionTable.equipment.find(i=> i.id === count2)
        if (item){
            //console.log('in if', item, text);
            setProduct({ 
                ...product, 
                descriptionTable: { 
                    ...product.descriptionTable,
                    color:[
                        ...product.descriptionTable.color  
                    ],
                    equipment:[
                        ...product.descriptionTable.equipment.map(i => {
                            if(i.id === item.id){
                                return (
                                    {id:item.id, name:text}
                                )
                            } else{
                                return i
                            }
                        }) 
                    ]
                } 
            });   
        } else {
            setProduct({ 
                ...product, 
                descriptionTable: { 
                    ...product.descriptionTable,
                    color:[
                        ...product.descriptionTable.color  
                    ],
                    equipment: [ 
                        ...product.descriptionTable.equipment, {id: count2, name: text} 
                    ]
                } 
            });
        }
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <input  type="text2" 
                    name='equipment'
                    placeholder={`Количество предметов ${count2}`} 
                    onChange={chengeDescriptionTableEuipmentHendler} 
                    onBlur={handleSubmit}
                    value={text}
            />
        </form>
    )
}

export default DTdescEqipment

