const filmes = [
    { "id": 70111470, "title": "Die Hard", "rating": [4.0] },
    { "id": 654356453, "title": "Bad Boys", "rating": [5.0] },
    { "id": 65432445, "title": "The Chamber", "rating": [3.0] }
];

const filmesLendarios = filmes.filter((filme) => filme.rating >= 4)
const nomesDosFilmesLendarios = filmesLendarios.map((filme) => filme.title)
console.log(nomesDosFilmesLendarios)

// b) Gerar um array com um objeto composto dos ids/nomes dos filmes com rating maior ou igual a 4
const arrayUnico = filmesLendarios.filter((filme) => filme.id);
const object = filmesLendarios.filter((obj, filme) => ({...obj, [filme.id]: filme.title}) ,{});
console.log(object)
