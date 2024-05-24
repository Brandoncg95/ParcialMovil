import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './Componentes/Navbar'; 
import Epocas from './Pages/Epocas';
import Generos from './Pages/Generos';
import Musicos from './Pages/Musicos';
import Instrumentos from './Pages/Instrumentos';
import Obras from './Pages/Obras';

function App() {
  return (
    <div>
      <Navbar /> 
      <Container>
        <Routes>
          <Route path="/epocas" element={<Epocas />} />
          <Route path="/generos" element={<Generos />} />
          <Route path="/musicos" element={<Musicos />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/obras" element={<Obras />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
