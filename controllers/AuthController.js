
const login = async (req, res) => {
    const { username, password } = req.body;

    const usuarioValido = (username === 'admin' && password === '1234'); // Reemplaza con tu lógica SQL

    if (usuarioValido) {
        const sessionData = { username: username, role: 'admin' };

        // Creamos la cookie de sesión
        res.cookie('mi_sesion', JSON.stringify(sessionData), {
            httpOnly: true, // Evita que JS del navegador lea la cookie (mitiga XSS)
            sameSite: 'strict', // Ayuda a mitigar ataques CSRF
            maxAge: 1000 * 60 * 60 // 1 hora de duración
        });

        // Respuesta exitosa
        return res.status(200).json({ mensaje: 'Login exitoso' });
    } else {
        // Manejo de error claro sin exponer detalles internos
        return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
};

module.exports = { login };