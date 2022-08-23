import React from 'react'
import VideoCard from "./VideoCard.js"
import "../styles/Videos.css"



const Videos = ({videos}) => {
    return (
        <div className="videos">
         {
             videos.map((item,index)=>(
                <a href={item.site} target="__blank"><VideoCard  index={index} key={item.image} image={item.image} name={item.name}/></a>
             ))
         }
   </div>

    )
}

export default Videos