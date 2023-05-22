import { useState, useEffect } from "react";

function Equipments({ category }) {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/equipment_techs/" + category + "/")
        .then(response => response.json())
        .then(data => setEquipments(data))
        .catch(error => console.error(error));
    }, [category])

    const equipmentFactory = () => {
      return equipments.map(equipment => <li>{equipment.fields.name}{equipment.fields.default === true ? <span className="text-secondary">&thinsp;*</span> : ""}</li>);
    }

  return (
        <ul>
            {equipmentFactory()}
        </ul>
    );
}

export default Equipments;