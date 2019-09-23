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

// Filtra apenas os dados relacionados a trabalho
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
  
  let arrayTrabalho = data.filterData(indicadores);
  let indSelecionado = data.filterIndicator(arrayTrabalho, menuFiltro.value)
  selecionados(indSelecionado);
}

// Mostra os dados do indicador selecionado na tela
function selecionados(arr) {
  let result = "";
  result = `
      <tr>
        <th colspan="2">${arr[0].indicatorName}</th>
      </tr>`;
  length = 0,
  total  = 0;
  for (let ano=2008; ano<=2017; ano++) {
    if (arr[0].data[ano]==="") {
      result += `
          <tr>
            <td>${ano}</td>
            <td> não há dados </td>
          </tr>`;
    } else {
      total += arr[0].data[ano];
      length++;
      result += `
          <tr>
            <td>${ano}</td> 
            <td> ${arr[0].data[ano].toFixed(2)} </td>
          </tr>`;
    }    
  }
  let media = total/length;
  let result2 = `<h3>Média dos últimos 10 anos:</h3>
  ${media.toFixed(2)}%`
  
  mediaresult.innerHTML= result2
  resultado.innerHTML = result;
}