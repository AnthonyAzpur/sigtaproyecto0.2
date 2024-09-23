const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Para hacer solicitudes HTTP
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

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
