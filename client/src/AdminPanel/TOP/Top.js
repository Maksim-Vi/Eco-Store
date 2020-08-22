import React from 'react';
import NavBarPanel from '../nav/navBarPanel';
import s from '../AdminPanel.module.css';
import { AuchContext } from '../../content/content.hook';
import axios from 'axios';
import AddTopItems from './addTop';
import ItemTop from './itemTop';

const Top = () =>{

    const auch = React.useContext(AuchContext)
    const [state, setState] = React.useState([])

    let getAllTop = () =>{
        axios({
            url: `/top`,
            method: 'GET',
            headers: {
                'Authorization': auch.token,
            }
        })
            .then(res => {
                //console.log('res Top: ',res.data);  
                setState(res.data)
            })
    }

    React.useEffect(()=>{
        getAllTop()
    },[])
   
    return (
        <div>
            <NavBarPanel />
            {state.length === 3
            ?    
                <div className={s.containerTop}>
                    {state.map(item => {
                        return <ItemTop key={item.id} state={item} getAllTop={getAllTop}/>
                    })}
                    {/* <ItemTop state={state[0]} setState={setState}/>
                    <ItemTop state={state[1]} setState={setState}/>
                    <ItemTop state={state[2]} setState={setState}/> */}
                </div>
            :   <div>
                    <AddTopItems />
                </div>
            }
        </div>
    )
}

export default Top