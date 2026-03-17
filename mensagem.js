class Mensagem {

    constructor(texto, autor) {
        this.texto = texto
        this.autor = autor
        this.data = new Date()
    }

    toJSON() {
        return {
            texto: this.texto,
            autor: this.autor,
            data: this.data.toLocaleString("pt-BR")
        }
    }

}

module.exports = Mensagem