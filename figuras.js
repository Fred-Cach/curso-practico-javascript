// Código del Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

// Código del Tríangulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo mide: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
const radioCiculo = 4;

// Diánmetro
const diametroCirculo = radioCiculo * 2;

// Pi
const PI = Math.PI;

// Cicunferencia
const perimetroCirculo = radioCiculo * 2 * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// Área
const areaCirculo = (radioCiculo ** 2) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();

