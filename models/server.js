const express = require('express')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    //Middlewares
    this.midddlewares()

    //Rutas de la app
    this.routes()
  }

  midddlewares() {
    //Directorio publico
    this.app.use(express.static('public'))
  }

  //se establecen las rutas
  routes() {
    this.app.get('/api', (req, res) => {
      res.send('Hello World')
    })
  }
  //Listeners
  listeners() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    })
  }

}

module.exports = Server;