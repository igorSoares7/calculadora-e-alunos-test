const {encontrarAluno, filtrarAlunos, construirAluno} = require("./alunos")

test("Encontra aluno em um array", () => {
    expect(encontrarAluno('Mateus', ['Igor', 'Mateus', 'João'])).toBe(true);
    expect(encontrarAluno('Mateus', ['Igor', 'João','Pedro'])).toBe(false);
});

test("Filtra alunos em um array", () => {
    expect(filtrarAlunos('Mateus', ['Igor', 'Mateus', 'João', 'Mateus', 'Pedro'])).toBe([ 'Mateus', 'Mateus' ]);
    expect(filtrarAlunos('Mateus', ['Igor', 'João', 'Pedro'])).toBe([]);
});

test("Constrói um objeto com nomeAluno e idadeAluno", () => {
    expect(construirAluno('Igor', 28)).toBe({nome: 'Igor', idade: 28});
})