import React, { useContext, useState } from 'react';
import NavBarPanel from '../../../nav/navBarPanel';
import { useLocation } from 'react-router-dom';
import s from '../../../AdminPanel.module.css';
import { AuchContext } from '../../../../content/content.hook';
import Axios from 'axios';
import notFound from '../../../../img/undef/notFound.png'
import ProductChangeColor from './productChangeColor';
import ProductChangeEquipment from './productChangeEquipment';
import { InstenceAPI2 } from '../../../../API/api';

const Product = () => {
    const location = useLocation();
    const product = location.state.product

    const auch = useContext(AuchContext)

    const [item, setItem] = useState(product)
    const [img, setImg] = useState({
        image: '',
        image1: '',
        image2: '',
        image3: ''
    })


    const changeImage = (event) => {
        let file = event.target.files[0]
        setImg({ ...img, [event.target.name]: file });
    }

    const chengeHendler = (event) => {
        setItem({ ...item, [event.target.name]: event.target.value });
    };

    const chengeDescriptionHendler = (event) => {
        setItem({ ...item, description: { ...item.description, [event.target.name]: event.target.value } });
    };

    const chengeDescriptionTableHendler = (event) => {
        setItem({ ...item, descriptionTable: { ...item.descriptionTable, [event.target.name]: event.target.value } });
    };

    const inStockHendler = (event) =>{
        let inStock =  event.target.checked
        setItem({ ...item, [event.target.name]: inStock });
        //console.log('prod',product);
        
    }

    const saleHendler = (event) =>{
        let sale =  event.target.checked
        setItem({ ...item, [event.target.name]: sale });
        //console.log('prod',product);
        
    }


    const changeItemHendler = async () => {
        const formdata = new FormData();
        formdata.append("image", img.image);
        formdata.append("image1", img.image1);
        formdata.append("image2", img.image2);
        formdata.append("image3", img.image3);
        formdata.append("product", JSON.stringify(item));
               
        InstenceAPI2({
            url: `/products/` + item.id,
            method: 'PUT',
            headers: {
                'Authorization': auch.token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formdata
        })
            .then(res => {
                //console.log(res)
                if (res) {
                    productsHendler()
                }
            })
    };

    const productsHendler = async () => {
        InstenceAPI2({
            url: `/products/` + item.id,
            method: 'GET',
            headers: {
                'Authorization': auch.token,
            }
        })
            .then(res => {
                setItem(res.data)
            })
    };

    return (<>
        <NavBarPanel />
        <div className={s.containerEditProduct}>
            <h4>Product</h4>
            <div className={s.topItemChange}>
                скидка: <input  type="checkbox" name="sale" onChange={saleHendler} value={item.sale} checked={item.sale}/>
                цена скидки: <input type="text3" name="salePrice" placeholder={item.salePrice} onChange={chengeHendler} value={item.salePrice} />
            </div>
            <div> в наличии: <input  type="checkbox" name="inStock" onChange={inStockHendler} value={item.inStock} checked={item.inStock}/></div>
            <div> Type: <input type="text2" name="type" placeholder={item.type} onChange={chengeHendler} value={item.type} /></div>
            <div> Name: <input type="text2" name="name" placeholder={item.name} onChange={chengeHendler} value={item.name} /></div>
            <div> id: <input type="text2" name="id" placeholder={item.id} onChange={chengeHendler} value={item.id} /> </div>
            <div><p>в наличии</p></div>
            <div>price: <input type="text2" name="price" placeholder={item.price} onChange={chengeHendler} value={item.price} /></div>
            <div className={s.SetImage}>
                <h4>Main Image</h4>
                {!item.image
                    ? <img src={notFound} alt="" width='55px' height='55px' />
                    : <img src={`http://localhost:5000/${item.image}`} alt="" width='55px' height='55px' />
                }
                <input type="file" name="image" placeholder="image" onChange={changeImage} />
                <h6>Dop image 1</h6>
                {!item.image
                    ? <img src={notFound} alt="" width='55px' height='55px' />
                    : <img src={`http://localhost:5000/${item.image1}`} alt="" width='55px' height='55px' />
                }
                <input type="file" name="image1" placeholder="image1" onChange={changeImage} />
                <h6>Dop image 2</h6>
                {!item.image
                    ? <img src={notFound} alt="" width='55px' height='55px' />
                    : <img src={`http://localhost:5000/${item.image2}`} alt="" width='55px' height='55px' />
                }
                <input type="file" name="image2" placeholder="image2" onChange={changeImage} />
                <h6>Dop image 3</h6>
                {!item.image
                    ? <img src={notFound} alt="" width='55px' height='55px' />
                    : <img src={`http://localhost:5000/${item.image3}`} alt="" width='55px' height='55px' />
                }
                <input type="file" name="image3" placeholder="image3" onChange={changeImage} />
            </div>
            <h4>description</h4>
            <div>name: <input type="text2" name="nameDescription" placeholder={item.description.nameDescription} onChange={chengeDescriptionHendler} value={item.description.nameDescription} /></div>
            <div>description: <input type="text2" name="descriptionD" placeholder={item.description.descriptionD} onChange={chengeDescriptionHendler} value={item.description.descriptionD} /></div>

            <h4>descriptionTable</h4>
            <div>Тип: <input type="text2" name="typeName" placeholder={item.descriptionTable.typeName} onChange={chengeDescriptionTableHendler} value={item.descriptionTable.typeName} /></div>
            <div>Особенности: <input type="text2" name="features" placeholder={item.descriptionTable.features} onChange={chengeDescriptionTableHendler} value={item.descriptionTable.features} /></div>

            <div>Количество персон: <input type="text2" name="countPeople" placeholder={item.descriptionTable.countPeople} onChange={chengeDescriptionTableHendler} value={item.descriptionTable.countPeople} /></div>
            <div>Экологичность: <input type="text2" name="Eco" placeholder={item.descriptionTable.Eco} onChange={chengeDescriptionTableHendler} value={item.descriptionTable.Eco} /></div>
            <br />
            <div>
                {item.descriptionTable.color.length > 0 
                ? <div className={s.FeatureContainerText}>
                    <h5>Материал</h5>
                </div> 
                : null}
                {item.descriptionTable.color.length > 0
                    ? item.descriptionTable.color.map(i => {
                        return (<ProductChangeColor key={i.id} product={i} item={item} setItem={setItem}/>)
                    })
                    : null
                }
            </div>
            <br />

            {item.descriptionTable.color.length > 0 
            ? <div className={s.FeatureContainerText}>
                <h5>Количество предметов</h5>
            </div> 
            : null}
            {item.descriptionTable.equipment.length > 0
                ? item.descriptionTable.equipment.map(i => {
                    return (<ProductChangeEquipment key={i.id} product={i} item={item} setItem={setItem}/>)
                })
                : null
            }
        </div>
        <div className={s.btnEditProduct}><button className={s.btnPanel} onClick={changeItemHendler}>Save</button> </div>
    </>)
}

export default Product


// проверить если картинка не выбрана что бы заменило путь старым путем 