import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AdminUserLayout from "./AdminUserLayout";
import SimpleUserLayout from "./SimpleUserLayout";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  let [errormessage, setErrormessage] = useState("");
  let [error, setError] = useState(false);

  const router = useRouter();

  //   async function handleSubmit() {
  //     try {
  //     //   event.preventDefault();
  //       const admin = await axios.post("http://localhost:4000/users/login", {
  //         email: email,
  //         password : password
  //       })
  //       if (admin) {
  //         // console.log(admin.data.id);
  //         localStorage.setItem("token", admin.data.token);
  //         localStorage.setItem("id", admin.data.id);
  //         console.log(admin)
  // console.log("id", admin.data.id );
  // console.log("token", admin.data.token);
  //         router.push("/Home")
  //         console.log("test");

  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  async function handleSubmit() {
    try {
      //   event.preventDefault();
      const loginRequest = await axios
        .post("http://localhost:4000/users/login", {
          email: email,
          password: password,
        })
        .then((response: any) => {
          const encoded_Payload_Part_InToken = response.data.token
            .toString()
            .split(".")[1];
          const decoded_Payload_Part_InToken = atob(
            encoded_Payload_Part_InToken
          );
          const payload = JSON.parse(decoded_Payload_Part_InToken);

          //   console.log( "decoded ",decoded_Payload_Part_InToken);
          //   console.log( "encoded ",encoded_Payload_Part_InToken);
          //   console.log( "payload ",payload);
          console.log("payload admin ", payload.isAdmin);
          console.log("payload id ", payload.id);
          //   console.log( "payload name ",payload.name);

          localStorage.setItem("IS_ADMIN", payload.isAdmin);
          localStorage.setItem("USER_ID", payload.id);
          localStorage.setItem("USER_NAME", payload.name);
        })
        .then(() => {
          displayComponent();
        });
    } catch (error) {
      console.log(error.response.data.message);
      setErrormessage(error.response.data.message);
      setError(true);
    }
  }

  const displayComponent = () => {
    let GetRole = localStorage.getItem("IS_ADMIN");
    let Parsed_Get_Role = JSON.parse(GetRole);

    console.log("test", Parsed_Get_Role);
    if (Parsed_Get_Role === true) {
      return router.push("/AdminUserLayout");
    } else if (Parsed_Get_Role === false) {
      return router.push("/SimpleUserLayout");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                ></input>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                ></input>
              </div>
            </form>

            <button
              onClick={() => {
                handleSubmit();
              }}
              className="button login__submit"
            >
              <span className="button__text">Log In </span>
            </button>
            <div>
              {error ? <p style={{ color: "red" }}>{errormessage}</p> : null}
            </div>

            <div className="social-login">
              <h3
                onClick={() => {
                  router.push("/Signin");
                }}
              >
                Sign in
              </h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
