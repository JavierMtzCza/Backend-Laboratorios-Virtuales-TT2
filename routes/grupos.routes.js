import { Router } from "express";
import { prisma } from "../prisma/conexion.js";
import { v1 as uuidv1 } from 'uuid';

const router = Router()

// Creacion de un Grupo por medio de un Alumno
router.post('/grupo/:idAlumno', async (req, res) => {

   const alumnoId = parseInt(req.params.idAlumno)
   const claveGrupo = uuidv1().split("-")[0] //Generamos una clave unica paa el grupo

   const grupo = await prisma.grupo.create({
      data: {
         clave: claveGrupo,
         ...req.body
      }
   })

   await prisma.usuarios_Grupo.create({
      data: {
         grupoId: grupo.id,
         usuarioId: alumnoId,
         rol: true
      }
   })

   res.json(grupo)
})

//listar grupos
router.get("/grupo/listar", async (req, res) => {
   const grupo = await prisma.grupo.findMany()
   res.json(grupo)
})



export default router