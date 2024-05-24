import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../Styles/Epoca.css';

const Epoca = ({ nombre, periodo, generos }) => {
    return (
        <Card className="epoca-card">
            <CardContent>
                <Typography variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Período: {periodo.inicio} - {periodo.fin}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Géneros musicales asociados:
                </Typography>
                <ul>
                    {generos.map((genero, index) => (
                        <li key={index}>{genero}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default Epoca;
