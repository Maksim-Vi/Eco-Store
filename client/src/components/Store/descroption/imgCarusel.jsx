import React, { useState } from 'react';
import '../../../css/itemCarusel.css'
import SlideShow from 'react-image-show';
import Module from '../../Common/ModulePopup';


const ImgCarusel = ({data}) =>{

  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');

    let urlArray =[
      `http://localhost:5000/${data.image}`,
      `http://localhost:5000/${data.image1}`,
      `http://localhost:5000/${data.image2}`,
      `http://localhost:5000/${data.image3}`
    ]

    return (
      <div>        
          <SlideShow
            images={urlArray}
            width="450px"
            imagesWidth="450px"
            imagesHeight="350px"
            imagesHeightMobile="45vw"
            thumbnailsWidth="420px"
            thumbnailsHeight="120px"
            onImageClick={(value)=>{
              setUrl(value.target.src);
              setShow(true)
            }}
            indicators arrows thumbnails fixedImagesHeight
          />
            {show 
                ? <Module url={url} close={() => setShow(false)}/>  
                : null 
            }

      </div>)
}

export default ImgCarusel