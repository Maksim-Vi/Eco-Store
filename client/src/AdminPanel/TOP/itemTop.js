import React from 'react';
import s from '../AdminPanel.module.css';
import { AuchContext } from '../../content/content.hook';
import axios from 'axios';
import { InstenceAPI2 } from '../../API/api';

const ItemTop = (props) => {

    let initialState = props.state
    const [state, setState] = React.useState(initialState)
    const [img, setImg] = React.useState({
        image: ''
    })


    const auch = React.useContext(AuchContext)
    
    const chengeHendler = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const chengeImageHendler = (event) => {
        let file = event.target.files[0]
        setImg({ ...img, [event.target.name]: file });
    };

    let setTop = () =>{
        const formdata = new FormData();
        formdata.append("prevId", JSON.stringify(props.state));
        formdata.append("state", JSON.stringify(state));
        formdata.append("image", img.image);
        formdata.append("nameImg", img.image.name);

        InstenceAPI2({
            url: `/top/`  + props.state.id,
            method: 'put',
            headers: {
                'Authorization': auch.token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formdata
        })
            .then(res => {
                console.log(res.data);
                props.getAllTop() 
            })
    }


    return (
        <div>
            <div className={s.containerTopText}>
                <input type="text2" name="id" placeholder='id' value={state.id} onChange={chengeHendler}/>
                <textarea type="text2" name="text1" placeholder='text1' value={state.text1} onChange={chengeHendler} />
                <textarea type="text2" name="text2" placeholder='text2' value={state.text2} onChange={chengeHendler} />
                <textarea type="text2" name="text3" placeholder='text3' value={state.text3} onChange={chengeHendler} />
                <img src={`http://localhost:5000/${props.state.image}`} alt="" width='55px' height='55px' />
                <input type="file" name="image" width='55px' height='55px' placeholder="image" onChange={chengeImageHendler} />
                <button onClick={setTop}>change</button>
            </div>
        </div>
    )
}

export default ItemTop
