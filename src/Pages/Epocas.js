import React, { useEffect, useState } from 'react';
import Epoca from '../Componentes/Epoca';

const Epocas = () => {
    const [epocas, setEpocas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/epocas')
            .then(response => response.json())
            .then(data => setEpocas(data));
    }, []);

    return (
        <div>
            {epocas.map(epoca => (
                <Epoca key={epoca.nombre} {...epoca} />
            ))}
        </div>
    );
};

export default Epocas;
