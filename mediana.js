// function calcularMediaAritmetica(lista) {
//     const sumaLista = lista.reduce(
//         (valorAcumulado = 0, nuevoElemento) => {
//             return valorAcumulado + nuevoElemento;
//         }
//     );

//     const promedioLista = sumaLista / lista.length
//     return promedioLista
// }

// const lista1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];

// const mitadLista1 = parseInt(lista1.length / 2);

// function esPar(numerito) {
//     return numerito % 2 === 0 ? true : false
// };

// let mediana;

function calcularMediana(lista) {
  lista.sort((a, b) => b - a);
  const mitadLista = parseInt(lista.length / 2);

  if (lista.length % 2 === 0) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    return (
      [elemento1, elemento2].reduce((valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
      }) / 2
    );
  } else {
    return lista[mitadLista];
  }
}

/* if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];

}

const pepe = [4, 3, 11, 21, 5, 43, 6].sort((a , b) => b - a) */
