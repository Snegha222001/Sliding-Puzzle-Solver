import React, { useState } from "react";
import '../css/Main.css'
import PuzzleService from "../service/PuzzleService";
import Navigationbar from "./Navbar";
function Mainpage() {

  const [op, setOp] = useState("");
  const [size, setSize] = useState();
  const [numbers, setNumbers] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();
    PuzzleService.getdata(size, numbers).then(
      (response) => {
        console.log(response);

        setOp(response.data + " ");

      },
      (error) => {
        console.log("Update page error", error.response);

      }
    )
  }


  return (
    <div>
      {/* {op.map((element,index)=>{
                    return(
                        <div key={index}>
                            <p>{element}</p>
                            </div>
                    );
                })}
         */}
      <Navigationbar />
      <div className="main-form-container">
        <form className="main-form" onSubmit={handleSubmit}>
          <div className="main-form-content">
            <h3 className="main-form-title">Sliding Puzzle Solver</h3>
            <div className="main-group mt-3">

              <label>Size</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter Size"
                onChange={(e) => setSize(e.target.value)}
              />
              <label>Enter numbers</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter numbers comma seperated"
                onChange={(e) => setNumbers(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>


            </div>
            <label>Sequence to solve the puzzle</label>
           
            <center>{op}</center>
          </div>
        </form>
      </div>

    </div>
  );
}


export default Mainpage;