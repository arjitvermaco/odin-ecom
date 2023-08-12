import React from 'react'

export default function ProductCard(props) {
  return (
    <div>
        <img src={props.product.image}/>
    </div>
  )
}
