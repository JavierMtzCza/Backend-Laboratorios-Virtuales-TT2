import express from "express";

import usuarioRoutes from "./routes/usuarios.routes.js";
import grupoRoutes from "./routes/grupos.routes.js";
import usuarios_grupoRoutes from "./routes/usuarios_grupo.routes.js";
import actividadesRoutes from "./routes/actividades.routes.js";
import preguntasRoutes from "./routes/preguntas.routes.js";
import laboratoriosRoutes from "./routes/laboratorios.routes.js";
import respuestas_alumnoRoutes from "./routes/respuestas_alumno.routes.js";

const app = express()
app.use(express.json())

app.use('/api',usuarioRoutes)
app.use('/api',grupoRoutes)
app.use('/api',usuarios_grupoRoutes)
app.use('/api',actividadesRoutes)
app.use('/api',preguntasRoutes)
app.use('/api',laboratoriosRoutes)
app.use('/api',respuestas_alumnoRoutes)

app.listen(3000)
console.log("Server on port", 3000)    