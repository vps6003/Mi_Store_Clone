import React from 'react';
import "../styles/HotAccessoriesMenu.css";
import {Link} from "react-router-dom"; 
import Music from "./Music.js"
import Home from "./Home.js"
import LifeStyle from "./LifeStyle.js"
import MobileAccessories from "./MobileAccessories.js"
import HotAccessories from './HotAccessories';
import SmartDevices from "./SmartDevices.js"
import Carousel from 'react-bootstrap/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

let  show_hide1 =() =>
{
    let a = document.getElementById('music');
    let b = document.getElementById('home');
    let c = document.getElementById('smartdevice');
    let d = document.getElementById('lifestyle');
    let e = document.getElementById('mobileaccessories');


    if(a.style.display == 'none')
    {
        a.style.display = 'flex';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
    }
    else
    {
        a.style.display = 'none';
    }

}
let  show_hide2 =() =>
{
    let a = document.getElementById('smartdevice');
    let b = document.getElementById('home');
    let c = document.getElementById('music');
    let d = document.getElementById('lifestyle');
    let e = document.getElementById('mobileaccessories');


    if(a.style.display == 'none')
    {
        a.style.display = 'flex';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
    }
    else
    {
        a.style.display = 'none';
    }

}
let  show_hide3 =() =>
{
    let a = document.getElementById('home');
    let b = document.getElementById('music');
    let c = document.getElementById('smartdevice');
    let d = document.getElementById('lifestyle');
    let e = document.getElementById('mobileaccessories');


    if(a.style.display == 'none')
    {
        a.style.display = 'flex';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
    }
    else
    {
        a.style.display = 'none';
    }

}
let  show_hide4 =() =>
{
    let a = document.getElementById('music');
    let b = document.getElementById('home');
    let c = document.getElementById('smartdevice');
    let d = document.getElementById('lifestyle');
    let e = document.getElementById('mobileaccessories');


    if(d.style.display == 'none')
    {
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'flex';
        e.style.display = 'none';
    }
    else
    {
        a.style.display = 'none';
    }

}
let  show_hide5 =() =>
{
  let e = document.getElementById('music');
  let b = document.getElementById('home');
  let c = document.getElementById('smartdevice');
  let d = document.getElementById('lifestyle');
  let a = document.getElementById('mobileaccessories');


    if(a.style.display == 'none')
    {
        a.style.display = 'flex';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
    }
    else
    {
        a.style.display = 'none';
    }

}

const HotAccessoriesMenu = () => {
  return (<>
      <div className="HotAccessoriesMenu">
          
      <Link className="HotAccessoriesLink" to="/music" onClick={show_hide1}> Music Store</Link>
      <Link className="HotAccessoriesLink" to="/smartDevice" onClick={show_hide2}>Smart Devices</Link>
      <Link className="HotAccessoriesLink" to="/home" onClick={show_hide3}>Home</Link>
      <Link className="HotAccessoriesLink" to="/lifeStyle" onClick={show_hide4}>LifeStyle</Link>
      <Link className="HotAccessoriesLink" to="/MobileAccessories" onClick={show_hide5}>Mobile Accessories</Link>
     
     
      {/* <Carousel fade>
      <Carousel.Item><Link className="HotAccessoriesLink" to="/music" onClick={show_hide1}> Music Store</Link></Carousel.Item>
      <Carousel.Item><Link className="HotAccessoriesLink" to="/smartDevice" onClick={show_hide2}>Smart Devices</Link></Carousel.Item>
      <Carousel.Item><Link className="HotAccessoriesLink" to="/home" onClick={show_hide3}>Home</Link></Carousel.Item>
      <Carousel.Item><Link className="HotAccessoriesLink" to="/lifeStyle" onClick={show_hide4}>LifeStyle</Link></Carousel.Item>
      <Carousel.Item><Link className="HotAccessoriesLink" to="/MobileAccessories" onClick={show_hide5}>Mobile Accessories</Link></Carousel.Item>
          </Carousel>   */}


{/*
*/}

      </div>
<Music/>
<SmartDevices />
<Home/>
<LifeStyle />
<MobileAccessories /> 
</>
    
  )
}

export default HotAccessoriesMenu;