import React, { useEffect, useState } from "react";
import "../design/dashboard.css";
function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div class="product-container">
          <div class="product" key={product.id}>
            <div class="pic">
              <img src={product.image} />
            </div>
            <div class="info">
              <h2 class="product-name">{product.title}</h2>
              <br />
              <p>
                .{product.category}
                <br />
                <br />
              </p>
              <p class="product-description">
                Description: {product.description}
              </p>
            </div>

            <div class="cmt">
              <h2 class="product-price">price: {product.price}$</h2>
              <InterestRateRating rate={3.75} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Dashboard;

function InterestRateRating({ rate }) {
  const maxRate = 5;
  const starRating = Math.round((maxRate / 100) * (100 - rate));

  return (
    <div>
      {[...Array(maxRate)].map((_, index) => (
        <span
          key={index}
          className={index < starRating ? "star filled" : "star empty"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
