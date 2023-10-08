import chalk from "chalk";
import fs from 'fs'; 

function trataErro (erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivos no diretório' ));
}

async function pegaArquivo(caminhoDoArquivo){
    const uncoding = 'utf-8'; 
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo);
        console.log(chalk.green(texto)); 
    }catch(erro){
        trataErro(erro);
    }finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

console.log(pegaArquivo('./arquivos/texto.md'));