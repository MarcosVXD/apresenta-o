const express = require("express")
const app = express()

class Mensagem {

    constructor(texto, autor){
        this.texto = texto
        this.autor = autor
        this.data = new Date()
    }

    toJSON(){
        return {
            texto: this.texto,
            autor: this.autor,
            data: this.data
        }
    }

}

app.get("/api/mensagem",(req,res)=>{

    const mensagem = new Mensagem(
        "Olá mundo",
        "Sistema"
    )

    res.json(mensagem.toJSON())

})

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})