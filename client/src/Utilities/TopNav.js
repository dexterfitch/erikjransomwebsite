import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from "./NavLinks";

function TopNav() {
  return (
    <Navbar className="d-block d-md-none" bg="dark">
      <Container fluid>
        <Navbar.Brand href="/">Erik J Ransom | Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <NavLinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;