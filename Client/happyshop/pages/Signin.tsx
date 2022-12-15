import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ifError } from "assert";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [error, setError] = useState(false);
  const [alluser, setalluser] = useState([]);
  const router = useRouter();

  async function handleSubmit() {
    try {
      const user = await axios
        .post("http://localhost:4000/users/register", {
          name: username,
          email: email,
          password: password,
          isAdmin: false,
        })
        .then(() => {
          alert("Account has been created");
          router.push("/SimpleUserLayout");
        });
    } catch (error) {
      console.log(error.response.data.message);
      setErrormessage(error.response.data.message);
      setError(true);
    }
  }

  //   async function get_all_user() {
  //     try {
  //       const user = await axios
  //         .get("http://localhost:4000/users/getAll")
  //         .then((response) => {
  //           setalluser(response.data);
  //         });
  //       [];
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   get_all_user();

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
                    setUsername(event.target.value);
                  }}
                  type="text"
                  className="login__input"
                  placeholder="User name"
                ></input>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  type="Email"
                  className="login__input"
                  placeholder="Email"
                ></input>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                    type="Password"
                    className="login__input"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
            </form>

            <button
              onClick={() => {
                handleSubmit();
              }}
              className="button login__submit"
            >
              <span className="button__text">Sign In </span>
            </button>
            <div>
              {error ? <p style={{ color: "red" }}>{errormessage}</p> : null}
            </div>

            <div className="social-login">
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
