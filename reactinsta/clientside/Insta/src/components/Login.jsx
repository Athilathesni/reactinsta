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
      const res=await axios.post("http://localhost:3000/api/login",formData)
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
 <div className="login-page">
<div className="login-container">
  <div className="login-header">
    <h1><i>𝖎𝖓𝖘𝖙𝖆𝖗𝖌𝖗𝖆𝖒</i></h1>
    {/* <p>Please log in to your account</p> */}
  </div>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      {/* <label>Email Address</label> */}
      <input
      className="in1"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
    </div>
    <div className="form-group">
      {/* <label>Password</label> */}
      <input
      className="in1"
        type="password"
        name="pass"
        value={formData.pass}
        onChange={handleChange}
        placeholder="Enter your password"
        required
      />
    </div>
    <button type="submit" className="btn-login">
      Login
    </button>
  </form>
  <div className="or">____________ OR ____________</div>
  <div className="form-footer">
    <Link to={"/#"} className="forgot-password-link">
      Forgot Password?
    </Link>
    {/* <span className="separator">|</span> */}
  </div>
</div>
<div className="und">
  <Link to={"/verify"} className="signup-link"><span className="sp">Don't have an account?</span>
      Sign Up
    </Link></div>
    </div>
);
} 

export default Login