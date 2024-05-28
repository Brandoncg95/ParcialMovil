// Genero.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../Styles/GeneroMusical.css'; // Asegúrate de tener el archivo CSS para estilos específicos de Genero

const Genero = ({ id_genero, nombre_genero, caracteristica_g, origen, epoca_id }) => (
    <Card className="genero-container">
        <CardContent>
            <Typography variant="h5" component="div">{id_genero}</Typography>
            <Typography variant="h6" component="div">{nombre_genero}</Typography>
            <Typography variant="body2" color="text.secondary">{caracteristica_g}</Typography>
            <Typography variant="body2" color="text.secondary">{`Origen: ${new Date(origen).toLocaleDateString()}`}</Typography>
            <Typography variant="body2" color="text.secondary">{`Epoca ID: ${epoca_id}`}</Typography>
        </CardContent>
    </Card>
);

export default Genero;

