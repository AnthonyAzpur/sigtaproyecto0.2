const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Middleware para parsear cuerpos JSON
app.use(express.json());

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:4200', // Cambiar a tu dominio en producción
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Definir ruta para listar usuarios
app.post('/listar-usuarios', async (req, res) => {
  try {
    const response = await axios.post('http://172.17.1.90/sigtabackend/public/v1/sigta/usuariosigta/listar', req.body, {
      headers: {
        'Authorization': 'Bearer your_token_here', // Reemplaza con tu token
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data); // Envía la respuesta de la API externa
  } catch (error) {
    console.error('Error al llamar a la API externa', error);
    res.status(error.response ? error.response.status : 500).json({ message: 'Error al llamar a la API externa' });
  }
});

// Definir ruta para actualizar el host
app.post('/actualizar-host', async (req, res) => {
  try {
    const { idsigma, dhostname } = req.body; // Cambia a idsigma y dhostname
    const response = await axios.post('https://webapp.mdsmp.gob.pe/sigtabackend/public/v1/sigta/actualizarhostsigta/actualizar', {
      id: idsigma,
      host: dhostname
    }, {
      headers: {
        'Authorization': 'Bearer your_token_here',
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error al actualizar el host serve,js', error.response ? error.response.data : error.message);
    res.status(error.response ? error.response.status : 500).json({ message: '500 Error al actualizar el host' });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
