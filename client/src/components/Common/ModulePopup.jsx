import React from 'react';
import '../../css/itemCarusel.css';

const Module = ({url,close}) =>{
    // console.log('in Module', url);
    return(
       <div className='modalModulePopup'>  
            <img src={url} alt=""/>
            <span onClick={close}>
              &times;
            </span>  
        </div>)
  }

  export default Module