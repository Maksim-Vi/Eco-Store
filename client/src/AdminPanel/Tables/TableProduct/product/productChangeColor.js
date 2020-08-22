import React, { useState } from 'react';


const ProductChangeColor = ({ product, item, setItem }) => {

    let initial = product.name
    let [text, setText] = useState(initial)

    const chengeDescriptionTableColorHendler = (event) => {
        let name = event.target.value
        setText(name)
    };

    let handleSubmit = (event) => {
        event.preventDefault()
        let color = item.descriptionTable.color.find(i=> i.id === product.id)        
        if (color){
            //console.log('in if', color, text);
            setItem({ 
                ...item, 
                descriptionTable: {
                    ...item.descriptionTable, 
                    color:[
                        ...item.descriptionTable.color.map(i => {
                            if(i.id === product.id){
                                return (
                                    {id:product.id, name:text}
                                )
                            } else{
                                return i
                            }
                        }) 
                    ],
                    equipment:[
                        ...item.descriptionTable.equipment  
                    ]
                } 
            });   
        }
     }
    


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text2"
                name='color'
                onChange={chengeDescriptionTableColorHendler}
                onBlur={handleSubmit}
                value={text}
            />
        </form>
    )
}

export default ProductChangeColor
