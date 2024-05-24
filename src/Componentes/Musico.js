import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../Styles/Musico.css';

const Musico = ({ nombre, fechaNacimiento, fechaMuerte, historia }) => {
    return (
        <Card className="musico-card">
            <CardContent>
                <Typography variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Fecha de nacimiento: {fechaNacimiento}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Fecha de muerte: {fechaMuerte}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Historia de vida: {historia}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Musico;
