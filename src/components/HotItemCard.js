import React from 'react'
import "../styles/HotItemCard.css"

const HotItemCard = ({image,index,name,price}) => {
    return (
            <a className="HotItemCard" href ="https://www.mi.com/in/products"><img src={image} alt={`${index} product`} />
        <div className="HotItemCard">
            <p>{name}</p>
            <span>{price}</span>
        </div>
            </a>
    )
}

export default HotItemCard