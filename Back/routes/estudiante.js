const express = require("express")
const controllerEstudiante = require("../controllers/estudiante.js")
const router = express.Router()

router.get("/", controllerEstudiante.getEstudiantes )
router.get("/:id", controllerEstudiante.getEstudiantePorId)
router.post("/", controllerEstudiante.create)

router.patch("/", ()=>{
    console.log("Editar Estudiante")
})
router.delete("/:id", controllerEstudiante.deleteEstudiantePorId)

router.put("/:id", controllerEstudiante.updateEstudiantePorId)
module.exports = router