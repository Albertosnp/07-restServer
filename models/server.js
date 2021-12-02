const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usersPath = '/api/usuarios'
    //Middlewares
    this.midddlewares()

    //Rutas de la app
    this.routes()
  }

  midddlewares() {

    //CORS
    this.app.use(cors())

    //Lectura y parseo del body (Todo lo que venga sera parseado a json)
    this.app.use(express.json())

    //Directorio publico
    this.app.use(express.static('public'))
  }

  //se establecen las rutas
  routes() {
    //Para cargar el archivo de rutas -> el path '/api/usuarios' desde el cual funcionaran todas las rutas del require
    this.app.use(this.usersPath, require('../routes/usuarios'))
  }
  //Listeners
  listeners() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    })
  }

}

module.exports = Server;