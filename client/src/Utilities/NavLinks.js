import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

function NavLinks() {
  const location = useLocation();

  return (
    <>
        <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/va">
            <Nav.Link>Voice/Actor</Nav.Link>
        </LinkContainer>
        {location.pathname === "/va" && (
          <small>
            <LinkContainer to={{hash: "#va-1"}}>
              <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Background</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-2"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-3"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Turn-Around Time</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-4"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Live Sessions</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-5"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Languages</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-6"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Dialects</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-7"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Credits:<br />&nbsp;&nbsp;&nbsp;&nbsp;<small>Plays & Musicals</small></Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-8"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Credits:<br />&nbsp;&nbsp;&nbsp;&nbsp;<small>Film & Television</small></Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-9"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Credits:<br />&nbsp;&nbsp;&nbsp;&nbsp;<small>Voice Over</small></Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-10"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Accolades</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-11"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Special Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#va-12"}}>
                <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Equipment</Nav.Link>
            </LinkContainer>
          </small>
        )}
        <LinkContainer to="/writer">
            <Nav.Link>Writer</Nav.Link>
        </LinkContainer>
        {location.pathname === "/writer" && (
          <small>
            <LinkContainer to={{hash: "#wr-1"}}>
              <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#wr-2"}}>
              <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Selected Works:<br />&nbsp;&nbsp;&nbsp;&nbsp;<small>Full Productions</small></Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#wr-3"}}>
              <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Selected Works:<br />&nbsp;&nbsp;&nbsp;&nbsp;<small>Staged Readings & Concerts</small></Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#wr-4"}}>
              <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Education & Awards</Nav.Link>
            </LinkContainer>
            <LinkContainer to={{hash: "#wr-5"}}>
              <Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;Additional Skills</Nav.Link>
            </LinkContainer>
          </small>
        )}
    </>
  );
}

export default NavLinks;