import { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Languages() {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/languages/")
        .then(response => response.json())
        .then(data => setLanguages(data))
        .catch(error => console.error(error));
    }, [])

    const languageFactory = () => {
      return languages.map(language => (<ListGroup.Item>{language.fields.name} ({language.fields.note})</ListGroup.Item>));
    }

  return (
    <>
      <h4 className="sub-title mt-3">Languages</h4>
      <ListGroup>
        {languageFactory()}
      </ListGroup>
    </>
  );
}

export default Languages;