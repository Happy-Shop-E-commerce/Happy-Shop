//@ts-nocheck
import React,{useEffect, useState} from "react";
import { useRouter } from "next/router";
import shoppingIcon from "../public/shopping-bag.png";
// import Search from "./Search"
// import axios from "axios";
import { GetStaticProps } from "next";


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:4000/product");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};


export default function Navbar({data}) {
  console.log(data);
  
  const router = useRouter();
  const [search,setSearch]=useState()
  const[filtredSearch,setFiltredSearch]=useState([])
  const searchedData=()=>{
    data.filter((element:string)=> {
    setFiltredSearch(element.category.toLowerCase()|| element.color.toLowerCase()===search)})
  }
  
  // console.log(search);
  // useEffect(()=>{
  //   axios.get('http://localhost:4000/product')
  //   .then(res=>)
  // })
  return (
    <div>
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="navbar-header">
                  <button
                    className="navbar-toggle"
                    data-target="#mobile_menu"
                    data-toggle="collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a href="#" className="navbar-brand">
                    Happy Shop
                  </a>
                </div>
                <div className="navbar-collapse collapse" id="mobile_menu">
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <a
                        onClick={() => {
                          router.push("/Home");
                        }}
                      >
                        Home
                      </a>
                    </li>

                    {/* <select class=" genre">
                      <option> --- </option>
                      <option id="men"> Men </option>
                      <option id="Women"> Women </option>
                    </select> */}

                    <li>
                      <a className="dropdown-toggle" data-toggle="dropdown">
                        Category <span className="caret" />
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          router.push("/AllProducts");
                        }}
                      >
                        All Products{" "}
                      </a>
                    </li>

                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav">
                    <li>
                      <form action="" className="navbar-form">
                        <div className="form-group">
                          <div className="input-group">
                          <input
                          type="search"
                           name="search"
                           id=""
                           placeholder="Search Anything Here..."
                           className="form-control"
                           onChange={(e) =>setSearch(e.target.value)}
          />
                          <span className="input-group-addon">
                         <span className="glyphicon glyphicon-search" onClick={searchedData} />

                             </span>
                          </div>
                        </div>
                      </form>
                    </li>
                  </ul>
                  <img
                    onClick={() => {
                      router.push("/Card");
                    }}
                    className="card"
                    src="https://www.pngfind.com/pngs/m/453-4531594_icon-05-min-clip-art-shopping-bag-hd.png"
                  ></img>

                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-user" /> Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span
                          className="glyphicon glyphicon-log-in"
                          onClick={() => {
                            router.push("/Login");
                          }}
                        />
                        Logout <span className="caret" />
                      </a>
                      <ul className="dropdown-menu"></ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
