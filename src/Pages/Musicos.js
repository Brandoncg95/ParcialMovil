import React, { useEffect, useState } from 'react';
import Musico from '../Componentes/Musico';

const Musicos = () => {
    const [musicos, setMusicos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/musicos')
            .then(response => response.json())
            .then(data => setMusicos(data));
    }, []);

    return (
        <div>
            {musicos.map(musico => (
                <Musico key={musico.nombre} {...musico} />
            ))}
        </div>
    );
};

export default Musicos;
