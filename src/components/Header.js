import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);
  let url = "https://fakestoreapi.com/products/categories";

  async function getAllCategories() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setCategories(data);
  }

  useEffect(()=>{
    getAllCategories();
  },[])

  return (
    <div className="h-14 bg-blue-700 fixed w-full shadow-lg">
      <header className="flex h-14 max-w-7xl mx-auto justify-between items-center">
        <div className="text-white">
          <Link to="/" className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
              />
            </svg>
            My Store
          </Link>
        </div>

        <div className="flex space-x-5 text-white font-bold">
            {categories.map((category)=>{
                return(
                    <Link key={category}>
                        <p className="capitalize">{category}</p>
                        </Link>
                )
            })}
        </div>
      </header>
    </div>
  );
}
