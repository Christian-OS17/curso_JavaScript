function calcPorcentajes() {
    const valor = document.getElementById("inputPrice").value;
    const descuento = document.getElementById("inputDiscount").value;
    const cupon = document.getElementById("inputCupon").value;

    const resultajePorcentaje = (valor * (100 - descuento))/100; 
    const setText = document.getElementById("result");
    setText.innerText = "$ " + resultajePorcentaje; 
  
}

function onClickButtonPriceDiscount() {

    const coupons = [
        "JuanDC_es_Batman",
        "pero_no_le_digas_a_nadie",
        "es_un_secreto",
    ];

    const priceValue = document.getElementById("inputPrice").value;
    const couponValue = document.getElementById("inputCupon").value;
  
    let descuento;
  
    switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }
  
    const precioConDescuento = calcPorcentajescupon(priceValue, descuento);
  
    const resultP = document.getElementById("result");
    resultP.innerText = "$ " + precioConDescuento;
  }

  function calcPorcentajescupon(precio, cupon) {
    
    const resultajePorcentaje = (precio * (100 - cupon))/100; 
    return resultajePorcentaje;
  
}