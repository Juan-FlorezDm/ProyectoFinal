const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const routerEstudiantes = require("./routes/estudiante.js")

const app = express()
const port = 3305

app.set("port", port)

mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>{
        console.log("Conectado a la base de datos")
    })
    .catch((err)=>{
        console.error(err.message)
    })


app.use(express.json())
app.use("/api/estudiante", routerEstudiantes)

app.get("/", (req,res)=>{
    res.send("Encendido")
})

app.listen(port, ()=>{
    console.log(`escuchando en el puerto: ${port}`)
})