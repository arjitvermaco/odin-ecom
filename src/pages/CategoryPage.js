import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  let {id} = useParams();
  const url = "https://fakestoreapi.com/products/category/";
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true)


  async function getProducts(){
    setLoading(true)
    let response = await fetch(url+id);
    let data = await response.json();
    setProducts(data);
    setLoading(false)
  }

  useEffect(()=>{
    getProducts();
  },[id])

  //fetch(url+id)

  return (
    <div className='max-w-7xl pt-16 mx-auto flex flex-wrap justify-between'>
      {loading ? ("Fetching data"):(products.map((product)=>{
        return(
          <ProductCard key={product.id} product={product}/>
        )
      }))}
    </div>
  )
}
