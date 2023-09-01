import { Router } from "express";
import { prisma } from "../prisma/conexion.js";

const router = Router()

// Inscripcion de un Usuario a un grupo
router.post("/usuarios_grupo/:idGrupo/:idAlumno", async (req, res) => {
   const inscripcion = await prisma.usuarios_Grupo.create({
      data: {
         grupoId: parseInt(req.params.idGrupo),
         usuarioId: parseInt(req.params.idAlumno)
      }
   })
   res.json(inscripcion)
})

//Listar todos los integrantes de un grupo (profesor y alumno)
router.get("/usuarios_grupo/:idGrupo", async (req, res) => {
   const alumnos = await prisma.usuarios_Grupo.findMany({
      where: { grupoId: parseInt(req.params.idGrupo) },
      include: {
         usuario: true
      }
   })
   res.json(alumnos)
})

//Listar todos los alumnos de un grupo
router.get("/usuarios_grupo/alumnos/:idGrupo", async (req, res) => {
   const alumnos = await prisma.usuarios_Grupo.findMany({
      where: {
         grupoId: parseInt(req.params.idGrupo),
         rol: false
      },
      include: { usuario: true }
   })
   res.json(alumnos)
})


export default router