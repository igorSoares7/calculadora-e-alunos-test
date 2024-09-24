function encontrarAluno(nomeAluno, listaNomeAlunos){
    const encontrouAlunos = listaNomeAlunos.find((nomes) => nomes === nomeAluno)
    if(encontrouAlunos !== undefined){
        return true
    }else{
        return false
    }
}

function filtrarAlunos(nomeBuscado, listaNomeAlunos){
    const filtrouAlunos = listaNomeAlunos.filter((nomes) => nomes === nomeBuscado)
    return filtrouAlunos
}

function construirAluno(nomeAluno, idadeAluno){
    const objeto = {
        nome: nomeAluno,
        idade: idadeAluno
    }

    return objeto
}


module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
}

