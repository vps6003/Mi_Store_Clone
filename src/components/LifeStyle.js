import React from 'react'
import data from "../data/data.json"
import HotAccessories from './HotAccessories'
import "../styles/LifeStyle.css"



const Music = () => {   
  return (
    <div className='head'>
    {/* <h1> <button onClick={show_hide}>Music Store</button></h1> */}
              <div id="lifestyle">
            <HotAccessories  lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
              </div>
                  
        

    </div>
  )
}
export default Music