import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id }: any = params; 
  const response = await fetch(`http://localhost:4000/product/${id}`);
  const singleProduct = await response.json();
  return {
    props: {
      singleProduct,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/[id]", { params: { id: "[id]" } }],
    fallback: true,
  };
};

export default function ProductDetails({ singleProduct }: any) {
  const router = useRouter();
  const { id } = router.query;
  const [amount, setAmount] = useState(1);
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(0);

  const slideTo = (dir = "") => {
    if (dir === "next") {
      if (activeImage < 2) {
        setActiveImage((prev) => prev + 1);
      }
    } else if (dir === "prev") {
      if (activeImage > 0) {
        setActiveImage((prev) => prev - 1);
      }
    }
  };

  return (
    <div>
      <Navbar />

      <main className="prod-info">
        <div className="left">
          <img
            className="active-img"
            src={(singleProduct.imageUrl)}
            alt=" image 1"
          />
          <div className="slides">
            <span className="after" onClick={() => slideTo("next")}>
              {">"}
            </span>
            <div>
              <img src={singleProduct.imageUrl} alt="pic1" />
            </div>
            <div>
              <img src={singleProduct.imageUrl} alt="pic2" />
            </div>
            <div>
              <img src={singleProduct.imageUrl} alt="pic3" />
            </div>
            <span className="before" onClick={() => slideTo("prev")}>
              {"<"}
            </span>
          </div>
        </div>
        <div className="right">
          <div className="top">
            {" "}
            <div className="category">
              Category : <span> {singleProduct.category}</span>
            </div>
            <h1>{singleProduct.productName}</h1>
            <p className="disc">{singleProduct.description}</p>
            <h2>{singleProduct.price} dt</h2>
          </div>
          <div className="middle">
            <div className="info">
              <div>
                <h3>Quantity :</h3>
                <div className="btn-group">
                  <button
                    className="btn"
                    id="plusBtn"
                    onClick={() => setAmount((prev) => prev + 1)}
                  >
                    +
                  </button>
                  <span className="btn" id="amount">
                    {amount}
                  </span>
                  <button
                    className="btn"
                    id="minusBtn"
                    onClick={() => {
                      amount > 1 && setAmount((prev) => prev - 1);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <h1>
                Total :<span>{singleProduct.price * amount} dt </span>
              </h1>
            </div>
            <div className="add-to-cart">
              <button
                className="btn btn-primary"
                // onClick={() => addToCart(activeProduct, amount)}
              >
                ADD TO CARD
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
