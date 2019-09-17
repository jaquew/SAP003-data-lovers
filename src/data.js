// Seleciona os indicadores que contém SL e mujeres no nome do indicador
exibeDado = (indicadores) => {
  return indicadores.filter(indicador => {
    const indNome = indicador.indicatorName;
    if (indicador.indicatorCode.slice(0, 2) === "SL" && indNome.search("mujeres")!==-1) {
      return indicador;
    }
  });
};

window.data ={
  exibeDado: exibeDado
};