import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import '../Styles/InstrumentoMusical.css';

const InstrumentoMusical = ({ nombre, foto, lugarCreacion, creador, tipo, materiales }) => {
    return (
        <Card className="instrumento-musical-card">
            <CardMedia
                component="img"
                height="140"
                image={foto}
                alt={nombre}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lugar de creación: {lugarCreacion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Creador: {creador}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Tipo de instrumento: {tipo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Materiales de fabricación: {materiales}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InstrumentoMusical;
