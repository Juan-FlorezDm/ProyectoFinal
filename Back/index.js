const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const path = require("path")

const routerEstudiantes = require("./routes/estudiante.js")
const FrontPath = path.resolve(__dirname, "../Front/HTML/")


const app = express()
const port = 3307

app.set("port", port)

mongoose.connect("mongodb+srv://jnendez38:BLPWiCGyAWRXbFvR@basedatostalentotech.zli5t.mongodb.net/")
    .then(()=>{
        console.log("Conectado a la base de datos")
    })
    .catch((err)=>{ 
        console.error(err.message)
    })


app.use(express.json())
app.use("/api/estudiante", routerEstudiantes)
app.use(express.static(FrontPath))


app.get("/", (req,res)=>{
    res.sendFile(path.join(FrontPath, 'DashBoard.html'))
})

app.listen(port, ()=>{
    console.log(`escuchando en el puerto: ${port}`)
})