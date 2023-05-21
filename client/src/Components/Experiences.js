import { useState, useEffect } from "react";

function Experiences({ category }) {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/experiences/" + category + "/")
        .then(response => response.json())
        .then(data => setExperiences(data))
        .catch(error => console.error(error));
    }, [category])

    const experienceFactory = () => {
      return experiences.map(experience => <li>{experience.fields.body}</li>);
    }

  return (
        <ul>
            {experienceFactory()}
        </ul>
    );
}

export default Experiences;