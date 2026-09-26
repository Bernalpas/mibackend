
//1 Importamos los módulos que usaremos en la aplicación
//Nativas: los módulos que vienen con Node.js
const os = require('node:os')

//Terceras: los módulos que instalaremos con npm
const express = require('express')
const path = require('path')

//2. Creamos la aplicación
const app = express()

// Le asignamos un puerto
const PORT = 9000


// Rutas
// GET: solicita datos al servidor

app.get('/', (peticion, respuesta)=>{
  respuesta.send("<h1>Bienvenido al Ecommerce de Empanadas</h1>")
})

app.get('/empanadas', (peticion, respuesta)=>{
  respuesta.send("Tus empanadas estarán listas en 10 minutos")
})

app.get('/contacto', (peticion, respuesta)=>{
  respuesta.send(`
    <h1 style="color: red; text-align: center; margin-top: 50px;">
    Contáctanos
    </h1>`)
})


//3. Arrancamos la app
app.listen(PORT, ()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})
