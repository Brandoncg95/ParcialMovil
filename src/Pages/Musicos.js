import React, { useEffect, useState } from 'react';
import Musico from '../Componentes/Musico';
import '../Styles/Musico.css'; 

const Musicos = () => {
    const [musicos, setMusicos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/musicos')
            .then(response => response.json())
            .then(data => setMusicos(data))
            .catch(error => console.error('Error fetching data:', error));
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
