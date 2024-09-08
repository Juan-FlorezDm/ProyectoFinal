
document.getElementById("btnAgregarMaterias").addEventListener('click', (event)=>{
    event.preventDefault()
    const Materias = document.getElementById("Materias")
        const add = document.createElement("input")
        add.textContent = ""
        Materias.appendChild(add)
    
})

document.getElementById('send').addEventListener('click', (req)=>{
    const alumno = req.body
    console.log(req)
})

