

console.group("Cuadrados");
console.log("hello word");

// const ladoCuadro = 5;
// console.log("lados son : " + ladoCuadro + "cm");

function perimetroCuadro(ladoCuadro) {
    return ladoCuadro * 4;
}

// console.log("El perimetro del cuadro es :" + perimetroCuadro + "cm");

function areaCuadro(ladoCuadro) {
    return ladoCuadro *ladoCuadro;
} 
// console.log("El área del cuadro es :" + areaCuadro + "cm");

console.groupEnd();

console.group("Triangulos");

function perimetroTriangulo(a, b, c) {  
    const perimetro = parseFloat(a) + parseFloat(b) + parseFloat(c);
    return  perimetro;
}

function areaTriangulo (b , h) {
    return (b * h)/2;
}
function alturaTriangulo(a, b) {
    if(a === b) {
        console.log("es un triangulo iso");
        const altura = Math.sqrt((a*a) - ((b+b)/4));
        return altura
    } else {
        console.log("Oops! no es un triángulo isoseles")
    }
    // return  a + b + c;
}



console.groupEnd();

console.group("Circulo");

function diametrCirculo(r) {
return (parseFloat(r) + parseFloat(r)) * Math.PI;
}

function areaCirculo(r) {
    return (r * r) * Math.PI;
}

console.groupEnd();

function calcularPerCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadro(value);
    alert(perimetro)
}

function calcularArerCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = areaCuadro(value);
    alert(perimetro)
}

function calculaPerTriangulo() {
    const inputA = document.getElementById("inputLadoA").value;
    const inputB = document.getElementById("inputLadoB").value;
    const inputC = document.getElementById("inputLadoC").value;

    const perimetro = perimetroTriangulo(inputA, inputB, inputC);
    alert(perimetro);
}

function calcularArerCuadrado() {
    const inputA = document.getElementById("inputLadoA");
    const inputB = document.getElementById("inputLadoB");
    const inputC = document.getElementById("inputLadoC");
    const valueA = inputA.value;
    const valueB = inputB.value;
    const valueC = inputC.value;

}


function calcularPerCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = diametrCirculo(value);
    alert(perimetro);
}

function calcularAreCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = areaCirculo(value);
    alert(perimetro);
}

