import React from 'react'
import data from "../data/data.json"
import HotAccessories from './HotAccessories'
import "../styles/Home.css"



let  show_hide =() =>
{
    let a = document.getElementById('home');

    if(a.style.display == 'none')
    {
        a.style.display = 'flex';
    }
    else
    {
        a.style.display = 'none';
    }

}
const Music = () => {   
  return (
    
    <div className='head'>
              <div id="home">
            <HotAccessories  home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
              </div>
                  
        

    </div>
  )
}
export default Music