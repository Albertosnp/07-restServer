const { response, request, query } = require('express')

const getUsers = (req = request, res = response) => {

  //Se pueden desestructurar los parametros { }
  const { nombre = '', apiKey, page, limit } = req.query
  
  res.json({
    ok: true,
    resp: "estos son los registros",
    apiKey,
    page,
    limit
  })
}

const putUsers = (req, res = response) => {
  
  //Se recogen los params (Viene en string)
  const { id } = req.params
  
  res.json({
    ok: true,
    resp: "registro actualizado",
    id: id
  })
}

const postUsers = (req, res = response) => {
  //Se extrae el mensaje-body
  const body = req.body
  
  console.log({ body });

  //Se manda info al front de que ha ido bien
  res.status(201).json({
    ok: true,
    resp: "registro añadido",
    body
  })
}

const deleteUsers = (req, res = response) => {
  res.json({
    ok: true,
    resp: "registro eliminado"
  })
}

const patchUsers = (req, res = response) => {
  res.json({
    ok: true,
    resp: "patch api"
  })
}

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  patchUsers,
  deleteUsers,
}