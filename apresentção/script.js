function gerarMensagem(){

    const mensagem = new Mensagem(
        "Olá mundo essa é uma mensagem hahaha",
        "Marcos"
    )

    const json = JSON.stringify(mensagem.toJSON(), null, 2)

    document.getElementById("saida").textContent = json
}

gerarMensagem()