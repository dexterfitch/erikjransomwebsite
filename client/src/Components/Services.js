import { useState, useEffect } from "react";

function Services({ category }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/services/" + category + "/")
        .then(response => response.json())
        .then(data => setServices(data))
        .catch(error => console.error(error));
    }, [category])

    const serviceFactory = () => {
      return services.map(service => <li>{service.fields.body}</li>);
    }

  return (
        <ul>
            {serviceFactory()}
        </ul>
    );
}

export default Services;