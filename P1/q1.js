const notas = [8.0,7.0,8.3,9.0,4.5,6.0,3.7,5.0,7.1,9.5,6.0];

const somaNotas = notas.reduce((a,b) => a+b);
const mediaNotas = somaNotas/notas.length
console.log('Média das notas: ' + mediaNotas.toFixed(2))

const notasDosAprovados = notas.filter((nota) => nota>6)
console.log('Nota dos aprovados: ' + notasDosAprovados)

const situacaoTurma = notas.map((nota) => (nota>6) ? 'APROVADO' : 'REPROVADO');
console.log(situacaoTurma)