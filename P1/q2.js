const nomes = ["Ben", "Jafar", "Matthews", "Priya", "Brian"];

const nomesInvertidos = nomes.map((nome) => {return nome.split('').reverse().join('')});
console.log(nomesInvertidos);

const maiorNome = nomes.reduce((nome1,nome2) => nome1.length > nome2.length ? nome1 : nome2)
console.log('Maior nome: ' + maiorNome);