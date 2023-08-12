import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="w-1/4 border border-transparent shadow-lg mr-4 mt-8 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-600">
      <img
        src={props.product.image}
        className="h-64 mx-auto"
        alt={props.product.title}
      />
      <Link to={`/product/${props.product.id}`}>
        <h3>{props.product.title}</h3>
      </Link>
      <div className="flex mt-4 justify-between">
        <div>
          <p>$ {props.product.price}</p>
        </div>

        <div>
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
