import React, { useEffect, useState } from 'react';
import InstrumentoMusical from '../Componentes/InstrumentoMusical';
import '../Styles/InstrumentoMusical.css';

const Instrumentos = () => {
    const [instrumentos, setInstrumentos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instrumentos')
            .then(response => response.json())
            .then(data => setInstrumentos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="instrumento-container">
            {instrumentos.map(instrumento => (
                <InstrumentoMusical key={instrumento.nombre} {...instrumento} />
            ))}
        </div>
    );
};

export default Instrumentos;
