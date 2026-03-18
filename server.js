const express = require("express")
const app = express()

const Mensagem = require("./Mensagem") // importa a classe

app.get("/api/mensagem",(req,res)=>{

    const mensagem = new Mensagem(
        "Essa é uma mensagem Hahaha",
        "MarcosXD"
    )

    res.json(mensagem.toJSON())

})

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})