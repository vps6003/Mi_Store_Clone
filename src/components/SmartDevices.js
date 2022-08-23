import React from 'react'
import data from "../data/data.json"
import HotAccessories from './HotAccessories'
import "../styles/SmartDevices.css"




const Music = () => {   
  return (
    <div className='head'>
              <div id="smartdevice">
            <HotAccessories  smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
              </div>
                  
        

    </div>
  )
}
export default Music