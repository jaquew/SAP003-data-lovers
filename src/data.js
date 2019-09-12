const exibeDado = () => {
  let result = new Array
  for (let nomePais in WORLDBANK){
    indicadores = WORLDBANK[nomePais].indicators;
    result += nomePais +"<br>"  
     
    for (let indicador of indicadores){
      if (indicador.indicatorCode === "SL.EMP.SMGT.FE.ZS"){
        for (let j=2012; j<=2017; j++){
          result += "<p>"+j +": " +indicador.data[j] + "</p>" 
        }
      }
    }
  }
  console.log(result)
  return result;
};

window.data ={exibeDado: exibeDado}


