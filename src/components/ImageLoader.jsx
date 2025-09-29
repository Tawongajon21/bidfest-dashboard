import React from 'react'
import { useState,useEffect } from 'react'
import { baseUrl,imageServerUrl } from '../redux/actions/baseUrl';
function ImageLoader({newPath,thumbnail}) {
  

  const [src, setsrc] = useState(`data:image/jpeg;base64,${thumbnail}`)
  const [loaded, setloaded] = useState(false);

  useEffect(()=>{
    let img=new Image();
    img.src=`${imageServerUrl}${newPath}`;
    img.onload=()=>{
        setsrc(`${imageServerUrl}${newPath}`)
        setloaded(true)
    }
    },[newPath])
   console.log(src);
  return (
    <div className='card-img-top'>
   
        <img class="card-img-top" src={src} alt="Card image cap" />
    </div>

  )
}

export default ImageLoader