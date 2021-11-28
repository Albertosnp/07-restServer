const express = require('express')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    
    this.routes()
  }
  //se establecen las rutas
  routes() {
    app.get('/', (req, res) => {
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