import { Star, Title } from "@material-ui/icons";
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";
import { StarRate } from "@material-ui/icons";
import { useSpring, animated } from "react-spring";
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="checkoutInfo">
        <p className="checkoutTitle">{title}</p>
        <p className="checkoutPrice">
          <strong>Rs. {price}</strong>
        </p>
        <div className="checkoutRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarRate />
              </p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
