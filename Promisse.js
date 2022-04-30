function pegarId(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(50);
        },1500);
    });
}


function buscarEmailnoBanco(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("claudio@teste.com.br")
        }, 2000);
    });
}




function enviarEmail(corpo, para){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            var deuErro = false;

            if (!deuErro) {
                resolve({
                    time: 6,
                    to: "claudio@gmail.com"
                });
                
            } else {
                reject("Erro no servidor de envio");
                console.log("email não enviado!");
            }

        }, 4000)
    })
}


// enviarEmail("olá mundo", "teste@trste.com").then(({time, to}) =>{
//      console.log(`
//      Time: ${time}
//      --------------------------------
//      Email: ${to}
//      `);

//      console.log("email enviado!");
// }).catch((erro) =>{
//      console.log(erro);
// });



console.log("Start ------");
pegarId().then((id) => {
    buscarEmailnoBanco(id).then((email) => {
        enviarEmail("Olá, tudo bom?", email).then(() => {
            console.log("Email enviado para usuário ID:" + id + " E email: " + email)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("End ------");
