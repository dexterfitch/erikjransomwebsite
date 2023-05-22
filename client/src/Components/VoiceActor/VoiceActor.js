import MainBody from "./MainBody";
import Dialects from "./Dialects";
import Languages from "./Languages";
import Equipments from "./Equipments";
import Credits from "../Credits";
import Experiences from "../Experiences";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VoiceActor() {
  return (
    <>
        <h1 className="h3 page-title">Voice&thinsp;<span className="special">/</span>Actor</h1>
        <MainBody />
        <Languages />
        <Dialects />
        <h4 className="sub-title mt-5">Credits</h4>
        <h5 className="sub-title mt-4">Plays & Musicals</h5>
        <Credits category="playsmusicals" />
        <h5 className="sub-title mt-5">Film & Television</h5>
        <Credits category="filmtelevision" />
        <h5 className="sub-title mt-5">Voice Over</h5>
        <Credits category="voiceover" />
        <h4 className="sub-title mt-5">Accolades/Experiences/Training</h4>
        <Experiences category="acting" />
        <h4 className="sub-title mt-4">Special Skills</h4>
        <p>Speaks German (Hochdeutsch), sight-reading music, drivers' license, various reptilian noises, selected accents and dialects include: African American Vernacular English, British RP, Cockney, Estuary, French, General Australian, General African, General Slavic, German, Irish, Italian, Klingon, Russian, Scandinavian, Scottish, Spanish, Yorkshire (more upon request.)</p>
        <h4 className="sub-title mt-4 mb-0">Equipment</h4>
        <Row className="mt-4">
          <Col>
            <h5 className="sub-title">Microphones</h5>
            <Equipments category="microphones" />
          </Col>
          <Col>
            <h5 className="sub-title">Audio Interfaces</h5>
            <Equipments category="audiointerfaces" />
          </Col>
          <Col>
            <h5 className="sub-title">DAWs</h5>
            <Equipments category="daws" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h5 className="sub-title">Computers</h5>
            <Equipments category="computers" />
          </Col>
          <Col>
            <h5 className="sub-title">Booth</h5>
            <Equipments category="booth" />
          </Col>
        </Row>
        <p className=" mt-1 mb-0"><small><em><span className="text-secondary">*</span><span className="opacity-50"> denotes default equipment; other equipment listed available by request</span></em></small></p>
    </>
  );
}

export default VoiceActor;