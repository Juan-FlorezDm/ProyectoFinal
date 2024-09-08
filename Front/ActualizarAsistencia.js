const Estudiante = require("../Back/modules/estudiante.js")

document.getElementById("Buscar").addEventListener('click', async (event)=>{
    event.preventDefault()
    const NombreEstudiante = document.getElementById("Nombre").value
    try {
        await Estudiante.findByIdAndUpdate(NombreEstudiante)
        console.log("a")
    } catch (error) {
        return error
    }
})
