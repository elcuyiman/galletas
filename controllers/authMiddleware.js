// Middleware para proteger rutas[cite: 2]
const requireAuth = (req, res, next) => {
    // Intentamos leer la cookie que creamos en el login
    const token = req.cookies.mi_sesion;

    if (!token) {
        // Acceso denegado: no hay sesión[cite: 2]
        return res.status(401).json({ mensaje: 'Acceso denegado. No tienes una sesión activa.' });
        // Si usas vistas: return res.redirect('/login');
    }

    try {
        // Si el token existe, lo parseamos y lo guardamos en el request
        // para que las siguientes rutas sepan quién es el usuario
        req.usuario = JSON.parse(token);
        
        // Todo en orden, le damos el pase a la ruta solicitada
        next(); 
    } catch (error) {
        return res.status(403).json({ mensaje: 'Sesión inválida.' });
    }
};

module.exports = { requireAuth };