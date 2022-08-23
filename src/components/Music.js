import React from 'react'
import data from "../data/data.json"
import HotAccessories from './HotAccessories'
import "../styles/Music.css"

const Music = () => {   
  return (
    <div className='head'>
              <div id="music">
            <HotAccessories  music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
            
    </div>
                  
        

    </div>
  )
}
export default Music