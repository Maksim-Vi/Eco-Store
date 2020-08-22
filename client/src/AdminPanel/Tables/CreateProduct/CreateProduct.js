import React, { useState, useContext } from 'react';
import NavBarPanel from '../../nav/navBarPanel';
import s from '../../AdminPanel.module.css';
import { useHttp } from '../../../API/feach/http.hook';
import { AlertMessage } from '../../hooks/alert.hook';
import { AuchContext } from '../../../content/content.hook';
import axios from 'axios';
import DTdescColor from './DTdescColor';
import DTdescEqipment from './DTdescEqipment';

const CreateProduct = () => {

    const auch = useContext(AuchContext)
    const { loading, error, clearError } = useHttp()

    const [product, setProduct] = useState({
        id: '',
        sale:false,
        salePrice: 0,
        name: '',
        type:'',
        price: '',
        image: '',
        image1: '',
        image2: '',
        image3: '',
        inStock: false,
        description: {
            nameDescription: '',
            descriptionD: '',
        },
        descriptionTable: {
            typeName: '',
            countPeople:'',
            features: '',
            Eco:'',
            equipment: [],
            color: [],
        }
    })

    let initialCount = 1
    const [count, setCount] = useState(initialCount)
    const [count2, setCount2] = useState(initialCount)
    const getArr = (cnt) => {
        return Array.apply(null, { length: cnt }).map(Number.call, Number)
    }

    const chengeHendler = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const chengeImageHendler = (event) => {
        let file = event.target.files[0]
        setProduct({ ...product, [event.target.name]: file });

    };

    const chengeDescriptionHendler = (event) => {
        setProduct({ ...product, description: { ...product.description, [event.target.name]: event.target.value } });
    };

    const chengeDescriptionTableHendler = (event) => {
        setProduct({
            ...product,
            descriptionTable: {
                ...product.descriptionTable, [event.target.name]: event.target.value,
                color:[
                    ...product.descriptionTable.color  
                ],
                equipment:[
                    ...product.descriptionTable.equipment  
                ]
            }
        });
    };

    const inStockHendler = (event) =>{
        let inStock =  event.target.checked
        setProduct({ ...product, [event.target.name]: inStock });
        //console.log('prod',product);
        
    }

    const addProductHendler = async () => {
        const formdata = new FormData();
        formdata.append("product", JSON.stringify(product));
        formdata.append("image", product.image);
        formdata.append("image1", product.image1);
        formdata.append("image2", product.image2);
        formdata.append("image3", product.image3);
        formdata.append("nameImg", product.image.name);

        axios({
            url: `/products`,
            method: 'POST',
            headers: {
                'Authorization': auch.token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formdata
        })
            .then(res => {
                //console.log(res);
            })
    };



    return (
        <div className={s.containerMainCreater}>
            <NavBarPanel />
            {error ? <AlertMessage error={error} clearError={clearError} /> : null}
            <h2>CreateProduct</h2>
            <button className={s.btnPanel} onClick={addProductHendler} disabled={loading}>Save</button>
            <div className={s.containerCreater}>
                <div>
                    <h4>Main</h4>
                    <div>
                        в наличии: <input  type="checkbox" name="inStock" onChange={inStockHendler}/>
                    </div>
                    <div className={s.Product}>
                        <input type="text2" name="type" placeholder="тип товара" onChange={chengeHendler} />
                    </div>
                    <div className={s.Product}>
                        <input type="text2" name="id" placeholder="id" onChange={chengeHendler} />
                    </div>
                    <div className={s.Product}>
                        <input type="text2" name="name" placeholder="имя" onChange={chengeHendler} />
                    </div>
                    <div className={s.Product}>
                        <input type="text2" name="price" placeholder="цена" onChange={chengeHendler} />
                    </div>

                    <h4>Image</h4>
                    <div className={s.Product}>
                        <input type="file" name="image" placeholder="image" onChange={chengeImageHendler} />
                    </div>
                    <h6>Dop image 1</h6>
                    <div className={s.Product}>
                        <input type="file" name="image1" placeholder="image1" onChange={chengeImageHendler} />
                    </div>
                    <h6>Dop image 2</h6>
                    <div className={s.Product}>
                        <input type="file" name="image2" placeholder="image2" onChange={chengeImageHendler} />
                    </div>
                    <h6>Dop image 3</h6>
                    <div className={s.Product}>
                        <input type="file" name="image3" placeholder="image3" onChange={chengeImageHendler} />
                    </div>

                </div>
                <div className={s.containerCreatorDescription}>
                    <div>
                        <h4>Description</h4>
                        <div className={s.Product}>
                            <input type="text2" name="nameDescription" placeholder="Название продукта" onChange={chengeDescriptionHendler} />
                        </div>
                        <div className={s.Product}>
                            <textarea type="text2" name="descriptionD" placeholder="Описание продукта" onChange={chengeDescriptionHendler} />
                        </div>
                    </div>
                    <div>
                        <h4>DescriptionTable</h4>
                        <div className={s.Product}>
                            <input type="text2" name="typeName" placeholder="Тип" onChange={chengeDescriptionTableHendler} />
                        </div>
                        <div className={s.Product}>
                            <input type="text2" name="countPeople" placeholder="Количество персон" onChange={chengeDescriptionTableHendler} />
                        </div>
                        <div className={s.Product}>
                            <input type="text2" name="features" placeholder="Особенности" onChange={chengeDescriptionTableHendler} />
                        </div>
                        <div className={s.Product}>
                            <input type="text2" name="Eco" placeholder="Экологичность" onChange={chengeDescriptionTableHendler} />
                        </div>
                    </div>

                    <div>
                        <h4>Материал </h4>
                        <div>
                            Счёт: {count}
                            {/* <button>Save</button> */}
                            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                        </div>

                        {!getArr(count)
                            ? <input type="text2" name="" />
                            : getArr(count).map(c => {
                                return (
                                    <DTdescColor key={c.toString()} count={c} product={product} setProduct={setProduct} />
                                )
                            })
                        }

                        <div>
                            <h4>Количество предметов </h4>
                            <div>
                                Счёт: {count2}
                                {/* <button>Save</button> */}
                                <button onClick={() => setCount2(prevCount => prevCount + 1)}>+</button>
                            </div>

                            {!getArr(count2)
                                ? <input type="text2" name="" />
                                : getArr(count2).map(c => {
                                    return <DTdescEqipment key={c.toString()} count2={c} product={product} setProduct={setProduct} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default CreateProduct