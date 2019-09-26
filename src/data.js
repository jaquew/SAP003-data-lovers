// Seleciona os indicadores que contém SL no codigo e mujeres no nome do indicador
filterData = (indicadores) => indicadores.filter(indicador => {
  const indNome = indicador.indicatorName;
  const indCode = indicador.indicatorCode;
  return (indCode.startsWith("SL") && indCode.includes("NE.ZS")===false && indNome.includes("mujeres"));
});

//Filtra por cada indicador
filterIndicator = (arr, condition) => arr.filter (item =>item.indicatorCode === condition);

orderData = (arr2, condition2) => {
  if (condition2 === "menor") {
    arr2.sort(function(a, b) {
      return a[1] - b[1];
    });
  } else if (condition2 === "maior") {
    arr2.sort(function(a, b) {
      return b[1] - a[1];
    });
  } else if (condition2 === "anoMenor") {
    arr2.sort(function(a, b) {
      return a[0] - b[0];
    });
  } else if (condition2 === "anoMaior") {
    arr2.sort(function(a, b) {
      return b[0] - a[0];
    });
  }
  return arr2;
};

calculaMedia = (arr3, length) => (arr3.reduce((acc, cur) => acc+ cur))/length;

data ={
  filterData: filterData,
  filterIndicator: filterIndicator,
  orderData: orderData,
  calculaMedia: calculaMedia
};