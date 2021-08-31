import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";
import "./Home.css";
import firebase from "firebase";
function Home() {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("Products");

  function getProducts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProducts(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://i.pinimg.com/originals/b1/73/71/b17371255ce6c2e4467fef833121021a.png"
          alt=""
        />
        {Products.map((product) => (
          <div className="home__row">
            <span className="home_col">
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
