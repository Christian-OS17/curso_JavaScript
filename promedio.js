// const lista1 = [100, 200, 300, 500];

// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i]
// }

// const promedio = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
//  let sumaLista = 0;
// for (let i = 0; i < lista.length; i++){
//     sumaLista = sumaLista + lista[i]
// }
const sumaLista = lista.reduce(
    function (valueAccumulated = 0, newElement) {
        return valueAccumulated + newElement;
    }
);

const promedio = sumaLista / lista.length;
return promedio;
}
  

  function media(lista){
    lista.sort(function(a, b) {
        return a - b;
      });
      console.log(lista);
    const mitadLista1 = parseInt(lista.length / 2);
    let mediana;
     if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];
      
        const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2,
        ]);
        
        mediana = promedioElemento1y2;
      } else {
        mediana = lista[mitadLista1];
      }
      return mediana;
  }
  
  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }


  function moda(lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
          if (listaCount[elemento]) {
            listaCount[elemento] += 1;
          } else {
            listaCount[elemento] = 1;
          }
        }
      );

    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {
          return a[1] - b[1];
        }
      );
      console.log(listaArray);
      const moda = listaArray[listaArray.length - 1];
      
    return moda;
  }
  