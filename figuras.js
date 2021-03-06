// Código del Cuadrado
console.group("Cuadrados");

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
};

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado ** 2;
};
// console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

// Código del Tríangulo
console.group("Triángulos");

/* const ladoTriangulo1 = 6;
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
 */

function heightByHeron(a, b, c) {
    s = (a + b + c) / 2;
    hC = (2/c)*((s*(s-a)*(s-b)*(s-c)) ** (1/2))
    return hC
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
};
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2
};
// console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
// const radioCiculo = 4;

// Diánmetro
function diametroCirculo(radio) {
    return radio * 2
};

// Pi
const PI = Math.PI;

// Cicunferencia
function perimetroCirculo(radio) {
    const diamentro = diametroCirculo(radio);
    return diamentro * PI;
};

// Área
function areaCirculo(radio) {
    return (radio ** 2) * PI;
};


console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimentroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
};

function calcularPerimentroTriangulo() {
    const input1 = document.getElementById("InputTriángulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputTriángulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTriángulo3");
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
};

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriángulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputTriángulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTriángulo3");
    const value3 = parseInt(input3.value);

    const altura = heightByHeron(value1, value2, value3)

    const area = areaTriangulo(value3, altura);
    alert(area);
};

function calcularPerimentroCirculo() {
    const input = document.getElementById("InputCírculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcularAreaCirculo() {
    const input = document.getElementById("InputCírculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
};

// Función para calcular la altura de un isósceles

const isoscelesHeight = (a, b, c) => {

    const isIso = a*3 === a+b+c ? false : a === b || b === c || c === a ? true : false
    
    let legNh = []
    a === b ? legNh.push(c, a) : b === c ? legNh.push(a, b) : c === a ? legNh.push(b, c) : false

    const height = ( (legNh[1]**2) - ((legNh[0] **2)/4) ) ** (1/2)

    const isi = `El triángulo es Isósceles? ${isIso}`
    const ht = isIso == true ? `Su altura es: ${height}` : ":)"

    const listo = `${isi}
${ht}`

    return listo

    /* ac = a+c
    ba = b+a
    cb = c+b
    abc = a + b + c

    return a*3 === abc ? false : ac === ba ? true : a === ac / 2 || a === ba / 2 ? true : false */

}

function calcularIso() {
    const input1 = InputTriángulo1;
    const value1 = parseInt(input1.value);
    const input2 = InputTriángulo2;
    const value2 = parseInt(input2.value);
    const input3 = InputTriángulo3;
    const value3 = parseInt(input3.value);

    const altura = isoscelesHeight(value1, value2, value3)

    alert(altura);
};
