// Seleciona os indicadores que contém SL e mujeres no nome do indicador
filterData = (indicadores) => {
  return indicadores.filter(indicador => {
    const indNome = indicador.indicatorName;
    const indCode = indicador.indicatorCode;
    if (indCode.slice(0, 2) === "SL" && indCode.slice(-5) !== "NE.ZS" && indNome.search("mujeres")!==-1) {
      return indicador;
    }
  });
};

window.data ={
  filterData: filterData
};