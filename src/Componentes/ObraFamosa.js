import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../Styles/ObraFamosa.css';

const ObraFamosa = ({ nombre, anoCreacion, musicosAutores, partitura }) => {
    return (
        <Card className="obra-famosa-card">
            <CardContent>
                <Typography variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Año de creación: {anoCreacion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Músicos autores:
                </Typography>
                <ul>
                    {musicosAutores.map((musico, index) => (
                        <li key={index}>{musico}</li>
                    ))}
                </ul>
                <Typography variant="body2" color="text.secondary">
                    Partitura: {partitura}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ObraFamosa;
