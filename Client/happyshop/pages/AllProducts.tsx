import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import Link from "next/link";
// import Aside from "./aside";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:4000/product");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default function AllProducts({ data }) {
  const router = useRouter();

  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:4000/product")
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  console.log(cartProducts);

  return (
    <div>
      <Navbar />
      {/* <Aside /> */}
      <div>
        {data.map((element: any) => {
          return (
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <a className="image">
                      <img className="pic-1" src={element.imageUrl} />
                    </a>
                    <span className="product-discount-label">-33%</span>
                    <ul className="product-links">
                      <li>
                        <a href="#" data-tip="Add to Wishlist">
                          <i className="fas fa-heart" />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#" data-tip="Compare">
                          <i className="fa fa-random" />
                        </a>
                      </li> */}
                      <li>
                        <a href="#" data-tip="Quick View">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <ul className="rating">
                      <li className="fas fa-star" />
                      <li className="fas fa-star" />
                      <li className="fas fa-star" />
                      <li className="far fa-star" />
                      <li className="far fa-star" />
                    </ul>
                    <h3 className="title">
                      <Link href={`${element._id}`}>{element.productName}</Link>
                    </h3>
                    <div className="price">{element.price} DT</div>
                    <a
                      onClick={() => {
                        setCartProducts(element);
                        router.push("/Card");
                      }}
                      className="add-to-cart"
                    >
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
