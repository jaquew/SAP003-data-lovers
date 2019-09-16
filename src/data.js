let indicadores = "";
let result = "";

// dados a serem exibidos o começo
window.addEventListener("load",entrada)
function entrada() {
  for (let pais in WORLDBANK){    
    indicadores = WORLDBANK[pais].indicators
    for (let indicador of indicadores) {
      if (indicador.indicatorCode == "SL.EMP.SMGT.FE.ZS" || indicador.indicatorCode == "SL.TLF.CACT.NE.ZS") {
        result += `<h3>${indicador.indicatorName}</h3> ${indicadores[0].countryName}`
        
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
       
  for (let indicador of indicadores) {
    if (indicador.indicatorCode === "SL.EMP.SMGT.FE.ZS") {
      result+= `<h3>${indicador.indicatorName}</h3> ${indicadores[0].countryName}`
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