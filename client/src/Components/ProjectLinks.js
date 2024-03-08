import { useState, useEffect } from "react";
import Buffer from "../Utilities/Buffer";

function ProjectLinks() {
    const [projectLinks, setProjectLinks] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/links/")
        .then(response => response.json())
        .then(data => setProjectLinks(data))
        .catch(error => console.error(error));
    }, [])

    const linkFactory = () => {
      return projectLinks.map(link => (<>&diams; <a href={link.fields.url} target="_blank" rel="noreferrer" key={link.model + link.pk}>{link.fields.text}</a><br /></>));
    }

  return (
    <div className="text-right-large" id="projects-content">
      <Buffer />
      <h3 className="sub-title">Project Links</h3>
      {linkFactory()}
      <h3 className="sub-title pt-5">Social Media</h3>
      &diams; <a href="https://www.instagram.com/erik.ransom/" target="_blank" rel="noreferrer">Instagram</a><br />
      &diams; <a href="https://twitter.com/ErikRansom" target="_blank" rel="noreferrer">Twitter</a><br />
      &diams; <a href="https://www.facebook.com/ErikJRansom/" target="_blank" rel="noreferrer">Facebook</a><br />
      &diams; <a href="https://www.linkedin.com/in/erik-ransom-97905940/" target="_blank" rel="noreferrer">LinkedIn</a><br />
      &diams; <a href="mailto:erikjransom@gmail.com" target="_blank" rel="noreferrer">Email</a>
      <Buffer />
    </div>
  );
}

export default ProjectLinks;