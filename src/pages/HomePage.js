import React, { useEffect, useState } from 'react'

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
    <div>HomePage</div>
  )
}
