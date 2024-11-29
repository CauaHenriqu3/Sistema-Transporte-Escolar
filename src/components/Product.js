import React from "react";

export default function Product({
  image,
  name,
  price,

}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="price">
        {price}
      </p>
    </div>
  );
}
