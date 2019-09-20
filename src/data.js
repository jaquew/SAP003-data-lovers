// Seleciona os indicadores que contém SL e mujeres no nome do indicador
filterData = (indicadores) => indicadores.filter(indicador => {
  const indNome = indicador.indicatorName;
  const indCode = indicador.indicatorCode;
  if (indCode.slice(0, 2) === "SL" && indCode.slice(-5) !== "NE.ZS" && indNome.search("mujeres")!==-1) {
    return indicador;
  }
});

//Filtra por cada indicador
filterIndicator = (arr, condition) => arr.filter (item =>item.indicatorCode === condition);

data ={
  filterData: filterData,
  filterIndicator: filterIndicator
};