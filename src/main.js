const menuFiltro = document.getElementById("filtro");
const ordem = document.getElementById("ordem");
let resultado = document.getElementById("res1");
let mediaresult = document.getElementById("media")
let arrayAno = ""

window.addEventListener("load", carregaFiltro);
menuFiltro.addEventListener("change", coletaDados);
ordem.addEventListener("change", ordena);


// Popula o filtro com os nomes dos indicadores
function carregaFiltro() {
  let indicadores = WORLDBANK.PER.indicators;
  let arrayTrabalho = data.filterData(indicadores);
  menuFiltro.innerHTML = "<option value=\"none\">Selecione um indicador</option>";
  arrayTrabalho.forEach(item => {menuFiltro.innerHTML += `<option value="${item.indicatorCode}"> ${item.indicatorName}</option>`;});
}

// Filtra apenas os dados relacionados a trabalho do pais selecionado
function coletaDados() {  
  let pais = "";
  const radio = document.getElementsByName("pais");
  for (let i in radio) { 
    if (radio[i].checked) {
      pais = radio[i].value;
    }
  }
  const indicadores = WORLDBANK[pais].indicators;
  document.getElementById("nomePais").innerHTML = indicadores[0].countryName;
  
  //retorna uma array com todos os indicadores sobre trabalho
  let arrayTrabalho = data.filterData(indicadores);
  //retnorta uma array com um elemento, contendo o indicador selecionado pelo usuário
  let indSelecionado = data.filterIndicator(arrayTrabalho, menuFiltro.value)
  selecionado(indSelecionado);
}

// Print do nome do indicador selecionado na tela
function selecionado(arr) {
  let result = "";
  result = `
      <tr>  
        <th colspan="2">${arr[0].indicatorName}</th>
      </tr>`;
  // converte o objeto "data" em uma array e filtra os dados a partir de 2008
  arrayAno = Object.entries(arr[0].data).filter((ano) => ano[0]>=2008)
  console.log(result)
  print(arrayAno, result)
  return result
}
  
//imprime os dados na tela e calcula a media
function print(arrayAno, result){
//retorna apenas os valores de cada ano
let length = 0
let media = (arrayAno.map((ano) => {
  if (ano [1]!==""){ 
    result += `
      <tr>
        <td>${ano[0]}</td> 
        <td> ${ano[1].toFixed(2)} </td>
      </tr>`;
      length +=1
    return ano[1]
  }else {
    result += `
      <tr>
        <td>${ano[0]}</td>
        <td> não há dados </td>
      </tr>`;
    return 0
  }}))
  //faz a somatoria e divide pela quantidade de elementos não nulos
media = (media.reduce((acc,cur) => acc+ cur))/length

let result2 = `<h3>Média dos últimos 10 anos:</h3>
${media.toFixed(2)}%`

mediaresult.innerHTML= result2
resultado.innerHTML = result;

}

function ordena(result){
  console.log(result)
  if (ordem.value === "menor"){
    arrayAno.sort(function(a, b) {
      return a[1] - b[1];
    })
  } else {
    arrayAno.sort(function(a, b) {
      return b[1] - a[1];
    })
  }
  print(arrayAno,result)
}