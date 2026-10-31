
//1. Librerías
const dotenv = require('dotenv');
dotenv.config();

//1.1 Puerto
const PORT = process.env.PORT || 3000;



// Importamos la app configurada
const app = require('./index.cjs');


// Conexion a la BD



//2. Leantamos el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});