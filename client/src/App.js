import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FullHeight from "react-full-height";
import TopNav from "./Utilities/TopNav";
import SideNav from "./Utilities/SideNav";
import NotFound from "./Utilities/NotFound";
import Buffer from "./Utilities/Buffer";
import Home from "./Components/Home";
import ProjectLinks from "./Components/ProjectLinks";
import VoiceActor from "./Components/VoiceActor/VoiceActor";
import Writer from "./Components/Writer/Writer";

function App() {
  return (
    <>
      <TopNav />
      <Container fluid>
        <Row>
          <Col className="d-none d-md-block" id="side-nav-container" md={2} xxl={1}>
            <FullHeight id="side-nav-section">
              <SideNav />
            </FullHeight>
          </Col>
          <Col className="d-none d-md-block" md={1}></Col>
          <Col md={6}>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
              <Buffer />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/va" element={<VoiceActor />} />
                  <Route path="/writer" element={<Writer />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              <Buffer />
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-md-block" md={1}></Col>
          <Col md={2} xxl={3}>
            <Buffer />
              <ProjectLinks />
            <Buffer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
