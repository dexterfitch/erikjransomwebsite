import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

function NavLinks() {
  return (
    <>
        <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/va">
            <Nav.Link>Voice/Actor</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/writer">
            <Nav.Link>Writer</Nav.Link>
        </LinkContainer>
    </>
  );
}

export default NavLinks;