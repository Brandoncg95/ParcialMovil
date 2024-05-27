import React, { useEffect, useState } from 'react';
import Epoca from '../Componentes/Epoca';

const Epocas = () => {
    const [epocas, setEpocas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/epocas') // Cambiar la URL a la que apunta al servidor de tu compañero
            .then(response => response.json())
            .then(data => setEpocas(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div className="epoca-container">
            {epocas.map((epoca, index) => (
                <Epoca key={index} {...epoca} />
            ))}
        </div>
    );
};

export default Epocas;