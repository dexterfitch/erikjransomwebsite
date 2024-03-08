import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from "./NavLinks";

function TopNav() {
  return (
    <div id="top-nav-container">
      <h1 className="d-none d-lg-block" id="home-brand">Erik J Ransom</h1>
      <Navbar className="d-block d-lg-none" bg="dark">
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
    </div>
  );
}

export default TopNav;