import { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Dialects() {
    const [dialects, setDialects] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/dialects/")
        .then(response => response.json())
        .then(data => setDialects(data))
        .catch(error => console.error(error));
    }, [])

    const dialectFactory = () => {
      return dialects.map(dialect => (<ListGroup.Item>{dialect.fields.name} ({dialect.fields.note})</ListGroup.Item>));
    }

  return (
    <>
      <h4 className="sub-title mt-4">Dialects</h4>
      <ListGroup>
        {dialectFactory()}
      </ListGroup>
    </>
  );
}

export default Dialects;