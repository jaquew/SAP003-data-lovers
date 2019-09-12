document.getElementById("btn").addEventListener("click",exibeDados)

function exibeDados(){
  const result = document.getElementById("res1")
  result.innerHTML = "";
  for (let nomePais in WORLDBANK){
    indicadores = WORLDBANK[nomePais].indicators;
    result.innerHTML += nomePais +"<br>"  
     
    for (let i in indicadores){
      if (indicadores[i].indicatorCode === "SL.EMP.SMGT.FE.ZS"){
        for (let j=2012; j<=2017; j++){
          result.innerHTML += "<p>"+j +": " +indicadores[i].data[j] + "</p>" 
        }
      }
    
    }
  }
}


//   let pais = ""
//   const radio = document.getElementsByName("pais");
  
//   for(i = 0; i < radio.length; i++) { 
//     if(radio[i].checked) {
//       pais = radio[i].value
//     }
//   }
//   console.log(pais)
//   const indicadores = (WORLDBANK[pais].indicators)