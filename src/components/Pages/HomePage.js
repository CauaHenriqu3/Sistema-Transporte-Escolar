import React from "react";
import Header from "../Header";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";
import TestimonialsList from "../TestimonialsList";

export default function HomePage({
  products,
  addProductToCart,

}) {
  return (
    <>
      <Header />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Nossos Serviços</h3>
          <div className="underline"></div>
        </div>

        <div className="main-content">
          <ProductsList
            addProductToCart={addProductToCart}
            products={products}
          />
        </div>
      </div>
      <ExclusiveSection />
      <TestimonialsList />
    </>
  );
}
