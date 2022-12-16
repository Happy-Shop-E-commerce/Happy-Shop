//@ts-nocheck
import React from "react";
import { useRouter } from "next/router";
import shoppingIcon from "../public/shopping-bag.png";

export default function NavbarAdmin({data}) {
  const router = useRouter(); 
  console.log(data);
  
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
                          router.push("/AllProductAdmin");
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
                            />
                            <span className="input-group-addon">
                              <span className="glyphicon glyphicon-search" />
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
                    className="cardimg"
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