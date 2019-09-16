exibeDado = (pais) => {
  let result = "";

  const indicadores = WORLDBANK[pais].indicators;
  
  result += `${indicadores[0].countryName}<br>`;
  
  indicadores.map(indicador => {
    const indNome = indicador.indicatorName;
    if (indicador.indicatorCode.slice(0, 2) === "SL" && indNome.search("mujeres")!==-1) {
      result += indNome;
      for (let ano=2016; ano<=2017; ano++) {
        if (indicador.data[ano]==="") {
          result += `<p>${ano}: não há dados </p>`;
        } else {
          result += `<p>${ano}: ${indicador.data[ano].toFixed(2)} </p>`;
        }
      }
    }
  });
  return result;
};

window.data ={
  exibeDado: exibeDado
};