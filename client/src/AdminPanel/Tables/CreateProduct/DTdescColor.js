import React, { useState } from 'react';


const DTdescColor = ({count, product,setProduct}) =>{
    
    let [text,setText] = useState('')
    
    const chengeDescriptionTableColorHendler = (event) => {
        let name = event.target.value
       setText(name)
    };

    let handleSubmit = (event) =>{
        event.preventDefault()
        let item = product.descriptionTable.color.find(i=> i.id === count)
        if (item){
            //console.log('in if', item, text);
            setProduct({ 
                ...product, 
                descriptionTable: {
                    ...product.descriptionTable, 
                    color:[
                        ...product.descriptionTable.color.map(i => {
                            if(i.id === item.id){
                                return (
                                    {id:item.id, name:text}
                                )
                            } else{
                                return i
                            }
                        }) 
                    ],
                    equipment:[
                        ...product.descriptionTable.equipment  
                    ]
                } 
            });   
        } else {
            setProduct({ 
                ...product, 
                descriptionTable: { 
                    ...product.descriptionTable,
                    color: [ 
                        ...product.descriptionTable.color, {id: count, name: text} 
                    ],
                    equipment:[
                        ...product.descriptionTable.equipment  
                    ]
                } 
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input  type="text2" 
                    name='color' 
                    placeholder={`Материал ${count}`} 
                    onChange={chengeDescriptionTableColorHendler}
                    onBlur={handleSubmit} 
                    value={text}
            />

        </form>
    )
}

export default DTdescColor

