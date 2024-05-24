import React, { useEffect, useState } from 'react';
import ObraFamosa from '../Componentes/ObraFamosa';

const Obras = () => {
    const [obras, setObras] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/obras')
            .then(response => response.json())
            .then(data => setObras(data));
    }, []);

    return (
        <div>
            {obras.map(obra => (
                <ObraFamosa key={obra.nombre} {...obra} />
            ))}
        </div>
    );
};

export default Obras;
