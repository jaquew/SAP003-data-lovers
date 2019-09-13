document.getElementById("btn").addEventListener("click",coletaDados)

function coletaDados(){
  let resultado = document.getElementById("res1")
  
  let pais = ""
  const radio = document.getElementsByName("pais");
  for(let i in radio) { 
    if(radio[i].checked) {
      pais = radio[i].value
    }
  }
  resultado.innerHTML = window.data.exibeDado(pais)
}