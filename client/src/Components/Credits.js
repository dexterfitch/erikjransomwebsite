import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Credits({ category }) {
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/credits/" + category + "/")
        .then(response => response.json())
        .then(data => setCredits(data))
        .catch(error => console.error(error));
    }, [category])

    const creditFactory = () => {
        let index = 0;
        let length = credits.length;

        return credits.map(credit => {
            index++;
            return (
                <Row>
                    <Col md={7}>
                        <p className="m-0">
                            <strong>&ldquo;{credit.fields.title}&rdquo;</strong>
                            {credit.fields.note ? <span><small>&nbsp;&nbsp;&ndash;&nbsp;{credit.fields.note}</small></span> : ""}
                        </p>
                        <p className="m-0 opacity-50"><small><em>{credit.fields.location}</em></small></p> 
                    </Col>
                    <Col>
                        <p className="m-0 text-end">{credit.fields.role}</p>
                        {credit.fields.awards ? <p className="m-0 text-end opacity-50"><small><strong>{credit.fields.awards}</strong></small></p> : ""}
                    </Col>
                    {index !== length ? <hr className="mt-3 mb-4"/> : ""}
                </Row>
            )
        });
    }

    return (
        <Container fluid className="p-0 mt-3">
            {creditFactory()}
        </Container>
    );
}

export default Credits;