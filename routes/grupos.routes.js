import { Router } from "express";
import { prisma } from "../prisma/conexion.js";

const router = Router()

// Creacion de un Grupo por medio de un Alumno
router.post('/grupo/:idAlumno', async (req, res) => {
   const grupo = await prisma.grupo.create({ data: req.body })

   await prisma.usuarios_Grupo.create({
      data: {
         grupoId: grupo.id,
         usuarioId: parseInt(req.params.idAlumno),
         rol: true
      }
   })

   res.json(grupo)
})

router.get("/grupos", async (req, res) => {
   const grupo = await prisma.grupo.findMany()
   res.json(grupo)
})



export default router