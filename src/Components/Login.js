
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/home.css";



const Login = () => {
  let navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUserEmail = (e) => {
    const userEmail = e.target.value;
    setUserEmail(userEmail);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();

   
        const email= localStorage.getItem('email');
        console.log(email);
        console.log(userEmail);
        const pass= localStorage.getItem('password');
        console.log(pass);
        console.log(password);
        if(userEmail === email && password === pass){
            window.alert("Success");
          navigate("/Mainpage");
          window.location.reload();
        }
        else{
        window.alert("Invalid credentials");
        window.location.reload();
      }
  

  };
return (
  <div>
  

    <div className="home-form-container">
      <form className="home-form" onSubmit={handleLogin}>
        <div className="home-form-content">
          <h3 className="home-form-title"> Login</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter user_name"
              value={userEmail}
              onChange={onChangeUserEmail}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <a href="/" style={{textAlign:'right'}}>Register as a new User</a>
          </div>
        </div>
      </form>
    </div>
   
  </div>
);
  
};
export default Login;