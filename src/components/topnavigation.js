import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample2() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="bright">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto1">
            <Nav.Link href="/"><i class="fa fa-user" aria-hidden="true"></i>Login</Nav.Link>
            <Nav.Link href="/about">Archive</Nav.Link>
            <Nav.Link href="/paramain">Contact Us</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample2;