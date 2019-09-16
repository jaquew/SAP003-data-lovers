let indicadores = "";
let result = "";
// let pais = "";
window.addEventListener("load",entrada)
function entrada() {
  for (let pais in WORLDBANK){    
    indicadores = WORLDBANK[pais].indicators
    for (let indicador of indicadores) {
      if (indicador.indicatorCode === "SL.EMP.SMGT.FE.ZS") {
        document.getElementById("nomeDado").innerHTML= `<h3>${indicador.indicatorName}</h3>`
        result += indicadores[0].countryName
        for (let ano=2012; ano<=2017; ano++) {
          if (indicador.data[ano]==="") {
            result += `<p>${ano}: não há dados </p>`;
          } else {
            result += `<p>${ano}: ${indicador.data[ano].toFixed(2)} </p>`;
          }
        }
      }
    
  }
  resultado.innerHTML = result
}
}

// FILTRO de pais
// tentar usar o filter()
const exibeDado = (pais) => {
  result = "";
  indicadores = WORLDBANK[pais].indicators
  result += `${indicadores[0].countryName}<br>`;
     
  for (let indicador of indicadores) {
    if (indicador.indicatorCode === "SL.EMP.SMGT.FE.ZS") {
      for (let ano=2012; ano<=2017; ano++) {
        if (indicador.data[ano]==="") {
          result += `<p>${ano}: não há dados </p>`;
        } else {
          result += `<p>${ano}: ${indicador.data[ano].toFixed(2)} </p>`;
        }
      }
    }
  }
  return result;
}
window.data ={exibeDado: exibeDado};