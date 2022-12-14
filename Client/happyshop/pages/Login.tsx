import React, { useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import Link from 'next/link'


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();


  async function handleSubmit() {
    try {
    //   event.preventDefault();
      const admin = await axios.post("http://localhost:4000/users/login", {
        email: email,
        password : password
      })
      if (admin) {
        // console.log(admin.data.id);
        localStorage.setItem("token", admin.data.token);
        localStorage.setItem("id", admin.data.id);
      }
    } catch (error) {
      console.log(error);
    }
  }



let func =()=> {
    console.log("cliked");
     router.push("/Home")
}


  return (
   <div> 
<div className ="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input
                    onChange={(event)=>{setEmail(event.target.value)}}
                    
                    type="text" className="login__input" placeholder="User name / Email"></input>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input 
                    onChange={(event)=>{setpassword(event.target.value)}}
                    
                    type="password" className="login__input" placeholder="Password"></input>
				</div>		
                </form>

               <button 
             onClick={()=>{func()}}
               className="button login__submit">
					<span 
                    className="button__text">Log In </span>
				</button>
			

			<div className="social-login">
				<h3>log in via</h3>
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
  )

}

