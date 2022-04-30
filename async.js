async function pegarId(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(50);
        },1500);
    });
}


async function buscarEmailnoBanco(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("claudio@teste.com.br")
        }, 2000);
    });
}




function enviarEmail(corpo, para){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            var deuErro = true;

            if (!deuErro) {
                resolve({
                    time: 6,
                    to: "claudio@gmail.com"
                });
                
            } else {
                reject("Erro no servidor de envio"); 
            }

        }, 4000)
    })
}

 

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "vitor", lang: "JS"},
                {name: "claudio", lang: "C#"},
                {name: "daniel", lang: "java"}
            ]);
        },3000);
    });
}

async function sendEmail(){
    var id = await pegarId();
    var email = await buscarEmailnoBanco(id);
    
    try {
        await enviarEmail("Teste realizado com async e await", email);
        console.log("email enviado com sucesso!");
    } catch (error) {
        console.log(error);
    }
 
}

 sendEmail();


 

