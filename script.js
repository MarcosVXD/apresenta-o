function gerarMensagem(){

    const mensagem = new Mensagem(
        "Mensagem XD",
        "Maria Isabel"
    )   

    const json = JSON.stringify(mensagem.toJSON(), null, 2)

    document.getElementById("saida").textContent = json
}

gerarMensagem()