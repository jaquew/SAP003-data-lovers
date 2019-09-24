// Seleciona os indicadores que contém SL no codigo e mujeres no nome do indicador
filterData = (indicadores) => indicadores.filter(indicador => {
  const indNome = indicador.indicatorName;
  const indCode = indicador.indicatorCode;
  return (indCode.startsWith("SL") && indCode.includes("NE.ZS")===false && indNome.includes("mujeres"))
});

//Filtra por cada indicador
filterIndicator = (arr, condition) => arr.filter (item =>item.indicatorCode === condition);

data ={
  filterData: filterData,
  filterIndicator: filterIndicator
};