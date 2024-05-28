// Musico.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../Styles/Musico.css'; // Asegúrate de tener el archivo CSS para estilos específicos de Musico

const Musico = ({ id_musico, nombre_musico, fecha_nac, fecha_muerte, historia_de_vida, id_genero }) => (
    <Card className="musico-card">
        <CardContent>
            <Typography variant="h5" component="div">{id_musico}</Typography>
            <Typography variant="h6" component="div">{nombre_musico}</Typography>
            <Typography variant="body2" color="text.secondary">{`Nacimiento: ${new Date(fecha_nac).toLocaleDateString()}`}</Typography>
            <Typography variant="body2" color="text.secondary">{`Muerte: ${fecha_muerte ? new Date(fecha_muerte).toLocaleDateString() : 'N/A'}`}</Typography>
            <Typography variant="body2" color="text.secondary">{historia_de_vida}</Typography>
            <Typography variant="body2" color="text.secondary">{`Género ID: ${id_genero}`}</Typography>
        </CardContent>
    </Card>
);

export default Musico;

