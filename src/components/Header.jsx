import React from 'react'
import {Navbar,Container ,Nav,} from 'react-bootstrap'
const Header = () => {
    return (
        <>
      <Navbar bg="light" expand="lg">
          <Container>

          
  <Navbar.Brand href="/">Meme Wala</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="https://github.com/satyaarthchhabra" active>Made With ❤️ by Satyaarth Chhabra </Nav.Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header
