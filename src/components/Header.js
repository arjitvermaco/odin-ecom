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

  useEffect(() => {
    getAllCategories();
  }, []);

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
          {categories.map((category) => {
            return (
              <Link key={category} to={`category/${category}`}>
                <p className="capitalize">{category}</p>
              </Link>
            );
          })}

          <p className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </p>
        </div>
      </header>
    </div>
  );
}
