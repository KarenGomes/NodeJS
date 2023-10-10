import chalk from "chalk";

function extraiLinks (arrayLinks){ //obs: cada item do elemento é um objeto
    return arrayLinks.map((objetoLink) => Object.values(objetoLink).join()) //metodo que recebe array e devolve outro / join pega o conteudo de um array e joga para fora (o Object.values vai retornar arrays.)
}

async function checaStatus(listaURLs){
    const arrayStatus = await Promise.all( 
        listaURLs.map(async (url) => {
            try{
                const response = await fetch(url); //o retorno do fetch é uma promisse
                return response.status;
            }catch(erro){
                return manejaErro(erro);
            }

    }))

    return arrayStatus; 
}

function manejaErro(erro){
    if(erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado'; 
    }else {
        return 'ocorreu algum erro'; 
    }
}


export default async function listaValidada(listaDeLinks){
    const links = extraiLinks(listaDeLinks); 
    const status = await checaStatus(links);
    console.log(status)
    return listaDeLinks.map((objeto, indice)=> ({ //entre () para ser um objeto
        ...objeto, 
        status: status[indice]
    })); 
}
