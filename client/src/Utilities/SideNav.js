import Nav from 'react-bootstrap/Nav';
import NavLinks from "./NavLinks";

function SideNav() {
  return (
    <>
      <h1 id="side-nav-brand">Erik J Ransom</h1>
      <div id="side-nav-content">
        <Nav defaultActiveKey="/home" className="flex-column">
            <NavLinks />
        </Nav>
      </div>
    </>
  );
}

export default SideNav;