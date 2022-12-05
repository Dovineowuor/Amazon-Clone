import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";
import Toast from "./Toast";

function Product({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  console.log(basket);

  toast.configure();
  const notify = () => {
    toast.success(<Toast title={title} image={image} />);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
          <p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>🌟</p>
                ))}
            </div>
          </p>
        </p>
      </div>

      <img src={image} alt="" />

      {!hideButton && (
        <button
          onClick={() => {
            addToBasket();
            notify();
          }}
        >
          Add to basket
        </button>
      )}
    </div>
  );
}

export default Product;
