import React , { useRef , useState }from "react";
import "../css/home.css";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
function Homepage(){
    const form = useRef();
    let navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("user_email");
    const [password, setPassword] = useState("");
    const onChangeEmail = (e) => {
      const userEmail = e.target.value;
      setUserEmail(userEmail);
      localStorage.setItem("email", userEmail);
    };
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
      localStorage.setItem("password", password);
    };
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9td53y9', 'template_u6cbtdq', form.current, 'aOvKXgjQJ1Ygn_U5_')
          .then((result) => {
              console.log(result.text);
              window.alert("Success");
              navigate("/portal");
              window.location.reload();
          }).catch(
            err => {
              console.log(err.text);
              
            }
          )
        };
    return(
    
        
        <div className="home-form-container">
          <form className="home-form" ref={form} onSubmit={sendEmail} >
            <div className="home-form-content">

              <h3 className="home-form-title" >Register</h3>
              <div className="form-group mt-3">
                <label>Email ID</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  name={userEmail}
                  onChange={onChangeEmail}
                />
              </div>
              
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  name = {password}
                  onChange={onChangePassword}
                />
              </div>

             

              

             
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <a href="/login" style={{textAlign:'right'}}>Already a User ? Login</a>
              </div>
            </div>
          </form>
        </div>
        
      

    );
};
export default Homepage;