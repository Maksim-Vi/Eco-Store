import React from 'react';
import s from '../AdminPanel.module.css';
import axios from 'axios';
import { AuchContext } from '../../content/content.hook';

const AddTopItems = () => {

    const auch = React.useContext(AuchContext)
   
    const [state, setState] = React.useState({
        id: '',
        image: '',
        text1: '',
        text2: '',
        text3: ''
    })


    const chengeHendler = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const chengeImageHendler = (event) => {
        let file = event.target.files[0]
        setState({ ...state, [event.target.name]: file });

    };

    let setTop = () =>{

        const formdata = new FormData();
        formdata.append("state", JSON.stringify(state));
        formdata.append("image", state.image);
        formdata.append("nameImg", state.image.name);

        axios({
            url: `/top`,
            method: 'post',
            headers: {
                'Authorization': auch.token,
            },
            data: formdata
        })
            .then(res => {
               // console.log(res.data); 
            })
    }

    return (<>
        <div className={s.containerAddTop}>
            <div>
                <h4>Item 1</h4>
                <div className={s.containerTopText}>
                    <input type="text2" name="id" placeholder='id' onChange={chengeHendler} value={state.id} />
                    <textarea type="text2" name="text1" placeholder='text1' onChange={chengeHendler} value={state.text1}></textarea>
                    <textarea type="text2" name="text2" placeholder='text2' onChange={chengeHendler} value={state.text2}></textarea>
                    <textarea type="text2" name="text3" placeholder='text3' onChange={chengeHendler} value={state.text3}></textarea>
                    img: <input type="file" name="image" width='55px' height='55px' placeholder="image"  onChange={chengeImageHendler}/>   
                </div>
            </div>
        </div>
        <div className={s.addButton}>
            <button className={s.btnPanel} onClick={setTop}>Add</button>
        </div>
    </>)
}

export default AddTopItems