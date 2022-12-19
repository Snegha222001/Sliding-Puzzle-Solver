import axios from "axios";
const API_URL = "http://localhost:8080/mainpage/";
const getdata = (size,numbers) =>{
    return axios.post(API_URL+`puzzle/`+size+`?x=`+numbers);
};
const logout = () => {
    localStorage.removeItem("dob");
    localStorage.removeItem("Name");
    
    localStorage.removeItem("phoneNumber");
    
    localStorage.removeItem("address");
  };
const PuzzleService = {
    getdata  ,
    logout 
};
  export default PuzzleService;