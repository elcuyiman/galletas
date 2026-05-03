Para levantar este proyecto desde cero, se utilizaron los siguientes comandos en la terminal:
npm init -y: Para inicializar el proyecto de Node.js.
npm install express: Para instalar el framework del servidor.
npm install cookie-parser: Para habilitar la lectura y escritura de cookies en el servidor.
npm install nodemon -D: Para reiniciar el servidor automáticamente en desarrollo.
node app.js: Para ejecutar el servidor principal.

Pasos para la Implementación
Configuración del Servidor: Se configuró Express y se integró el middleware cookie-parser.

Lógica de Autenticación: Se creó un controlador de Login que valida las credenciales y genera una cookie de sesión.

Seguridad de Cookies: Se implementaron los atributos HttpOnly (para mitigar XSS) y SameSite (para mitigar CSRF).

Middleware de Autorización: Se programó un guardia de seguridad (requireAuth) que verifica la existencia de la
cookie antes de dar acceso a rutas como /usuarios o /privado.

Protección de Rutas: Se aplicó el middleware a las rutas sensibles del sistema.
Justificación Técnica de Seguridad
Cookies y Sesiones: Se utilizan para mantener la identidad del usuario entre peticiones sin que tenga
que loguearse a cada rato.

HttpOnly: Se configuró en true para que el navegador bloquee cualquier intento de lectura de la cookie 
mediante JavaScript, protegiéndonos de ataques XSS.

HTTPS (TLS): Es fundamental porque cifra los datos (como la contraseña y la cookie de sesión) 
mientras viajan por internet. Sin HTTPS, un atacante podría "escuchar" la red y robar la sesión.
Además, HTTPS es requisito para activar el atributo Secure en las cookies.

git commit -m "Estructura inicial y conexión de base de datos"
