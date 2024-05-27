import React, { useEffect, useState } from 'react';
import ObraFamosa from '../Componentes/ObraFamosa';
import '../Styles/ObraFamosa.css';

const Obras = () => {
    const [obras, setObras] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/obras')
            .then(response => response.json())
            .then(data => setObras(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="obra-container">
            {obras.map(obra => (
                <ObraFamosa key={obra.nombre} {...obra} />
            ))}
        </div>
    );
};

export default Obras;
