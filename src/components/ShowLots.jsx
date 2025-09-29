import React from 'react'
import { Link } from 'react-router-dom'
function ShowLots({lots}) {
  return (
    <div class="row mb-5">
{
    lots.map((lot,index)=>{
        let parsedSpecs={};
    try {
        parsedSpecs=JSON.parse(lot.specs)
    } catch (error) {
        console.log(error);
    }
    })
    return ()
}
   
    </div>
  )
}

export default ShowLots