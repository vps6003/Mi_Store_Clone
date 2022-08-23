import React from 'react'
import "../styles/PreNavbar.css"


const cartIcon =<svg id="Layer_1" data-name="Layer 1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 104.42" width="15px" fill="white"><title>add-item-in-cart</title><path d="M3.66,10.84a3.71,3.71,0,0,1,0-7.42H9.11A17.25,17.25,0,0,1,18,5.77c4.92,3.11,5.79,7.56,7.05,12.59H66.73a31.57,31.57,0,0,0-.91,7.33H27.15l8.37,31.47H94.81l0-.18c.72.05,1.44.08,2.17.08a31.59,31.59,0,0,0,5.46-.48l-1.29,5.19a3.6,3.6,0,0,1-3.57,2.81H37.49c1.31,4.88,2.63,7.51,4.42,8.73,2.16,1.41,5.92,1.51,12.21,1.41H96.68a3.67,3.67,0,1,1,0,7.33H54.21c-7.79.1-12.59-.09-16.44-2.63s-6-7.14-8.08-15.31h0L17.1,16.48c0-.1,0-.1-.09-.19a6.58,6.58,0,0,0-2.82-4.23A9.64,9.64,0,0,0,9,10.84H3.66ZM97,0A25.85,25.85,0,1,1,78.74,7.57,25.83,25.83,0,0,1,97,0Zm11.43,23.91V27.8a1.67,1.67,0,0,1-1.67,1.67h-6.14v6.14A1.68,1.68,0,0,1,99,37.29H95.08a1.68,1.68,0,0,1-1.67-1.68V29.47H87.27a1.68,1.68,0,0,1-1.68-1.67V23.91a1.68,1.68,0,0,1,1.68-1.67h6.14V16.1a1.68,1.68,0,0,1,1.67-1.68H99a1.68,1.68,0,0,1,1.67,1.68v6.14h6.14a1.68,1.68,0,0,1,1.67,1.67Zm3.72-13.2a21.43,21.43,0,1,0,6.27,15.15,21.38,21.38,0,0,0-6.27-15.15ZM60.9,33.43a2.61,2.61,0,0,1,5.11,0V47.6a2.6,2.6,0,0,1-5.11,0V33.43Zm-15.31,0a2.61,2.61,0,0,1,5.11,0V47.6a2.6,2.6,0,0,1-5.11,0V33.43Zm40.1,53a9,9,0,1,1-9,9,9,9,0,0,1,9-9Zm-39.56,0a9,9,0,1,1-9,9,9,9,0,0,1,9-9Z"/></svg>



const PreNavbar = () => {
  return (
    <div className="preNav">
        <div>
        <a href="https://www.mi.com">XIAOMI INDIA</a> <span></span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span></span>
        <a href="https://www.mi.com/inservice/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span></span>
        <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE</a> <span></span>
        </div>

        <div>
        <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                 <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                 <a  href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a>

        </div>

        
    </div>
  )
}

export default PreNavbar