// Epoca.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../Styles/Epoca.css';




const Epoca = ({ epoca_id, nombre_epoca, caracteristica_e, periodo_comienzo, periodo_final }) => (
    <Card className="epoca-card">
         <CardContent>
        <h2>{epoca_id}</h2>
        <h2>{nombre_epoca}</h2>
        <p>{caracteristica_e}</p>
        <p>{`Comienzo: ${new Date(periodo_comienzo).toLocaleDateString()}`}</p>
        <p>{`Final: ${new Date(periodo_final).toLocaleDateString()}`}</p>
        </CardContent>
        </Card>
);

export default Epoca;

