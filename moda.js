/* const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map((elemento) => {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort((a, b) => {
  return a[1] - b[1];
});

const moda = lista1Array[lista1Array.length - 1][0]; */

function calcularModa(lista) {
  const listaCount = {};

  lista.map((elemento) => {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort((a, b) => {
    return a[1] - b[1];
  });

  return listaArray[listaArray.length - 1][0];
}
