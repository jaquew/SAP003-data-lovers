document.getElementById("btn").addEventListener("click",coletaDados)

function coletaDados(){
  let resultado = document.getElementById("res1")
  resultado.innerHTML = window.data.exibeDado()

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