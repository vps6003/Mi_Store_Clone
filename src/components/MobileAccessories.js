import React from 'react'
import data from "../data/data.json"
import HotAccessories from './HotAccessories'
import "../styles/MobileAccessories.css"




const Music = () => {   
  return (
    <div className='head'>
              <div id="mobileaccessories">
            <HotAccessories  mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
              </div>
                  
        

    </div>
  )
}
export default Music