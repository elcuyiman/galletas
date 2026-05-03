// En tu app.js
const express = require('express');
const cookieParser = require('cookie-parser');
const { login } = require('./controllers/AuthController');
// Asegúrate de poner la ruta correcta donde guardaste tu middleware
const { requireAuth } = require('./authMiddleware'); 

const app = express();

// Middlewares globales necesarios
app.use(express.json()); // Para procesar JSON
app.use(express.urlencoded({ extended: true })); // Para procesar datos de formularios web
app.use(cookieParser()); // ¡La magia para poder leer las cookies!

// ----------------------------------------------------
// RUTAS PÚBLICAS
// ----------------------------------------------------
app.post('/login', login); 

// ----------------------------------------------------
// RUTAS PRIVADAS (Aplicamos el middleware requireAuth)[cite: 2]
// ----------------------------------------------------
app.get('/privado', requireAuth, (req, res) => {
    // Si el código llega hasta aquí, es porque el middleware lo dejó pasar (tiene cookie válida)[cite: 2]
    res.status(200).json({ 
        mensaje: `¡Bienvenido a la sección privada, ${req.usuario.username}!`,
        datos: "Aquí va la información confidencial o tu vista renderizada."
    });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});