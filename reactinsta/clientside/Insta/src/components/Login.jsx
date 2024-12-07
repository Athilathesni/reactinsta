import React, { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const res=await axios.post("http://localhost:3005/api/login",formData)
      console.log(res.data)
      // console.log(res.data.token)
      
      if(res.status==201){
        localStorage.setItem('token',res.data.token)
        alert("successfully logined!")
        navigate('/')
      }else{
        alert(res.data.msg)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    // <div className="login-page">
    //   <div className="login-container">
    //     <div className="login-header">
    //       <h1>Welcome Back!</h1>
    //       <p>Please log in to your account</p>
    //     </div>
    //     <form onSubmit={handleSubmit}>
    //       <div className="form-group">
    //         <label>Email Address</label>
    //         <input
    //           type="email"
    //           name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           placeholder="Enter your email"
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label>Password</label>
    //         <input
    //           type="password"
    //           name="pass"
    //           value={formData.pass}
    //           onChange={handleChange}
    //           placeholder="Enter your password"
    //           required
    //         />
    //       </div>
    //       <button type="submit" className="btn-login">
    //         Login
    //       </button>
    //     </form>
    //     <div className="form-footer">
    //       <Link to={"/#"} className="forgot-password-link">
    //         Forgot Password?
    //       </Link>
    //       <span className="separator">|</span>
    //       <Link to={"/verify"} className="signup-link">
    //         Sign Up
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="main">
     
    <form className="form" onSubmit={handleSubmit}>
    <h1>Login Form</h1>
      <div className="form1">
        <input  type="email"  name="email" placeholder="enter email"  value={formData.email}  onChange={handleChange}  required/>
        <input  type="password"  name="pass" placeholder="password"  value={formData.pass}  onChange={handleChange}  required/>
      </div>
      <div className="pass"><Link to={'/verify'} className="pass" >Forgot Password?</Link></div>
      <button type="submit" className="button"><a href="/">Login</a></button>
      <div className="signup"> Don't have an account? <Link to={'/verify'}>Sign Up</Link>
      </div>
    </form>
  </div>
  );
}

export default Login