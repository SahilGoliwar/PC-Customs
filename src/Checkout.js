import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);
  const customLeaveAnimation = {
    from: { transform: "scale(1, 1)" },
    to: { transform: "scale(0.5, 1) translateY(-20px)" },
  };
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkoutTitle">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
