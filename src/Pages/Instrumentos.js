import React, { useEffect, useState } from 'react';
import InstrumentoMusical from '../Componentes/InstrumentoMusical';

const Instrumentos = () => {
    const [instrumentos, setInstrumentos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instrumentos')
            .then(response => response.json())
            .then(data => setInstrumentos(data));
    }, []);

    return (
        <div>
            {instrumentos.map(instrumento => (
                <InstrumentoMusical key={instrumento.nombre} {...instrumento} />
            ))}
        </div>
    );
};

export default Instrumentos;
