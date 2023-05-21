import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainBody from './Writer/MainBody';

function Writer() {
  return (
    <Row>
      <Col md={1}></Col>
      <Col md={6}>
        <h1 className="page-title">Writer</h1>
          <MainBody />
      </Col>
    </Row>
  );
}

export default Writer;