const filmes = [
    { "id": 70111470, "title": "Die Hard", "rating": [4.0] },
    { "id": 654356453, "title": "Bad Boys", "rating": [5.0] },
    { "id": 65432445, "title": "The Chamber", "rating": [2.0] },
    { "id": 12345567, "title": "Uber", "rating": [1.0] }
];

const filmesLendarios = filmes.filter((filme) => filme.rating[0] >= 4)
const nomesDosFilmesLendarios = filmesLendarios.map((filme) => filme.title)
console.log(nomesDosFilmesLendarios)

// b) Gerar um array com um objeto composto dos ids/nomes dos filmes com rating maior ou igual a 4
const array = Array(filmesLendarios.reduce((obj, filme) => Object.assign(obj, { [filme.id]: filme.title }), {}))
console.log(array)
