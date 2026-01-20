import React from "react";
import ProductCard from "./ui/product-card/ProductCard";
import ProductSpecs from "./ui/ProductSpecs/ProductSpecs";
import Breadcrumb from "../../../shared/ui/Breadcrumb/Breadcrumb";
import Description from "./ui/description/Description";

function ProductDetail() {
  return (
    <div style={{maxWidth:"1279px", margin:"0 auto"}}>
      <Breadcrumb
        items={[
          { label: "Главная", path: "/" },
          { label: "Личный кабинет", path: "/profile" },
          { label: "История заказов", path: "/orders" },
        ]}
      />
      <ProductCard />
      <Description />
      <ProductSpecs />
    </div>
  );
}

export default ProductDetail;
