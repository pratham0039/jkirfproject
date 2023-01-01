import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/paramain">Parameters</Nav.Link>
            <Nav.Link href="/document">Documents</Nav.Link>
            <Nav.Link href="/notification">Notification</Nav.Link>
            <Nav.Link href="/faq">FAQs</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Rankings" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/ranking">2022</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                2021
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">2020</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                2019
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2018</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;