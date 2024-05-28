import React, { useEffect, useState } from 'react';
import Epoca from '../Componentes/Epoca';
import '../Styles/Epoca.css';

const Epocas = () => {
    const [epoca, setEpocas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/epocas')
            .then(response => response.json())
            .then(data => setEpocas(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="epoca-container">
            {epoca.map((epoca, index) => (
                <Epoca key={index} {...epoca} />
            ))}
        </div>
    );
};

export default Epocas;