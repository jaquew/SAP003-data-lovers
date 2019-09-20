const menuFiltro = document.getElementById("filtro");
let resultado = document.getElementById("res1");

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
  selecionados(data.filterIndicator(arrayTrabalho, menuFiltro.value));
}

// Mostra os dados do indicador selecionado na tela
function selecionados(arr) {
  let result = "";
  result = `
      <tr>
        <th colspan="2">${arr[0].indicatorName}</th>
      </tr>`;
  for (let ano=2006; ano<=2017; ano++) {
    if (arr[0].data[ano]==="") {
      result += `
          <tr>
            <td>${ano}</td>
            <td> não há dados </td>
          </tr>`;
    } else {
      result += `
          <tr>
            <td>${ano}</td> 
            <td> ${arr[0].data[ano].toFixed(2)} </td>
          </tr>`;
    }
  }
  resultado.innerHTML = result;
}