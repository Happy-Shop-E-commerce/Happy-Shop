import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { GoX } from "react-icons/go";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Card() {
  return (
    <div>
      <Navbar />
      <div className="prod-sell">
        <div className="left">
          <div className="image">
            <img src="{product.images[0]}" alt="Product" />
          </div>
          <div className="info">
            <h1>product.title</h1>
            <p>2022/12/25</p>
          </div>
        </div>
        <div className="right">
          <div className="amount">
            <button>
              <HiMinusSm />
            </button>
            <div>amount</div>
            <button>
              <HiPlusSm />
            </button>
          </div>
          <span>
            <div className="total-price">product.price * amount$</div>
            <GoX
              className="delete-icon"
              //   onClick={() => clearFromCart(product)}
            />
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
