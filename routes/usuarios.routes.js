import { Router } from "express";
import { prisma } from "../prisma/conexion.js";

const router = Router()

// Consultar un solo usuario
router.get("/usuario/:id", async (req, res) => {
   const usuario = await prisma.usuario.findFirst({
      where: {
         id: parseInt(req.params.id)
      }
   })
   res.json(usuario)
})

// Crear usuario
router.post("/usuario", async (req, res) => {
   const usuario = await prisma.usuario.create({
      data: req.body
   })
   res.json(usuario)
})

// Modificar usuario
router.put("/usuario/:id", async (req, res) => {
   const usuario = await prisma.usuario.update({
      where: {
         id: parseInt(req.params.id)
      },
      data: req.body
   })
   res.json(usuario)
})

// Eliminar usuario
router.delete("/usuario/:id", async (req, res) => {
   const usuario = await prisma.usuario.delete({
      where: {
         id: parseInt(req.params.id)
      }
   })
   res.json(usuario)
})

// Consultar varios usuarios
router.get("/usuarios", async (req, res) => {
   const usuarios = await prisma.usuario.findMany()
   res.json(usuarios)
})



export default router