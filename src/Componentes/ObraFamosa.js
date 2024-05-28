// ObraFamosa.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../Styles/ObraFamosa.css';

const ObraFamosa = ({ id_ofam, nombre_obra, ano_creacion, partitura, id_musico, id_genero, epoca_id }) => {
    return (
        <Card className="obra-famosa-card">
            <CardContent>
                <Typography variant="h5" component="div">
                    {nombre_obra}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Año de creación: {ano_creacion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Partitura: {partitura}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ID de Músico: {id_musico}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ID de Género: {id_genero}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ID de Época: {epoca_id}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ObraFamosa;

