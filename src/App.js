
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar";
import {  BrowserRouter as Router , Route as rx} from "react-router-dom"
import Slider from "./components/Slider";
import data from "./data/data.json";
import Offers from './components/Offers';
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu"
import SmartDevices from "./components/SmartDevices.js";
import Music from "./components/Music.js"
import Home from "./components/Home.js"
import LifeStyle from "./components/LifeStyle.js"
import MobileAccessories from "./components/MobileAccessories.js"
import HotAccessories from './components/HotAccessories';
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"></Heading>
      <HotAccessoriesMenu/> 
      <Heading text="PRODUCT REVIEWS" />  
      
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="Videos" />
      <Videos videos={data.videos} />
      
      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />
    </Router>
 
  );
}

export default App;
