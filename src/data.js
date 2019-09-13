const exibeDado = (pais) => {
  let result = ""

  const indicadores = WORLDBANK[pais].indicators;
  console.log(indicadores)
  
  result += `<h3>Proporção de mulheres empregadas em cargos executivos de nível sênior e intermediário (%)</h3>${indicadores[0].countryName}<br>`;
     
  for (let indicador of indicadores){
    if (indicador.indicatorCode === "SL.EMP.SMGT.FE.ZS"){
      for (let ano=2012; ano<=2017; ano++){
        if (indicador.data[ano]===""){
          result += `<p>${ano}: não há dados </p>`
        } else{
          result += `<p>${ano}: ${indicador.data[ano].toFixed(2)} </p>`
        }
      }
    }
  }
  console.log(typeof result)
  return result;
};

window.data ={exibeDado: exibeDado}


