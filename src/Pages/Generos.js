import React, { useEffect, useState } from 'react';
import GeneroMusical from '../Componentes/GeneroMusical';

const Generos = () => {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/generos')
            .then(response => response.json())
            .then(data => setGeneros(data));
    }, []);

    return (
        <div>
            {generos.map(genero => (
                <GeneroMusical key={genero.nombre} {...genero} />
            ))}
        </div>
    );
};

export default Generos;
