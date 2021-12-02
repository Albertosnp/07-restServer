const { response } = require('express')

const getUsers = (req, res = response) => {
  res.json({
    ok: true,
    resp: "estos son los registros"
  })
}

const putUsers = (req, res = response) => {
  res.json({
    ok: true,
    resp: "registro actualizado"
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