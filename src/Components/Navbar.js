import React from "react";
import { Navbar,Nav,Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import PuzzleService from "../service/PuzzleService";
function Navigationbar(){
  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();

    PuzzleService.logout();
    navigate("/login");


  };

    return(
      
        <Navbar  expand="lg" bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand href="/">Sliding Puzzle Solver</Navbar.Brand>
             
              <Nav className="ms-auto">
                <Nav.Link href="/" onClick={handleLogout} >Sign out</Nav.Link>
                </Nav>
          </Container>
        </Navbar>
       
    );
};
export default Navigationbar;
