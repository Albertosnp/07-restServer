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
  res.status(201).json({
    ok: true,
    resp: "registro añadido"
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