const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app= express();
app.use(cors());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ccultural'
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Configuración del servidor Express


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Conectado con exito oyendo por el puero"+ PORT);
});


// Obtener todos los registros de una tabla
app.get('/epocas', (req, res) => {
    const sql = 'SELECT * FROM epoca';
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send('Error al obtener registros de la base de datos');
        throw err;
      }
      res.json(result);
    });
  });

  // Obtener todos los registros de la tabla generos
app.get('/generos', (req, res) => {
  const sql = 'SELECT * FROM genero';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener registros de la base de datos');
      throw err;
    }
    res.json(result);
  });
});

// Obtener todos los registros de la tabla musicos
app.get('/musicos', (req, res) => {
  const sql = 'SELECT * FROM musico';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener registros de la base de datos');
      throw err;
    }
    res.json(result);
  });
});

// Obtener todos los registros de la tabla instrumentos
app.get('/instrumentos', (req, res) => {
  const sql = 'SELECT * FROM instrumento';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener registros de la base de datos');
      throw err;
    }
    res.json(result);
  });
});

// Obtener todos los registros de la tabla obras
app.get('/obras', (req, res) => {
  const sql = 'SELECT * FROM obra_famosa';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener registros de la base de datos');
      throw err;
    }
    res.json(result);
  });
});