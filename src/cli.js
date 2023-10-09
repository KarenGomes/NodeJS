import pegaArquivo from "./index.js";
import fs from 'fs'; 
import chalk from "chalk";

const caminho = process.argv; //valores de argumento

function imprimeLista (resultado){
    console.log(chalk.yellow('lista de links'), resultado);
}

async function processaTexto(argumentos){
    const caminho = argumentos[2]

    if (fs.lstatSync(caminho).isFile()){

            const resultado = await pegaArquivo(argumentos[2]); 
            imprimeLista(resultado); 

    } else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(lista); 
        })  

    }
}

processaTexto(caminho); 
