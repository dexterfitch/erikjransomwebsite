import { useState, useEffect } from "react";

function ProjectLinks() {
    const [projectLinks, setProjectLinks] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/links/")
        .then(response => response.json())
        .then(data => setProjectLinks(data))
        .catch(error => console.error(error));
    }, [])

    const linkFactory = () => {
      return projectLinks.map(link => (<><a href={link.fields.url} target="_blank" rel="noreferrer" key={link.model + link.pk}>{link.fields.text}</a><br /></>));
    }

  return (
    <>
      <h3 className="sub-title">Project Links</h3>
      {linkFactory()}
    </>
  );
}

export default ProjectLinks;