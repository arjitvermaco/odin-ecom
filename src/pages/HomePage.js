import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const url = "https://fakestoreapi.com/products";
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);


  async function getAllProducts(){
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
    console.log(data);
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div className='max-w-7xl mx-auto flex flex-wrap justify-between'>
      {products.map((product)=>{
        return(
          <ProductCard key={product.id} product={product}/>
        )
      })}
    </div>
  )
}
