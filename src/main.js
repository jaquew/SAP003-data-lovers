const menuFiltro = document.getElementById("filtro");
let resultado = document.getElementById("res1");
let mediaresult = document.getElementById("media")

window.addEventListener("load", carregaFiltro);
menuFiltro.addEventListener("change", coletaDados);

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

// Mostra os dados do indicador selecionado na tela
function selecionado(arr) {
  let result = "";
  let length = 0
  result = `
      <tr>  
        <th colspan="2">${arr[0].indicatorName}</th>
      </tr>`;
  // converte o objeto "data" em uma array e filtra os dados a partir de 2008
  let arrayAno = Object.entries(arr[0].data).filter((ano) => ano[0]>=2008)
  
  //retorna apenas os valores de cada ano
  let media = ((arrayAno.map((ano) => {
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
    }})
    //faz a somatoria e divide pela quantidade de elementos não nulos
  .reduce((total,ano) => total+ ano))/length)
  
  let result2 = `<h3>Média dos últimos 10 anos:</h3>
  ${media.toFixed(2)}%`
  
  mediaresult.innerHTML= result2
  resultado.innerHTML = result;
}