import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";

function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <img className="product__img" src={image} alt="iphone" />
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
        <button className="product__button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
