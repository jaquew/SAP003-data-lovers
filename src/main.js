document.getElementById("btn").addEventListener("click", coletaDados);

for (let pais in WORLDBANK){
  opCountry = document.getElementById("countries");
  opCountry.innerHTML+=`<input type="radio" name="pais" value = "${pais}">${WORLDBANK[pais].indicators[0].countryName}`;  
}

let resultado = document.getElementById("res1");

function coletaDados() { 
  const radio = document.getElementsByName("pais");
  for (let i in radio) { 
    if (radio[i].checked) {
      pais = radio[i].value;
    }
  }
  if (radio.checked==false){
    alert("Selecione um país")
  } else {
    resultado.innerHTML = window.data.exibeDado(pais);
  }
}