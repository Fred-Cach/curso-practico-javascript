// Preparando la lista de salarios

const salariosCol = colombia.map((personita) => {
  return personita.salary;
});

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => {
  return salaryA - salaryB;
});

// Calculadora de Mediana

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (lista.length % 2 === 0) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const promedioMediana =
      [personitaMitad1, personitaMitad2].reduce(
        (valorAcumulado = 0, nuevoElemento) => {
          return valorAcumulado + nuevoElemento;
        }
      ) / 2;

    return promedioMediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del Top 10%

const spliceStart = salariosColSorted.length * 0.9;
let spliceCount = salariosColSorted.length - spliceStart;
if (!Number.isInteger(spliceCount)) {
  spliceCount += 1;
}

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({ medianaGeneralCol, medianaTop10Col });
