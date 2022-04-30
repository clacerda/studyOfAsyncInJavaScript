function enviarEmail (corpo, para, callback) {
    setTimeout(() => {
        // Lógica de envio de email

        var erro = true;

        if (erro) {
            callback("O envio de e-mail falhou");
        } else {
            console.log(`
            Para: ${para}
            ------------------------------------
            ${corpo}
            ------------------------------------
    
            De: Claudio
            `);
            callback("OK", 5, "8s");
        }

       
    }, 8000)
}


console.log("inicio do envio de email");
enviarEmail("boa noite, seja bem-vindo", "teste@teste.com", (erro, status, amount, time) => {

    if (erro == undefined || erro == false) {
        console.log(`
        Status: ${status}
        ---------------------------------
        Contatos: ${amount}
        ---------------------------------
        Tempo: ${time}
        `);

    console.log("tudo ok");
    } else {
        console.log("Ocorreu um erro" + erro);
    }

    
});

