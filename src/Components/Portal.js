import React, { useState} from "react";    
import '../css/home.css'  
import { useNavigate } from 'react-router-dom';  

const Portal = () => {   
    let navigate = useNavigate();
    const [Name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    
    const [NameErr, setNameErr] = useState("");
    const [dobErr, setDobErr] = useState("");
    const [phoneNumberErr, setPhoneNumberErr] = useState("");
    const [addressErr, setAddressErr] = useState("");

    const onChangeName = (e) => {
      const Name = e.target.value;
      setName(Name);
    };
    const onChangeDob = (e) => {
      const dob = e.target.value;
      setDob(dob);
    };
    const onChangePhoneNumber = (e) => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber);
    };
    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    };
 
    
    //this.initialState = this.state;    
        
    
    const handleFormValidation = (e) => {  
        e.preventDefault();
           
        localStorage.setItem("Name", Name);
        localStorage.setItem("dob", dob);
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("address", address); 
         
        let formIsValid = true;    
    
           
        if (!Name) {    
            formIsValid = false;    
            setNameErr("Name is required.");    
        }    
    
        
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            setDobErr("Date of birth is required.");    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                setDobErr("Invalid date of birth");    
            }    
        }    
    
        
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            setPhoneNumberErr( "Phone number is required.");    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                setPhoneNumberErr("Invalid phone number.");    
            }    
        }    
    
        if (!address) {    
            formIsValid = false;    
            setAddressErr("Address is required.");    
        }    
         
        if(formIsValid){
            window.alert('You have been successfully registered.')
            navigate("/Mainpage");
        }
           
          
    };  
    
   
    
     
 
    return (    
    <div>
            <div className="home-form-container"> 
            <form className="home-form" onSubmit={handleFormValidation}> 
            <div className="home-form-content">   
                <h3 style={{ textAlign: "center" }} >Additional Details Form </ h3>    
                    
                       
                        <div className="form-group mt-3">    
                            <label htmlFor="Name">Name</label>    
                            <input type="text" name="Name"  
                                  
                                value={Name}    
                                onChange={onChangeName}    
                                placeholder="Your name.."    
                                className={NameErr ? ' showError' : 'form-control mt-1'} />    
                            {NameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{NameErr}</div>    
                            }    
    
                        </div>    
                        
                        <div className="form-group mt-3">    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={dob}    
                                onChange={onChangeDob}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : 'form-control mt-1'} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                            
                        <div className="form-group mt-3">    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={onChangePhoneNumber}    
                                value={phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : 'form-control mt-1'} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>  

                        <div className="form-group mt-3">    
                            <label htmlFor="address">Address</label>    
                            <input type="text" name="address"    
                                onChange={onChangeAddress}    
                                value={address}    
                                placeholder="Your address.."    
                                className={addressErr ? ' showError' : 'form-control mt-1'} />    
                            {addressErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{addressErr}</div>    
                            }    
                        </div>    
                            
                        <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>

                
                
              </div>
                       
                </div> 
                </form>    
            </div >   
            </div> 
        );  
};
export default Portal;