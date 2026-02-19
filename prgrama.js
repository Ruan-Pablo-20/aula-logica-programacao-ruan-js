    let senha

    const prompt = require('prompt-sync')();

    console.log("Digite sua senha de 4 numeros:\n")
    while(senha!=1234) {
        senha = prompt('Digite sua senha: ');
        if(senha == 1234)
        {
            console.log("Acesso permitido.") 
        }
        else
        {
            console.log("senha incorreta,tente novamente.\n")
        }
    }
