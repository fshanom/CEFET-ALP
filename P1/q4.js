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

const medidasQuadradasAp = medidasAp.map((ap) => 
    Object.assign({ 
        label:ap.label,
        medidaQuadrada: ap.largura*ap.comprimento
    }), {})

// a) Gerar um objeto com com o label e a metragem em m2 do maior comodo da casa
const maiorComodo = medidasQuadradasAp.reduce((c1, c2) => (c1.medidaQuadrada>c2.medidaQuadrada) ? c1 : c2);
console.log(maiorComodo)

// b) Determinar a metragem quadrada total do apartamento
const medidaTotalAp = medidasQuadradasAp.map((ap) => ap.medidaQuadrada).reduce((a,b) => a+b);
console.log('Medida total do apartamento: ' + medidaTotalAp)

// c) Determinar a metragem quadrada total dos quartos
const medidaTotalQuartos = medidasQuadradasAp.filter((ap) => ap.label.includes('quarto')).map((ap) => ap.medidaQuadrada).reduce((a,b) => a+b);
console.log('Medida quadrada dos quartos: ' + medidaTotalQuartos)