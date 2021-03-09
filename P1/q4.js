/* 
Considere o array abaixo como as medidas de um apartamento
[{ label: "sala"     , largura: 4.5, comprimento:5 },
 { label: "quarto1"  , largura: 3.5, comprimento:2 },
 { label: "quarto2"  , largura: 2.7, comprimento:2 },
 { label: "banheiro" , largura: 1.5, comprimento:2 }]
Utilizando estratégias de map-reduce-filter implemente as seguintes operações:
*/

const medidasAp = [
    { label: "sala"     , largura: 4.5, comprimento:5 },
    { label: "quarto1"  , largura: 3.5, comprimento:2 },
    { label: "quarto2"  , largura: 2.7, comprimento:2 },
    { label: "banheiro" , largura: 1.5, comprimento:2 }
];

// a) Gerar um objeto com com o label e a metragem em m2 do maior comodo da casa
const maiorComodo = medidasAp.reduce((c1, c2) => ((c1.largura*c1.comprimento)>(c2.largura*c2.comprimento)) ? c1 : c2);
console.log(maiorComodo)

// b) Determinar a metragem quadrada total do apartamento
const medidaTotalAp = medidasAp.map((ap) => ap.largura*ap.comprimento).reduce((a,b) => a+b);
console.log(medidaTotalAp)

// c) Determinar a metragem quadrada total dos quartos
const medidaTotalQuartos = medidasAp.filter((ap) => ap.label.includes('quarto')).map((ap) => ap.largura*ap.comprimento).reduce((a,b) => a+b);
/*
const medidaTotalQuartos = medidasAp.filter((ap) => ap.label.includes('quarto'))
    .reduce((a,b) => {
        var metragemA = a.comprimento*a.largura;
        var metragemB = b.comprimento*b.largura;
        return metragemA+metragemB;
    });
*/
console.log(medidaTotalQuartos)