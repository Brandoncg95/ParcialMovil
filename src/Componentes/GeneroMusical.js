import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../Styles/GeneroMusical.css';

const GeneroMusical = ({ nombre, caracteristicas, origenes, musicos, instrumentos }) => {
    return (
        <Card className="genero-musical-card">
            <CardContent>
                <Typography variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Características: {caracteristicas}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Orígenes: {origenes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Músicos asociados:
                </Typography>
                <ul>
                    {musicos.map((musico, index) => (
                        <li key={index}>{musico}</li>
                    ))}
                </ul>
                <Typography variant="body2" color="text.secondary">
                    Instrumentos utilizados:
                </Typography>
                <ul>
                    {instrumentos.map((instrumento, index) => (
                        <li key={index}>{instrumento}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default GeneroMusical;
