const menuFiltro = document.getElementById("filtro");
const ordem = document.getElementById("ordem");
const resultado = document.getElementById("res1");
const mediaresult = document.getElementById("media");
let arrayAno = "";
let result = "";

window.addEventListener("load", carregaFiltro);
menuFiltro.addEventListener("change", coletaDados);
ordem.addEventListener("change", ordena);

// Popula o filtro com os nomes dos indicadores
function carregaFiltro() {
  let indicadores = WORLDBANK.PER.indicators;
  let arrayTrabalho = data.filterData(indicadores);
  menuFiltro.innerHTML = `<option value=\"none\">Selecione um indicador</option>`;
  arrayTrabalho.forEach(item => {menuFiltro.innerHTML += `<option value="${item.indicatorCode}"> ${item.indicatorName}</option>`;});
}

// Filtra apenas os dados relacionados a trabalho do pais selecionado
function coletaDados() {  
  resultado.innerHTML = "";
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
  //retorna uma array com um elemento, contendo o indicador selecionado pelo usuário
  let arr = data.filterIndicator(arrayTrabalho, menuFiltro.value);

  document.getElementById("nomeIndicador").innerHTML = arr[0].indicatorName;

  document.getElementById("theader").innerHTML = `<th>Ano</th>
  <th>%</th>`

  // converte o objeto "data" em uma array e filtra os dados a partir de 2008
  arrayAno = Object.entries(arr[0].data).filter((ano) => ano[0]>=2008);

  print(arrayAno);
  //habilita a o select de ordenar após a selecionar o indicador
  ordem.disabled = false;
  return arr;
}

//imprime os dados na tela e calcula a media
function print(arrayAno) {
//retorna apenas os valores de cada ano
  result = "";
  resultado.innerHTML = "";

  let length = 0;
  let valores = (arrayAno.map((ano) => {
    if (ano [1]!=="") { 
      result += `
      <tr>
        <td>${ano[0]}</td> 
        <td> ${ano[1].toFixed(2)} </td>
      </tr>`;
      length +=1;
      return ano[1];
    } else {
      result += `
      <tr>
        <td>${ano[0]}</td>
        <td> não há dados </td>
      </tr>`;
      return 0;
    }}));

  //calcula a media de todos os valores não nulos
  const media = data.calculaMedia(valores, length);

  let result2 = `<h3>Média dos últimos 10 anos:</h3>
${media.toFixed(2)}%`;

  mediaresult.innerHTML= result2;
  resultado.innerHTML += result;
  
  //cria uma array com os dados do indice [0] retirados de "arrayAno" e indice [1] de "valores"(com 0 no lugar de "")
  const arrGrafico = arrayAno.map((item) => {return [item[0], valores[arrayAno.indexOf(item)]];});

  // Grafico
  google.setOnLoadCallback(drawChart);

  function drawChart() {
    arrGrafico.unshift(["Ano", "Índice"]);
    const data = google.visualization.arrayToDataTable(arrGrafico);

    const options = {
      backgroundColor: "#e9e6e6",
      legend: "none",
      vAxis: {title: "%"},
      hAxis: {title: "Ano"},
    };

    const chart = new google.visualization.LineChart(document.getElementById("chart"));
    chart.draw(data, options);
  }
}

function ordena() {
  arrayAno = data.orderData(arrayAno, ordem.value);
  print(arrayAno);
}