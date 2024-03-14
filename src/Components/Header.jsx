import React from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Header(){
    return(
        <div>
        <Navbar className="bg-body-tertiary bg-black">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-photo-film fa-flip fa-xl me-2"></i>
          
            {' '}
            MEDIAPLAYER
         </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}
export default Header