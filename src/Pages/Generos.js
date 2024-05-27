import React, { useEffect, useState } from 'react';
import GeneroMusical from '../Componentes/GeneroMusical';
import '../Styles/GeneroMusical.css';

const Generos = () => {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/generos')
            .then(response => response.json())
            .then(data => setGeneros(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="genero-container">
            {generos.map(genero => (
                <GeneroMusical key={genero.nombre} {...genero} />
            ))}
        </div>
    );
};

export default Generos;
